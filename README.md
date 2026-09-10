# Enki — landing page

Sitio estático de [Enki](../README.md) (_tu segundo cerebro, en tu escritorio_), en `enki.rezzt.dev`.
El plan completo, las decisiones del autor y la definición de "hecho" de cada fase están en
[`docs/roadmap/00-GUIA-MAESTRA.md`](docs/roadmap/00-GUIA-MAESTRA.md): léela antes de tocar nada.

## Stack

Astro (salida estática) · islas React solo donde hay estado (`ModulesTabs`, `NotifyForm`) · Tailwind CSS v4
con los tokens de `enki/src/enki/styles/Colors.axaml` · Lenis · Material Symbols vía Iconify (inlinados en
build) · Space Grotesk y JetBrains Mono autoalojadas · **pnpm obligatorio**.

## Desarrollo

```bash
pnpm install          # nunca npm ni yarn
pnpm dev              # http://localhost:4321
pnpm build            # dist/ estático: 6 idiomas × (home + 3 legales) + 404
pnpm preview          # sirve dist/
pnpm lint && pnpm format:check && pnpm check
pnpm brand-assets     # regenera public/og/*.png y public/apple-touch-icon.png
```

Variables en `.env` (ver `.env.example`): `PUBLIC_UMAMI_*` (analítica, solo se carga en producción) y
`PUBLIC_BUTTONDOWN_USER` (formulario "avísame"; sin ella el formulario avisa de que no está conectado).

Para activar Umami, producción debe definir además `PUBLIC_DEPLOY_CONTEXT=production`. Esta variable no
se configura en desarrollo ni en despliegues de preview; así un preview no solicita el script aunque use
un build optimizado para producción.

## Estructura

| Ruta                        | Qué hay                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| `src/pages/[...path].astro` | Única ruta: genera todas las páginas a partir de `src/i18n/config.ts`                     |
| `src/i18n/locales/*.ts`     | Todo el copy. `es.ts` define la forma; `es-419.ts` y `en-gb.ts` solo declaran diferencias |
| `src/components/sections/`  | Una sección de la home por fichero, en el orden de `docs/roadmap/03 §2`                   |
| `src/components/ui/`        | Piezas del sistema de diseño (Button, Section, ScreenFrame, Icon…)                        |
| `src/lib/site.ts`           | Versión, email de soporte, cifras de "En cifras": fuente única                            |
| `src/lib/screens.ts`        | Registro de capturas de la app                                                            |
| `src/lib/compare.ts`        | Datos de la comparativa (verificar antes de publicar)                                     |

## Sustituir las capturas provisionales

Mientras no hay capturas reales, cada una se pinta como un esquema con su proporción definitiva. Para
poner la real: guarda el PNG a 2× en `src/assets/screens/`, impórtalo en `src/lib/screens.ts` y asígnalo
al campo `src` de su entrada. `ScreenFrame` generará AVIF/WebP automáticamente.

## Antes de publicar

Checklist completa en la guía maestra (§7). Imprescindibles: sin huecos `[[AUTOR: …]]` en las páginas
legales, comparativa verificada, cifras de `site.ts` recalculadas y capturas reales.

## Convención UTM

Los enlaces de campañas usan parámetros UTM estándar, siempre en minúsculas y `snake_case`:

```text
https://enki.rezzt.dev/?utm_source=github&utm_medium=referral&utm_campaign=alpha_launch&utm_content=readme
```

- `utm_source`: origen concreto (`github`, `polar`, `rezzt_dev`, `hacker_news`, `reddit`).
- `utm_medium`: tipo estable (`referral`, `social`, `email`).
- `utm_campaign`: iniciativa compartida entre canales (`alpha_launch`, `release_0_1`).
- `utm_content`: pieza o ubicación opcional (`readme`, `profile`, `launch_post`).

No se añaden UTM a enlaces internos ni se incluyen emails, nombres u otros datos personales en ningún
parámetro. Antes de publicar una campaña se registra su combinación en el documento o issue de campaña
para no fragmentar métricas con variantes ortográficas.

## Commits

Estilo del repo: `update | web: …`, `fix | web: …`.
