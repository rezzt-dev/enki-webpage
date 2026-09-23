import type { ImageMetadata } from "astro";
import type { Locale } from "@/i18n/config";

/**
 * Registro de capturas de la app. Las reales viven en `src/assets/screenshots/<locale>/<tema>/` como
 * WebP sin pérdida (una por idioma y tema). Las que aún no tienen captura (`file` ausente) se pintan
 * como un rectángulo esquemático con su proporción definitiva, así la maqueta no cambia de tamaño
 * (ni provoca CLS) cuando se sustituyan.
 *
 * Para poner una captura real: exporta `NN-nombre.webp` en cada `<locale>/<tema>/` y asigna
 * `file: "NN-nombre"`.
 */
export type ScreenKind = "dashboard" | "notes" | "kanban" | "calendar" | "reminders" | "graph" | "phone";
export type ScreenTheme = "dark" | "light";

export interface Screen {
  kind: ScreenKind;
  /** Proporción CSS (`ancho / alto`) del esquema mientras no hay captura. */
  aspect: string;
  /** Tamaño recomendado para la captura real, solo informativo. */
  size: string;
  /** Nombre base de la captura en `src/assets/screenshots/<locale>/<tema>/`. */
  file?: string;
}

export type ScreenId = "dashboard" | "notes" | "kanban" | "calendar" | "reminders" | "sessions" | "polar";

export const screens: Record<ScreenId, Screen> = {
  dashboard: { kind: "dashboard", aspect: "16 / 10", size: "2560×1600", file: "01-dashboard" },
  notes: { kind: "notes", aspect: "16 / 10", size: "2560×1600", file: "04-notes" },
  kanban: { kind: "kanban", aspect: "16 / 10", size: "2560×1600", file: "03-kanban" },
  calendar: { kind: "calendar", aspect: "16 / 10", size: "2560×1600", file: "02-calendar" },
  reminders: { kind: "reminders", aspect: "16 / 10", size: "2560×1600", file: "08-reminders" },
  sessions: { kind: "graph", aspect: "16 / 10", size: "2560×1600", file: "06-sessions" },
  polar: { kind: "phone", aspect: "9 / 19", size: "1080×2280" },
};

const files = import.meta.glob<{ default: ImageMetadata }>("/src/assets/screenshots/*/*/*.webp", { eager: true });

/** Captura de `screen` para el idioma y tema dados, o `undefined` si todavía no existe. */
export function screenSrc(screen: ScreenId, locale: Locale, theme: ScreenTheme): ImageMetadata | undefined {
  const file = screens[screen].file;
  if (!file) return undefined;
  return files[`/src/assets/screenshots/${locale}/${theme}/${file}.webp`]?.default;
}
