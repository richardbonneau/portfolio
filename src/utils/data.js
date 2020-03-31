export const latestWork = [
  {
    title: "Gloomhaven Assistant",
    image: "/images/gloomhaven.gif",
    description: {
      en: `Gloomhaven is a board game where you have to keep track of a lot of things. 
       Gloomhaven Assistant aims to handle those for a smooth gameplay.`,
      fr: `Gloomhaven Assistant vise à éliminer les tâches les plus longues que nécessite le jeu de société.`
    },
    features: {
      en: ["Flutter", "Google AdMob", "In app purchases"],
      fr: ["Flutter", "Google AdMob", "Achat dans l'application"]
    },
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.richard.gloomhaven_assistant",
    codeUrl: null
  },
  {
    title: "Freelancify.io",
    image: "/images/freelancify.gif",
    description: {
      en: `Freelancify is a free invoicing service for freelancers.`,
      fr: `Freelancify est un service de facturation gratuit pour les pigistes. `
    },
    features: ["React", "Firebase Auth", "Firebase Firestore"],
    projectUrl: "https://www.freelancify.io/",

    codeUrl: null
  },
  {
    title: "Goldrush Canada",
    image: "/images/gold.gif",
    description: {
      en: `Game website for a city-wide treasure hunt across Canada. It was used 
            by thousands of concurrent users and had 
            80 000$ in prize for the winner of the event of each city.`,
      fr: `Création du site du joueur pour une chasse au trésor à grandeur d'une ville au travers du Canada. Le 
            site a été utilisé par des milliers d'utilisateurs simultanés et avait 80 000$ en prix à gagner dans chaque ville.`
    },
    features: ["React", "Node Express", "MongoDB", "Firebase Auth"],
    projectUrl: null,
    codeUrl: null
  },
  {
    title: "Pomodoro Productivity",
    image: "/images/pomo.gif",
    description: {
      en:
        "Lightweight productivity mobile app inspired by the Pomodoro method.",
      fr:
        "Application mobile qui s'inspire de la Technique de productivité Pomodoro"
    },
    features: ["Flutter", "Push Notifications"],
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.richardbonneau.pomodoro_productivity",
    codeUrl: "https://github.com/richardbonneau/pomodoro_flutter"
  },
  {
    title: "Sweeper.net",
    image: "https://img.itch.zone/aW1nLzE2NzQ4OTUuanBn/347x500/jIlllj.jpg",
    description: {
      en:
        "Game made within a month for the game jam 'Game Off 2018' held by github. The game won the 31st place out of 324 for theme interpretation and got partly funded on kickstarter.",
      fr:
        "Jeu réalisé dans un délai d'un mois pour le GameJam 'Game Off 2018' organisé par github. Le jeu a remporté la 31e place sur 324 pour l'interprétation thématique et a été partiellement financé sur Kickstarter."
    },
    features: ["Unity", "C#", "Blender"],
    projectUrl: "https://sixthmoon.itch.io/sweeper-net",
    codeUrl: "https://github.com/richardbonneau/Game_Off_2018"
  },
  {
    title: "Inventorify",
    image: "/images/inventorify.gif",
    description: {
      en:
        "App made to modify a large quantity of products in the Shopify Admin Panel.",
      fr:
        "Application Shopify conçue afin de gérer une grande quantité de produits à l'interne, sur le panneau d'administrateur"
    },
    features: {
      en: ["React", "Shopify API", "Shopify's Polaris component library"],
      fr: [
        "React",
        "API Shopify",
        "Bibliothèque de composants Polaris par Shopify"
      ]
    },
    projectUrl: null,
    codeUrl: null
  }
];

export const translation = {
  en: {
    work: "Work",
    language: "Français",
    heroTextPartOne: "I am a full stack ",
    heroTextPartTwo: "Web and Mobile Developer ",
    heroTextPartThree: "living in Montreal, currently working as a ",
    heroTextPartFour: "Freelancer",
    explore: "Explore",
    latestWork: "Latest Work",
    linkProject: "Link to Project",
    linkCode: "Link to Code",
    notAvailable: "Not Publicly Available",
    workingTogether: "Interested in working together?",
    letsTalk: "I am open to freelance contracts and remote work. Let's talk!",
    linkedIn: "Connect on LinkedIn",
    facebook: "Message me on Facebook",
    email: "Send me an E-Mail"
  },
  fr: {
    work: "Projets",
    language: "English",
    heroTextPartOne: "Je suis un  ",
    heroTextPartTwo: "Développeur d'applications Web et Mobile ",
    heroTextPartThree:
      "situé à Montréal, travaillant présentement en tant que ",
    heroTextPartFour: "Pigiste",
    explore: "Explorez",
    latestWork: "Projets Récents",
    linkProject: "Lien vers le projet",
    linkCode: "Lien vers le code",
    notAvailable: "Non Disponible au public",
    workingTogether: "Vous êtes intéressé à travailler avec moi?",
    letsTalk:
      "Je suis ouvert aux contrats indépendants et au travail à distance. Parlons!",
    linkedIn: "Message par LinkedIn",
    facebook: "Message par Facebook",
    email: "Message par Courriel"
  }
};
