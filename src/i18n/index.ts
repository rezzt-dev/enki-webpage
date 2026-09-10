import { es, type Dictionary } from "./locales/es";
import { esOverrides } from "./locales/es-419";
import { en } from "./locales/en";
import { enGbOverrides } from "./locales/en-gb";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import type { Locale } from "./config";

export type { Dictionary };

/** Parcial profundo: las variantes regionales solo declaran lo que cambia respecto a su idioma base. */
export type DeepPartial<T> = T extends readonly (infer U)[]
  ? (DeepPartial<U> | undefined)[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

/** Fusiona `override` sobre `base`. Los arrays se fusionan por índice (un hueco conserva el valor base). */
function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (override === undefined) return base;
  if (Array.isArray(base)) {
    const items = override as unknown[];
    return base.map((item: unknown, i) => deepMerge(item, items[i] as DeepPartial<unknown>)) as T;
  }
  if (base !== null && typeof base === "object") {
    const result = { ...base } as Record<string, unknown>;
    for (const [key, value] of Object.entries(override as object)) {
      result[key] = deepMerge((base as Record<string, unknown>)[key], value as DeepPartial<unknown>);
    }
    return result as T;
  }
  return override as T;
}

/** Aplica `fn` a cada texto del diccionario, respetando su forma. */
function mapStrings<T>(value: T, fn: (text: string) => string): T {
  if (typeof value === "string") return fn(value) as T;
  if (Array.isArray(value)) return value.map((item: unknown) => mapStrings(item, fn)) as T;
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v, fn)])) as T;
  }
  return value;
}

const NBSP = "\u00a0";
const NARROW_NBSP = "\u202f";

/**
 * Tipografía francesa: espacio fina de no separación antes de `; ? !`, de no separación antes de `:` y
 * dentro de las comillas latinas. Así fr.ts se escribe con espacios normales y la línea nunca se parte
 * delante de un signo.
 */
function frenchSpacing(text: string): string {
  return text
    .replace(/ ([;?!])/g, `${NARROW_NBSP}$1`)
    .replace(/ :/g, `${NBSP}:`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`);
}

/** En todos los idiomas: "200 %" nunca deja el signo solo en la línea siguiente. */
function percentSpacing(text: string): string {
  return text.replace(/ %/g, `${NBSP}%`);
}

const baseDictionaries: Record<Locale, Dictionary> = {
  es,
  "es-419": deepMerge(es, esOverrides),
  en,
  "en-gb": deepMerge(en, enGbOverrides),
  de,
  fr: mapStrings(fr, frenchSpacing),
};

const dictionaries = Object.fromEntries(
  Object.entries(baseDictionaries).map(([locale, dictionary]) => [locale, mapStrings(dictionary, percentSpacing)]),
) as Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Sustituye `{clave}` en un texto del diccionario. */
export function fill(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
