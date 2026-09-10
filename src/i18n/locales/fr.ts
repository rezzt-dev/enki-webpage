import type { Dictionary } from "./es";

/**
 * Français. Vouvoiement et terminologie comme dans Strings.fr-FR.resx (« coffre », « Rappels »,
 * « Corbeille », « Paramètres »). Les espaces insécables avant « : ; ? ! » et à l’intérieur des
 * guillemets sont ajoutées automatiquement par `frenchSpacing` (src/i18n/index.ts).
 */
export const fr: Dictionary = {
  meta: {
    title: "Enki — Votre second cerveau, sur votre bureau",
    description:
      "Notes Markdown, Kanban, calendrier et rappels dans une seule app de bureau. Sans compte, hors ligne, et vos notes sont des fichiers sur votre disque.",
    ogAlt: "Enki : votre second cerveau, sur votre bureau.",
  },
  a11y: {
    skip: "Aller au contenu",
    mainNav: "Navigation principale",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    language: "Langue",
    themeLight: "Passer au thème clair",
    themeDark: "Passer au thème sombre",
    home: "Enki, accueil",
    placeholder: "Capture à venir",
  },
  nav: {
    modules: "Fonctionnalités",
    privacy: "Confidentialité",
    compare: "Comparatif",
    faq: "FAQ",
    cta: "Accès anticipé",
  },
  hero: {
    eyebrow: "Alpha 0.1 · Windows · macOS · Linux",
    titleLines: ["Votre second cerveau,", "sur votre bureau."],
    lead: "Notes, tâches, calendrier et rappels dans une seule fenêtre. Rien n’est mélangé de force : chaque chose garde sa place, et c’est vous qui décidez comment les relier.",
    formTitle: "Prévenez-moi quand je pourrai le télécharger",
    secondary: "Comment ça marche",
    facts: ["Sans compte", "Fonctionne hors ligne", "Vos notes sont des fichiers Markdown"],
    screenAlt: "Tableau de bord d’Enki avec les tâches du jour, les notes récentes et le tableau Kanban.",
  },
  notify: {
    label: "Votre e-mail",
    placeholder: "vous@email.fr",
    submit: "Me prévenir",
    submitting: "Envoi…",
    success: "C’est fait. Vérifiez votre boîte de réception et confirmez l’inscription.",
    error: "L’envoi a échoué. Réessayez dans quelques minutes.",
    invalid: "Saisissez une adresse e-mail valide.",
    consent:
      "Nous vous écrirons uniquement à la sortie d’une nouvelle version. Désinscription possible à tout moment. Plus d’informations dans notre {link}.",
    consentLink: "politique de confidentialité",
    notConfigured: "Le formulaire n’est pas encore connecté (PUBLIC_BUTTONDOWN_USER manquant).",
  },
  problem: {
    eyebrow: "Le problème",
    title: "Cinq apps pour savoir quoi faire aujourd’hui.",
    lead: "Les notes dans une app, les tâches dans une autre, le calendrier dans une troisième et les rappels dans une quatrième. Chacune avec son compte, son cloud et sa façon de penser.",
    apps: ["Notes", "Tâches", "Calendrier", "Rappels", "Projets"],
    resolution:
      "Enki les réunit dans une seule fenêtre. Chaque module fonctionne seul et prend tout son sens au contact des autres.",
  },
  pillars: {
    eyebrow: "Principes",
    title: "Quatre règles.",
    items: [
      {
        icon: "folder-outline",
        title: "Vos données vous appartiennent",
        body: "Vos notes sont des fichiers Markdown dans un dossier que vous choisissez. Pas de format propriétaire, pas d’enfermement.",
      },
      {
        icon: "hub-outline",
        title: "Connecté, pas entassé",
        body: "Chaque module fonctionne seul, mais une note, une tâche et une date peuvent désigner la même chose.",
      },
      {
        icon: "do-not-disturb-on-outline",
        title: "Sans distraction",
        body: "Une interface monochrome. Pas de gamification, pas de séries qui se réinitialisent, pas d’alertes incessantes.",
      },
      {
        icon: "wifi-off",
        title: "Fonctionne sans internet",
        body: "Notes, Kanban, calendrier et rappels fonctionnent hors ligne. Le cloud est facultatif, jamais obligatoire.",
      },
    ],
  },
  modules: {
    eyebrow: "Fonctionnalités",
    title: "Tout ce qu’il vous faut, à sa place.",
    lead: "Six modules qui fonctionnent seuls et se comprennent entre eux.",
    items: [
      {
        id: "notes",
        label: "Notes",
        title: "Des notes qui vous appartiennent.",
        body: "Un coffre de notes Markdown qui vit sur votre disque, avec dossiers, étiquettes et liens entre notes.",
        points: [
          "Des [[wikilinks]] mis à jour quand vous renommez une note",
          "Onglets, plan, rétroliens et statistiques pour chaque note",
          "Notes quotidiennes, mode zen et export en HTML",
          "Recherche plein texte dans tout le coffre",
        ],
        screenAlt: "Éditeur de notes d’Enki avec des onglets, une note ouverte et le panneau des liens.",
      },
      {
        id: "kanban",
        label: "Kanban",
        title: "Un tableau qui ne dépend de personne.",
        body: "Des tâches locales avec colonnes, priorités, échéances, étiquettes et sous-tâches.",
        points: [
          "Glissez les cartes d’une colonne à l’autre",
          "Liez chaque carte à une note du coffre",
          "Archivez le travail terminé sans le perdre",
          "Restaurez ce que vous supprimez depuis la corbeille",
        ],
        screenAlt: "Tableau Kanban d’Enki avec les colonnes à faire, en cours et terminé.",
      },
      {
        id: "calendar",
        label: "Calendrier",
        title: "Tout ce qui a une date, au même endroit.",
        body: "Vos cartes Kanban, tâches Polar et rappels dans une vue unifiée.",
        points: [
          "Vues mois, semaine, jour et agenda",
          "Glissez un élément pour changer sa vraie date",
          "Calques par source, filtres par priorité ou étiquette",
          "Créez un rappel ou une carte depuis un créneau vide",
        ],
        screenAlt: "Vue hebdomadaire du calendrier d’Enki avec cartes Kanban et rappels réunis.",
      },
      {
        id: "reminders",
        label: "Rappels",
        title: "Des alertes qui arrivent au bon moment.",
        body: "Des rappels indépendants avec date, heure et récurrence.",
        points: [
          "Notifications système à l’échéance",
          "Une liste des échéances toujours à portée de main",
          "Plages « ne pas déranger »",
          "Synchronisés avec Polar si vous le liez",
        ],
        screenAlt: "Liste des rappels d’Enki regroupés par date.",
      },
      {
        id: "sessions",
        label: "Sessions",
        title: "Un espace pour chaque projet.",
        body: "Des sous-espaces de notes pour une thèse, un voyage ou un produit, chacun avec son graphe de relations.",
        points: [
          "Un graphe visuel des notes et des liens",
          "Des liens manuels tracés directement dans le graphe",
          "Protection par mot de passe",
          "Elles restreignent ce que vous voyez sans supprimer le reste",
        ],
        screenAlt: "Graphe d’une session Enki : des notes reliées par leurs liens.",
      },
      {
        id: "polar",
        label: "Polar",
        title: "Vos tâches, aussi sur votre téléphone.",
        body: "Des tâches synchronisées avec Polar, l’app Android sœur d’Enki. C’est facultatif : sans elle, Enki fonctionne de la même façon.",
        points: [
          "Listes, priorités, récurrence et sous-tâches",
          "Fonctionne hors ligne et se synchronise au retour de la connexion",
          "Des chaînes de tâches qui dépendent les unes des autres",
          "Elles apparaissent dans le calendrier avec tout le reste",
        ],
        screenAlt: "L’app Android Polar affichant une liste de tâches.",
      },
    ],
  },
  connections: {
    eyebrow: "Intégrations",
    title: "Connecté, pas entassé.",
    lead: "Les modules ne se recopient pas les données : ils travaillent sur les mêmes. Ce que vous modifiez à un endroit est modifié partout.",
    nodes: {
      notes: "Notes",
      kanban: "Kanban",
      polar: "Polar",
      reminders: "Rappels",
      calendar: "Calendrier",
      today: "Aujourd’hui",
      trash: "Corbeille",
    },
    items: [
      {
        title: "Note et carte",
        body: "Liez une carte Kanban à une note. Si vous renommez la note, la carte pointe toujours vers elle.",
      },
      {
        title: "Calendrier",
        body: "Glissez une tâche dans le calendrier et sa date change sur le tableau, car c’est la même tâche.",
      },
      {
        title: "Aujourd’hui",
        body: "Le tableau de bord réunit ce qui arrive à échéance aujourd’hui dans le Kanban, Polar et vos rappels.",
      },
      { title: "Corbeille", body: "Notes, cartes, fichiers et rappels se restaurent depuis un seul écran." },
    ],
  },
  how: {
    eyebrow: "Comment ça marche",
    title: "Trois étapes, et au travail.",
    steps: [
      {
        title: "Choisissez une langue et un dossier",
        body: "Au premier lancement, Enki vous demande une langue et un dossier pour votre coffre : un nouveau ou un existant.",
      },
      {
        title: "Écrivez et planifiez",
        body: "Créez des notes, des cartes et des rappels. Reliez-les quand cela a du sens, pas avant.",
      },
      {
        title: "Connectez, si vous voulez",
        body: "Liez Polar pour emporter vos tâches sur votre téléphone. Sinon, tout continue de fonctionner en local.",
      },
    ],
  },
  privacy: {
    eyebrow: "Confidentialité",
    title: "Vos fichiers, sur votre disque.",
    lead: "Enki ne stocke vos notes sur aucun serveur. Elles vivent dans un dossier ordinaire que vous pouvez ouvrir, copier ou sauvegarder comme vous le souhaitez.",
    treeLabel: "Exemple de dossier d’un coffre Enki",
    tree: [
      "mon-coffre/",
      "├── Bienvenue.md",
      "├── journal/",
      "│   └── 2026-09-10.md",
      "├── projets/",
      "│   ├── these.md",
      "│   └── voyage-a-lisbonne.md",
      "├── .sessions/",
      "└── .trash/",
    ],
    points: [
      {
        icon: "person-off-outline",
        title: "Sans compte",
        body: "Aucune inscription. Ouvrez l’app, choisissez un dossier et commencez.",
      },
      {
        icon: "wifi-off",
        title: "Hors ligne",
        body: "Tout le cœur de l’app fonctionne hors ligne. Polar, la partie cloud, est facultatif.",
      },
      {
        icon: "description-outline",
        title: "Fichiers ouverts",
        body: "Chaque note est un fichier .md que vous pouvez ouvrir avec n’importe quel éditeur.",
      },
      {
        icon: "database-outline",
        title: "Écriture sûre",
        body: "Les notes sont enregistrées de manière atomique : jamais à moitié écrites.",
      },
      {
        icon: "lock-outline",
        title: "Sessions chiffrées",
        body: "Protégez une session par mot de passe et son contenu est chiffré avec AES-GCM.",
      },
      {
        icon: "shield-outline",
        title: "Sans télémétrie",
        body: "Enki n’envoie aucune donnée d’utilisation à aucun serveur.",
      },
    ],
  },
  compare: {
    eyebrow: "Comparatif",
    title: "Enki face à ce que vous utilisez déjà.",
    lead: "Chaque outil a sa philosophie. Voici comment Enki se compare sur ce qui compte le plus pour un usage personnel.",
    feature: "Fonctionnalité",
    values: { yes: "Oui", no: "Non", plugin: "Avec plugins", partial: "Partiel" },
    rows: {
      markdown: "Notes en fichiers Markdown sur votre disque",
      noAccount: "Fonctionne sans créer de compte",
      offline: "Fonctionne hors ligne",
      allInOne: "Notes, tâches et calendrier dans la même app",
      kanban: "Tableau Kanban",
      graph: "Graphe visuel des notes",
      teams: "Collaboration en équipe",
    },
    teamsNote: "Enki est conçu pour une seule personne, volontairement.",
    note: "Fonctionnalités intégrées, sans plugins ni intégrations tierces, d’après les informations publiques de chaque produit en septembre 2026.",
    trademarks: "Obsidian, Notion et Todoist sont des marques de leurs propriétaires respectifs.",
  },
  useCases: {
    eyebrow: "Pour qui",
    title: "Pour une seule personne : vous.",
    lead: "Enki n’est ni une suite collaborative ni un SaaS. C’est un espace privé pour qui veut tout avoir relié et à portée de main.",
    items: [
      {
        icon: "psychology-outline",
        title: "Un second cerveau",
        body: "Des notes reliées façon Zettelkasten, avec rétroliens et graphe.",
      },
      {
        icon: "school-outline",
        title: "Un projet à part",
        body: "Une thèse, un voyage ou un produit dans sa propre session.",
      },
      {
        icon: "today-outline",
        title: "Le quotidien",
        body: "Tâches, échéances et rappels dans un calendrier qui réunit tout.",
      },
      {
        icon: "wifi-off",
        title: "Travail hors ligne",
        body: "Pour travailler sans internet, ou avec des informations qui ne doivent pas quitter votre ordinateur.",
      },
    ],
  },
  desktop: {
    eyebrow: "Bureau",
    title: "Pensé pour le clavier.",
    lead: "Enki est une vraie app de bureau : des raccourcis pour tout, des onglets, des thèmes et du zoom.",
    shortcuts: [
      { keys: ["Ctrl", "P"], label: "Aller à n’importe quelle note" },
      { keys: ["Ctrl", "Maj", "F"], label: "Rechercher dans tout le coffre" },
      { keys: ["Ctrl", "Maj", "K"], label: "Palette de commandes" },
      { keys: ["Ctrl", "Maj", "N"], label: "Note rapide" },
      { keys: ["Ctrl", "Maj", "Entrée"], label: "Mode zen" },
      { keys: ["Ctrl", "+"], label: "Agrandir l’interface" },
    ],
    extras: [
      {
        icon: "keyboard-outline",
        title: "Vos raccourcis",
        body: "Réassignez n’importe quel raccourci depuis les Paramètres.",
      },
      { icon: "palette-outline", title: "Thèmes", body: "Clair, sombre ou le vôtre avec l’éditeur de thèmes." },
      {
        icon: "zoom-in",
        title: "Zoom de 50 à 200 %",
        body: "Met à l’échelle toute l’interface, pas seulement le texte.",
      },
      {
        icon: "delete-outline",
        title: "Une corbeille pour tout",
        body: "Rien n’est supprimé définitivement sans votre confirmation.",
      },
    ],
  },
  facts: {
    eyebrow: "En chiffres",
    title: "Des faits, pas des promesses.",
    items: [
      { label: "langues d’interface" },
      { label: "systèmes d’exploitation" },
      { label: "compte obligatoire" },
      { label: "tests automatisés" },
    ],
  },
  polarBand: {
    eyebrow: "Écosystème",
    title: "Et sur mobile ? Polar.",
    body: "Polar est l’app de tâches pour Android qui se synchronise avec Enki. C’est facultatif : liez-la seulement si vous voulez emporter vos tâches.",
    cta: "Découvrir Polar",
  },
  access: {
    eyebrow: "Accès anticipé",
    title: "Enki est en alpha.",
    lead: "L’app est déjà utilisable au quotidien, mais il n’existe pas encore de version publique à télécharger. Laissez votre e-mail et nous vous préviendrons dès qu’elle sera disponible.",
    status: "En développement",
    soon: "Bientôt",
    platforms: ["Windows", "macOS", "Linux"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes.",
    items: [
      {
        q: "Quand pourrai-je télécharger Enki ?",
        a: "Enki est en alpha et n’a pas encore de date de sortie. Inscrivez-vous à la liste et nous vous écrirons dès qu’une version publique sera disponible.",
      },
      {
        q: "Faut-il créer un compte ?",
        a: "Non. Enki fonctionne sans inscription. Un compte n’est nécessaire que si vous choisissez de lier Polar pour synchroniser vos tâches avec votre téléphone.",
      },
      {
        q: "Où sont stockées mes notes ?",
        a: "Dans un dossier de votre disque que vous choisissez, sous forme de fichiers Markdown ordinaires. Ouvrez-les avec n’importe quel éditeur et sauvegardez-les avec n’importe quel outil.",
      },
      {
        q: "Enki fonctionne-t-il sans internet ?",
        a: "Oui. Notes, Kanban, calendrier et rappels fonctionnent hors ligne. Polar se synchronise au retour de la connexion et continue de fonctionner en attendant.",
      },
      {
        q: "Qu’est-ce que Polar, et en ai-je besoin ?",
        a: "Polar est une app de tâches pour Android qui se synchronise avec Enki via le cloud. C’est facultatif : sans elle, Enki fonctionne exactement de la même façon.",
      },
      {
        q: "Les notes se synchronisent-elles entre appareils ?",
        a: "Pas aujourd’hui. Ce sont les tâches et les rappels de Polar qui se synchronisent. Comme vos notes sont des fichiers ordinaires, vous pouvez les copier avec l’outil de votre choix.",
      },
      {
        q: "Y a-t-il de l’intelligence artificielle ?",
        a: "Non. Enki n’intègre aucun moteur d’IA et ne s’y connecte pas. Ses « compétences » sont des modèles de texte à utiliser avec l’assistant de votre choix.",
      },
      {
        q: "Dans quelles langues Enki est-il disponible ?",
        a: "Espagnol (Espagne et Amérique latine), anglais (États-Unis et Royaume-Uni), allemand et français. Vous pouvez changer de langue sans redémarrer l’app.",
      },
      { q: "Enki est-il open source ?", a: "Non. Enki est un logiciel propriétaire : tous droits réservés." },
      {
        q: "Comment signaler un bug ou faire une suggestion ?",
        a: "Écrivez-nous à {email}. Nous lisons tous les messages.",
      },
    ],
  },
  finalCta: {
    title: "Votre second cerveau, sur votre bureau.",
    lead: "Inscrivez-vous à la liste et nous vous préviendrons dès que vous pourrez le télécharger.",
    cta: "M’inscrire",
  },
  footer: {
    tagline: "Votre second cerveau, sur votre bureau.",
    product: "Produit",
    ecosystem: "Écosystème",
    legal: "Informations légales",
    contact: "Contact",
    portfolio: "Portfolio de l’auteur",
    rights: "Tous droits réservés.",
  },
  legal: {
    draft: "Brouillon en attente de relecture : les informations signalées sont manquantes.",
    updated: "Dernière mise à jour",
    back: "Retour à l’accueil",
    pages: {
      notice: {
        title: "Mentions légales",
        description: "Informations sur l’éditeur du site d’Enki.",
        sections: [
          {
            title: "Éditeur",
            body: [
              "Conformément à l’article 10 de la loi espagnole 34/2002 (LSSI-CE), ce site appartient à [[AUTOR: nom complet]], numéro fiscal [[AUTOR: NIF/NIE]], domicilié aux fins de notification à [[AUTOR: adresse]].",
              "Contact : {email}.",
            ],
          },
          {
            title: "Objet",
            body: [
              "Ce site présente Enki, une application de bureau en développement, et permet de s’inscrire à une liste pour être prévenu des nouvelles versions.",
            ],
          },
          {
            title: "Propriété intellectuelle",
            body: [
              "Enki, son code, son design et le contenu de ce site appartiennent à l’éditeur. Tous droits réservés. Obsidian, Notion et Todoist sont des marques de leurs propriétaires respectifs.",
            ],
          },
          {
            title: "Responsabilité",
            body: [
              "L’éditeur n’est pas responsable de l’usage fait des informations de ce site ni du contenu des sites tiers vers lesquels il renvoie.",
            ],
          },
        ],
      },
      privacy: {
        title: "Politique de confidentialité",
        description: "Comment le site d’Enki traite vos données personnelles.",
        sections: [
          {
            title: "Responsable du traitement",
            body: ["[[AUTOR: nom complet]], numéro fiscal [[AUTOR: NIF/NIE]]. Contact : {email}."],
          },
          {
            title: "Données traitées et finalités",
            body: [
              "Liste d’attente : si vous vous inscrivez, nous utilisons votre e-mail pour vous prévenir des nouvelles versions d’Enki. Base légale : votre consentement, que vous pouvez retirer à tout moment via le lien de désinscription présent dans chaque e-mail.",
              "Mesure d’audience : nous comptons les visites de façon agrégée et sans cookies avec Umami. Aucune adresse IP ni aucun identifiant personnel n’est conservé. Base légale : intérêt légitime à savoir quelles parties du site sont utilisées.",
            ],
          },
          {
            title: "Sous-traitants",
            body: [
              "Buttondown (gestion de la liste d’attente) et [[AUTOR: hébergeur]] (hébergement du site et de la mesure d’audience).",
            ],
          },
          {
            title: "Conservation",
            body: [
              "Votre e-mail est conservé tant que vous restez inscrit. Les données d’audience agrégées ne permettent pas de vous identifier.",
            ],
          },
          {
            title: "Vos droits",
            body: [
              "Vous pouvez exercer vos droits d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité en écrivant à {email}. Vous pouvez aussi introduire une réclamation auprès de l’autorité espagnole de protection des données (aepd.es) ou de la CNIL.",
            ],
          },
          {
            title: "L’app n’est pas le site",
            body: [
              "Cette politique ne concerne que ce site. L’application Enki conserve vos notes et vos données sur votre propre ordinateur et n’envoie aucune donnée d’utilisation à aucun serveur.",
            ],
          },
        ],
      },
      cookies: {
        title: "Politique relative aux cookies",
        description: "Ce que le site d’Enki enregistre dans votre navigateur.",
        sections: [
          {
            title: "Cookies",
            body: [
              "Ce site n’utilise aucun cookie, ni propre ni tiers. La mesure d’audience (Umami) fonctionne sans cookies.",
            ],
          },
          {
            title: "Stockage local",
            body: [
              "Si vous passez du thème clair au thème sombre, votre choix est enregistré dans le stockage local de votre navigateur (clé « enki-theme ») afin d’être respecté lors de votre prochaine visite. Il ne quitte jamais votre navigateur et vous pouvez l’effacer depuis ses paramètres.",
            ],
          },
        ],
      },
    },
  },
  notFound: {
    title: "Page introuvable",
    body: "La page que vous cherchez n’existe pas ou a été déplacée.",
    back: "Retour à l’accueil",
  },
};
