// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { allRoutes, defaultLocale, locales, localeMeta, pagePath } from "./src/i18n/config.ts";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "https://enki.rezzt.dev";
const routeByUrl = new Map(
  allRoutes().map((route) => [new URL(pagePath(route.locale, route.page), siteUrl).href, route]),
);

// Sitio 100 % estático (D6: hosting propio). Cada ruta sale como `<ruta>/index.html`, que cualquier
// servidor estático sirve sin reglas de reescritura; de ahí `trailingSlash: "always"`.
export default defineConfig({
  site: siteUrl,
  output: "static",
  trailingSlash: "always",
  // La hoja global es pequeña (< 10 KiB gzip) y contiene todo el primer pintado. Inline evita un viaje
  // de red antes del LCP en las páginas legales y sigue dentro del presupuesto total de la home.
  build: { format: "directory", inlineStylesheets: "always" },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/404") && !page.includes("/kitchen-sink/"),
      i18n: {
        defaultLocale,
        // El esquema de @astrojs/sitemap 3.7 no admite dígitos en el valor (`es-419`). Este valor solo
        // activa el reconocimiento del prefijo; `serialize` escribe debajo el hreflang correcto.
        locales: Object.fromEntries(
          Object.entries(localeMeta).map(([locale, meta]) => [locale, locale === "es-419" ? "es" : meta.htmlLang]),
        ),
      },
      // El i18n automático no puede emparejar slugs legales traducidos. La tabla de rutas, fuente única,
      // aporta todos los alternates y x-default también para esas páginas.
      serialize(item) {
        const route = routeByUrl.get(item.url);
        if (!route) return item;
        item.links = [
          ...locales.map((locale) => ({
            lang: localeMeta[locale].htmlLang,
            url: new URL(pagePath(locale, route.page), siteUrl).href,
          })),
          { lang: "x-default", url: new URL(pagePath(defaultLocale, route.page), siteUrl).href },
        ];
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
