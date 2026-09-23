import { fileURLToPath } from "node:url";
import { expect, test } from "@playwright/test";
import { Landing } from "../support/landing";

/**
 * Regresión visual (docs/roadmap/08 §3.3): cada sección de la home y una página legal, en 375 y 1280 px y
 * en ambos temas, con movimiento reducido y fuentes cargadas. Las capturas de referencia se generan y se
 * comparan dentro de la imagen oficial de Playwright (`pnpm test:docker`), la misma del CI.
 */
const sections = {
  hero: 'section[aria-labelledby="hero-title"]',
  problem: "#problem",
  pillars: "#pillars",
  modules: "#modules",
  connections: "#connections",
  how: "#how",
  privacy: "#privacy",
  compare: "#compare",
  "use-cases": "#use-cases",
  desktop: "#desktop",
  facts: "#facts",
  polar: 'section[aria-labelledby="polar-title"]',
  access: "#access",
  faq: "#faq",
  final: 'section[aria-labelledby="final-title"]',
  footer: "footer",
};

const css = (file: string) => fileURLToPath(new URL(file, import.meta.url));
const noGrain = [css("./no-grain.css")];
const noHeader = [...noGrain, css("./no-header.css")];

const viewports = [
  { width: 375, height: 812 },
  { width: 1280, height: 800 },
] as const;
const themes = ["dark", "light"] as const;

for (const viewport of viewports) {
  for (const theme of themes) {
    test.describe(`${viewport.width} · ${theme}`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.addInitScript((selected) => localStorage.setItem("enki-theme", selected), theme);
      });

      test("home, sección a sección", async ({ page }) => {
        const landing = new Landing(page);
        await landing.goto();
        await page.evaluate(() => document.fonts.ready);
        await landing.modulesTabs();
        await page.evaluate(() => window.scrollTo(0, 0));

        const prefix = `home-${viewport.width}-${theme}`;
        await expect.soft(landing.banner).toHaveScreenshot(`${prefix}-header.png`, { stylePath: noGrain });
        for (const [name, selector] of Object.entries(sections)) {
          await expect.soft(page.locator(selector)).toHaveScreenshot(`${prefix}-${name}.png`, { stylePath: noHeader });
        }
      });

      test("página legal", async ({ page }) => {
        const landing = new Landing(page);
        await landing.goto("privacy");
        await page.evaluate(() => document.fonts.ready);

        await expect(page).toHaveScreenshot(`privacy-${viewport.width}-${theme}.png`, {
          fullPage: true,
          stylePath: noHeader,
        });
      });
    });
  }
}
