/**
 * Hook de analítica (D7: Umami, sin cookies). El script de Umami solo se inyecta en builds de producción
 * con las variables `PUBLIC_UMAMI_*` definidas (ver BaseLayout), así que en desarrollo y en previews
 * `window.umami` no existe y `track` no hace nada.
 *
 * Plan de eventos: docs/roadmap/05-seo-y-marketing.md §4.2.
 */
export type AnalyticsEvent =
  | "download_click"
  | "notify_submit"
  | "cta_click"
  | "faq_open"
  | "lang_switch"
  | "theme_switch"
  | "outbound"
  | "modules_tab";

const analyticsEvents = new Set<AnalyticsEvent>([
  "download_click",
  "notify_submit",
  "cta_click",
  "faq_open",
  "lang_switch",
  "theme_switch",
  "outbound",
  "modules_tab",
]);

export function isAnalyticsEvent(value: string): value is AnalyticsEvent {
  return analyticsEvents.has(value as AnalyticsEvent);
}

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

export function track(event: AnalyticsEvent, data?: Record<string, string>): void {
  if (
    !import.meta.env.PROD ||
    import.meta.env.PUBLIC_DEPLOY_CONTEXT !== "production" ||
    !import.meta.env.PUBLIC_UMAMI_SRC ||
    !import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ||
    !import.meta.env.PUBLIC_UMAMI_DOMAINS ||
    typeof window === "undefined"
  )
    return;
  try {
    window.umami?.track(event, data);
  } catch {
    // La analítica nunca debe romper la página.
  }
}
