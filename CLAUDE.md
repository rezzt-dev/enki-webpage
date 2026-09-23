# CLAUDE.md

El contenido real esta en [`AGENTS.md`](AGENTS.md). Este fichero es solo un
alias para los agentes que buscan `CLAUDE.md`.

**Ambos ficheros existen unicamente para que commits, pull requests y merges
lean como una extension directa de [`changelog.md`](changelog.md)**, con el
mismo criterio que sigue `enki-project` en `.docs/commit-guidelines.md` y
`.docs/pr-merge-release-guidelines.md`.

Resumen de la regla: siempre que se pida el titulo y la descripcion de un
commit hay que (1) redactar el mensaje segun el formato de commit y (2)
añadir, en la misma respuesta, una seccion nueva a
[`changelog.md`](changelog.md) con sus puntos agrupados por categoria
(Añadido/Cambios/Corregido/Eliminado/Seguridad, en castellano e ingles). Al
abrir una pull request o hacer un merge, el titulo y la descripcion se
extraen literalmente de esa misma entrada del changelog, sin inventar un
formato distinto por canal. Los detalles completos estan en
[`AGENTS.md`](AGENTS.md).
