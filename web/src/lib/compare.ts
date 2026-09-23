import type { Dictionary } from "@/i18n";

/**
 * Comparativa nominal (D14). Solo funciones incluidas de serie, sin plugins de terceros.
 *
 * ⚠ Verificar cada celda contra la información pública de cada producto antes de publicar y cada vez que
 * se actualice `verifiedAt`: una comparativa desfasada resta credibilidad y tiene riesgo legal.
 */
export type Mark = "yes" | "no" | "plugin" | "partial";

export const products = ["Enki", "Obsidian", "Notion", "Todoist"] as const;
export const verifiedAt = "2026-09-10";

export const compareRows: { key: keyof Dictionary["compare"]["rows"]; values: [Mark, Mark, Mark, Mark] }[] = [
  { key: "markdown", values: ["yes", "yes", "no", "no"] },
  { key: "noAccount", values: ["yes", "yes", "no", "no"] },
  { key: "offline", values: ["yes", "yes", "partial", "partial"] },
  { key: "allInOne", values: ["yes", "plugin", "yes", "no"] },
  { key: "kanban", values: ["yes", "plugin", "yes", "yes"] },
  { key: "graph", values: ["yes", "yes", "no", "no"] },
  { key: "teams", values: ["no", "partial", "yes", "yes"] },
];
