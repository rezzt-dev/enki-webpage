import { expect, test } from "@playwright/test";
import { Landing } from "./support/landing";

// D10: oscuro por defecto y claro solo por elección explícita guardada. A diferencia de lo que planteaba
// 08 §3.2, el tema no sigue `prefers-color-scheme` (la guía maestra §8 prevalece).
test.describe("Tema", () => {
  test("es oscuro por defecto aunque el sistema prefiera claro", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    const landing = new Landing(page);
    await landing.goto();

    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(landing.themeToggle).toHaveAttribute("aria-pressed", "false");
    await expect(landing.themeToggle).toHaveAccessibleName(landing.t.a11y.themeLight);
  });

  test("el interruptor cambia de tema, anuncia su estado y lo recuerda al recargar", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    await landing.themeToggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(landing.themeToggle).toHaveAttribute("aria-pressed", "true");
    await expect(landing.themeToggle).toHaveAccessibleName(landing.t.a11y.themeDark);

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(landing.themeToggle).toHaveAttribute("aria-pressed", "true");

    await landing.themeToggle.click();
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  test("el tema guardado se aplica antes del primer pintado, sin destello", async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("enki-theme", "light");
      // Anota el tema en el instante en que el parser crea <body>: antes no se ha pintado nada.
      new MutationObserver((_, observer) => {
        if (!document.body) return;
        (window as unknown as { themeAtBody?: string }).themeAtBody = document.documentElement.dataset["theme"] ?? "";
        observer.disconnect();
      }).observe(document, { childList: true, subtree: true });
    });
    await page.goto("/");

    expect(await page.evaluate(() => (window as unknown as { themeAtBody?: string }).themeAtBody)).toBe("light");
  });

  test("con el almacenamiento bloqueado la página no falla y el interruptor funciona", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.addInitScript(() => {
      Object.defineProperty(window, "localStorage", {
        get() {
          throw new DOMException("Almacenamiento bloqueado", "SecurityError");
        },
      });
    });
    const landing = new Landing(page);
    await landing.goto();

    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await landing.themeToggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    expect(errors).toEqual([]);
  });
});
