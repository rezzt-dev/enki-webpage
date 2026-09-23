import { expect, test } from "@playwright/test";
import { box, Landing } from "./support/landing";

const anchors = ["modules", "privacy", "compare", "faq"] as const;

test.describe("Navegación", () => {
  test("el skip link es lo primero del tabulador y lleva al contenido principal", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: landing.t.a11y.skip });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
    await expect(page.locator("main#main")).toBeFocused();
  });

  test("los enlaces de la cabecera llevan a su sección, le pasan el foco y no la tapan", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const landing = new Landing(page);
    await landing.goto();

    for (const id of anchors) {
      await landing.mainNav.getByRole("link", { name: landing.t.nav[id] }).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(page.locator(`#${id}`)).toBeFocused();

      // WCAG 2.4.11: el título de destino queda por debajo de la cabecera fija, no detrás.
      const title = page.locator(`#${id}-title`);
      await expect(title).toBeInViewport();
      const header = await box(landing.banner);
      expect((await box(title)).y).toBeGreaterThanOrEqual(header.y + header.height);
    }
  });

  test("desde una página legal, la cabecera vuelve a la home en el ancla", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const landing = new Landing(page);
    await landing.goto("privacy");

    await landing.mainNav.getByRole("link", { name: landing.t.nav.compare }).click();
    await expect(page).toHaveURL(/\/#compare$/);
    await expect(page.locator("#compare-title")).toBeInViewport();
  });

  test.describe("menú móvil", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
    });

    test("abre como modal, retiene el foco, se cierra con Esc y devuelve el foco", async ({ page }) => {
      const landing = new Landing(page);
      await landing.goto();

      await landing.menuButton.focus();
      await page.keyboard.press("Enter");
      await expect(landing.menu).toBeVisible();

      // Con showModal() el resto de la página es inerte: el tabulador no sale del diálogo.
      const focusable = await landing.menu.locator("a, button").count();
      for (let i = 0; i < focusable + 2; i++) {
        await page.keyboard.press("Tab");
        const insideMenu = await page.evaluate(() => {
          const active = document.activeElement;
          const menu = document.querySelector("dialog[data-menu]");
          return !active || active === document.body || Boolean(menu?.contains(active));
        });
        expect(insideMenu, `pulsación ${i + 1} del tabulador`).toBe(true);
      }

      await page.keyboard.press("Escape");
      await expect(landing.menu).toBeHidden();
      await expect(landing.menuButton).toBeFocused();
    });

    test("un enlace del menú lo cierra y baja a su sección", async ({ page }) => {
      const landing = new Landing(page);
      await landing.goto();

      await landing.menuButton.click();
      await landing.menu.getByRole("link", { name: landing.t.nav.faq }).click();
      await expect(landing.menu).toBeHidden();
      await expect(page).toHaveURL(/#faq$/);
      await expect(page.locator("#faq-title")).toBeInViewport();
    });

    test("el botón de cerrar cierra el menú", async ({ page }) => {
      const landing = new Landing(page);
      await landing.goto();

      await landing.menuButton.click();
      await landing.menu.getByRole("button", { name: landing.t.a11y.menuClose }).click();
      await expect(landing.menu).toBeHidden();
    });
  });
});
