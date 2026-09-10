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

### AÑADIR SUITE DE PRUEBAS E2E Y QA CON PLAYWRIGHT, CI Y CORRECCIONES DE ACCESIBILIDAD

- **Fecha / Date:** 2026-09-10
- **Commit:** `update | web: añadir suite de pruebas e2e y qa con playwright, ci y correcciones de accesibilidad`
- **Tipo / Type:** update

**ES**

- Añadir una suite de pruebas completa con una sola configuracion de
  Playwright: interaccion en Chromium, Firefox y WebKit de 375 a 1920 px, SEO
  y analitica, accesibilidad con axe-core sobre las 24 rutas por tema y
  tamaño, y regresion visual. Cada ejecucion levanta su propio build de
  preview y nunca toca los servicios reales de analitica ni del formulario.
- Ejecutar la regresion visual y WebKit dentro de la imagen oficial de
  Playwright para que las capturas no dependan de la maquina.
- Añadir integracion continua en GitHub Actions: lint, formato, `check`,
  build, validacion de HTML, SEO y peso, auditoria de dependencias,
  Playwright, Lighthouse y comprobacion de enlaces rotos; y `dependabot` para
  actualizar dependencias y acciones cada semana.
- Añadir comprobaciones de HTML (`html-validate`) y de enlaces (`lychee`)
  sobre la web ya construida, y fijar la configuracion de Prettier.
- Actualizar las guias de commit (`AGENTS.md` y `.docs/commit-guidelines.md`):
  el cuerpo del commit es una lista de Markdown no numerada y el titulo y el
  cuerpo se muestran en bloques de codigo separados.
- Corregir varios detalles de accesibilidad y comportamiento que detectan las
  pruebas: los botones no envian sin querer el formulario que los contiene, el
  error del formulario "avisame" se anuncia como texto en lugar de una burbuja
  del navegador, la tabla comparativa se puede desplazar con el teclado, y el
  tema y el menu ocultan sus botones cuando no hay JavaScript.
- Documentar en `README.md` como ejecutar las pruebas, la QA y la CI.

**EN**

- Add a full test suite from a single Playwright config: interaction on
  Chromium, Firefox and WebKit from 375 to 1920 px, SEO and analytics,
  accessibility with axe-core across the 24 routes per theme and size, and
  visual regression. Each run builds its own preview and never touches the
  real analytics or form services.
- Run visual regression and WebKit inside the official Playwright image so the
  screenshots do not depend on the machine.
- Add continuous integration on GitHub Actions: lint, format, `check`, build,
  HTML validation, SEO and size budgets, dependency audit, Playwright,
  Lighthouse and broken-link checking; plus `dependabot` to update
  dependencies and actions weekly.
- Add HTML (`html-validate`) and link (`lychee`) checks over the built site,
  and pin the Prettier configuration.
- Update the commit guides (`AGENTS.md` and `.docs/commit-guidelines.md`): the
  commit body is an unordered Markdown list and the title and body are shown in
  separate code blocks.
- Fix several accessibility and behaviour issues the tests catch: buttons no
  longer submit their surrounding form by accident, the "notify me" form error
  is announced as text instead of a browser bubble, the comparison table can
  be scrolled with the keyboard, and the theme and menu hide their buttons
  when JavaScript is off.
- Document in `README.md` how to run the tests, QA and CI.

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
