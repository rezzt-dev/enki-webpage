import { localeMeta, pagePath, type Locale } from "@/i18n/config";
import { fill, type Dictionary } from "@/i18n";
import { release } from "./release";
import { site } from "./site";

/**
 * Datos estructurados de la home (docs/roadmap/05 §3.4). `downloadUrl` y `releaseNotes` apuntan a la
 * release de GitHub (`release.ts`). Sin `offers`, `license` ni `aggregateRating`: D3 aún no ha publicado
 * esos datos y no se inventan.
 */
export function homeJsonLd(locale: Locale, t: Dictionary, baseUrl: URL = new URL(site.url)): Record<string, unknown>[] {
  const inLanguage = localeMeta[locale].htmlLang;
  const url = new URL(pagePath(locale, "home"), baseUrl).href;
  const image = new URL(
    `/og/og-${locale.startsWith("es") ? "es" : locale.startsWith("en") ? "en" : locale}.png`,
    baseUrl,
  ).href;
  const author = { "@type": "Person", name: site.authorName, url: site.authorUrl };

  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: site.name,
      alternateName: t.footer.tagline,
      description: t.meta.description,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Windows, macOS, Linux",
      softwareVersion: release.version,
      downloadUrl: release.url,
      releaseNotes: release.url,
      image,
      inLanguage,
      url,
      author,
      copyrightHolder: author,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url,
      inLanguage,
      publisher: author,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage,
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: fill(item.a, { email: site.supportEmail, version: release.version }),
        },
      })),
    },
  ];
}
