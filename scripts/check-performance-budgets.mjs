import { gzipSync } from "node:zlib";
import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
const astro = new URL("dist/_astro/", root);
const limits = { js: 90 * 1024, css: 35 * 1024, fonts: 120 * 1024, hero: 200 * 1024 };
const targets = { js: 60 * 1024, css: 20 * 1024, fonts: 80 * 1024, hero: 120 * 1024 };

async function files(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory.pathname, entry.name);
    if (entry.isDirectory()) result.push(...(await files(new URL(`${entry.name}/`, directory))));
    else result.push(path);
  }
  return result;
}

const assetFiles = await files(astro);
const bytes = async (paths) =>
  (await Promise.all(paths.map(async (path) => gzipSync(await readFile(path)).byteLength))).reduce(
    (sum, size) => sum + size,
    0,
  );

// El JS inicial es el enlazado por <script src>; las islas client:visible quedan fuera hasta intersectar.
const home = await readFile(new URL("dist/index.html", root), "utf8");
const initialScripts = [...home.matchAll(/<script[^>]+src="([^"]+\.js)"/g)].map((match) =>
  join(dist.pathname, match[1].replace(/^\//, "")),
);
const inlineStyles = [...home.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((match) => match[1]);
const cssFiles = assetFiles.filter((path) => extname(path) === ".css");
const fontFiles = assetFiles.filter((path) => extname(path) === ".woff2");
const heroCandidates = assetFiles.filter((path) => /dashboard.*\.avif$/i.test(path));
const values = {
  js: await bytes(initialScripts),
  css: (await bytes(cssFiles)) + gzipSync(inlineStyles.join("\n")).byteLength,
  fonts: (await Promise.all(fontFiles.map((path) => stat(path)))).reduce((sum, item) => sum + item.size, 0),
  hero: heroCandidates.length
    ? Math.max(...(await Promise.all(heroCandidates.map(async (path) => (await stat(path)).size))))
    : 0,
};

let failed = false;
for (const [kind, value] of Object.entries(values)) {
  const target = targets[kind];
  const limit = limits[kind];
  const label = kind === "hero" && value === 0 ? "pendiente (sin captura real)" : `${(value / 1024).toFixed(1)} KiB`;
  console.log(
    `${kind.padEnd(5)} ${label}; objetivo ${(target / 1024).toFixed(0)} KiB; límite ${(limit / 1024).toFixed(0)} KiB`,
  );
  if (value > limit) {
    console.error(`Presupuesto excedido: ${kind}`);
    failed = true;
  }
}

if (new Set(initialScripts).size !== initialScripts.length) throw new Error("Hay scripts iniciales duplicados");
if (failed) process.exitCode = 1;
