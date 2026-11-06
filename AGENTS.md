# ENKI-WEBPAGE: REPOSITORY GUIDE

multilingual static marketing website for the enki desktop application. this guide covers the repository; nested agent instructions apply within their own folders.

## PROJECT OVERVIEW

| property | verified value |
| --- | --- |
| repository | `rezzt-dev/enki-webpage` |
| active source | `web/` |
| development base for this change | `beta-release` |
| remote default branch | `main` |
| version source | `web/package.json`: `0.1.0` |
| continuous integration | no tracked github actions workflows |

## TECHNOLOGY STACK

- `web/package.json`: `astro` ^7.3.2, `react` ^19.2.8, `tailwindcss` ^4.3.3, `typescript` ^6.0.3

## PROJECT STRUCTURE

- `LICENSE.md`
- `README.md`
- `changelog.md`
- `web/`

management documentation lives in `.docs/manager.md`, `.docs/-github-guides/` and `.docs/repo-audit-and-fix.md`. keep this file and `CLAUDE.md` consistent.

## BUILD, RUN AND TEST COMMANDS

from `web/`, the available package scripts are:

| command | implementation |
| --- | --- |
| `pnpm run dev` | `astro dev` |
| `pnpm run build` | `astro build` |
| `pnpm run preview` | `astro preview` |
| `pnpm run check` | `astro check` |
| `pnpm run check:seo` | `astro build && node scripts/check-seo.mjs` |
| `pnpm run check:size` | `astro build && node scripts/check-performance-budgets.mjs` |
| `pnpm run check:html` | `html-validate "dist/**/*.html"` |
| `pnpm run check:links` | `docker run --rm -v "$PWD":/input:ro -w /input lycheeverse/lychee:0.24.2 --config lychee.toml dist` |
| `pnpm run test` | `playwright test` |
| `pnpm run test:e2e` | `playwright test --project=chromium-* --project=firefox-* --project=webkit-* --project=static` |
| `pnpm run test:a11y` | `playwright test --project=a11y` |
| `pnpm run test:visual` | `sh scripts/playwright-docker.sh --project=visual` |
| `pnpm run test:docker` | `sh scripts/playwright-docker.sh` |
| `pnpm run lighthouse` | `lhci autorun` |
| `pnpm run lint` | `eslint .` |
| `pnpm run format` | `prettier --write .` |
| `pnpm run format:check` | `prettier --check .` |
| `pnpm run brand-assets` | `node scripts/generate-brand-assets.mjs` |

for application changes, run these checks from `web/`:

```bash
pnpm lint
pnpm format:check
pnpm check
pnpm build
```

## MODULE BOUNDARIES AND SITE CONTRACT

the application lives in `web/`. astro builds static pages; react islands are used where state is needed. the manifest requires pnpm and declares seo, html, link, size, accessibility, browser and visual checks separately. changing a command in these instructions does not run that check.

read the roadmap and current source before editing product copy or design. preserve the six-language route set and corresponding legal pages. font and brand resources are local. notification, analytics and consent behaviour must match the implementation and privacy text; browser tests intercept external services rather than submitting real subscriptions.

this repository has no independent installer or release line for the desktop product. `beta-release` is the base of this documentation change; a website pull request does not publish an enki application release.

## CODE STYLE AND ARCHITECTURAL DECISIONS

pnpm is required; preserve language parity, accessibility and performance budgets; tests must intercept notification services instead of submitting real subscriptions. follow the existing formatter and naming of the changed module. verify manifest versions when dependencies change.

## TESTING STRATEGY

documentation-only changes require `git diff --check`, existing-path checks and a review of the staged file list. run module checks for application changes, with disposable data. report unavailable tooling and failed checks; never claim a check passed without running it.

## SECURITY AND DEPLOYMENT

keep credentials, local configuration, signing material and user data out of commits. do not print secret values while auditing. inspect configuration names and code references instead.

existing legal and community files: `LICENSE.md`. when changing dependencies, permissions, storage or network services, review those files against the implementation. record missing policies as audit work; do not invent licence terms or ownership decisions.

deployment, signing, store publication, migrations against hosted databases and repository settings require their own explicit request. this documentation task prepares management instructions and pull requests.

## COMMON TASKS

1. read the relevant module and its nearest agent instructions
2. inspect the working tree and choose the smallest change that solves the request
3. update the affected documentation and changelog with evidence from the diff
4. run checks appropriate to the changed module and report their actual results
5. for git operations, follow the manager and the digest below

## EXISTING PROJECT CONVENTIONS

the following project-specific context is retained from the previous guide. paths are relative to the active module when stated. for git operations, the manager and final digest supersede previous workflow examples.

## AGENTS.MD

> instrucciones para cualquier agente de ia (o persona) que redacte el titulo
> y la descripcion de un **commit**, una **pull request** o un **commit de
> merge** en este repositorio, de forma que su contenido lea como una
> extension directa de [`changelog.md`](changelog.md) en lugar de un formato
> distinto por cada canal. sigue el mismo criterio que
> `.docs/-github-guides/commit-guide.md` y `.docs/-github-guides/pr-merge-guide.md` del
> repositorio de la app (`enki-project`), adaptado a que este es un
> repositorio de una web estatica: sin instaladores, sin tags `v<x.y.z>` y sin
> github releases propias.
>
> se aplica **siempre que se pida algo equivalente a**:
>
> _"sacame el titulo y la descripcion del commit con los cambios hechos desde
> el ultimo commit; fijate en los commits anteriores para mantener el
> formato"_
>
> y, de forma general, **cada vez que se vaya a crear un commit, abrir una
> pull request o hacer un merge en este repositorio**, se haya pedido de
> forma explicita o no.

---

## REGLA PRINCIPAL

cada vez que se pida el titulo y la descripcion de un commit:

1. redacta el mensaje de commit siguiendo **formato del commit** (abajo).
2. en la **misma respuesta**, añade una seccion nueva a
   [`changelog.md`](changelog.md) siguiendo **formato del changelog** (abajo).
3. muestra al usuario el resultado en **bloques de codigo separados**: uno
   para el titulo del commit, otro para el cuerpo del commit y otro para el
   fragmento que se ha añadido al changelog. nunca juntes el titulo y el
   cuerpo en el mismo bloque.

el changelog es la fuente que leen las personas usuarias y los
desarrolladores: nunca deben tener que abrir el commit para enterarse de que
ha cambiado. pull requests y commits de merge **no inventan su propio
formato**: reusan literalmente el contenido de la entrada de `changelog.md`
correspondiente (ver **pull requests y merge**, abajo).

---

## ADDITIONAL ENTRY-POINT CONVENTIONS

## CLAUDE.md

El contenido real esta en [`AGENTS.md`](AGENTS.md). Este fichero es solo un
alias para los agentes que buscan `CLAUDE.md`.

**Ambos ficheros existen unicamente para que commits, pull requests y merges
lean como una extension directa de [`changelog.md`](changelog.md)**, con el
mismo criterio que sigue `enki-project` en `.docs/-github-guides/commit-guide.md` y
`.docs/-github-guides/pr-merge-guide.md`.

Resumen de la regla: siempre que se pida el titulo y la descripcion de un
commit hay que (1) redactar el mensaje segun el formato de commit y (2)
añadir, en la misma respuesta, una seccion nueva a
[`changelog.md`](changelog.md) con sus puntos agrupados por categoria
(Añadido/Cambios/Corregido/Eliminado/Seguridad, en castellano e ingles). Al
abrir una pull request o hacer un merge, el titulo y la descripcion se
extraen literalmente de esa misma entrada del changelog, sin inventar un
formato distinto por canal. Los detalles completos estan en
[`AGENTS.md`](AGENTS.md).

## COMMIT, PR, MERGE & RELEASE GUIDELINES

read `.docs/manager.md` first, then the selected guide in `.docs/-github-guides/`. these files are versioned; this digest also works without opening them.

| request | guide |
| --- | --- |
| commit title, body and changelog | `commit-guide.md`, `changelog-guide.md` |
| pull request or merge | `pr-merge-guide.md`, `branching-guide.md` |
| version and release | `release-guide.md`, `changelog-guide.md` |
| permissions and sensitive data | `agent-rules.md` |

- inspect `git status`, both diffs and recent history before describing changes
- use `<prefix> | <imperative summary>` with `update`, `fix`, `hotfix`, `changes` or `changelog`; keep titles within 72 characters
- write commit bodies as 2 to 6 markdown bullets, one logical change per line, with literal paths in backticks
- never add authorship footers, automated attribution, signatures or generation notices; preserve the configured git identity
- update `changelog.md` under `## SIN PUBLICAR / UNRELEASED` in matching `### CASTELLANO` and `### ENGLISH` sections
- use the existing changelog category vocabulary and preserve language parity; describe only changes in the actual diff
- summarize pull requests in 1 to 3 bullets per category and language, at most 110 characters per bullet
- documentation and repository-management work targets `beta-release`; the remote default is `main`; do not silently promote development work to the default branch
- the authorization for a requested action remains valid throughout that task; creating a pull request includes pushing its branch, but does not authorize merging or publishing
- use merge commits when a merge is requested; never force-push, rewrite published history or remove branches without an explicit instruction
- releases use the approved version and an immutable tag on the verified release commit, with english notes from the closed changelog; do not create a release for documentation work
- deliver requested titles, bodies and changelog fragments in separate code blocks; report executed actions with their commit hash or pull request link
