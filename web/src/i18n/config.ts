/**
 * Idiomas de la landing (D4: los seis de la app) y tabla de rutas.
 *
 * `es` (España) es el idioma por defecto y vive en la raíz; el resto cuelga de su prefijo. Las páginas
 * legales tienen slug traducido, por eso las rutas se construyen aquí y no a mano en los componentes.
 */
export const locales = ["es", "es-419", "en", "en-gb", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export type LegalPage = "privacy" | "notice" | "cookies";
export type PageId = "home" | LegalPage;

interface LocaleMeta {
  /** Valor de `<html lang>` y de `hreflang`. */
  htmlLang: string;
  /** Valor de `og:locale`. */
  ogLocale: string;
  /** Nombre del idioma en su propio idioma, para el selector. */
  label: string;
  /** Código corto del botón del selector. */
  short: string;
  /** Prefijo de ruta sin barra final ("" para el idioma por defecto). */
  prefix: string;
  legalSlugs: Record<LegalPage, string>;
}

const esSlugs = { privacy: "privacidad", notice: "aviso-legal", cookies: "cookies" };
const enSlugs = { privacy: "privacy", notice: "legal-notice", cookies: "cookies" };

export const localeMeta: Record<Locale, LocaleMeta> = {
  es: { htmlLang: "es-ES", ogLocale: "es_ES", label: "Español (España)", short: "ES", prefix: "", legalSlugs: esSlugs },
  "es-419": {
    htmlLang: "es-419",
    ogLocale: "es_LA",
    label: "Español (Latinoamérica)",
    short: "LATAM",
    prefix: "/es-419",
    legalSlugs: esSlugs,
  },
  en: { htmlLang: "en-US", ogLocale: "en_US", label: "English (US)", short: "EN", prefix: "/en", legalSlugs: enSlugs },
  "en-gb": {
    htmlLang: "en-GB",
    ogLocale: "en_GB",
    label: "English (UK)",
    short: "UK",
    prefix: "/en-gb",
    legalSlugs: enSlugs,
  },
  de: {
    htmlLang: "de-DE",
    ogLocale: "de_DE",
    label: "Deutsch",
    short: "DE",
    prefix: "/de",
    legalSlugs: { privacy: "datenschutz", notice: "impressum", cookies: "cookies" },
  },
  fr: {
    htmlLang: "fr-FR",
    ogLocale: "fr_FR",
    label: "Français",
    short: "FR",
    prefix: "/fr",
    legalSlugs: { privacy: "confidentialite", notice: "mentions-legales", cookies: "cookies" },
  },
};

/** Ruta absoluta (con barra final, ver `trailingSlash` en astro.config) de una página en un idioma. */
export function pagePath(locale: Locale, page: PageId): string {
  const { prefix, legalSlugs } = localeMeta[locale];
  return page === "home" ? `${prefix}/` : `${prefix}/${legalSlugs[page]}/`;
}

/** Todas las páginas del sitio, para `getStaticPaths`. `path` es el parámetro rest (sin barras extremas). */
export function allRoutes(): { path: string | undefined; locale: Locale; page: PageId }[] {
  const pages: PageId[] = ["home", "privacy", "notice", "cookies"];
  return locales.flatMap((locale) =>
    pages.map((page) => {
      const path = pagePath(locale, page).replace(/^\/|\/$/g, "");
      return { path: path === "" ? undefined : path, locale, page };
    }),
  );
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
