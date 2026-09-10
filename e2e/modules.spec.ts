import { expect, test } from "@playwright/test";
import { Landing } from "./support/landing";
import { itemAt } from "./support/site";

test.describe("Módulos", () => {
  test("hay una pestaña por módulo y la primera está activa", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();
    const tablist = await landing.modulesTabs();
    const items = landing.t.modules.items;

    await expect(tablist.getByRole("tab")).toHaveCount(items.length);
    await expect(tablist.getByRole("tab", { name: itemAt(items, 0).label })).toHaveAttribute("aria-selected", "true");
    // Solo el panel activo está en el árbol de accesibilidad; los demás se ocultan.
    await expect(page.getByRole("tabpanel")).toHaveCount(1);
    await expect(page.getByRole("tabpanel")).toContainText(itemAt(items, 0).title);
  });

  test("al pulsar una pestaña, su panel muestra su texto y su captura", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();
    const tablist = await landing.modulesTabs();

    for (const item of landing.t.modules.items) {
      const tab = tablist.getByRole("tab", { name: item.label });
      await tab.click();
      await expect(tab).toHaveAttribute("aria-selected", "true");

      const panel = page.getByRole("tabpanel");
      await expect(panel).toHaveCount(1);
      await expect(panel.getByRole("heading", { name: item.title })).toBeVisible();
      await expect(panel.getByRole("img", { name: item.screenAlt })).toBeVisible();
    }
  });

  test("las flechas, Inicio y Fin mueven la selección", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();
    const tablist = await landing.modulesTabs();
    const items = landing.t.modules.items;
    const tab = (index: number) => tablist.getByRole("tab", { name: itemAt(items, index).label });

    await tab(0).focus();
    await page.keyboard.press("ArrowRight");
    await expect(tab(1)).toBeFocused();
    await expect(tab(1)).toHaveAttribute("aria-selected", "true");

    await page.keyboard.press("ArrowLeft");
    await expect(tab(0)).toHaveAttribute("aria-selected", "true");

    await page.keyboard.press("End");
    await expect(tab(items.length - 1)).toHaveAttribute("aria-selected", "true");

    await page.keyboard.press("Home");
    await expect(tab(0)).toHaveAttribute("aria-selected", "true");
  });

  test.describe("sin JavaScript", () => {
    test.use({ javaScriptEnabled: false });

    test("el texto de todos los módulos está en el HTML", async ({ page }) => {
      const landing = new Landing(page);
      await landing.goto();

      const modules = page.locator("#modules");
      for (const item of landing.t.modules.items) {
        await expect(modules).toContainText(item.title);
        await expect(modules).toContainText(item.body);
      }
    });
  });
});
