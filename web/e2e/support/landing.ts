import { expect, type Locator, type Page } from "@playwright/test";
import { getDictionary, localeMeta, pagePath, type Locale, type PageId } from "./site";

export const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Caja de un elemento visible; falla si el elemento no se ha pintado. */
export async function box(locator: Locator) {
  const result = await locator.boundingBox();
  if (!result) throw new Error(`Sin caja: ${locator.toString()}`);
  return result;
}

/**
 * Page object de la landing. Localiza cada pieza por su rol y por el copy del diccionario de su idioma,
 * igual que la encontraría un lector de pantalla.
 */
export class Landing {
  readonly page: Page;
  readonly locale: Locale;
  readonly t: ReturnType<typeof getDictionary>;
  readonly banner: Locator;
  readonly mainNav: Locator;
  readonly menuButton: Locator;
  readonly menu: Locator;
  readonly themeToggle: Locator;
  readonly languageSummary: Locator;

  constructor(page: Page, locale: Locale = "es") {
    const t = getDictionary(locale);
    this.page = page;
    this.locale = locale;
    this.t = t;
    this.banner = page.getByRole("banner");
    this.mainNav = this.banner.getByRole("navigation", { name: t.a11y.mainNav });
    this.menuButton = page.getByRole("button", { name: t.a11y.menuOpen });
    this.menu = page.getByRole("dialog", { name: t.a11y.mainNav });
    // El nombre alterna entre "cambiar a claro" y "cambiar a oscuro" según el tema activo.
    this.themeToggle = page.getByRole("button", {
      name: new RegExp(`^(${escapeRegExp(t.a11y.themeLight)}|${escapeRegExp(t.a11y.themeDark)})$`),
    });
    this.languageSummary = page.locator("[data-lang-switch] > summary");
  }

  goto(page: PageId = "home") {
    return this.page.goto(pagePath(this.locale, page));
  }

  languageLink(locale: Locale) {
    return this.page
      .locator("[data-lang-switch]")
      .getByRole("link", { name: new RegExp(`^${escapeRegExp(localeMeta[locale].label)}`) });
  }

  notifyForm(location: "access") {
    return this.page.locator(`form[data-location="${location}"]`);
  }

  /** La isla de módulos se hidrata al entrar en pantalla (`client:visible`); Astro quita `ssr` al terminar. */
  async modulesTabs() {
    const island = this.page.locator('astro-island[component-url*="ModulesTabs"]');
    await island.scrollIntoViewIfNeeded();
    await expect(island).not.toHaveAttribute("ssr");
    return this.page.getByRole("tablist", { name: this.t.modules.title });
  }
}
