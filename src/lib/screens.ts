import type { ImageMetadata } from "astro";

/**
 * Registro de capturas de la app. Mientras no llegan las imágenes reales (assets A4), cada entrada se
 * pinta como un rectángulo esquemático con su proporción definitiva, así la maqueta no cambia de
 * tamaño (ni provoca CLS) cuando se sustituyan.
 *
 * Para poner una captura real: guarda el PNG a 2× en `src/assets/screens/`, impórtalo aquí y asígnalo a
 * `src`. `ScreenFrame` pasa solo a `<Picture>` (AVIF/WebP) en cuanto `src` existe.
 *
 *   import dashboard from "@/assets/screens/dashboard-dark.png";
 *   dashboard: { ..., src: dashboard },
 */
export type ScreenKind = "dashboard" | "notes" | "kanban" | "calendar" | "reminders" | "graph" | "phone";

export interface Screen {
  kind: ScreenKind;
  /** Proporción CSS (`ancho / alto`). */
  aspect: string;
  /** Tamaño recomendado para la captura real, solo informativo. */
  size: string;
  src?: ImageMetadata;
}

export type ScreenId = "dashboard" | "notes" | "kanban" | "calendar" | "reminders" | "sessions" | "polar";

export const screens: Record<ScreenId, Screen> = {
  dashboard: { kind: "dashboard", aspect: "16 / 10", size: "2560×1600" },
  notes: { kind: "notes", aspect: "16 / 10", size: "2560×1600" },
  kanban: { kind: "kanban", aspect: "16 / 10", size: "2560×1600" },
  calendar: { kind: "calendar", aspect: "16 / 10", size: "2560×1600" },
  reminders: { kind: "reminders", aspect: "16 / 10", size: "2560×1600" },
  sessions: { kind: "graph", aspect: "16 / 10", size: "2560×1600" },
  polar: { kind: "phone", aspect: "9 / 19", size: "1080×2280" },
};
