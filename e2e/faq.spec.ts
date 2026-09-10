import { expect, test, type Page } from "@playwright/test";
import { Landing } from "./support/landing";
import { getDictionary, itemAt, locales, normalizeSpace, pagePath } from "./support/site";

/** El `<details>` de una pregunta de la FAQ, localizado por el texto de su `<summary>`. */
const faqItem = (page: Page, question: string) =>
  page.locator("#faq details").filter({ has: page.locator("summary", { hasText: question }) });

test.describe("FAQ", () => {
  test("cada pregunta se abre y se cierra con el teclado", async ({ page }) => {
    const landing = new Landing(page);
    await landing.goto();
    const details = faqItem(page, itemAt(landing.t.faq.items, 0).q);
    const summary = details.locator("summary");

    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(details).toHaveAttribute("open", "");
    await expect(details.locator("p")).toBeVisible();

    await page.keyboard.press(" ");
    await expect(details).not.toHaveAttribute("open");
    await expect(details.locator("p")).toBeHidden();
  });

  test("el JSON-LD FAQPage coincide con las preguntas visibles en los seis idiomas", async ({ page }) => {
    for (const locale of locales) {
      await page.goto(pagePath(locale, "home"));

      const blocks = await page
        .locator('script[type="application/ld+json"]')
        .evaluateAll((scripts) =>
          scripts.map((script) => JSON.parse(script.textContent ?? "") as Record<string, unknown>),
        );
      const faqPage = blocks.find((block) => block["@type"] === "FAQPage") as
        { mainEntity: { name: string; acceptedAnswer: { text: string } }[] } | undefined;
      expect(faqPage, locale).toBeDefined();

      const visible = await page.locator("#faq details").evaluateAll((items) =>
        items.map((item) => ({
          q: item.querySelector("summary")?.textContent ?? "",
          a: item.querySelector("p")?.textContent ?? "",
        })),
      );
      expect(visible).toHaveLength(getDictionary(locale).faq.items.length);
      expect(
        faqPage?.mainEntity.map((entry) => ({
          q: normalizeSpace(entry.name),
          a: normalizeSpace(entry.acceptedAnswer.text),
        })),
        locale,
      ).toEqual(visible.map(({ q, a }) => ({ q: normalizeSpace(q), a: normalizeSpace(a) })));
    }
  });

  test.describe("sin JavaScript", () => {
    test.use({ javaScriptEnabled: false });

    test("las respuestas están en el HTML y el acordeón funciona", async ({ page }) => {
      const landing = new Landing(page);
      await landing.goto();

      for (const item of landing.t.faq.items) {
        await expect(page.locator("#faq")).toContainText(item.q);
      }
      const first = faqItem(page, itemAt(landing.t.faq.items, 0).q);
      await first.locator("summary").click();
      await expect(first).toHaveAttribute("open", "");
    });
  });
});
