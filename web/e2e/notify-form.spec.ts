import { expect, test, type Page, type Request, type Route } from "@playwright/test";
import { Landing } from "./support/landing";
import { notifyEndpoint } from "./support/site";

const start = new Date("2026-09-10T10:00:00Z");

/**
 * Abre la home con el reloj detenido y Buttondown interceptado. Buttondown nunca se toca desde los tests
 * (08 §6): cualquier otra petición a su dominio se aborta, y el endpoint del formulario responde con
 * `respond` (por defecto, 200 vacío). Devuelve las peticiones que llegaron al endpoint.
 */
async function setup(page: Page, respond?: (route: Route) => Promise<void>) {
  // La *time-trap* (3 s) se controla con `fastForward` en vez de esperar de verdad.
  await page.clock.install({ time: start });
  await page.clock.pauseAt(new Date(start.getTime() + 1000));

  // Playwright consulta las rutas de la última a la primera: la general va antes que la del endpoint.
  await page.route("https://buttondown.com/**", (route) => route.abort("blockedbyclient"));
  const sent: Request[] = [];
  await page.route(notifyEndpoint, async (route, request) => {
    sent.push(request);
    await (respond ? respond(route) : route.fulfill({ status: 200, body: "" }));
  });

  const landing = new Landing(page);
  await landing.goto();
  const form = landing.notifyForm("access");
  return {
    sent,
    landing,
    form,
    email: form.getByLabel(landing.t.notify.label),
    submit: form.getByRole("button", { name: landing.t.notify.submit }),
    status: form.getByRole("status"),
  };
}

test.describe("Formulario «avísame»", () => {
  test("un email no válido muestra un error textual asociado y no envía nada", async ({ page }) => {
    const { sent, landing, email, submit, status } = await setup(page);
    await page.clock.fastForward(5000);

    for (const value of ["", "no-es-un-email"]) {
      await email.fill(value);
      await submit.click();
      await expect(status).toHaveText(landing.t.notify.invalid);
      await expect(email).toHaveAttribute("aria-invalid", "true");
      await expect(email).toBeFocused();
      // El error llega al lector de pantalla por aria-describedby → región role=status.
      await expect(email).toHaveAccessibleDescription(landing.t.notify.invalid);
    }
    expect(sent).toHaveLength(0);
  });

  test("un envío correcto hace POST con el email, confirma y vacía el campo", async ({ page }) => {
    const { sent, landing, email, submit, status } = await setup(page);
    const url = page.url();
    await page.clock.fastForward(5000);

    await email.fill("persona@example.com");
    await submit.click();

    await expect(status).toHaveText(landing.t.notify.success);
    await expect(email).toHaveValue("");
    await expect(email).not.toHaveAttribute("aria-invalid");
    expect(sent).toHaveLength(1);
    expect(sent[0]?.method()).toBe("POST");
    expect(sent[0]?.postData()).toContain("persona@example.com");
    // Nada del formulario viaja en la URL de la página.
    expect(page.url()).toBe(url);
  });

  test("mientras se envía, el botón queda deshabilitado y marcado como ocupado", async ({ page }) => {
    let release: () => void = () => {};
    const pending = new Promise<void>((resolve) => (release = resolve));
    const { landing, form, email, submit, status } = await setup(page, async (route) => {
      await pending;
      await route.fulfill({ status: 200, body: "" });
    });
    await page.clock.fastForward(5000);

    await email.fill("persona@example.com");
    await submit.click();
    const busy = form.getByRole("button", { name: landing.t.notify.submitting });
    await expect(busy).toBeDisabled();
    await expect(busy).toHaveAttribute("aria-busy", "true");
    await expect(status).toHaveText(landing.t.notify.submitting);

    release();
    await expect(status).toHaveText(landing.t.notify.success);
    await expect(submit).toBeEnabled();
    await expect(submit).not.toHaveAttribute("aria-busy");
  });

  test("un fallo de red muestra el error y conserva el email", async ({ page }) => {
    const { sent, landing, email, submit, status } = await setup(page, (route) => route.abort("failed"));
    await page.clock.fastForward(5000);

    await email.fill("persona@example.com");
    await submit.click();

    await expect(status).toHaveText(landing.t.notify.error);
    await expect(email).toHaveValue("persona@example.com");
    await expect(submit).toBeEnabled();
    expect(sent).toHaveLength(1);
  });

  test("con el honeypot relleno se simula el éxito y no se envía nada", async ({ page }) => {
    const { sent, landing, form, email, submit, status } = await setup(page);
    await page.clock.fastForward(5000);

    await email.fill("bot@example.com");
    await form.locator('input[name="website"]').fill("https://spam.example", { force: true });
    await submit.click();

    await expect(status).toHaveText(landing.t.notify.success);
    expect(sent).toHaveLength(0);
  });

  test("un envío en menos de 3 s se descarta en silencio", async ({ page }) => {
    const { sent, landing, email, submit, status } = await setup(page);
    await page.clock.fastForward(2000);

    await email.fill("bot@example.com");
    await submit.click();

    await expect(status).toHaveText(landing.t.notify.success);
    expect(sent).toHaveLength(0);
  });

  test("sin PUBLIC_BUTTONDOWN_USER avisa en lugar de enviar", async ({ page }) => {
    const { sent, landing, form, email, submit, status } = await setup(page);
    // Equivale a un build sin la variable: `notifyAction()` devuelve null y `data-action` queda vacío.
    await form.evaluate((element) => element.setAttribute("data-action", ""));
    await page.clock.fastForward(5000);

    await email.fill("persona@example.com");
    await submit.click();

    await expect(status).toHaveText(landing.t.notify.notConfigured);
    expect(sent).toHaveLength(0);
  });

  test("el honeypot no es alcanzable con el teclado ni por tecnologías de apoyo", async ({ page }) => {
    const { form } = await setup(page);
    const honeypot = form.locator('input[name="website"]');

    await expect(honeypot).toHaveAttribute("tabindex", "-1");
    await expect(honeypot).toHaveAttribute("autocomplete", "off");
    await expect(
      form.locator('[aria-hidden="true"]').filter({ has: page.locator('input[name="website"]') }),
    ).toHaveCount(1);
  });

  test.describe("sin JavaScript", () => {
    test.use({ javaScriptEnabled: false });

    test("el formulario hace POST directo a Buttondown con validación nativa", async ({ page }) => {
      const landing = new Landing(page);
      await landing.goto();

      const form = landing.notifyForm("access");
      await expect(form).toHaveAttribute("action", notifyEndpoint);
      await expect(form).toHaveAttribute("method", "post");
      await expect(form).not.toHaveAttribute("novalidate");
      const email = form.getByLabel(landing.t.notify.label);
      await expect(email).toHaveAttribute("type", "email");
      await expect(email).toHaveAttribute("required", "");
      await expect(email).toHaveAttribute("autocomplete", "email");
    });
  });
});
