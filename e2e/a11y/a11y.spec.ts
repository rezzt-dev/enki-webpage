import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { allRoutes, pagePath } from "../../src/i18n/config";

const paths = [...new Set(allRoutes().map(({ locale, page }) => pagePath(locale, page)))];
const themes = ["dark", "light"] as const;
const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "desktop", width: 1280, height: 800 },
] as const;

for (const path of paths) {
  for (const theme of themes) {
    for (const viewport of viewports) {
      test(`${path} · ${theme} · ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.addInitScript((selectedTheme) => localStorage.setItem("enki-theme", selectedTheme), theme);
        await page.goto(path, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);

        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        expect(results.violations).toEqual([]);
        await expect(page.locator("h1")).toHaveCount(1);
        await expect(page.locator("main#main")).toHaveCount(1);
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth),
        ).toBe(true);
      });
    }
  }
}

test("reflow a 320 px, zoom al 400 % y foco en colores forzados", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.evaluate(() => {
    document.documentElement.style.zoom = "4";
  });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(
    true,
  );

  await page.evaluate(() => {
    document.documentElement.style.zoom = "1";
  });
  await page.emulateMedia({ forcedColors: "active" });
  await page.keyboard.press("Tab");
  const focused = page.locator(":focus-visible");
  await expect(focused).toBeVisible();
  expect(await focused.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");
});
