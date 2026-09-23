/**
 * Fuente única de la release pública (roadmap 06 §3.3).
 *
 * Los binarios se publican en GitHub Releases (`enki-project`). Al sacar una versión nueva solo se toca
 * este fichero: versión, fecha, página de la release y los assets con su tamaño y SHA-256 (los mismos
 * que genera `dist/` en el repositorio de la app). El resto de la web y el JSON-LD consumen estos datos.
 */
export type ReleasePlatform = "windows" | "macos" | "linux";

export interface ReleaseAsset {
  platform: ReleasePlatform;
  /** Nombre visible del sistema: no se traduce. */
  os: string;
  /** Arquitectura legible, sin traducir (`Apple Silicon`, `Intel`, `x64`). */
  arch: string;
  /** Identificador corto para analítica y tests. */
  id: string;
  file: string;
  url: string;
  format: string;
  size: string;
  sha256: string;
}

interface Release {
  version: string;
  stage: string;
  date: string | null;
  /** Página de la release en GitHub (notas de la versión y todos los assets). */
  url: string;
  assets: readonly ReleaseAsset[];
}

const repo = "https://github.com/rezzt-dev/enki-project";
const tag = "v0.2.0";
const download = (file: string) => `${repo}/releases/download/${tag}/${file}`;

export const release = {
  version: "0.2.0",
  stage: "beta",
  date: "2026-09-23",
  url: `${repo}/releases/tag/${tag}`,
  assets: [
    {
      platform: "windows",
      os: "Windows",
      arch: "x64",
      id: "windows-x64",
      file: "enki-0.2.0-win-x64-portable-DEV.zip",
      url: download("enki-0.2.0-win-x64-portable-DEV.zip"),
      format: "Portable .zip",
      size: "82 MB",
      sha256: "a0f23b06b871c4dd09a7f8cc837ccddd6c2d54d02bb5b775458760152a8426d9",
    },
    {
      platform: "macos",
      os: "macOS",
      arch: "Apple Silicon",
      id: "macos-arm64",
      file: "Enki-0.2.0-macos-arm64.zip",
      url: download("Enki-0.2.0-macos-arm64.zip"),
      format: ".zip",
      size: "57 MB",
      sha256: "abc63c00879816e814ba0c6d161e5e5e4f3762030c1e7c656e1d4991d04373f6",
    },
    {
      platform: "macos",
      os: "macOS",
      arch: "Intel",
      id: "macos-x86_64",
      file: "Enki-0.2.0-macos-x86_64.zip",
      url: download("Enki-0.2.0-macos-x86_64.zip"),
      format: ".zip",
      size: "58 MB",
      sha256: "d62d6c715b32ed89b2b3257672898db61ecadf51e61e3a5c91cfdb3d50af6632",
    },
    {
      platform: "linux",
      os: "Linux",
      arch: "x64",
      id: "linux-amd64",
      file: "enki-0.2.0-linux-amd64.tar.gz",
      url: download("enki-0.2.0-linux-amd64.tar.gz"),
      format: ".tar.gz",
      size: "55 MB",
      sha256: "8743913c24e6b00243154baacc4f98af310e181e09a23a21045353367c688cd0",
    },
  ],
} as const satisfies Release;

/** Icono de Material Symbols para cada sistema. */
export const platformIcon: Record<ReleasePlatform, string> = {
  windows: "desktop-windows-outline",
  macos: "laptop-mac-outline",
  linux: "terminal",
};
