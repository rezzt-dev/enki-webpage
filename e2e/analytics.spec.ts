import { expect, test } from "@playwright/test";
import { Landing } from "./support/landing";
import { itemAt } from "./support/site";

type Spy = { umamiCalls: unknown[] };

// El build de E2E trae `PUBLIC_UMAMI_*` configurado pero `PUBLIC_DEPLOY_CONTEXT=preview`
// (playwright.config.ts): es exactamente un despliegue de preview, que no debe medir nada (D7).
test("en un build de preview no se pide nada fuera del sitio y track() no hace nada", async ({ page, baseURL }) => {
  const origin = new URL(baseURL ?? "http://127.0.0.1").origin;
  const foreign: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.protocol.startsWith("http") && url.origin !== origin) foreign.push(request.url());
  });
  // Si track() llegara a llamar a Umami, el espía lo anotaría.
  await page.addInitScript(() => {
    const spy = window as unknown as Spy & { umami: { track: (...args: unknown[]) => void } };
    spy.umamiCalls = [];
    spy.umami = { track: (...args) => spy.umamiCalls.push(args) };
  });

  const landing = new Landing(page);
  await landing.goto();
  await expect(page.locator('script[src*="analytics.example.com"]')).toHaveCount(0);

  // Interacciones que en producción disparan eventos: theme_switch, faq_open, modules_tab y cta_click.
  await landing.themeToggle.click();
  await page.locator("#faq summary").first().click();
  const tabs = await landing.modulesTabs();
  await tabs.getByRole("tab", { name: itemAt(landing.t.modules.items, 1).label }).click();
  await page.getByRole("link", { name: landing.t.finalCta.cta }).click();

  expect(await page.evaluate(() => (window as unknown as Spy).umamiCalls)).toEqual([]);
  expect(foreign).toEqual([]);
});
