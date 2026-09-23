/** Comprobaciones deterministas de los criterios SEO sobre la salida estática. */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const expectedLanguages = ["es-ES", "es-419", "en-US", "en-GB", "de-DE", "fr-FR", "x-default"];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const htmlFiles = walk(dist)
  .filter((file) => file.endsWith(".html"))
  .filter((file) => !/<meta name="robots" content="noindex(?:, [^"]+)?">/.test(readFileSync(file, "utf8")));
assert(htmlFiles.length === 24, `Se esperaban 24 rutas indexables y se encontraron ${htmlFiles.length}`);

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const name = relative(dist, file);
  assert((html.match(/<title>/g) ?? []).length === 1, `${name}: title ausente o duplicado`);
  assert(/<meta name="description" content="[^"]+">/.test(html), `${name}: falta description`);
  assert(
    /<link rel="canonical" href="https:\/\/enki\.rezzt\.dev\/[^"]*">/.test(html),
    `${name}: canonical no absoluto`,
  );
  for (const language of expectedLanguages) {
    assert(html.includes(`hreflang="${language}"`), `${name}: falta hreflang ${language}`);
  }
}

for (const localeHome of [
  "index.html",
  "es-419/index.html",
  "en/index.html",
  "en-gb/index.html",
  "de/index.html",
  "fr/index.html",
]) {
  const html = readFileSync(join(dist, localeHome), "utf8");
  for (const type of ["SoftwareApplication", "WebSite", "FAQPage"]) {
    assert(html.includes(`"@type":"${type}"`), `${localeHome}: falta JSON-LD ${type}`);
  }
}

const sitemap = readFileSync(join(dist, "sitemap-0.xml"), "utf8");
assert((sitemap.match(/<loc>/g) ?? []).length === 24, "El sitemap no contiene las 24 rutas indexables");
assert(!sitemap.includes("/404"), "El sitemap contiene la página 404");
for (const language of expectedLanguages) {
  assert(sitemap.includes(`hreflang="${language}"`), `El sitemap no contiene hreflang ${language}`);
}

for (const language of ["es", "en", "de", "fr"]) {
  const image = join(dist, `og/og-${language}.png`);
  assert(statSync(image).size < 300_000, `${image}: la imagen OG supera 300 KB`);
}

const output = htmlFiles.map((file) => readFileSync(file, "utf8")).join("\n");
assert(!output.includes("analytics.example.com"), "El build sin configuración carga el proveedor de analítica");

console.log("SEO OK: 24 rutas, hreflang recíproco, JSON-LD, sitemap y OG validados.");
