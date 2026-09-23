/**
 * Datos compartidos por las suites E2E. Salen de las mismas fuentes que el sitio (tabla de rutas,
 * diccionarios y release), así un cambio de copy o de slug no obliga a reescribir los tests.
 */
import { allRoutes, localeMeta, locales, pagePath, type Locale, type PageId } from "../../src/i18n/config";
import { getDictionary } from "../../src/i18n";

export { getDictionary, localeMeta, locales, pagePath, type Locale, type PageId };

/** Dominio de producción: canonical, hreflang y og:image son absolutos sobre él. */
export const siteUrl = process.env.PUBLIC_SITE_URL ?? "https://enki.rezzt.dev";

/** Las 24 páginas públicas (6 idiomas × home + 3 legales). */
export const routes = allRoutes().map(({ locale, page }) => ({ locale, page, path: pagePath(locale, page) }));

/** Acción del formulario en el build de E2E (`PUBLIC_BUTTONDOWN_USER=enki-e2e`, playwright.config.ts). */
export const notifyEndpoint = "https://buttondown.com/api/emails/embed-subscribe/enki-e2e";

/** Elemento de una lista que el test da por existente; falla con un mensaje claro si no está. */
export function itemAt<T>(list: readonly T[], index: number): T {
  const value = list[index];
  if (value === undefined) throw new Error(`No hay elemento ${index} en una lista de ${list.length}`);
  return value;
}

/** Enlaces `<link rel="alternate" hreflang>` de un HTML, como mapa hreflang → href. */
export function alternates(html: string): Record<string, string> {
  return Object.fromEntries(
    [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(([, lang, href]) => [
      lang,
      href,
    ]),
  );
}

export const normalizeSpace = (text: string) => text.replace(/\s+/g, " ").trim();
