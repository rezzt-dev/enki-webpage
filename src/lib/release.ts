/**
 * Fuente única de la release pública (roadmap 06 §3.3).
 *
 * Mientras D1 mantenga Enki en lista de espera, `assets` permanece vacío: no se publican URLs de
 * descarga ni datos de precio que todavía no existen. La primera release pública deberá completar
 * aquí los assets por plataforma; el resto de la web y el JSON-LD consumirán esos mismos datos.
 */
export type ReleasePlatform = "windows" | "macos" | "linux";

export interface ReleaseAsset {
  url: string;
  size: string;
  format: string;
  sha256?: string;
}

interface Release {
  version: string;
  stage: string;
  date: string | null;
  assets: Partial<Record<ReleasePlatform, ReleaseAsset>>;
}

export const release = {
  version: "0.1.0",
  stage: "alfa",
  date: null,
  assets: {},
} as const satisfies Release;
