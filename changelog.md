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

### ENLAZAR LAS DESCARGAS A LA BETA V0.2.0 PUBLICADA EN GITHUB

- **Fecha / Date:** 2026-09-23
- **Commit:** `update | web: enlazar las descargas a la beta v0.2.0 publicada en github`
- **Tipo / Type:** update

**ES**

#### AÑADIDO

- Añadir la sección de descargas con un botón por fichero y las sumas SHA-256
  de la beta 0.2.0 para Windows, macOS (Apple Silicon e Intel) y Linux,
  alojados en la release de `enki-project` en GitHub.
- Añadir un enlace a las notas de la versión en GitHub desde el hero y desde
  la sección de descargas.
- Añadir `downloadUrl` y `releaseNotes` al JSON-LD de la portada, apuntando a
  la misma release.

#### CAMBIOS

- `src/lib/release.ts` pasa a ser la fuente única de la versión, la fecha, la
  URL de la release y los cuatro ficheros con su tamaño y suma SHA-256, para
  no repetir esos datos en cada sección.
- Sustituir el formulario de lista de espera del hero por una tarjeta de
  descarga directa que baja a la sección de descargas; el formulario de
  avisos se mantiene solo ahí, bajo «Avísame de las nuevas versiones».
- Actualizar el eyebrow del hero, el estado de la sección de descargas y el
  pie de página de «Alfa 0.1» a «Beta 0.2 · v0.2.0» en los 6 idiomas
  soportados.
- Reescribir el CTA final y la primera pregunta de la FAQ para hablar de
  descargar la beta en vez de apuntarse a una lista de espera; quitar el
  texto específico de `es-419` sobre la lista de espera, que ya no aplica.
- Ampliar el aviso legal y la política de privacidad para indicar que el
  sitio enlaza a las versiones de prueba publicadas en GitHub y que descargar
  un fichero lleva fuera del sitio, bajo la política de privacidad de GitHub.
- Actualizar `e2e/access.spec.ts`, `e2e/notify-form.spec.ts` y
  `e2e/support/landing.ts` para probar la sección de descargas en vez de la
  lista de espera.

**EN**

#### ADDED

- Add the downloads section with a button per file and the SHA-256 checksums
  of beta 0.2.0 for Windows, macOS (Apple Silicon and Intel) and Linux,
  hosted on the `enki-project` release on GitHub.
- Add a link to the release notes on GitHub from the hero and from the
  downloads section.
- Add `downloadUrl` and `releaseNotes` to the home page's JSON-LD, pointing to
  the same release.

#### CHANGED

- `src/lib/release.ts` becomes the single source for the version, the date,
  the release URL and the four files with their size and SHA-256 checksum, so
  that data isn't repeated in every section.
- Replace the hero's waitlist form with a card that links straight to the
  download; the notify form stays only in the downloads section, under "Tell
  me about new versions".
- Update the hero eyebrow, the downloads section status and the footer from
  "Alpha 0.1" to "Beta 0.2 · v0.2.0" across the 6 supported languages.
- Rewrite the final CTA and the first FAQ question to talk about downloading
  the beta instead of joining a waitlist; remove the `es-419`-specific
  waitlist copy, which no longer applies.
- Expand the legal notice and the privacy policy to state that the site links
  to test versions published on GitHub and that downloading a file leaves the
  site, under GitHub's own privacy policy.
- Update `e2e/access.spec.ts`, `e2e/notify-form.spec.ts` and
  `e2e/support/landing.ts` to test the downloads section instead of the
  waitlist.

### ALINEAR LAS GUIAS DE COMMIT, PR Y MERGE CON ENKI-PROJECT

- **Fecha / Date:** 2026-09-23
- **Commit:** `changes | web: alinear las guias de commit, pr y merge con enki-project`
- **Tipo / Type:** changes

**ES**

#### AÑADIDO

- Añadir `.docs/commit-guidelines.md` y `.docs/pr-merge-release-guidelines.md`,
  copiados de `enki-project`, como guía compartida entre los repositorios del
  monorepo.

#### CAMBIOS

- Reescribir `AGENTS.md` y su alias `CLAUDE.md` para que el título y el
  cuerpo de cada commit, pull request y commit de merge sigan el mismo
  criterio que `.docs/commit-guidelines.md` y
  `.docs/pr-merge-release-guidelines.md`, adaptado a que esta web no publica
  tags `v<x.y.z>` ni GitHub Releases propias.
- Cambiar el formato de este `changelog.md`: cada entrada agrupa sus puntos
  en las categorías cerradas de Keep a Changelog (Añadido/Cambios/
  Corregido/Eliminado/Seguridad, en castellano e inglés) en vez de una lista
  plana, para que una pull request o un merge puedan reutilizar el bloque tal
  cual.
- Dejar de ignorar `.docs/` en `.gitignore` para poder versionar esas guías.

**EN**

#### ADDED

- Add `.docs/commit-guidelines.md` and `.docs/pr-merge-release-guidelines.md`,
  copied from `enki-project`, as a guide shared between the monorepo's
  repositories.

#### CHANGED

- Rewrite `AGENTS.md` and its `CLAUDE.md` alias so the title and body of
  every commit, pull request and merge commit follow the same criteria as
  `.docs/commit-guidelines.md` and `.docs/pr-merge-release-guidelines.md`,
  adapted to this website not publishing `v<x.y.z>` tags or its own GitHub
  Releases.
- Change the format of this `changelog.md`: each entry groups its points
  under Keep a Changelog's closed categories (Added/Changed/Fixed/Removed/
  Security, in Spanish and English) instead of a flat list, so a pull
  request or a merge can reuse the block as-is.
- Stop ignoring `.docs/` in `.gitignore` so those guides can be versioned.

### AÑADIR LAS CAPTURAS REALES DE LA APP POR IDIOMA Y TEMA CON ANIMACION DE CARGA

- **Fecha / Date:** 2026-09-10
- **Commit:** `update | web: añadir las capturas reales de la app por idioma y tema con animacion de carga`
- **Tipo / Type:** update

**ES**

- La portada y la seccion de modulos muestran ya capturas reales de Enki en
  lugar de los esquemas provisionales: panel, calendario, kanban, notas,
  recordatorios y sesiones.
- Cada captura aparece en el idioma de la pagina (español, español de
  Latinoamerica, ingles, ingles britanico, frances y aleman) y cambia al
  instante con el tema claro u oscuro. La del tema que no se ve no se
  descarga hasta que se cambia de tema.
- Mientras la imagen carga se ve un esqueleto animado de la app con una barra
  de progreso, y la captura aparece con un fundido suave. Sin JavaScript la
  imagen se ve directamente, y con movimiento reducido no hay animaciones.
- La captura del modulo Polar sigue siendo un esquema hasta que tenga imagen.

**EN**

- The home page and the modules section now show real Enki screenshots
  instead of the placeholder sketches: dashboard, calendar, kanban, notes,
  reminders and sessions.
- Each screenshot is shown in the page language (Spanish, Latin American
  Spanish, English, British English, French and German) and switches
  instantly with the light or dark theme. The one for the hidden theme is
  not downloaded until the theme is changed.
- While the image loads, an animated skeleton of the app with a progress bar
  is shown, and the screenshot fades in smoothly. Without JavaScript the
  image appears directly, and with reduced motion there are no animations.
- The Polar module screenshot remains a sketch until it has an image.

### COMPLETAR LOS DATOS LEGALES DEL TITULAR, EL COPYRIGHT DEL PIE Y ALINEAR LA CABECERA

- **Fecha / Date:** 2026-09-10
- **Commit:** `update | web: completar los datos legales del titular, el copyright del pie y alinear la cabecera`
- **Tipo / Type:** update

**ES**

- El aviso legal y la politica de privacidad ya muestran los datos del
  titular: nombre completo, NIF y domicilio a efectos de notificaciones
  (Calzada de Calatrava, Ciudad Real, España), como exige la LSSI-CE.
- La politica de privacidad indica que la web y la analitica se alojan en
  site.es, con un enlace a su pagina.
- Las paginas legales dejan de mostrar el aviso de "borrador" porque ya no
  queda ningun dato pendiente, en ningun idioma.
- El pie de pagina muestra ahora el copyright como
  "© 2026 REZZT.DEV / JUAN GARCÍA CAZALLAS. Todos los derechos reservados."
- La cabecera alinea a la misma altura el logo, los enlaces del menu, el
  selector de idioma, el boton de tema y el boton de acceso anticipado, y el
  logotipo "Enki" queda bien centrado.

**EN**

- The legal notice and the privacy policy now show the owner's details: full
  name, tax ID (NIF) and address for notices (Calzada de Calatrava, Ciudad
  Real, Spain), as required by Spanish law LSSI-CE.
- The privacy policy states that the website and the analytics are hosted by
  site.es, with a link to its page.
- The legal pages no longer show the "draft" warning, since no details are
  pending in any language.
- The footer now shows the copyright as
  "© 2026 REZZT.DEV / JUAN GARCÍA CAZALLAS. All rights reserved."
- The header lines up the logo, menu links, language switcher, theme button
  and early-access button at the same height, and the "Enki" wordmark is
  properly centred.

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
