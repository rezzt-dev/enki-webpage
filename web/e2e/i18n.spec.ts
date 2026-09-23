import { expect, test } from "@playwright/test";
import { Landing } from "./support/landing";
import { alternates, getDictionary, localeMeta, locales, pagePath, routes, siteUrl } from "./support/site";

test.describe("Idiomas", () => {
  for (const locale of locales) {
    test(`${locale}: la home declara su idioma, su title y su h1`, async ({ page }) => {
      const t = getDictionary(locale);
      await page.goto(pagePath(locale, "home"));

      await expect(page.locator("html")).toHaveAttribute("lang", localeMeta[locale].htmlLang);
      await expect(page).toHaveTitle(t.meta.title);
      const h1 = page.getByRole("heading", { level: 1 });
      for (const line of t.hero.titleLines) await expect(h1).toContainText(line);
    });
  }

  test("el selector lleva a la página equivalente, también con slug traducido", async ({ page }) => {
    const landing = new Landing(page, "es");
    await landing.goto("privacy");

    await landing.languageSummary.click();
    await expect(landing.languageLink("es")).toHaveAttribute("aria-current", "page");
    await landing.languageLink("de").click();

    await expect(page).toHaveURL(new RegExp(`${pagePath("de", "privacy")}$`));
    await expect(page.locator("html")).toHaveAttribute("lang", localeMeta.de.htmlLang);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(getDictionary("de").legal.pages.privacy.title);
  });

  test("Esc cierra el selector y devuelve el foco a su botón", async ({ page }) => {
    const landing = new Landing(page, "en");
    await landing.goto();

    await landing.languageSummary.focus();
    await page.keyboard.press("Enter");
    await expect(landing.languageLink("fr")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(landing.languageLink("fr")).toBeHidden();
    await expect(landing.languageSummary).toBeFocused();
  });

  test("los hreflang son recíprocos y apuntan a páginas que existen", async ({ request }) => {
    const expected = [...locales.map((locale) => localeMeta[locale].htmlLang), "x-default"].sort();

    for (const route of routes) {
      const own = new URL(route.path, siteUrl).href;
      const links = alternates(await (await request.get(route.path)).text());
      expect(Object.keys(links).sort(), route.path).toEqual(expected);

      for (const href of Object.values(links)) {
        const response = await request.get(new URL(href).pathname);
        expect(response.status(), href).toBe(200);
        expect(alternates(await response.text())[localeMeta[route.locale].htmlLang], `${href} → ${own}`).toBe(own);
      }
    }
  });

  test("las páginas legales solo existen con el slug de su idioma", async ({ request }) => {
    for (const route of routes.filter(({ page }) => page !== "home")) {
      expect((await request.get(route.path)).status(), route.path).toBe(200);
    }
    expect((await request.get("/en/privacidad/")).status()).toBe(404);
    expect((await request.get("/de/privacy/")).status()).toBe(404);
    expect((await request.get("/fr/aviso-legal/")).status()).toBe(404);
  });
});
