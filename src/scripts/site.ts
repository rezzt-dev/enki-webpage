/**
 * Comportamiento global de la página, sin framework: scroll suave (Lenis, D11), reveal de secciones,
 * cabecera consciente del scroll, tema, menú móvil, selector de idioma y eventos de analítica.
 * Todo degrada bien: sin JS la página se ve completa y los enlaces funcionan.
 */
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { isAnalyticsEvent, track } from "@/lib/analytics";

const HEADER_OFFSET = 96;
const THEME_KEY = "enki-theme";
const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ── Scroll suave ────────────────────────────────────────────────────────────────────────────────
// Lenis solo sin preferencia de movimiento reducido; con ella, scroll nativo sin animar.
const lenis = reduceMotion ? null : new Lenis({ autoRaf: true, anchors: false });

function scrollToElement(target: HTMLElement) {
  if (lenis) lenis.scrollTo(target, { offset: -HEADER_OFFSET });
  else target.scrollIntoView({ block: "start" });
  // Mover el foco al destino para que teclado y lector de pantalla sigan al scroll.
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
  if (!link) return;
  const url = new URL(link.href);
  if (url.pathname !== location.pathname || !url.hash) return;
  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target) return;
  event.preventDefault();
  closeMenu();
  history.pushState(null, "", url.hash);
  scrollToElement(target);
});

// ── Reveal de secciones ─────────────────────────────────────────────────────────────────────────
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-revealed", "");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -15% 0px" },
  );
  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.setAttribute("data-revealed", ""));
}

// ── Cabecera consciente del scroll ──────────────────────────────────────────────────────────────
const header = document.querySelector<HTMLElement>("[data-header]");
const updateHeader = () => header?.toggleAttribute("data-scrolled", window.scrollY > 20);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// ── Tema (D10: oscuro por defecto, claro a elección) ────────────────────────────────────────────
const themeButtons = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");

function syncThemeButtons() {
  const isLight = root.dataset.theme === "light";
  themeButtons.forEach((button) => {
    const label = isLight ? button.dataset.labelDark : button.dataset.labelLight;
    if (label) button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", String(isLight));
  });
}

themeButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Navegación privada o almacenamiento bloqueado: el tema dura solo esta visita.
    }
    syncThemeButtons();
    track("theme_switch", { to: next });
  }),
);
syncThemeButtons();

// ── Menú móvil (<dialog> nativo: foco atrapado y Esc de serie) ──────────────────────────────────
const menu = document.querySelector<HTMLDialogElement>("[data-menu]");

function closeMenu() {
  if (menu?.open) menu.close();
}

document.querySelector("[data-menu-open]")?.addEventListener("click", () => {
  menu?.showModal();
  lenis?.stop();
});
document.querySelector("[data-menu-close]")?.addEventListener("click", closeMenu);
menu?.addEventListener("close", () => lenis?.start());

// ── Selector de idioma (<details>): se cierra al pulsar fuera o con Esc ─────────────────────────
const langSwitch = document.querySelector<HTMLDetailsElement>("[data-lang-switch]");
document.addEventListener("click", (event) => {
  if (langSwitch?.open && !langSwitch.contains(event.target as Node)) langSwitch.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && langSwitch?.open) {
    langSwitch.open = false;
    langSwitch.querySelector("summary")?.focus();
  }
});

// ── Analítica declarativa: data-track="evento" + data-track-<prop>="valor" ──────────────────────
document.addEventListener("click", (event) => {
  const el = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
  if (!el?.dataset.track) return;
  const props: Record<string, string> = {};
  for (const [key, value] of Object.entries(el.dataset)) {
    if (key.startsWith("track") && key !== "track" && value) {
      props[key.slice(5).toLowerCase()] = value;
    }
  }
  if (isAnalyticsEvent(el.dataset.track)) track(el.dataset.track, props);
});

// Enlaces a otros sitios: evento uniforme, además del CTA específico cuando corresponda (p. ej. Polar).
document.addEventListener("click", (event) => {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;
  const url = new URL(link.href, location.href);
  if ((url.protocol === "http:" || url.protocol === "https:") && url.host !== location.host) {
    track("outbound", { host: url.host });
  }
});

document.querySelectorAll<HTMLDetailsElement>("details.faq-item").forEach((item) =>
  item.addEventListener("toggle", () => {
    if (item.open) track("faq_open", { id: item.dataset.faqId ?? "" });
  }),
);

// ── Formulario de aviso: mejora progresiva sin cargar un runtime de React en el hero ───────────
const MIN_FILL_MS = 3000;
document.querySelectorAll<HTMLFormElement>("[data-notify-form]").forEach((form) => {
  const mountedAt = Date.now();
  const status = form.querySelector<HTMLElement>("[data-notify-status]");
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = form.querySelector<HTMLElement>("[data-submit-label]");
  const idleLabel = submitLabel?.textContent ?? "";

  const setStatus = (message: string, error = false) => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("border-danger", error);
    status.classList.toggle("text-danger", error);
    status.classList.toggle("border-success", !error && Boolean(message));
    status.classList.toggle("border-transparent", !message);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const input = form.elements.namedItem("email") as HTMLInputElement | null;
    if (!input?.validity.valid || !email) {
      input?.setAttribute("aria-invalid", "true");
      setStatus(form.dataset.messageInvalid ?? "", true);
      input?.focus();
      return;
    }
    input.removeAttribute("aria-invalid");

    if (data.get("website") || Date.now() - mountedAt < MIN_FILL_MS) {
      setStatus(form.dataset.messageSuccess ?? "");
      return;
    }
    const action = form.dataset.action;
    if (!action) {
      setStatus(form.dataset.messageNotConfigured ?? "", true);
      return;
    }

    if (button) button.disabled = true;
    if (submitLabel) submitLabel.textContent = form.dataset.messageSubmitting ?? idleLabel;
    button?.setAttribute("aria-busy", "true");
    setStatus(form.dataset.messageSubmitting ?? "");
    try {
      await fetch(action, { method: "POST", body: data, mode: "no-cors" });
      setStatus(form.dataset.messageSuccess ?? "");
      form.reset();
      track("notify_submit", { location: form.dataset.location ?? "unknown" });
    } catch {
      setStatus(form.dataset.messageError ?? "", true);
    } finally {
      if (button) button.disabled = false;
      if (submitLabel) submitLabel.textContent = idleLabel;
      button?.removeAttribute("aria-busy");
    }
  });
});
