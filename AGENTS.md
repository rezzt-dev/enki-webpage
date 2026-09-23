# AGENTS.md

> Instrucciones para cualquier agente de IA (o persona) que redacte el titulo
> y la descripcion de un **commit**, una **pull request** o un **commit de
> merge** en este repositorio, de forma que su contenido lea como una
> extension directa de [`changelog.md`](changelog.md) en lugar de un formato
> distinto por cada canal. Sigue el mismo criterio que
> `.docs/commit-guidelines.md` y `.docs/pr-merge-release-guidelines.md` del
> repositorio de la app (`enki-project`), adaptado a que este es un
> repositorio de una web estatica: sin instaladores, sin tags `v<x.y.z>` y sin
> GitHub Releases propias.
>
> Se aplica **siempre que se pida algo equivalente a**:
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

Cada vez que se pida el titulo y la descripcion de un commit:

1. Redacta el mensaje de commit siguiendo **FORMATO DEL COMMIT** (abajo).
2. En la **misma respuesta**, añade una seccion nueva a
   [`changelog.md`](changelog.md) siguiendo **FORMATO DEL CHANGELOG** (abajo).
3. Muestra al usuario el resultado en **bloques de codigo separados**: uno
   para el titulo del commit, otro para el cuerpo del commit y otro para el
   fragmento que se ha añadido al changelog. Nunca juntes el titulo y el
   cuerpo en el mismo bloque.

El changelog es la fuente que leen las personas usuarias y los
desarrolladores: nunca deben tener que abrir el commit para enterarse de que
ha cambiado. Pull requests y commits de merge **no inventan su propio
formato**: reusan literalmente el contenido de la entrada de `changelog.md`
correspondiente (ver **PULL REQUESTS Y MERGE**, abajo).

---

## FORMATO DEL COMMIT

### Titulo

```
<prefijo> | web: <resumen corto en imperativo>
```

El separador es siempre `|` (espacio, barra vertical, espacio). El
`<prefijo>` es siempre una de estas cinco palabras, en minusculas, y nunca se
combinan ni se inventan otras:

| prefijo       | cuando usarlo                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **update**    | trabajo normal hacia adelante: se añade o mejora una funcionalidad, contenido o documento existente. es el prefijo por defecto.       |
| **fix**       | se corrige un error o comportamiento incorrecto detectado durante el desarrollo, sin urgencia de publicacion inmediata.               |
| **hotfix**    | se corrige algo urgente que afecta a una version ya publicada o a un bloqueo critico. solo cuando la correccion es realmente urgente. |
| **changes**   | cambios estructurales o no funcionales: reorganizar carpetas, renombrar ficheros, tocar configuracion o tooling, dependencias.        |
| **changelog** | el unico proposito del commit es editar `changelog.md` (por ejemplo, al cerrar una version).                                          |

El resumen empieza siempre por `web:` para distinguir estos commits de los de
`enki-project` una vez el monorepo tenga varios paquetes.

Ejemplos de titulos correctos:

```
update | web: añadir vista previa de mapeo de columnas al asistente de importacion csv
fix | web: deteccion de duplicados fallando en filas con importes negativos
hotfix | web: fallo al iniciar cuando falta el archivo de perfil de importacion
changes | web: reorganizar la documentacion en la subcarpeta .docs
changelog | web: cerrar la seccion de changelog para la version 0.1
```

### Descripcion (cuerpo)

- El cuerpo es siempre **una lista de Markdown no numerada**: cada item
  empieza por `-`. Nunca se usan listas numeradas ni parrafos sueltos.
- Cada item es un bloque logico en imperativo, escrito como **una sola linea
  continua**, sin saltos de linea internos: deja que el cliente de git lo
  ajuste. No se dejan lineas en blanco entre items.
- Usa Markdown dentro de cada item: nombres de ficheros, rutas, comandos e
  identificadores siempre entre backticks.
- Explica el **que** y el **por que**, no el detalle linea a linea.
- Cierra con una linea en blanco y la linea de atribucion que corresponda al
  entorno.

---

## FORMATO DEL CHANGELOG

[`changelog.md`](changelog.md) esta escrito **en castellano y en ingles**, en
Markdown, y sigue a grandes rasgos
[Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

Reglas de los **titulos de cada entrada**:

- **SIEMPRE EN MAYUSCULAS.**
- **SIN ACENTOS** (la `ñ` se mantiene, no es un acento).

Cada commit añade una entrada bajo el encabezado
`## [SIN VERSIONAR] / UNRELEASED`, con la mas reciente arriba, con esta forma:

```markdown
### TITULO DE LA ENTRADA EN MAYUSCULAS SIN ACENTOS

- **Fecha / Date:** AAAA-MM-DD
- **Commit:** `prefijo | web: ...`
- **Tipo / Type:** update | fix | hotfix | changes | changelog

**ES**

#### <CATEGORIA>

- Punto de cambio explicado para una persona usuaria.

**EN**

#### <CATEGORY>

- Same change explained for an end user.
```

Dentro de **ES** y **EN**, los puntos se agrupan bajo las **categorias
cerradas** de Keep a Changelog, siempre en este orden y omitiendo la que no
tenga items:

| ES          | EN          | cuando usarla                                                          |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| **AÑADIDO** | **ADDED**   | algo nuevo que antes no existia.                                       |
| **CAMBIOS** | **CHANGED** | un comportamiento o contenido existente se modifica.                   |
| **CORREGIDO** | **FIXED** | se corrige un error.                                                   |
| **ELIMINADO** | **REMOVED** | se retira algo que existia.                                            |
| **SEGURIDAD** | **SECURITY** | cambios relacionados con vulnerabilidades o endurecimiento.            |

Si una entrada solo tiene una categoria, se omiten las demas (no hace falta
escribir un encabezado `####` vacio).

Al cerrar una version se renombra `[SIN VERSIONAR] / UNRELEASED` a
`## [X.Y.Z] / AAAA-MM-DD`, se abre encima una nueva seccion
`## [SIN VERSIONAR] / UNRELEASED` vacia, y ese cambio se registra en un commit
con prefijo `changelog`. Esta web no publica tags `v<x.y.z>` ni GitHub
Releases propias: a diferencia de `enki-project`, cerrar una version aqui es
solo un evento del changelog, no una release descargable.

---

## PULL REQUESTS Y MERGE

### Titulo de la PR

**PR de trabajo normal** (cualquier rama contra `beta-release`, o una PR que
no publica en `main`): mismo formato que el titulo de un commit, de esta
misma guia:

```
<prefijo> | web: <resumen corto en imperativo>
```

Si la PR agrupa varios commits, el resumen describe el conjunto, no cada
commit por separado.

**PR de publicacion** (`beta-release` → `main`): resume en un titulo el
conjunto de entradas de `## [SIN VERSIONAR] / UNRELEASED` (o de la version que
cierra) que aporta la PR:

```
release | web: <resumen corto en imperativo del conjunto>
```

### Descripcion de la PR

La descripcion es el bloque `**ES**` + `**EN**` de la entrada correspondiente
de `changelog.md` (la entrada que aporta esa PR, o todas las que agrupa),
pegado tal cual, con sus encabezados de categoria:

```
**ES**

#### <categoria>
- <cambio en una linea>

**EN**

#### <category>
- <same change, one line>
```

No se añaden parrafos sueltos, capturas de pantalla incrustadas como texto,
ni resumenes adicionales fuera de la lista: si hace falta contexto extra (por
ejemplo, capturas de un cambio visual), se añade **despues** de la lista,
nunca sustituyendola.

### Commit de merge

- GitHub genera el commit de merge a partir del titulo y la descripcion de la
  PR automaticamente. Si la PR cumple lo anterior, el commit de merge ya
  cumple este formato sin trabajo adicional.
- Usa siempre **"create a merge commit"** al fusionar (nunca squash ni
  rebase): el historial de commits individuales debe conservarse completo
  junto al resumen de la PR en el commit de merge.
- Si el merge se hace manualmente por git (`git merge --no-ff`), el mensaje
  del commit de merge se redacta a mano siguiendo el mismo titulo y el mismo
  cuerpo que llevaria la PR equivalente.
