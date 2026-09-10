import { release } from "./release";

/**
 * Datos del producto que aparecen en varias secciones. Fuente única: si cambian, se cambian aquí y no
 * en el copy (docs/roadmap/04 §12, "claims que envejecen").
 */
export const site = {
  name: "Enki",
  url: "https://enki.rezzt.dev",
  /** Fuente única: `release.ts`, sincronizada con `enki/Directory.Build.props`. */
  version: release.version,
  stage: release.stage,
  /** D17. */
  supportEmail: "enki.support@rezzt.dev",
  polarUrl: "https://polar.rezzt.dev/",
  authorName: "Juan García Cazallas",
  authorUrl: "https://rezzt.dev",
  githubUrl: "https://github.com/rezzt-dev",
  copyrightYear: 2026,
  /** Suelo conservador: `dotnet test --list-tests` descubrió 1.399 casos el 10/09/2026. */
  testCount: 1300,
  languageCount: 6,
  platformCount: 3,
  requiredAccountCount: 0,
} as const;
