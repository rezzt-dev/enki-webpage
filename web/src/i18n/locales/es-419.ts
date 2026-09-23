import type { DeepPartial } from "../index";
import type { Dictionary } from "./es";

/**
 * Español de Latinoamérica: solo lo que cambia respecto a `es` (España). Mismo criterio que
 * Strings.es-419.resx de la app ("Configuración" en vez de "Ajustes") y vocabulario común en la región
 * ("celular", "inscribirse").
 */
export const esOverrides: DeepPartial<Dictionary> = {
  modules: {
    items: [undefined, undefined, undefined, undefined, undefined, { title: "Tus tareas, también en el celular." }],
  },
  how: {
    steps: [
      undefined,
      undefined,
      { body: "Vincula Polar para llevar tus tareas al celular. Si no, todo sigue funcionando en local." },
    ],
  },
  desktop: {
    extras: [{ body: "Cambia cualquier atajo desde Configuración." }],
  },
  polarBand: { title: "¿Y en el celular? Polar." },
  faq: {
    items: [
      undefined,
      {
        a: "No. Enki funciona sin registro. Solo necesitas una cuenta si decides vincular Polar para sincronizar tareas con el celular.",
      },
    ],
  },
};
