/**
 * Genera los assets de marca que no son vectoriales: favicons PNG/ICO y las imágenes Open Graph por
 * idioma base (`public/og/og-<idioma>.png`, 1200×630). Renderiza HTML con el Chromium de Playwright,
 * con las mismas fuentes y colores que la web. El ICO se copia del asset maestro de la app.
 *
 *   pnpm brand-assets
 *
 * Los titulares deben coincidir con `hero.titleLines` de src/i18n/locales/*.ts.
 */
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("@playwright/test");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
// Incrustadas como data: URL; una página creada con setContent no puede cargar file://.
const font = (pkg, file) =>
  `data:font/woff2;base64,${readFileSync(join(root, "node_modules", pkg, "files", file)).toString("base64")}`;
const spaceGrotesk = font("@fontsource-variable/space-grotesk", "space-grotesk-latin-wght-normal.woff2");
const jetbrainsMono = font("@fontsource-variable/jetbrains-mono", "jetbrains-mono-latin-wght-normal.woff2");

const MONOGRAM = "M316 217H706V806H316V728H620V550H391V472H620V296H316Z";
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const og = {
  es: {
    eyebrow: "Alfa 0.1 · Windows · macOS · Linux",
    lines: ["Tu segundo cerebro,", "en tu escritorio."],
    modules: "Notas · Kanban · Calendario",
  },
  en: {
    eyebrow: "Alpha 0.1 · Windows · macOS · Linux",
    lines: ["Your second brain,", "on your desktop."],
    modules: "Notes · Kanban · Calendar",
  },
  de: {
    eyebrow: "Alpha 0.1 · Windows · macOS · Linux",
    lines: ["Dein zweites Gehirn,", "auf deinem Desktop."],
    modules: "Notizen · Kanban · Kalender",
  },
  fr: {
    eyebrow: "Alpha 0.1 · Windows · macOS · Linux",
    lines: ["Votre second cerveau,", "sur votre bureau."],
    modules: "Notes · Kanban · Calendrier",
  },
};

const baseCss = `
  @font-face { font-family: "SG"; src: url("${spaceGrotesk}") format("woff2"); font-weight: 300 700; }
  @font-face { font-family: "JB"; src: url("${jetbrainsMono}") format("woff2"); font-weight: 100 800; }
  * { margin: 0; box-sizing: border-box; }
  body { background: #121212; color: #f5f5f5; font-family: "SG", sans-serif; }
  .grain { position: absolute; inset: 0; background-image: ${GRAIN}; opacity: 0.06; }
`;

function ogHtml({ eyebrow, lines, modules }) {
  return `<!doctype html><html><head><style>${baseCss}
    .card { position: relative; width: 1200px; height: 630px; padding: 72px 80px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; }
    .top { display: flex; align-items: center; justify-content: space-between; }
    .logo { display: flex; align-items: center; gap: 18px; font-weight: 700; letter-spacing: 0.3em; font-size: 26px; }
    .eyebrow { font-family: "JB"; font-weight: 700; font-size: 18px; letter-spacing: 0.35em; text-transform: uppercase; color: #8a8a8a; display: flex; align-items: center; gap: 14px; }
    .dot { width: 12px; height: 12px; border-radius: 50%; background: #4ade80; }
    h1 { font-size: 92px; line-height: 0.92; letter-spacing: -0.04em; font-weight: 700; text-transform: uppercase; }
    .bottom { display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid rgba(255,255,255,.12); padding-top: 26px; font-family: "JB"; font-size: 18px; letter-spacing: 0.2em; text-transform: uppercase; color: #8a8a8a; }
  </style></head><body><div class="card"><div class="grain"></div>
    <div class="top">
      <div class="logo"><svg viewBox="316 217 390 589" height="40" fill="#f5f5f5"><path d="${MONOGRAM}"/></svg>ENKI</div>
      <div class="eyebrow"><span class="dot"></span>${eyebrow}</div>
    </div>
    <h1>${lines.map((l) => `<span style="display:block">${l}</span>`).join("")}</h1>
    <div class="bottom"><span>enki.rezzt.dev</span><span>${modules}</span></div>
  </div></body></html>`;
}

const iconHtml = (size) => `<!doctype html><html><head><style>${baseCss}</style></head><body>
  <svg viewBox="0 0 1024 1024" width="${size}" height="${size}"><rect width="1024" height="1024" fill="#121212"/><path d="${MONOGRAM}" fill="#EAEAEA"/></svg>
</body></html>`;

mkdirSync(join(root, "public", "og"), { recursive: true });
const browser = await chromium.launch();

const iconPage = await browser.newPage();
for (const [file, size] of [
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
]) {
  await iconPage.setViewportSize({ width: size, height: size });
  await iconPage.setContent(iconHtml(size));
  await iconPage.screenshot({ path: join(root, "public", file) });
  console.log(file);
}

copyFileSync(
  join(root, "..", "enki", "src", "enki", "assets", "icon", "enki.ico"),
  join(root, "public", "favicon.ico"),
);
console.log("favicon.ico");

const ogPage = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [lang, content] of Object.entries(og)) {
  await ogPage.setContent(ogHtml(content), { waitUntil: "load" });
  await ogPage.evaluate(() => document.fonts.ready);
  await ogPage.screenshot({ path: join(root, "public", "og", `og-${lang}.png`) });
  console.log(`og-${lang}.png`);
}

await browser.close();
