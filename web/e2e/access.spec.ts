import { expect, test } from "@playwright/test";
import { fill } from "../src/i18n";
import { release } from "../src/lib/release";
import { Landing } from "./support/landing";

// Sección de descargas (08 §3.2): todos los binarios salen de `release.ts` y apuntan a GitHub Releases.
// No hay detección de sistema operativo: se listan todos los assets y cada uno se elige a mano.
const binary = /\.(exe|msi|msix|dmg|pkg|appimage|deb|rpm|flatpak|zip|tar\.gz)(\?|#|$)/i;

test.describe("Descargas", () => {
  test("cada asset de release.ts tiene su enlace de descarga, y no hay otros binarios", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    const access = page.locator("#access");
    for (const asset of release.assets) {
      const name = fill(landing.t.access.downloadLabel, { version: release.version, os: asset.os, arch: asset.arch });
      const link = access.getByRole("link", { name });
      await expect(link).toHaveAttribute("href", asset.url);
      await expect(link).toHaveAttribute("data-track", "download_click");
      expect(asset.url).toMatch(binary);
      expect(asset.url).toContain(`/releases/download/v${release.version}/`);
    }

    const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((a) => a.getAttribute("href") ?? ""));
    expect(hrefs.filter((href) => binary.test(href)).sort()).toEqual(release.assets.map((asset) => asset.url).sort());
  });

  test("la sección anuncia la versión, enlaza a la release de GitHub y lista las sumas SHA-256", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    const access = page.locator("#access");
    await expect(access).toContainText(`v${release.version}`);
    await expect(access.getByRole("link", { name: landing.t.access.releaseNotes })).toHaveAttribute(
      "href",
      release.url,
    );

    await access.getByText(landing.t.access.checksums).click();
    for (const asset of release.assets) await expect(access).toContainText(asset.sha256);

    await expect(page.getByRole("contentinfo")).toContainText(`v${release.version}`);
  });

  test("el hero lleva a la sección de descargas y a la release de GitHub", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    const hero = page.locator('section[aria-labelledby="hero-title"]');
    await expect(hero.getByRole("link", { name: landing.t.access.releaseNotes })).toHaveAttribute("href", release.url);
    await hero.getByRole("link", { name: landing.t.hero.downloadCta }).click();
    await expect(page).toHaveURL(/#access$/);
    await expect(page.locator("#access")).toBeFocused();
  });

  test("el CTA final lleva a las descargas y les pasa el foco", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();

    await page.getByRole("link", { name: landing.t.finalCta.cta }).click();
    await expect(page).toHaveURL(/#access$/);
    await expect(page.locator("#access")).toBeFocused();
    await expect(page.locator("#access-title")).toBeInViewport();
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
