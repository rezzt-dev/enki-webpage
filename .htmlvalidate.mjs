/**
 * html-validate sobre la salida estática (`pnpm check:html`, docs/roadmap/08 §3.4). Parte del conjunto
 * recomendado; cada excepción lleva su motivo.
 */
export default {
  extends: ["html-validate:recommended"],
  elements: [
    "html5",
    {
      // Astro inserta `<style>astro-island,astro-slot{display:contents}</style>` junto a cada isla, dentro
      // del body. Es salida del framework y todos los navegadores la aplican: se admite como contenido de flujo.
      style: { flow: true },
    },
  ],
  rules: {
    // Estilos inline intencionados y acotados: proporción de cada captura (`aspect-ratio`), escalonado del
    // reveal (`--reveal-index`) y anchos de los esquemas provisionales. La CSP de 09 §3.3 ya necesita
    // `style-src 'unsafe-inline'` por `inlineStylesheets: "always"`.
    "no-inline-style": "off",
  },
};
