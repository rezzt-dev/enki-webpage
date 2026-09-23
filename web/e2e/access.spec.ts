import { expect, test } from "@playwright/test";
import { release } from "../src/lib/release";
import { Landing } from "./support/landing";

// Sustituye a `download.spec.ts` de 08 §3.2: con D1 (lista de espera) y D2 no hay binarios, ni botón
// de descarga, ni detección de sistema operativo. Cuando `release.ts` tenga assets, esta suite debe
// ampliarse con los casos de descarga por SO del roadmap.
const binary = /\.(exe|msi|msix|dmg|pkg|appimage|deb|rpm|flatpak|zip|tar\.gz)(\?|#|$)/i;

test.describe("Acceso anticipado", () => {
  test("no hay enlaces a binarios mientras release.ts no publique assets", async ({ page }) => {
    expect(Object.keys(release.assets)).toEqual([]);
    await page.goto("/");

    const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((a) => a.getAttribute("href") ?? ""));
    expect(hrefs.filter((href) => binary.test(href))).toEqual([]);
  });

  test("la sección anuncia la versión de release.ts y las tres plataformas como «pronto»", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    const access = page.locator("#access");
    await expect(access).toContainText(`v${release.version}`);
    for (const platform of landing.t.access.platforms) {
      await expect(access.getByRole("listitem").filter({ hasText: platform })).toContainText(landing.t.access.soon);
    }
    await expect(page.getByRole("contentinfo")).toContainText(`v${release.version}`);
  });

  test("el CTA final lleva al formulario de acceso y le pasa el foco", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    await page.getByRole("link", { name: landing.t.finalCta.cta }).click();
    await expect(page).toHaveURL(/#access$/);
    await expect(page.locator("#access")).toBeFocused();
    await expect(landing.notifyForm("access").getByLabel(landing.t.notify.label)).toBeInViewport();
  });

  test.describe("sin JavaScript", () => {
    test.use({ javaScriptEnabled: false });

    test("el CTA final sigue funcionando como enlace de ancla", async ({ page }) => {
      const landing = new Landing(page);
      await landing.goto();

      await page.getByRole("link", { name: landing.t.finalCta.cta }).click();
      await expect(page).toHaveURL(/#access$/);
      await expect(page.locator("#access-title")).toBeInViewport();
    });
  });
});
