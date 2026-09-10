# AGENTS.md

> Este fichero (y su alias [`CLAUDE.md`](CLAUDE.md)) existe **unicamente** para
> que cualquier agente de IA genere **commits mas completos**, pensados para las
> personas usuarias y para desarrolladores con experiencia que necesitan
> entender un cambio sin abrir el diff. No define el estilo de codigo ni el
> flujo de desarrollo del proyecto: solo cubre **commits y changelog**.
>
> Se aplica **siempre que se pida algo equivalente a**:
>
> _"sacame el titulo y la descripcion del commit con los cambios hechos desde
> el ultimo commit; fijate en los commits anteriores para mantener el formato"_
>
> se haya pedido de forma explicita o no, y en general **cada vez que se vaya a
> crear un commit en este repositorio**.

---

## REGLA PRINCIPAL

Cada vez que se pida el titulo y la descripcion de un commit:

1. Redacta el mensaje de commit siguiendo **FORMATO DEL COMMIT** (abajo).
2. En la **misma respuesta**, añade una seccion nueva a
   [`changelog.md`](changelog.md) siguiendo **FORMATO DEL CHANGELOG** (abajo).
3. Muestra al usuario el resultado en **bloques de codigo separados**: uno para
   el titulo del commit, otro para el cuerpo del commit y otro para el fragmento
   que se ha añadido al changelog. Nunca juntes el titulo y el cuerpo en el
   mismo bloque.

El changelog es la fuente que leen las personas usuarias y los desarrolladores:
nunca deben tener que abrir el commit para enterarse de que ha cambiado.

---

## FORMATO DEL COMMIT

### Titulo

```
<prefijo> | <resumen corto en imperativo>
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

En este repositorio el resumen suele empezar por `web:`.

Ejemplos de titulos correctos:

```
update | web: añadir vista previa de mapeo de columnas al asistente de importacion csv
fix | web: deteccion de duplicados fallando en filas con importes negativos
hotfix | web: fallo al iniciar cuando falta el archivo de perfil de importacion
changes | web: reorganizar la documentacion en la subcarpeta .docs
changelog | web: cerrar la seccion de changelog para la version 0.1
```

### Descripcion (cuerpo)

- El cuerpo es siempre **una lista de Markdown no numerada**: cada item empieza
  por `-`. Nunca se usan listas numeradas ni parrafos sueltos.
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
Markdown.

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

- Punto de cambio explicado para una persona usuaria.
- ...

**EN**

- Same change explained for an end user.
- ...
```

Al cerrar una version se renombra `[SIN VERSIONAR] / UNRELEASED` a
`## [X.Y.Z] / AAAA-MM-DD`, se abre encima una nueva seccion
`## [SIN VERSIONAR] / UNRELEASED` vacia, y ese cambio se registra en un commit
con prefijo `changelog`.
