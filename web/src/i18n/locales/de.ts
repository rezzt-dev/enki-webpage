import type { Dictionary } from "./es";

/** Deutsch. Duzen und Terminologie wie in Strings.de-DE.resx („Tresor“, „Sitzungen“, „Papierkorb“). */
export const de: Dictionary = {
  meta: {
    title: "Enki — Dein zweites Gehirn, auf deinem Desktop",
    description:
      "Markdown-Notizen, Kanban, Kalender und Erinnerungen in einer Desktop-App. Ohne Konto, offline, und deine Notizen bleiben Dateien auf deiner Festplatte.",
    ogAlt: "Enki: Dein zweites Gehirn, auf deinem Desktop.",
  },
  a11y: {
    skip: "Zum Inhalt springen",
    mainNav: "Hauptnavigation",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    language: "Sprache",
    themeLight: "Zum hellen Design wechseln",
    themeDark: "Zum dunklen Design wechseln",
    home: "Enki, Startseite",
    placeholder: "Screenshot folgt",
  },
  nav: { modules: "Funktionen", privacy: "Datenschutz", compare: "Vergleich", faq: "FAQ", cta: "Herunterladen" },
  hero: {
    eyebrow: "Beta 0.2 · Windows · macOS · Linux",
    titleLines: ["Dein zweites Gehirn,", "auf deinem Desktop."],
    lead: "Notizen, Aufgaben, Kalender und Erinnerungen in einem einzigen Fenster. Nichts wird zusammengezwungen: Alles behält seinen Platz, und du entscheidest, wie es sich verbindet.",
    downloadTitle: "Jetzt verfügbar",
    downloadCta: "Enki herunterladen",
    secondary: "So funktioniert’s",
    facts: ["Kein Konto", "Funktioniert offline", "Deine Notizen sind Markdown-Dateien"],
    screenAlt: "Enkis Startseite mit den heutigen Aufgaben, den letzten Notizen und dem Kanban-Board.",
  },
  notify: {
    label: "Deine E-Mail",
    placeholder: "du@email.de",
    submit: "Benachrichtigen",
    submitting: "Wird gesendet …",
    success: "Fertig. Prüfe dein Postfach und bestätige das Abonnement.",
    error: "Das hat nicht geklappt. Versuch es in ein paar Minuten noch einmal.",
    invalid: "Gib eine gültige E-Mail-Adresse ein.",
    consent:
      "Wir schreiben dir nur, wenn es eine neue Version gibt. Du kannst dich jederzeit abmelden. Mehr in der {link}.",
    consentLink: "Datenschutzerklärung",
    notConfigured: "Das Formular ist noch nicht verbunden (PUBLIC_BUTTONDOWN_USER fehlt).",
  },
  problem: {
    eyebrow: "Das Problem",
    title: "Fünf Apps, um zu wissen, was heute ansteht.",
    lead: "Notizen in einer App, Aufgaben in einer anderen, der Kalender in einer dritten und Erinnerungen in einer vierten. Jede mit eigenem Konto, eigener Cloud und eigener Denkweise.",
    apps: ["Notizen", "Aufgaben", "Kalender", "Erinnerungen", "Projekte"],
    resolution:
      "Enki vereint sie in einem Fenster. Jedes Modul funktioniert für sich und ergibt mehr Sinn, sobald es auf die anderen trifft.",
  },
  pillars: {
    eyebrow: "Prinzipien",
    title: "Vier Regeln.",
    items: [
      {
        icon: "folder-outline",
        title: "Deine Daten gehören dir",
        body: "Deine Notizen sind Markdown-Dateien in einem Ordner, den du wählst. Keine proprietären Formate, kein Lock-in.",
      },
      {
        icon: "hub-outline",
        title: "Verbunden, nicht vollgestopft",
        body: "Jedes Modul steht für sich, aber eine Notiz, eine Aufgabe und ein Datum können auf dasselbe zeigen.",
      },
      {
        icon: "do-not-disturb-on-outline",
        title: "Keine Ablenkung",
        body: "Eine monochrome Oberfläche. Keine Gamification, keine Serien, die zurückgesetzt werden, keine ständigen Hinweise.",
      },
      {
        icon: "wifi-off",
        title: "Funktioniert ohne Internet",
        body: "Notizen, Kanban, Kalender und Erinnerungen funktionieren offline. Die Cloud ist optional, nie Voraussetzung.",
      },
    ],
  },
  modules: {
    eyebrow: "Funktionen",
    title: "Alles, was du brauchst, an seinem Platz.",
    lead: "Sechs Module, die für sich funktionieren und einander verstehen.",
    items: [
      {
        id: "notes",
        label: "Notizen",
        title: "Notizen, die dir gehören.",
        body: "Ein Tresor aus Markdown-Notizen auf deiner Festplatte, mit Ordnern, Tags und Links zwischen Notizen.",
        points: [
          "[[Wikilinks]], die sich beim Umbenennen einer Notiz anpassen",
          "Tabs, Gliederung, Backlinks und Statistiken für jede Notiz",
          "Tagesnotizen, Zen-Modus und HTML-Export",
          "Volltextsuche im gesamten Tresor",
        ],
        screenAlt: "Enkis Notizeditor mit Tabs, einer geöffneten Notiz und dem Link-Bereich.",
      },
      {
        id: "kanban",
        label: "Kanban",
        title: "Ein Board, das von niemandem abhängt.",
        body: "Lokale Aufgaben mit Spalten, Prioritäten, Fälligkeiten, Tags und Teilaufgaben.",
        points: [
          "Karten zwischen Spalten ziehen",
          "Jede Karte mit einer Notiz im Tresor verknüpfen",
          "Erledigtes archivieren, ohne es zu verlieren",
          "Gelöschtes aus dem Papierkorb wiederherstellen",
        ],
        screenAlt: "Enkis Kanban-Board mit den Spalten Offen, In Arbeit und Erledigt.",
      },
      {
        id: "calendar",
        label: "Kalender",
        title: "Alles mit Datum, an einem Ort.",
        body: "Deine Kanban-Karten, Polar-Aufgaben und Erinnerungen in einer gemeinsamen Ansicht.",
        points: [
          "Monats-, Wochen-, Tages- und Agendaansicht",
          "Einen Eintrag ziehen und sein echtes Datum ändern",
          "Ebenen nach Quelle, Filter nach Priorität oder Tag",
          "Erinnerungen oder Karten direkt in einem freien Feld anlegen",
        ],
        screenAlt: "Enkis Wochenansicht mit Kanban-Karten und Erinnerungen zusammen.",
      },
      {
        id: "reminders",
        label: "Erinnerungen",
        title: "Hinweise, die pünktlich kommen.",
        body: "Eigenständige Erinnerungen mit Datum, Uhrzeit und Wiederholung.",
        points: [
          "Systembenachrichtigungen bei Fälligkeit",
          "Eine Liste fälliger Einträge, immer griffbereit",
          "Ruhezeiten mit „Nicht stören“",
          "Synchronisiert mit Polar, wenn du es verknüpfst",
        ],
        screenAlt: "Enkis Erinnerungsliste, nach Datum gruppiert.",
      },
      {
        id: "sessions",
        label: "Sitzungen",
        title: "Ein Raum für jedes Projekt.",
        body: "Notizbereiche für eine Abschlussarbeit, eine Reise oder ein Produkt, jeweils mit eigenem Beziehungsgraphen.",
        points: [
          "Visueller Graph aus Notizen und Links",
          "Manuelle Links direkt im Graphen ziehen",
          "Passwortschutz",
          "Sie grenzen ein, was du siehst, ohne den Rest zu löschen",
        ],
        screenAlt: "Graph einer Enki-Sitzung: Notizen als Knoten, verbunden durch ihre Links.",
      },
      {
        id: "polar",
        label: "Polar",
        title: "Deine Aufgaben, auch auf dem Handy.",
        body: "Aufgaben, synchronisiert mit Polar, Enkis Schwester-App für Android. Optional: Ohne sie funktioniert Enki genauso.",
        points: [
          "Listen, Prioritäten, Wiederholung und Teilaufgaben",
          "Funktioniert offline und synchronisiert, sobald du wieder online bist",
          "Aufgabenketten, die voneinander abhängen",
          "Sie erscheinen im Kalender neben allem anderen",
        ],
        screenAlt: "Die Android-App Polar mit einer Aufgabenliste.",
      },
    ],
  },
  connections: {
    eyebrow: "Integrationen",
    title: "Verbunden, nicht vollgestopft.",
    lead: "Die Module kopieren keine Daten untereinander: Sie arbeiten mit denselben. Was du an einer Stelle änderst, ist überall geändert.",
    nodes: {
      notes: "Notizen",
      kanban: "Kanban",
      polar: "Polar",
      reminders: "Erinnerungen",
      calendar: "Kalender",
      today: "Heute",
      trash: "Papierkorb",
    },
    items: [
      {
        title: "Notiz und Karte",
        body: "Verknüpfe eine Kanban-Karte mit einer Notiz. Benennst du die Notiz um, zeigt die Karte weiterhin auf sie.",
      },
      {
        title: "Kalender",
        body: "Zieh eine Aufgabe im Kalender, und ihr Datum ändert sich auf dem Board, denn es ist dieselbe Aufgabe.",
      },
      { title: "Heute", body: "Die Startseite zeigt, was heute in Kanban, Polar und deinen Erinnerungen fällig ist." },
      {
        title: "Papierkorb",
        body: "Notizen, Karten, Dateien und Erinnerungen stellst du von einem einzigen Bildschirm aus wieder her.",
      },
    ],
  },
  how: {
    eyebrow: "So funktioniert’s",
    title: "Drei Schritte, dann geht’s los.",
    steps: [
      {
        title: "Sprache und Ordner wählen",
        body: "Beim ersten Start fragt Enki nach einer Sprache und einem Ordner für deinen Tresor: einem neuen oder einem vorhandenen.",
      },
      {
        title: "Schreiben und planen",
        body: "Erstelle Notizen, Karten und Erinnerungen. Verknüpfe sie, wenn es sinnvoll ist, nicht vorher.",
      },
      {
        title: "Verbinden, wenn du willst",
        body: "Verknüpfe Polar, um deine Aufgaben aufs Handy zu bringen. Wenn nicht, läuft alles weiter lokal.",
      },
    ],
  },
  privacy: {
    eyebrow: "Datenschutz",
    title: "Deine Dateien, auf deiner Festplatte.",
    lead: "Enki speichert deine Notizen auf keinem Server. Sie liegen in einem normalen Ordner, den du öffnen, kopieren oder sichern kannst, wie du willst.",
    treeLabel: "Beispielordner eines Enki-Tresors",
    tree: [
      "mein-tresor/",
      "├── Willkommen.md",
      "├── tagebuch/",
      "│   └── 2026-09-10.md",
      "├── projekte/",
      "│   ├── abschlussarbeit.md",
      "│   └── reise-nach-lissabon.md",
      "├── .sessions/",
      "└── .trash/",
    ],
    points: [
      {
        icon: "person-off-outline",
        title: "Kein Konto",
        body: "Keine Registrierung. App öffnen, Ordner wählen, loslegen.",
      },
      {
        icon: "wifi-off",
        title: "Offline",
        body: "Der gesamte Kern funktioniert offline. Polar, der Cloud-Teil, ist optional.",
      },
      {
        icon: "description-outline",
        title: "Offene Dateien",
        body: "Jede Notiz ist eine .md-Datei, die du mit jedem Editor öffnen kannst.",
      },
      {
        icon: "database-outline",
        title: "Sicheres Speichern",
        body: "Notizen werden atomar gespeichert: Sie bleiben nie halb geschrieben.",
      },
      {
        icon: "lock-outline",
        title: "Verschlüsselte Sitzungen",
        body: "Schütze eine Sitzung mit einem Passwort, und ihr Inhalt wird mit AES-GCM verschlüsselt.",
      },
      {
        icon: "shield-outline",
        title: "Keine Telemetrie",
        body: "Enki sendet keine Nutzungsdaten an irgendeinen Server.",
      },
    ],
  },
  compare: {
    eyebrow: "Vergleich",
    title: "Enki im Vergleich zu dem, was du schon nutzt.",
    lead: "Jedes Werkzeug hat seinen Schwerpunkt. So schneidet Enki bei dem ab, was für die persönliche Nutzung am meisten zählt.",
    feature: "Funktion",
    values: { yes: "Ja", no: "Nein", plugin: "Mit Plugins", partial: "Teilweise" },
    rows: {
      markdown: "Notizen als Markdown-Dateien auf deiner Festplatte",
      noAccount: "Funktioniert ohne Konto",
      offline: "Funktioniert offline",
      allInOne: "Notizen, Aufgaben und Kalender in einer App",
      kanban: "Kanban-Board",
      graph: "Visueller Notizgraph",
      teams: "Zusammenarbeit im Team",
    },
    teamsNote: "Enki ist für eine einzige Person gemacht, mit Absicht.",
    note: "Integrierte Funktionen ohne Plugins oder Integrationen von Drittanbietern, laut den öffentlichen Informationen der jeweiligen Produkte, Stand September 2026.",
    trademarks: "Obsidian, Notion und Todoist sind Marken ihrer jeweiligen Inhaber.",
  },
  useCases: {
    eyebrow: "Für wen",
    title: "Für eine einzige Person: dich.",
    lead: "Enki ist keine Kollaborations-Suite und kein SaaS. Es ist ein privater Raum für alle, die alles verbunden und griffbereit haben wollen.",
    items: [
      {
        icon: "psychology-outline",
        title: "Ein zweites Gehirn",
        body: "Verknüpfte Notizen im Zettelkasten-Stil, mit Backlinks und Graph.",
      },
      {
        icon: "school-outline",
        title: "Ein abgegrenztes Projekt",
        body: "Eine Abschlussarbeit, eine Reise oder ein Produkt in einer eigenen Sitzung.",
      },
      {
        icon: "today-outline",
        title: "Der Alltag",
        body: "Aufgaben, Fälligkeiten und Erinnerungen in einem Kalender, der alles zusammenführt.",
      },
      {
        icon: "wifi-off",
        title: "Offline arbeiten",
        body: "Zum Arbeiten ohne Internet oder mit Informationen, die deinen Rechner nicht verlassen sollen.",
      },
    ],
  },
  desktop: {
    eyebrow: "Desktop",
    title: "Für die Tastatur gemacht.",
    lead: "Enki ist eine echte Desktop-App: Tastenkürzel für alles, Tabs, Designs und Zoom.",
    shortcuts: [
      { keys: ["Strg", "P"], label: "Zu jeder Notiz springen" },
      { keys: ["Strg", "Umschalt", "F"], label: "Den ganzen Tresor durchsuchen" },
      { keys: ["Strg", "Umschalt", "K"], label: "Befehlspalette" },
      { keys: ["Strg", "Umschalt", "N"], label: "Schnellnotiz" },
      { keys: ["Strg", "Umschalt", "Enter"], label: "Zen-Modus" },
      { keys: ["Strg", "+"], label: "Oberfläche vergrößern" },
    ],
    extras: [
      { icon: "keyboard-outline", title: "Eigene Tastenkürzel", body: "Belege jedes Kürzel in den Einstellungen neu." },
      { icon: "palette-outline", title: "Designs", body: "Hell, dunkel oder dein eigenes mit dem Design-Editor." },
      { icon: "zoom-in", title: "Zoom von 50 bis 200 %", body: "Skaliert die ganze Oberfläche, nicht nur den Text." },
      {
        icon: "delete-outline",
        title: "Papierkorb für alles",
        body: "Nichts ist endgültig weg, bis du es bestätigst.",
      },
    ],
  },
  facts: {
    eyebrow: "In Zahlen",
    title: "Fakten statt Versprechen.",
    items: [
      { label: "Sprachen" },
      { label: "Betriebssysteme" },
      { label: "Pflichtkonten" },
      { label: "automatisierte Tests" },
    ],
  },
  polarBand: {
    eyebrow: "Ökosystem",
    title: "Und auf dem Handy? Polar.",
    body: "Polar ist die Aufgaben-App für Android, die sich mit Enki synchronisiert. Optional: Verknüpfe sie nur, wenn du deine Aufgaben mitnehmen willst.",
    cta: "Polar entdecken",
  },
  access: {
    eyebrow: "Downloads",
    title: "Enki ist in der Beta.",
    lead: "Du kannst Enki jetzt für Windows, macOS und Linux herunterladen. Es ist eine Beta: alltagstauglich, aber noch nicht fehlerfrei. Wenn du einen Fehler findest, schreib uns.",
    status: "Öffentliche Beta",
    download: "Herunterladen",
    downloadLabel: "Enki {version} für {os} {arch} herunterladen",
    releaseNotes: "Versionshinweise auf GitHub",
    unsigned:
      "Die Builds sind noch nicht von Microsoft oder Apple signiert: Beim ersten Öffnen von Enki fragt dein System eventuell nach, ob du es wirklich ausführen willst.",
    checksums: "SHA-256-Prüfsummen",
    notifyTitle: "Über neue Versionen informieren",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen.",
    items: [
      {
        q: "Wo kann ich Enki herunterladen?",
        a: "Im Download-Bereich dieser Seite oder auf der Release-Seite auf GitHub. Die aktuelle Version ist die Beta {version} für Windows, macOS (Apple Silicon und Intel) und Linux.",
      },
      {
        q: "Brauche ich ein Konto?",
        a: "Nein. Enki funktioniert ohne Registrierung. Ein Konto brauchst du nur, wenn du Polar verknüpfst, um Aufgaben mit dem Handy zu synchronisieren.",
      },
      {
        q: "Wo werden meine Notizen gespeichert?",
        a: "In einem Ordner auf deiner Festplatte, den du wählst, als normale Markdown-Dateien. Öffne sie mit jedem Editor und sichere sie mit jedem Werkzeug.",
      },
      {
        q: "Funktioniert Enki ohne Internet?",
        a: "Ja. Notizen, Kanban, Kalender und Erinnerungen funktionieren offline. Polar synchronisiert, sobald die Verbindung zurück ist, und funktioniert auch in der Zwischenzeit.",
      },
      {
        q: "Was ist Polar, und brauche ich es?",
        a: "Polar ist eine Aufgaben-App für Android, die sich über die Cloud mit Enki synchronisiert. Sie ist optional: Ohne sie funktioniert Enki genauso.",
      },
      {
        q: "Synchronisiert Enki Notizen zwischen Geräten?",
        a: "Heute nicht. Synchronisiert werden die Aufgaben und Erinnerungen von Polar. Da deine Notizen normale Dateien sind, kannst du sie mit jedem Werkzeug kopieren.",
      },
      {
        q: "Hat Enki künstliche Intelligenz?",
        a: "Nein. Enki enthält keine KI und verbindet sich mit keiner. Die „Skills“ sind Textvorlagen für den Assistenten deiner Wahl.",
      },
      {
        q: "In welchen Sprachen gibt es Enki?",
        a: "Spanisch (Spanien und Lateinamerika), Englisch (USA und Großbritannien), Deutsch und Französisch. Du kannst die Sprache ohne Neustart wechseln.",
      },
      { q: "Ist Enki Open Source?", a: "Nein. Enki ist proprietäre Software: Alle Rechte vorbehalten." },
      {
        q: "Wie melde ich einen Fehler oder mache einen Vorschlag?",
        a: "Schreib uns an {email}. Wir lesen jede Nachricht.",
      },
    ],
  },
  finalCta: {
    title: "Dein zweites Gehirn, auf deinem Desktop.",
    lead: "Lade die Beta herunter und probier sie auf deinem Rechner aus.",
    cta: "Beta herunterladen",
  },
  footer: {
    tagline: "Dein zweites Gehirn, auf deinem Desktop.",
    product: "Produkt",
    ecosystem: "Ökosystem",
    legal: "Rechtliches",
    contact: "Kontakt",
    portfolio: "Portfolio des Autors",
    rights: "Alle Rechte vorbehalten.",
  },
  legal: {
    draft: "Entwurf, noch nicht geprüft: Die markierten Angaben fehlen.",
    updated: "Zuletzt aktualisiert",
    back: "Zurück zur Startseite",
    pages: {
      notice: {
        title: "Impressum",
        description: "Angaben zum Betreiber der Enki-Website.",
        sections: [
          {
            title: "Betreiber",
            body: [
              "Gemäß Artikel 10 des spanischen Gesetzes 34/2002 (LSSI-CE) gehört diese Website {holder}, Steuernummer {taxId}, Zustellanschrift {address}.",
              "Kontakt: {email}.",
            ],
          },
          {
            title: "Zweck",
            body: [
              "Diese Website stellt Enki vor, eine Desktop-App in Entwicklung, verlinkt auf ihre auf GitHub veröffentlichten Testversionen und ermöglicht die Anmeldung zu einer Liste, um über neue Versionen informiert zu werden.",
            ],
          },
          {
            title: "Geistiges Eigentum",
            body: [
              "Enki, sein Code, sein Design und die Inhalte dieser Website gehören dem Betreiber. Alle Rechte vorbehalten. Obsidian, Notion und Todoist sind Marken ihrer jeweiligen Inhaber.",
            ],
          },
          {
            title: "Haftung",
            body: [
              "Der Betreiber haftet weder für die Nutzung der Informationen dieser Website noch für die Inhalte verlinkter Websites Dritter.",
            ],
          },
        ],
      },
      privacy: {
        title: "Datenschutzerklärung",
        description: "Wie die Enki-Website mit deinen personenbezogenen Daten umgeht.",
        sections: [
          {
            title: "Verantwortlicher",
            body: ["{holder}, Steuernummer {taxId}. Kontakt: {email}."],
          },
          {
            title: "Welche Daten wir verarbeiten und warum",
            body: [
              "Benachrichtigungsliste: Wenn du dich einträgst, verwenden wir deine E-Mail, um dich über neue Enki-Versionen zu informieren. Rechtsgrundlage: deine Einwilligung, die du jederzeit über den Abmeldelink in jeder E-Mail widerrufen kannst.",
              "Analyse: Wir zählen Besuche aggregiert und ohne Cookies mit Umami. Es werden weder IP-Adressen noch persönliche Kennungen gespeichert. Rechtsgrundlage: berechtigtes Interesse daran, welche Teile der Website genutzt werden.",
              "Downloads: Die Dateien von Enki werden von GitHub heruntergeladen. Wenn du auf einen Download-Link klickst, verlässt du diese Website, und es gilt die Datenschutzerklärung von GitHub.",
            ],
          },
          {
            title: "Auftragsverarbeiter",
            body: [
              "Buttondown (Verwaltung der Benachrichtigungsliste) und {hosting} (Hosting der Website und der Analyse).",
            ],
          },
          {
            title: "Speicherdauer",
            body: [
              "Deine E-Mail wird gespeichert, solange du angemeldet bist. Aggregierte Analysedaten lassen keine Rückschlüsse auf dich zu.",
            ],
          },
          {
            title: "Deine Rechte",
            body: [
              "Du kannst deine Rechte auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit per E-Mail an {email} ausüben. Außerdem kannst du dich bei der spanischen Datenschutzbehörde (aepd.es) oder deiner örtlichen Aufsichtsbehörde beschweren.",
            ],
          },
          {
            title: "Die App ist nicht die Website",
            body: [
              "Diese Erklärung gilt nur für diese Website. Die App Enki speichert deine Notizen und Daten auf deinem eigenen Rechner und sendet keine Nutzungsdaten an irgendeinen Server.",
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie-Richtlinie",
        description: "Was die Enki-Website in deinem Browser speichert.",
        sections: [
          {
            title: "Cookies",
            body: [
              "Diese Website verwendet weder eigene Cookies noch Cookies von Drittanbietern. Die Analyse (Umami) funktioniert ohne Cookies.",
            ],
          },
          {
            title: "Lokaler Speicher",
            body: [
              "Wenn du zwischen hellem und dunklem Design wechselst, wird deine Wahl im lokalen Speicher deines Browsers gespeichert (Schlüssel „enki-theme“), damit sie beim nächsten Besuch gilt. Sie verlässt deinen Browser nie, und du kannst sie in den Browsereinstellungen löschen.",
            ],
          },
        ],
      },
    },
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Die gesuchte Seite gibt es nicht oder sie ist umgezogen.",
    back: "Zurück zur Startseite",
  },
};
