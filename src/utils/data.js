export const latestWork = [
  {
    title: "Closed Captioner",
    image: "/images/soustitreur.PNG",
    description: {
      en: `Rebuilt from scratch the main tool used by one of the biggest closed caption company in Quebec. It allows you to seamlessly integrate and modify subtitles synchronously with video content, producing exportable .srt files.`,
      fr: `Un outil qui permet d'ajouter et modifier des sous-titres en temps réel pour ensuite exporter un fichier .srt`,
    },
    features: {
      en: ["React", "Redux", "Peaks.js"],
      en: ["React", "Redux", "Peaks.js"],
    },
    projectUrl: null,
    codeUrl: null,
  },
  {
    title: "Crayon15",
    image: "/images/crayon.gif",
    description: {
      en: `Constructed an engaging landing page for a startup. It included a responsive animated hero.`,
      fr: `Travaillé sur un Hero animé sur un commerce shopify`,
    },
    features: {
      en: ["Shopify", "Liquid"],
      fr: ["Shopify", "Liquid"],
    },
    projectUrl: "https://crayon15.com",
    codeUrl: null,
  },
  {
    title: "Cymkube",
    image: "/images/cymk.gif",
    description: {
      en: `A wholesome color puzzle game built during a 1 week game jam. This project received notable recognition by the reviewers, securing the 3rd place among 71 participating entries.`,
      fr: `Un jeu de puzzle de couleurs construit en 1 semaine pour un game jam. Ce projet a gagné la 3e place sur 71 participants.`,
    },
    features: {
      en: ["Godot", "Blender"],
      fr: ["Godot", "Blender"],
    },
    projectUrl: "https://sixthmoongames.itch.io/cymkube",
    codeUrl: null,
  },
  {
    title: "Gloomhaven Assistant",
    image: "/images/gloomhaven.gif",
    description: {
      en: `A companion app for the trending board game Gloomhaven. It handles game logic for you, negating the need to manage numerous physical game pieces and making the gameplay quicker and smoother. 
      It introcuded a unique feature that allows users to link their apps together for remote gameplay which saw a lot of success during the pandemic. With close to 2000 active users, the app has effectively established its presence in Gloomhaven's community`,
      fr: `Une application assistante pour un jeu de société. Les applis peuvent être liées ensemble pour permettre aux joueurs de jouer à distance. Environs 2000 utilisateurs actifs l'utilisent, et elle est disponible sur le Google Play Store ainsi que le Apple App Store.`,
    },
    features: {
      en: [
        "Flutter",
        "Socket.io",
        "Provider",
        "Google AdMob",
        "In app purchases",
      ],
      fr: [
        "Flutter",
        "Socket.io",
        "Provider",
        "Google AdMob",
        "Achat dans l'application",
      ],
    },
    projectUrl: "https://gloomhavenassistant.com",
    codeUrl: null,
  },
  {
    title: "Goldrush Canada",
    image: "/images/gold.gif",
    description: {
      en: `A dedicated game website served as the digital hub for a nationwide treasure hunt spanning cities across Canada and managed thousands of simultaneous users. Given the hefty prize pool of $80,000 for the victor in each city, stringent security measures were a critical component of the platform's infrastructure.`,
      fr: `Création du site du joueur pour une chasse au trésor à grandeur d'une ville au travers du Canada. Le 
            site a été utilisé par des milliers d'utilisateurs simultanés et avait 80 000$ en prix à gagner dans chaque ville.`,
    },
    features: ["React", "Node Express", "MongoDB", "Firebase Auth"],
    projectUrl: null,
    codeUrl: null,
  },
];

export const translation = {
  en: {
    work: "Work",
    language: "Français",
    heroText: [
      "I am a ",
      "Full Stack Web Developer ",
      "living in Montreal, currently working as a ",
      "Software Engineer",
      " at",
      " GoTo.",
    ],
    heroOpportunity: [
      "I am seeking opportunities in",
      " Front-End",
      " or",
      " Full-Stack development.",
    ],
    explore: "Explore",
    latestWork: "Latest Work",
    linkProject: "Link to Project",
    linkCode: "Link to Code",
    notAvailable: "Not Publicly Available",
    workingTogether: "Interested in working together?",
    letsTalk: "I am open to freelance contracts and remote work. Let's talk!",
    linkedIn: "Connect on LinkedIn",
    facebook: "Message me on Facebook",
    email: "Send me an E-Mail",
    twitter: "Reach out on Twitter",
  },
  fr: {
    work: "Projets",
    language: "English",
    heroText: [
      "Je suis un  ",
      "Développeur d'applications Web ",
      "situé à Montréal, travaillant présentement en tant que ",
      "Développeur chez GoTo.",
    ],
    heroOpportunity: [
      "Je suis ouvert aux ",
      "opportunitées de carrières en Front-End ou Full-Stack en React.",
    ],
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
    email: "Message par Courriel",
    twitter: "Contactez-moi via Twitter",
  },
};
