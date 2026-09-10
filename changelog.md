# CHANGELOG

Registro legible de todos los cambios del proyecto, una seccion por commit, para
no tener que abrir el historial de git. Los titulos de cada entrada van **en
mayusculas y sin acentos**. Todo el contenido esta en castellano e ingles.

Human-readable log of every change, one section per commit, so you never have to
open the git history. Entry titles are **uppercase and without accents**. All
content is bilingual (Spanish / English).

Formato y reglas / format and rules: [`AGENTS.md`](AGENTS.md).

---

## [SIN VERSIONAR] / UNRELEASED

### AÑADIR LICENCIA PROPIETARIA Y GUIAS DE COMMIT Y CHANGELOG

- **Fecha / Date:** 2026-09-10
- **Commit:** `update | web: añadir licencia propietaria y guias de commit y changelog`
- **Tipo / Type:** update

**ES**

- Añadir `LICENSE`: licencia propietaria bilingue (castellano e ingles) que
  reserva todos los derechos a rezzt.dev; ningun uso, copia, modificacion o
  distribucion esta permitido sin autorizacion previa por escrito.
- Añadir `AGENTS.md` y su alias `CLAUDE.md` con el formato obligatorio del
  titulo y el cuerpo de cada commit y la regla de registrar cada cambio en
  este changelog.
- Añadir este `changelog.md` como registro legible y bilingue del proyecto,
  una seccion por commit, para no tener que abrir el historial de git.
- Actualizar `README.md` para documentar la licencia y enlazar las guias de
  commit y el changelog.

**EN**

- Add `LICENSE`: a bilingual (Spanish / English) proprietary license that
  reserves all rights to rezzt.dev; no use, copying, modification or
  distribution is allowed without prior written permission.
- Add `AGENTS.md` and its `CLAUDE.md` alias with the mandatory format for the
  title and body of every commit and the rule to log every change in this
  changelog.
- Add this `changelog.md` as a human-readable bilingual project log, one
  section per commit, so you never have to open the git history.
- Update `README.md` to document the license and link the commit guides and
  the changelog.

### AÑADIR LANDING DE ENKI EN ASTRO CON I18N, DISEÑO Y CONTENIDO INICIAL

- **Fecha / Date:** 2026-09-10
- **Commit:** `update | web: añadir landing de enki en astro con i18n, diseño y contenido inicial`
- **Tipo / Type:** update

**ES**

- Configurar Astro en modo estatico con React, Tailwind CSS v4 y pnpm como
  gestor de dependencias obligatorio.
- Añadir el copy y las rutas de los 6 idiomas soportados (es, es-419, en, en-gb,
  fr, de) generados desde `src/i18n`.
- Construir el sistema de diseño y las secciones de la home: hero, problema,
  modulos, comparativa, precios, FAQ y mas.
- Cubrir accesibilidad y calidad: tests e2e con Playwright y axe, presupuestos
  de Lighthouse, ESLint y Prettier.
- Añadir scripts de generacion de activos de marca, comprobacion de SEO y
  presupuestos de rendimiento.

**EN**

- Set up Astro in static mode with React, Tailwind CSS v4 and pnpm as the
  mandatory package manager.
- Add the copy and routes for the 6 supported languages (es, es-419, en, en-gb,
  fr, de) generated from `src/i18n`.
- Build the design system and the home sections: hero, problem, modules,
  comparison, pricing, FAQ and more.
- Cover accessibility and quality: e2e tests with Playwright and axe, Lighthouse
  budgets, ESLint and Prettier.
- Add scripts for brand asset generation, SEO checks and performance budgets.
