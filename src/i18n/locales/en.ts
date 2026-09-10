import type { Dictionary } from "./es";

/** English (US). Adapted from README.en.md, not translated word for word. */
export const en: Dictionary = {
  meta: {
    title: "Enki — Your second brain, on your desktop",
    description:
      "Enki is a local-first second brain app with Markdown notes, Kanban, calendar and reminders. No account, works offline, and keeps your files on disk.",
    ogAlt: "Enki: your second brain, on your desktop.",
  },
  a11y: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    home: "Enki, home",
    placeholder: "Screenshot coming soon",
  },
  nav: { modules: "Features", privacy: "Privacy", compare: "Compare", faq: "FAQ", cta: "Early access" },
  hero: {
    eyebrow: "Alpha 0.1 · Windows · macOS · Linux",
    titleLines: ["Your second brain,", "on your desktop."],
    lead: "Notes, tasks, calendar and reminders in a single window. Nothing is forced together: everything keeps its place, and you decide how to connect it.",
    formTitle: "Let me know when I can download it",
    secondary: "How it works",
    facts: ["No account", "Works offline", "Your notes are Markdown files"],
    screenAlt: "Enki's home dashboard with today's tasks, recent notes and the Kanban board.",
  },
  notify: {
    label: "Your email",
    placeholder: "you@email.com",
    submit: "Notify me",
    submitting: "Sending…",
    success: "Done. Check your inbox and confirm your subscription.",
    error: "Something went wrong. Please try again in a few minutes.",
    invalid: "Enter a valid email address.",
    consent: "We'll only write when there's a new version. Unsubscribe any time. More in our {link}.",
    consentLink: "privacy policy",
    notConfigured: "The form isn't connected yet (PUBLIC_BUTTONDOWN_USER is missing).",
  },
  problem: {
    eyebrow: "The problem",
    title: "Five apps to know what to do today.",
    lead: "Notes in one app, tasks in another, the calendar in a third and reminders in a fourth. Each with its own account, its own cloud and its own way of thinking.",
    apps: ["Notes", "Tasks", "Calendar", "Reminders", "Projects"],
    resolution:
      "Enki brings them together in one window. Each module works on its own and makes more sense when it meets the others.",
  },
  pillars: {
    eyebrow: "Principles",
    title: "Built on four rules.",
    items: [
      {
        icon: "folder-outline",
        title: "Your data is yours",
        body: "Your notes are Markdown files in a folder you choose. No proprietary formats, no lock-in.",
      },
      {
        icon: "hub-outline",
        title: "Connected, not cluttered",
        body: "Each module stands alone, but a note, a task and a date can point to the same thing.",
      },
      {
        icon: "do-not-disturb-on-outline",
        title: "No distractions",
        body: "A monochrome interface. No gamification, no streaks that reset, no constant alerts.",
      },
      {
        icon: "wifi-off",
        title: "Works without internet",
        body: "Notes, Kanban, calendar and reminders work offline. The cloud is optional, never a requirement.",
      },
    ],
  },
  modules: {
    eyebrow: "Features",
    title: "Everything you need, in its place.",
    lead: "Six modules that work on their own and understand each other.",
    items: [
      {
        id: "notes",
        label: "Notes",
        title: "Notes that are yours.",
        body: "A vault of Markdown notes that lives on your disk, with folders, tags and links between notes.",
        points: [
          "[[Wikilinks]] that update when you rename a note",
          "Tabs, outline, backlinks and stats for every note",
          "Daily notes, zen mode and HTML export",
          "Full-text search across your whole vault",
        ],
        screenAlt: "Enki's note editor with tabs, an open note and the links panel.",
      },
      {
        id: "kanban",
        label: "Kanban",
        title: "A board that depends on no one.",
        body: "Local tasks with columns, priorities, due dates, tags and subtasks.",
        points: [
          "Drag cards between columns",
          "Link each card to a note in your vault",
          "Archive finished work without losing it",
          "Restore anything you delete from the trash",
        ],
        screenAlt: "Enki's Kanban board with to-do, in-progress and done columns.",
      },
      {
        id: "calendar",
        label: "Calendar",
        title: "Everything with a date, in one place.",
        body: "Your Kanban cards, Polar tasks and reminders in one unified view.",
        points: [
          "Month, week, day and agenda views",
          "Drag an item to change its real date",
          "Layers by source, filters by priority or tag",
          "Create a reminder or a card from an empty slot",
        ],
        screenAlt: "Enki's weekly calendar showing Kanban cards and reminders together.",
      },
      {
        id: "reminders",
        label: "Reminders",
        title: "Alerts that arrive on time.",
        body: "Standalone reminders with a date, a time and recurrence.",
        points: [
          "System notifications when they're due",
          "A tray of due items, always at hand",
          "Do-not-disturb hours",
          "Synced with Polar if you link it",
        ],
        screenAlt: "Enki's reminder list grouped by date.",
      },
      {
        id: "sessions",
        label: "Sessions",
        title: "A space for every project.",
        body: "Note subspaces for a thesis, a trip or a product, each with its own relationship graph.",
        points: [
          "A visual graph of notes and links",
          "Draw manual links right in the graph",
          "Password protection",
          "They narrow what you see without deleting the rest",
        ],
        screenAlt: "Graph of an Enki session: notes as nodes joined by their links.",
      },
      {
        id: "polar",
        label: "Polar",
        title: "Your tasks, on your phone too.",
        body: "Tasks synced with Polar, Enki's sibling Android app. It's optional: without it, Enki works just the same.",
        points: [
          "Lists, priorities, recurrence and subtasks",
          "Works offline and syncs when you're back",
          "Chains of tasks that depend on each other",
          "They show up in the calendar with everything else",
        ],
        screenAlt: "The Polar Android app showing a task list.",
      },
    ],
  },
  connections: {
    eyebrow: "Integrations",
    title: "Connected, not cluttered.",
    lead: "Modules don't copy data between each other: they work on the same data. Change something in one place and it's changed everywhere.",
    nodes: {
      notes: "Notes",
      kanban: "Kanban",
      polar: "Polar",
      reminders: "Reminders",
      calendar: "Calendar",
      today: "Today",
      trash: "Trash",
    },
    items: [
      {
        title: "Note and card",
        body: "Link a Kanban card to a note. Rename the note and the card still points to it.",
      },
      {
        title: "Calendar",
        body: "Drag a task in the calendar and its date changes on the board, because it's the same task.",
      },
      { title: "Today", body: "The home dashboard gathers what's due today across Kanban, Polar and your reminders." },
      { title: "Trash", body: "Notes, cards, files and reminders are restored from a single screen." },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps, then get to work.",
    steps: [
      {
        title: "Pick a language and a folder",
        body: "The first time, Enki asks for a language and a folder for your vault: a new one or one you already have.",
      },
      {
        title: "Write and plan",
        body: "Create notes, cards and reminders. Link them together when it makes sense, not before.",
      },
      {
        title: "Connect, if you want",
        body: "Link Polar to take your tasks to your phone. If not, everything keeps working locally.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your files, on your disk.",
    lead: "Enki doesn't store your notes on any server. They live in a regular folder you can open, copy or back up however you like.",
    treeLabel: "Example folder of an Enki vault",
    tree: [
      "my-vault/",
      "├── Welcome.md",
      "├── journal/",
      "│   └── 2026-09-10.md",
      "├── projects/",
      "│   ├── thesis.md",
      "│   └── trip-to-lisbon.md",
      "├── .sessions/",
      "└── .trash/",
    ],
    points: [
      { icon: "person-off-outline", title: "No account", body: "No sign-up. Open the app, pick a folder and start." },
      { icon: "wifi-off", title: "Offline", body: "The whole core works offline. Polar, the cloud part, is optional." },
      {
        icon: "description-outline",
        title: "Open files",
        body: "Every note is an .md file you can open with any editor.",
      },
      {
        icon: "database-outline",
        title: "Safe writes",
        body: "Notes are saved atomically: they're never left half-written.",
      },
      {
        icon: "lock-outline",
        title: "Encrypted sessions",
        body: "Protect a session with a password and its content is encrypted with AES-GCM.",
      },
      { icon: "shield-outline", title: "No telemetry", body: "Enki doesn't send usage data to any server." },
    ],
  },
  compare: {
    eyebrow: "Compare",
    title: "Enki next to what you already use.",
    lead: "Every tool has its focus. Here's how Enki compares on what matters most for personal use.",
    feature: "Feature",
    values: { yes: "Yes", no: "No", plugin: "With plugins", partial: "Partial" },
    rows: {
      markdown: "Notes as Markdown files on your disk",
      noAccount: "Works without creating an account",
      offline: "Works offline",
      allInOne: "Notes, tasks and calendar in the same app",
      kanban: "Kanban board",
      graph: "Visual note graph",
      teams: "Team collaboration",
    },
    teamsNote: "Enki is for one person, on purpose.",
    note: "Built-in features without third-party plugins or integrations, based on each product's public information as of September 2026.",
    trademarks: "Obsidian, Notion and Todoist are trademarks of their respective owners.",
  },
  useCases: {
    eyebrow: "Who it's for",
    title: "For one person: you.",
    lead: "Enki isn't a collaborative suite or a SaaS. It's a private space for anyone who wants everything connected and within reach.",
    items: [
      {
        icon: "psychology-outline",
        title: "A second brain",
        body: "Linked notes, Zettelkasten-style, with backlinks and a graph.",
      },
      { icon: "school-outline", title: "A focused project", body: "A thesis, a trip or a product in its own session." },
      {
        icon: "today-outline",
        title: "Day to day",
        body: "Tasks, due dates and reminders in a calendar that brings it all together.",
      },
      {
        icon: "wifi-off",
        title: "Offline work",
        body: "For working without internet, or with information that shouldn't leave your computer.",
      },
    ],
  },
  desktop: {
    eyebrow: "Desktop",
    title: "Made for the keyboard.",
    lead: "Enki is a real desktop app: shortcuts for everything, tabs, themes and zoom.",
    shortcuts: [
      { keys: ["Ctrl", "P"], label: "Jump to any note" },
      { keys: ["Ctrl", "Shift", "F"], label: "Search your whole vault" },
      { keys: ["Ctrl", "Shift", "K"], label: "Command palette" },
      { keys: ["Ctrl", "Shift", "N"], label: "Quick note" },
      { keys: ["Ctrl", "Shift", "Enter"], label: "Zen mode" },
      { keys: ["Ctrl", "+"], label: "Zoom the interface" },
    ],
    extras: [
      { icon: "keyboard-outline", title: "Your own shortcuts", body: "Remap any shortcut from Settings." },
      { icon: "palette-outline", title: "Themes", body: "Light, dark, or your own with the theme editor." },
      { icon: "zoom-in", title: "Zoom from 50 to 200%", body: "Scales the whole interface, not just the text." },
      { icon: "delete-outline", title: "Trash for everything", body: "Nothing is gone for good until you confirm it." },
    ],
  },
  facts: {
    eyebrow: "By the numbers",
    title: "Facts, not promises.",
    items: [
      { label: "interface languages" },
      { label: "operating systems" },
      { label: "required accounts" },
      { label: "automated tests" },
    ],
  },
  polarBand: {
    eyebrow: "Ecosystem",
    title: "On your phone? Polar.",
    body: "Polar is the Android task app that syncs with Enki. It's optional: link it only if you want to take your tasks with you.",
    cta: "Discover Polar",
  },
  access: {
    eyebrow: "Early access",
    title: "Enki is in alpha.",
    lead: "It's already usable day to day, but there's no public version to download yet. Leave your email and we'll let you know when there is.",
    status: "In development",
    soon: "Coming soon",
    platforms: ["Windows", "macOS", "Linux"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    items: [
      {
        q: "When can I download Enki?",
        a: "Enki is in alpha and doesn't have a release date yet. Join the list and we'll email you as soon as there's a public version.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. Enki works without signing up. You only need an account if you choose to link Polar to sync tasks with your phone.",
      },
      {
        q: "Where are my notes stored?",
        a: "In a folder on your disk that you choose, as regular Markdown files. Open them with any editor and back them up with any tool.",
      },
      {
        q: "Does it work without internet?",
        a: "Yes. Notes, Kanban, calendar and reminders work offline. Polar syncs when the connection comes back, and keeps working in the meantime.",
      },
      {
        q: "What is Polar, and do I need it?",
        a: "Polar is an Android task app that syncs with Enki through the cloud. It's optional: without it, Enki works exactly the same.",
      },
      {
        q: "Does it sync notes between devices?",
        a: "Not today. Polar tasks and reminders sync. Since your notes are regular files, you can copy them with whatever tool you prefer.",
      },
      {
        q: "Does it have AI?",
        a: "No. Enki doesn't include or connect to any AI engine. Its “skills” are text templates to use with the assistant of your choice.",
      },
      {
        q: "Which languages is it available in?",
        a: "Spanish (Spain and Latin America), English (US and UK), German and French. You can switch languages without restarting the app.",
      },
      { q: "Is it open source?", a: "No. Enki is proprietary software: all rights reserved." },
      { q: "How do I report a bug or suggest something?", a: "Write to us at {email}. We read every message." },
    ],
  },
  finalCta: {
    title: "Your second brain, on your desktop.",
    lead: "Join the list and we'll let you know when you can download it.",
    cta: "Join the list",
  },
  footer: {
    tagline: "Your second brain, on your desktop.",
    product: "Product",
    ecosystem: "Ecosystem",
    legal: "Legal",
    contact: "Contact",
    portfolio: "Author's portfolio",
    rights: "All rights reserved.",
  },
  legal: {
    draft: "Draft pending review: the marked details are missing.",
    updated: "Last updated",
    back: "Back to home",
    pages: {
      notice: {
        title: "Legal notice",
        description: "Information about the owner of the Enki website.",
        sections: [
          {
            title: "Owner",
            body: [
              "In accordance with article 10 of Spanish Law 34/2002 (LSSI-CE), this website belongs to [[AUTOR: full name]], tax ID [[AUTOR: NIF/NIE]], with an address for notices at [[AUTOR: address]].",
              "Contact: {email}.",
            ],
          },
          {
            title: "Purpose",
            body: [
              "This website presents Enki, a desktop app in development, and lets you join a list to be notified of new versions.",
            ],
          },
          {
            title: "Intellectual property",
            body: [
              "Enki, its code, its design and the content of this website belong to the owner. All rights reserved. Obsidian, Notion and Todoist are trademarks of their respective owners.",
            ],
          },
          {
            title: "Liability",
            body: [
              "The owner is not responsible for how the information on this website is used, nor for the content of third-party websites linked from it.",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy policy",
        description: "How the Enki website handles your personal data.",
        sections: [
          { title: "Controller", body: ["[[AUTOR: full name]], tax ID [[AUTOR: NIF/NIE]]. Contact: {email}."] },
          {
            title: "What data we process and why",
            body: [
              "Waitlist: if you sign up, we use your email to tell you about new versions of Enki. Legal basis: your consent, which you can withdraw at any time from the unsubscribe link in every email.",
              "Analytics: we count visits in aggregate and without cookies using Umami. No IP addresses or personal identifiers are stored. Legal basis: legitimate interest in knowing which parts of the site are used.",
            ],
          },
          {
            title: "Processors",
            body: [
              "Buttondown (waitlist management) and [[AUTOR: hosting provider]] (hosting of the website and the analytics).",
            ],
          },
          {
            title: "Retention",
            body: ["Your email is kept while you remain subscribed. Aggregate analytics data can't identify you."],
          },
          {
            title: "Your rights",
            body: [
              "You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to {email}. You can also file a complaint with the Spanish Data Protection Agency (aepd.es) or your local supervisory authority.",
            ],
          },
          {
            title: "The app is not the website",
            body: [
              "This policy only covers this website. The Enki app keeps your notes and data on your own computer and doesn't send usage data to any server.",
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie policy",
        description: "What the Enki website stores in your browser.",
        sections: [
          {
            title: "Cookies",
            body: [
              "This website doesn't use first- or third-party cookies. The analytics (Umami) work without cookies.",
            ],
          },
          {
            title: "Local storage",
            body: [
              "If you switch between the light and dark theme, your choice is saved in your browser's local storage (key “enki-theme”) so it's respected on your next visit. It never leaves your browser, and you can clear it from your browser settings.",
            ],
          },
        ],
      },
    },
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    back: "Back to home",
  },
};
