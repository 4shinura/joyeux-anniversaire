// =============================================================================
// CONFIGURATION PERSONNALISÉE - SITE ANNIVERSAIRE 18 ANS DE CAMILLE
// =============================================================================
// Tu peux modifier facilement tous les textes, questions, photos et détails
// sans toucher au code HTML ou CSS.

const siteConfig = {
  // Informations Générales
  partnerName: "Ton amoureux", // Tu peux remplacer par ton prénom !
  recipientName: "Camille",
  age: 18,
  
  // Date de début de votre relation (Format: AAAA-MM-JJ) pour le compteur de jours
  // Modifie la date ci-dessous pour que le compteur soit exact !
  relationshipStartDate: "2025-08-27",

  // 1. En-tête / Hero
  hero: {
    badge: "❤️ 18 Ans de mon amoureuse 💃",
    title: "Joyeux Anniversaire Camille !",
    subtitle: "Déjà plus d'un an qu'on partage nos délires, notre amour et de beaux moments. Aujourd'hui, c'est ta journée... et j'ai une surprise pour toi.",
    buttonText: "Découvrir la surprise 💖"
  },

  // 2. Rétrospective & Galerie Souvenirs
  timeline: [
    {
      title: "Il y a un an..",
      subtitle: "Ton premier anniversaire partagé ensemble",
      caption: "Un gâteau de fortune.. mais un gâteau quand même 😇",
      image: "assets/images/image1.png",
      tag: "Souvenir #1",
      rotation: "-1deg"
    },
    {
      title: "Le Parc Oriental",
      subtitle: "Une complicité naissante",
      caption: "Ce petit cadeau qui ta grandement fais plaisir et qui reste dans notre mémoire",
      image: "assets/images/image2.png",
      tag: "Nos délires",
      rotation: "3deg"
    },
    {
      title: "Des petits moments",
      subtitle: "Un coin amménagé",
      caption: "Notre amour passe aussi par des sessions des Bridgerton en pleine air 🌞",
      image: "assets/images/image3.png",
      tag: "Aventure",
      rotation: "-3deg"
    },
    {
      title: "Un amour sincère",
      subtitle: "Un peu bizarre parfois",
      caption: "C'est en s'aimant comme des fous qu'on en deviens des petits fous fous (de Sochaux évidemment !)",
      image: "assets/images/image4.png",
      tag: "Pour toujours",
      rotation: "2deg"
    }
  ],

  // 3. Mini-Quiz des Amoureux
  // Chaque bonne ou mauvaise réponse affiche un petit message personnalisé !
  quiz: [
    {
      id: 1,
      question: "Ça fait combien de temps qu'on s'aime et qu'on s'amuse ensemble ?",
      options: [
        { text: "Environ 2 semaines et demi...", isCorrect: false, feedback: "Euh, tu es sûre ? Je crois que tu as oublié quelques mois là ! 😂" },
        { text: "1 an et quelques (et chaque jour est magique) 💕", isCorrect: true, feedback: "Bingo ! Déjà plus d'un an de bonheur à tes côtés !" },
        { text: "Depuis le Jurassique avec les dinosaures 🦖", isCorrect: false, feedback: "Haha, on est vieux mais pas à ce point !" }
      ]
    },
    {
      id: 2,
      question: "Honnêtement... qui est le plus long à se préparer avant de sortir ?",
      options: [
        { text: "Moi (Camille) évidemment, la perfection prend du temps 💅", isCorrect: true, feedback: "Exactement ! Mais le résultat vaut toujours l'attente ✨" },
        { text: "Toi (mon copain), sans hésitation !", isCorrect: false, feedback: "Menteuse ! J'enfile un jean et je suis prêt en 3 minutes chrono ! 😜" },
        { text: "On est tous les deux en retard de toute façon ⏰", isCorrect: true, feedback: "C'est pas faux... la ponctualité c'est surfait !" }
      ]
    },
    {
      id: 3,
      question: "Quelle est notre activité préférée lors d'un week-end parfait ?",
      options: [
        { text: "Faire la sieste et manger des snacks devant une série 🍿", isCorrect: true, feedback: "Le classique indétrônable... mais attends de voir ce qui t'attend !" },
        { text: "Partir en escapade loin de tout et se ressourcer 🌿", isCorrect: true, feedback: "Mmh... tu brûles ! Tiens-toi bien pour la suite..." },
        { text: "Faire le grand ménage de printemps un dimanche matin 🧹", isCorrect: false, feedback: "Absolument jamais de la vie ! 😂" }
      ]
    },
    {
      id: 4,
      question: "Dernière question : qu'est-ce qui t'attend pour tes 18 ans ?",
      options: [
        { text: "Une paire de chaussettes et un paquet de bonbons 🧦", isCorrect: false, feedback: "Tu mérites quand même un peu mieux pour ta majorité !" },
        { text: "Un week-end surprise magique rien que tous les deux 🎁", isCorrect: true, feedback: "C'est validé à 100% ! Découvrons ça tout de suite..." }
      ]
    }
  ],

  // 4. Dévoilement du Cadeau
  gift: {
    badge: "Passeport Évasion VIP 18 Ans",
    title: "Une Escapade Magique en Amoureux",
    destination: "La Vallée des Singes 🐒🌴",
    destinationImage: "assets/images/monkey-park.svg",
    destinationDesc: "Une journée d'émerveillement au cœur de la nature, en totale immersion parmi plus de 450 primates en liberté. Prépare-toi à voir des lémuriens curieux, des grands singes fascinants et des paysages magnifiques !",
    lodging: "Nuitée en Chambre d'Hôte Cocooning 🏡✨",
    lodgingImage: "assets/images/bed-breakfast.svg",
    lodgingDesc: "Un charmant havre de paix situé à seulement 10 minutes du parc, pour se reposer, profiter du calme et passer une délicieuse soirée cocooning à deux.",
    timelineText: "À programmer ensemble avant le week-end du 18 octobre inclus !",
    sweetMessage: "Pour tes 18 ans, je voulais t'offrir un moment inoubliable, hors du temps, pour rire, s'émerveiller et profiter rien que tous les deux. Joyeux 18 ans mon amour ! ❤️",
    includedList: [
      "2 entrées pour une journée complète à la Vallée des Singes",
      "1 nuitée pour 2 personnes en chambre d'hôte de charme à 10 min",
      "Petit-déjeuner gourmand & moment de détente absolue",
      "Tous les souvenirs, les fous rires et les câlins inclus !"
    ]
  }
};
