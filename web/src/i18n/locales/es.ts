/**
 * Copy de la landing en español de España. Es el diccionario de referencia: su forma define el tipo
 * `Dictionary` y el resto de idiomas tiene que cumplirla.
 *
 * Reglas (docs/roadmap/04-contenido-y-copywriting.md): segunda persona, sin hype, cada afirmación
 * verificable en el código de la app; las mayúsculas las pone el CSS, no el texto.
 * Terminología igual que la app (Strings.es-ES.resx): "almacén" para el vault, "Sesiones", "Papelera".
 */
export const es = {
  meta: {
    title: "Enki — Tu segundo cerebro, en tu escritorio",
    description:
      "Enki es una app de segundo cerebro para escritorio con notas Markdown, Kanban, calendario y recordatorios. Sin cuenta, offline y con archivos locales.",
    ogAlt: "Enki: tu segundo cerebro, en tu escritorio.",
  },
  a11y: {
    skip: "Saltar al contenido",
    mainNav: "Navegación principal",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    language: "Idioma",
    themeLight: "Cambiar a tema claro",
    themeDark: "Cambiar a tema oscuro",
    home: "Enki, inicio",
    placeholder: "Captura pendiente",
  },
  nav: {
    modules: "Funciones",
    privacy: "Privacidad",
    compare: "Comparativa",
    faq: "Preguntas",
    cta: "Descargar",
  },
  hero: {
    eyebrow: "Beta 0.2 · Windows · macOS · Linux",
    titleLines: ["Tu segundo cerebro,", "en tu escritorio."],
    lead: "Notas, tareas, calendario y recordatorios en una sola ventana. Sin mezclarlo todo a la fuerza: cada cosa conserva su lugar y tú decides cómo conectarlas.",
    downloadTitle: "Ya disponible",
    downloadCta: "Descargar Enki",
    secondary: "Cómo funciona",
    facts: ["Sin cuenta", "Funciona sin conexión", "Tus notas son archivos Markdown"],
    screenAlt: "Panel de inicio de Enki con las tareas de hoy, las notas recientes y el tablero Kanban.",
  },
  notify: {
    label: "Tu email",
    placeholder: "tu@email.com",
    submit: "Avísame",
    submitting: "Enviando…",
    success: "Listo. Revisa tu correo y confirma la suscripción.",
    error: "No se ha podido enviar. Inténtalo de nuevo en unos minutos.",
    invalid: "Escribe un email válido.",
    consent:
      "Solo te escribiremos cuando haya una versión nueva. Puedes darte de baja cuando quieras. Más información en la {link}.",
    consentLink: "política de privacidad",
    notConfigured: "El formulario aún no está conectado (falta PUBLIC_BUTTONDOWN_USER).",
  },
  problem: {
    eyebrow: "El problema",
    title: "Cinco apps para saber qué hacer hoy.",
    lead: "Las notas en una app, las tareas en otra, el calendario en una tercera y los recordatorios en una cuarta. Cada una con su cuenta, su nube y su forma de pensar.",
    apps: ["Notas", "Tareas", "Calendario", "Recordatorios", "Proyectos"],
    resolution:
      "Enki las reúne en una sola ventana. Cada módulo funciona por su cuenta y gana sentido cuando se cruza con los demás.",
  },
  pillars: {
    eyebrow: "Principios",
    title: "Hecho con cuatro reglas.",
    items: [
      {
        icon: "folder-outline",
        title: "Tus datos son tuyos",
        body: "Tus notas son archivos Markdown en una carpeta que eliges tú. Sin formatos propietarios ni bloqueos.",
      },
      {
        icon: "hub-outline",
        title: "Conectado, no amontonado",
        body: "Cada módulo vive solo, pero una nota, una tarea y una fecha pueden apuntar a lo mismo.",
      },
      {
        icon: "do-not-disturb-on-outline",
        title: "Sin distracciones",
        body: "Interfaz monocroma, sin gamificación, sin rachas que se reinician y sin avisos constantes.",
      },
      {
        icon: "wifi-off",
        title: "Funciona sin internet",
        body: "Notas, Kanban, calendario y recordatorios funcionan offline. La nube es opcional, nunca un requisito.",
      },
    ],
  },
  modules: {
    eyebrow: "Funciones",
    title: "Todo lo que necesitas, en su sitio.",
    lead: "Seis módulos que funcionan por separado y se entienden entre sí.",
    items: [
      {
        id: "notes",
        label: "Notas",
        title: "Notas que son tuyas.",
        body: "Un almacén de notas Markdown que vive en tu disco, con carpetas, etiquetas y enlaces entre notas.",
        points: [
          "Enlaces [[wikilinks]] que se reescriben al renombrar una nota",
          "Pestañas, esquema, backlinks y estadísticas de cada nota",
          "Notas diarias, modo zen y exportación a HTML",
          "Búsqueda de texto completo en todo el almacén",
        ],
        screenAlt: "Editor de notas de Enki con pestañas, la nota abierta y el panel de enlaces.",
      },
      {
        id: "kanban",
        label: "Kanban",
        title: "Un tablero que no depende de nadie.",
        body: "Tareas locales con columnas, prioridades, fechas límite, etiquetas y subtareas.",
        points: [
          "Arrastra tarjetas entre columnas",
          "Vincula cada tarjeta a una nota del almacén",
          "Archiva lo completado sin perderlo",
          "Recupera lo borrado desde la papelera",
        ],
        screenAlt: "Tablero Kanban de Enki con columnas de tareas pendientes, en curso y hechas.",
      },
      {
        id: "calendar",
        label: "Calendario",
        title: "Todo lo que tiene fecha, en un solo sitio.",
        body: "Las tarjetas del Kanban, las tareas de Polar y tus recordatorios, en una vista unificada.",
        points: [
          "Vistas de mes, semana, día y agenda",
          "Arrastra un elemento y cambia su fecha real",
          "Capas por origen y filtros por prioridad o etiqueta",
          "Crea un recordatorio o una tarjeta desde un hueco vacío",
        ],
        screenAlt: "Vista semanal del calendario de Enki con tarjetas del Kanban y recordatorios juntos.",
      },
      {
        id: "reminders",
        label: "Recordatorios",
        title: "Avisos que llegan cuando toca.",
        body: "Recordatorios independientes con fecha, hora y recurrencia.",
        points: [
          "Notificaciones del sistema al vencer",
          "Bandeja de vencimientos siempre a mano",
          "Horario de no molestar",
          "Se sincronizan con Polar si lo vinculas",
        ],
        screenAlt: "Lista de recordatorios de Enki agrupados por fecha.",
      },
      {
        id: "sessions",
        label: "Sesiones",
        title: "Un espacio para cada proyecto.",
        body: "Subespacios de notas para una tesis, un viaje o un producto, cada uno con su grafo de relaciones.",
        points: [
          "Grafo visual de notas y enlaces",
          "Enlaces manuales entre notas desde el propio grafo",
          "Protección con contraseña",
          "Acotan lo que ves sin borrar el resto",
        ],
        screenAlt: "Grafo de una sesión de Enki: notas como nodos unidas por sus enlaces.",
      },
      {
        id: "polar",
        label: "Polar",
        title: "Tus tareas, también en el móvil.",
        body: "Tareas sincronizadas con Polar, la app Android hermana de Enki. Es opcional: sin vincularla, Enki funciona igual.",
        points: [
          "Listas, prioridades, recurrencia y subtareas",
          "Funciona sin conexión y sincroniza al volver",
          "Cadenas de tareas que dependen unas de otras",
          "Aparecen en el calendario junto al resto",
        ],
        screenAlt: "App Polar para Android mostrando una lista de tareas.",
      },
    ],
  },
  connections: {
    eyebrow: "Integraciones",
    title: "Conectado, no amontonado.",
    lead: "Los módulos no copian datos entre sí: trabajan sobre el mismo. Lo que cambias en un sitio ya está cambiado en todos.",
    nodes: {
      notes: "Notas",
      kanban: "Kanban",
      polar: "Polar",
      reminders: "Recordatorios",
      calendar: "Calendario",
      today: "Hoy",
      trash: "Papelera",
    },
    items: [
      {
        title: "Nota y tarjeta",
        body: "Vincula una tarjeta del Kanban a una nota. Si renombras la nota, la tarjeta sigue apuntando a ella.",
      },
      {
        title: "Calendario",
        body: "Arrastra una tarea en el calendario y su fecha cambia en el tablero, porque es la misma tarea.",
      },
      {
        title: "Hoy",
        body: "El panel de inicio reúne lo que vence hoy en el Kanban, en Polar y en tus recordatorios.",
      },
      { title: "Papelera", body: "Notas, tarjetas, archivos y recordatorios se recuperan desde una sola pantalla." },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos y a trabajar.",
    steps: [
      {
        title: "Elige idioma y carpeta",
        body: "La primera vez, Enki te pide un idioma y una carpeta para tu almacén: una nueva o una que ya tengas.",
      },
      {
        title: "Escribe y planifica",
        body: "Crea notas, tarjetas y recordatorios. Enlázalos entre sí cuando tenga sentido, no antes.",
      },
      {
        title: "Conecta, si quieres",
        body: "Vincula Polar para llevar tus tareas al móvil. Si no, todo sigue funcionando en local.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacidad",
    title: "Tus archivos, en tu disco.",
    lead: "Enki no guarda tus notas en ningún servidor. Viven en una carpeta normal que puedes abrir, copiar o respaldar como quieras.",
    treeLabel: "Ejemplo de carpeta de un almacén de Enki",
    tree: [
      "mi-almacen/",
      "├── Bienvenida.md",
      "├── diario/",
      "│   └── 2026-09-10.md",
      "├── proyectos/",
      "│   ├── tesis.md",
      "│   └── viaje-a-lisboa.md",
      "├── .sessions/",
      "└── .trash/",
    ],
    points: [
      {
        icon: "person-off-outline",
        title: "Sin cuenta",
        body: "No hay registro. Abres la app, eliges una carpeta y empiezas.",
      },
      {
        icon: "wifi-off",
        title: "Sin conexión",
        body: "Todo el núcleo funciona offline. Polar, la parte en la nube, es opcional.",
      },
      {
        icon: "description-outline",
        title: "Archivos abiertos",
        body: "Cada nota es un .md que puedes abrir con cualquier editor.",
      },
      {
        icon: "database-outline",
        title: "Escritura segura",
        body: "Las notas se guardan de forma atómica: nunca quedan escritas a medias.",
      },
      {
        icon: "lock-outline",
        title: "Sesiones cifradas",
        body: "Protege una sesión con contraseña y su contenido se cifra con AES-GCM.",
      },
      { icon: "shield-outline", title: "Sin telemetría", body: "Enki no envía datos de uso a ningún servidor." },
    ],
  },
  compare: {
    eyebrow: "Comparativa",
    title: "Enki frente a lo que ya usas.",
    lead: "Cada herramienta tiene su enfoque. Así se compara Enki en lo que más importa para el uso personal.",
    feature: "Función",
    values: { yes: "Sí", no: "No", plugin: "Con plugins", partial: "Parcial" },
    rows: {
      markdown: "Notas en archivos Markdown en tu disco",
      noAccount: "Funciona sin crear una cuenta",
      offline: "Funciona sin conexión",
      allInOne: "Notas, tareas y calendario en la misma app",
      kanban: "Tablero Kanban",
      graph: "Grafo visual de notas",
      teams: "Colaboración en equipo",
    },
    teamsNote: "Enki es para una sola persona, a propósito.",
    note: "Funciones incluidas sin plugins ni integraciones de terceros, según la información pública de cada producto en septiembre de 2026.",
    trademarks: "Obsidian, Notion y Todoist son marcas de sus respectivos propietarios.",
  },
  useCases: {
    eyebrow: "Para quién",
    title: "Para una sola persona: tú.",
    lead: "Enki no es una suite colaborativa ni un SaaS. Es un espacio privado para quien quiere tenerlo todo conectado y a mano.",
    items: [
      {
        icon: "psychology-outline",
        title: "Un segundo cerebro",
        body: "Notas enlazadas al estilo Zettelkasten, con backlinks y grafo.",
      },
      {
        icon: "school-outline",
        title: "Un proyecto aislado",
        body: "Una tesis, un viaje o un producto en su propia sesión.",
      },
      {
        icon: "today-outline",
        title: "El día a día",
        body: "Tareas, fechas límite y recordatorios en un calendario que lo reúne todo.",
      },
      {
        icon: "wifi-off",
        title: "Trabajo sin conexión",
        body: "Para trabajar sin internet o con información que no debe salir de tu equipo.",
      },
    ],
  },
  desktop: {
    eyebrow: "Escritorio",
    title: "Hecho para el teclado.",
    lead: "Enki es una app de escritorio de verdad: atajos para todo, pestañas, temas y zoom.",
    shortcuts: [
      { keys: ["Ctrl", "P"], label: "Saltar a cualquier nota" },
      { keys: ["Ctrl", "Shift", "F"], label: "Buscar en todo el almacén" },
      { keys: ["Ctrl", "Shift", "K"], label: "Paleta de comandos" },
      { keys: ["Ctrl", "Shift", "N"], label: "Nota rápida" },
      { keys: ["Ctrl", "Shift", "Enter"], label: "Modo zen" },
      { keys: ["Ctrl", "+"], label: "Ampliar la interfaz" },
    ],
    extras: [
      { icon: "keyboard-outline", title: "Atajos a tu medida", body: "Cambia cualquier atajo desde Ajustes." },
      { icon: "palette-outline", title: "Temas", body: "Claro, oscuro o uno tuyo con el editor de temas." },
      { icon: "zoom-in", title: "Zoom de 50 a 200 %", body: "Escala toda la interfaz, no solo el texto." },
      { icon: "delete-outline", title: "Papelera para todo", body: "Nada se borra del todo sin que lo confirmes." },
    ],
  },
  facts: {
    eyebrow: "En cifras",
    title: "Hechos, no promesas.",
    items: [
      { label: "idiomas de interfaz" },
      { label: "sistemas operativos" },
      { label: "cuentas obligatorias" },
      { label: "pruebas automáticas" },
    ],
  },
  polarBand: {
    eyebrow: "Ecosistema",
    title: "¿Y en el móvil? Polar.",
    body: "Polar es la app de tareas para Android que se sincroniza con Enki. Es opcional: vincúlala solo si quieres llevar tus tareas contigo.",
    cta: "Conocer Polar",
  },
  access: {
    eyebrow: "Descargas",
    title: "Enki está en beta.",
    lead: "Ya puedes descargar Enki para Windows, macOS y Linux. Es una beta: sirve para el día a día, pero todavía puede tener errores. Si encuentras alguno, escríbenos.",
    status: "Beta pública",
    download: "Descargar",
    downloadLabel: "Descargar Enki {version} para {os} {arch}",
    releaseNotes: "Notas de la versión en GitHub",
    unsigned:
      "Las builds aún no están firmadas por Microsoft ni por Apple: la primera vez que abras Enki, tu sistema puede pedirte que confirmes que quieres ejecutarlo.",
    checksums: "Sumas SHA-256",
    notifyTitle: "Avísame de las nuevas versiones",
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes.",
    items: [
      {
        q: "¿Dónde descargo Enki?",
        a: "En la sección de descargas de esta página o en la página de la versión en GitHub. La versión actual es la beta {version}, para Windows, macOS (Apple Silicon e Intel) y Linux.",
      },
      {
        q: "¿Necesito crear una cuenta?",
        a: "No. Enki funciona sin registro. Solo necesitas una cuenta si decides vincular Polar para sincronizar tareas con el móvil.",
      },
      {
        q: "¿Dónde se guardan mis notas?",
        a: "En una carpeta de tu disco que eliges tú, como archivos Markdown normales. Puedes abrirlas con cualquier editor y respaldarlas con cualquier herramienta.",
      },
      {
        q: "¿Funciona sin internet?",
        a: "Sí. Notas, Kanban, calendario y recordatorios funcionan sin conexión. Polar sincroniza cuando vuelve la conexión, y mientras tanto también funciona.",
      },
      {
        q: "¿Qué es Polar y lo necesito?",
        a: "Polar es una app de tareas para Android que se sincroniza con Enki a través de la nube. Es opcional: sin vincularla, Enki funciona exactamente igual.",
      },
      {
        q: "¿Sincroniza las notas entre dispositivos?",
        a: "Hoy no. Se sincronizan las tareas y los recordatorios de Polar. Como tus notas son archivos normales, puedes copiarlas con la herramienta que prefieras.",
      },
      {
        q: "¿Tiene inteligencia artificial?",
        a: "No. Enki no incluye ni se conecta a ningún motor de IA. Sus «habilidades» son plantillas de texto para usar con el asistente que tú elijas.",
      },
      {
        q: "¿En qué idiomas está?",
        a: "En español de España y de Latinoamérica, inglés de EE. UU. y del Reino Unido, alemán y francés. Puedes cambiar de idioma sin reiniciar la app.",
      },
      { q: "¿Es de código abierto?", a: "No. Enki es software propietario: todos los derechos reservados." },
      { q: "¿Cómo informo de un error o hago una sugerencia?", a: "Escríbenos a {email}. Leemos todos los mensajes." },
    ],
  },
  finalCta: {
    title: "Tu segundo cerebro, en tu escritorio.",
    lead: "Descarga la beta y pruébalo en tu equipo.",
    cta: "Descargar la beta",
  },
  footer: {
    tagline: "Tu segundo cerebro, en tu escritorio.",
    product: "Producto",
    ecosystem: "Ecosistema",
    legal: "Legal",
    contact: "Contacto",
    portfolio: "Portfolio del autor",
    rights: "Todos los derechos reservados.",
  },
  legal: {
    draft: "Borrador pendiente de revisión: faltan los datos marcados.",
    updated: "Última actualización",
    back: "Volver al inicio",
    pages: {
      notice: {
        title: "Aviso legal",
        description: "Información sobre el titular del sitio web de Enki.",
        sections: [
          {
            title: "Titular",
            body: [
              "En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE), se informa de que este sitio web pertenece a {holder}, con NIF {taxId} y domicilio a efectos de notificaciones en {address}.",
              "Contacto: {email}.",
            ],
          },
          {
            title: "Objeto",
            body: [
              "Este sitio presenta Enki, una aplicación de escritorio en desarrollo, enlaza a sus versiones de prueba publicadas en GitHub y permite apuntarse a una lista para recibir avisos de nuevas versiones.",
            ],
          },
          {
            title: "Propiedad intelectual",
            body: [
              "Enki, su código, su diseño y los contenidos de este sitio son propiedad del titular. Todos los derechos reservados. Obsidian, Notion y Todoist son marcas de sus respectivos propietarios.",
            ],
          },
          {
            title: "Responsabilidad",
            body: [
              "El titular no se hace responsable del uso que se haga de la información de este sitio ni de los contenidos de sitios de terceros enlazados desde él.",
            ],
          },
        ],
      },
      privacy: {
        title: "Política de privacidad",
        description: "Cómo trata el sitio web de Enki tus datos personales.",
        sections: [
          {
            title: "Responsable",
            body: ["{holder}, con NIF {taxId}. Contacto: {email}."],
          },
          {
            title: "Qué datos tratamos y para qué",
            body: [
              "Lista de avisos: si te apuntas, tratamos tu email para avisarte de nuevas versiones de Enki. Base jurídica: tu consentimiento, que puedes retirar en cualquier momento desde el enlace de baja de cada correo.",
              "Analítica: medimos visitas de forma agregada y sin cookies con Umami. No se guardan direcciones IP ni identificadores personales. Base jurídica: interés legítimo en saber qué partes del sitio se usan.",
              "Descargas: los archivos de Enki se descargan desde GitHub. Al pulsar un enlace de descarga sales de este sitio y se aplica la política de privacidad de GitHub.",
            ],
          },
          {
            title: "Encargados del tratamiento",
            body: ["Buttondown (gestión de la lista de avisos) y {hosting} (alojamiento del sitio y de la analítica)."],
          },
          {
            title: "Conservación",
            body: [
              "Tu email se conserva mientras sigas suscrito. Los datos agregados de analítica no permiten identificarte.",
            ],
          },
          {
            title: "Tus derechos",
            body: [
              "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {email}. Si crees que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
            ],
          },
          {
            title: "La app no es el sitio web",
            body: [
              "Esta política cubre solo este sitio. La app Enki guarda tus notas y datos en tu propio equipo y no envía datos de uso a ningún servidor.",
            ],
          },
        ],
      },
      cookies: {
        title: "Política de cookies",
        description: "Qué guarda el sitio web de Enki en tu navegador.",
        sections: [
          {
            title: "Cookies",
            body: ["Este sitio no usa cookies propias ni de terceros. La analítica (Umami) funciona sin cookies."],
          },
          {
            title: "Almacenamiento local",
            body: [
              "Si cambias el tema claro u oscuro, tu elección se guarda en el almacenamiento local de tu navegador (clave «enki-theme») para respetarla en la siguiente visita. No sale de tu navegador y puedes borrarla desde sus ajustes.",
            ],
          },
        ],
      },
    },
  },
  notFound: {
    title: "Página no encontrada",
    body: "La página que buscas no existe o ha cambiado de sitio.",
    back: "Volver al inicio",
  },
};

export type Dictionary = typeof es;
