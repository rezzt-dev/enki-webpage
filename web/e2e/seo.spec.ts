import { expect, test } from "@playwright/test";
import { alternates, getDictionary, routes, siteUrl } from "./support/site";

// Límites del checklist de lanzamiento (00 §7).
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;

test.describe("SEO por ruta", () => {
  for (const route of routes) {
    test(`${route.path}`, async ({ page, request }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);

      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      // Jerarquía de encabezados sin saltos (h2 → h4 sería un salto).
      const levels = await page
        .locator("h1, h2, h3, h4, h5, h6")
        .evaluateAll((headings) => headings.map((h) => Number(h.tagName.slice(1))));
      levels.forEach((level, i) => expect(level, `encabezado ${i}`).toBeLessThanOrEqual((levels[i - 1] ?? 1) + 1));

      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      expect(title.length, title).toBeLessThanOrEqual(TITLE_MAX);
      const description = (await page.locator('meta[name="description"]').getAttribute("content")) ?? "";
      expect(description.length).toBeGreaterThan(0);
      expect(description.length, description).toBeLessThanOrEqual(DESCRIPTION_MAX);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new URL(route.path, siteUrl).href);
      expect(Object.keys(alternates(await page.content()))).toHaveLength(7);
      await expect(page.locator('meta[name="robots"]')).toHaveCount(0);

      const ogImage = (await page.locator('meta[property="og:image"]').getAttribute("content")) ?? "";
      expect(ogImage.startsWith(siteUrl)).toBe(true);
      const image = await request.get(new URL(ogImage).pathname);
      expect(image.status(), ogImage).toBe(200);
      expect(image.headers()["content-type"]).toContain("image/png");

      const jsonLd = await page
        .locator('script[type="application/ld+json"]')
        .evaluateAll((scripts) => scripts.map((script) => script.textContent ?? ""));
      const types = jsonLd.map((text) => (JSON.parse(text) as { "@type": string })["@type"]);
      expect(types).toEqual(route.page === "home" ? ["SoftwareApplication", "WebSite", "FAQPage"] : []);
    });
  }
});

test.describe("SEO del sitio", () => {
  test("una ruta inexistente responde 404 con la página propia, sin indexar", async ({ page }) => {
    const t = getDictionary("es");
    const response = await page.goto("/no-existe/");

    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(t.notFound.title);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.getByRole("link", { name: t.notFound.back })).toHaveAttribute("href", "/");
  });

  test("robots.txt enlaza el sitemap y el sitemap solo lista las rutas públicas", async ({ request }) => {
    const robots = await (await request.get("/robots.txt")).text();
    expect(robots).toContain(`Sitemap: ${siteUrl}/sitemap-index.xml`);

    expect((await request.get("/sitemap-index.xml")).status()).toBe(200);
    const sitemap = await (await request.get("/sitemap-0.xml")).text();
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc).sort();
    expect(locs).toEqual(routes.map((route) => new URL(route.path, siteUrl).href).sort());
  });

  test("el muestrario interno no se indexa", async ({ page }) => {
    await page.goto("/kitchen-sink/");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });
});
