const siteConfig = {
  partnerName: "Ton amoureux", 
  recipientName: "Camille",
  age: 18,
  
  relationshipStartDate: "2025-08-27",

  hero: {
    badge: "❤️ 18 Ans de mon amoureuse 💃",
    title: "Joyeux Anniversaire Camille !",
    subtitle: "Déjà plus d'un an qu'on partage nos délires, notre amour et de beaux moments. Aujourd'hui, c'est ta journée... et j'ai une surprise pour toi.",
    buttonText: "Découvrir la surprise 💖"
  },

  timeline: [
    {
      title: "Il y a un an..",
      subtitle: "Ton premier anniversaire partagé ensemble",
      caption: "Un gâteau de fortune.. mais un gâteau quand même 😇",
      image: "assets/images/image1.png",
      rotation: "-1deg"
    },
    {
      title: "Le Parc Oriental",
      subtitle: "Une complicité naissante",
      caption: "Ce petit cadeau qui ta grandement fais plaisir et qui reste dans notre mémoire",
      image: "assets/images/image2.png",
      rotation: "3deg"
    },
    {
      title: "Des petits moments",
      subtitle: "Un coin amménagé",
      caption: "Notre amour passe aussi par des sessions des Bridgerton en pleine air 🌞",
      image: "assets/images/image3.png",
      rotation: "-3deg"
    },
    {
      title: "Un amour sincère",
      subtitle: "Un peu bizarre parfois",
      caption: "C'est en s'aimant comme des fous qu'on en deviens des petits fous fous (de Sochaux évidemment !)",
      image: "assets/images/image4.png",
      rotation: "2deg"
    }
  ],

  quiz: [
    {
      id: 1,
      question: "Quand est-ce que l'on s'est officielement mis ensemble ?",
      options: [
        { text: "17 août 2026", isCorrect: false, feedback: "Euh, tu es sûre ? Je crois que c'est la date officieuse ça !" },
        { text: "27 août 2026", isCorrect: false, feedback: "Mmmmmh c'est dommage, tu es tombé dans le piège" },
        { text: "29 août 2026", isCorrect: true, feedback: "Bingo ! Déjà plus d'un an de bonheur à tes côtés !" }
      ]
    },
    {
      id: 2,
      question: "Est ce que tu pourrais m'échanger pour 1kg de nougat ?",
      options: [
        { text: "Non, jamais de la vie je ferai ça !", isCorrect: false, feedback: "Menteuse ! Je sais que ça te tenterai un peu.." },
        { text: "Non, mais ça reste un 1kg de nougat quand même..", isCorrect: true, feedback: "Merci ! Je sais que ça te tente mais je pourrai t'en acheter" },
        { text: "Oui, même pour un seul morceau de nougat 😈", isCorrect: false, feedback: "Oooooh.. Je suis triste alors.." }
      ]
    },
    {
      id: 3,
      question: "Quelle série est la plus importante / iconique dans notre relation ?",
      options: [
        { text: "Manifest", isCorrect: true, feedback: "Le classique... mais c'est pas à celle-ci que je pensais" },
        { text: "La Chronique des Bridgerton", isCorrect: true, feedback: "OUI ! Faut dire que j'ai beaucoup aimé au final 🙈" },
        { text: "La Reine Charlotte : Un chapitre Bridgerton", isCorrect: false, feedback: "Mmh... tu brûles, c'est presque ça ! " }
      ]
    },
    {
      id: 4,
      question: "Dernière question : qu'est-ce qui t'attend pour tes 18 ans ?",
      options: [
        { text: "Quelques bisous et un paquet de bonbons 🧦", isCorrect: false, feedback: "Tu mérites quand même un peu mieux pour ta majorité !" },
        { text: "Une surprise que tu vas apprécier 🎁", isCorrect: true, feedback: "C'est validé à 100%, découvrons ça tout de suite !" }
      ]
    }
  ],

  gift: {
    badge: "Cadeau",
    title: "Une Escapade Magique en Amoureux",
    destination: "La Vallée des Singes ",
    destinationImage: "assets/images/monkey-park.svg",
    destinationDesc: "Une journée entre amoureux au cœur de la nature, en totale immersion parmi les autres singes que moi 🐵",
    lodging: "Une nuit comprise ✨",
    lodgingImage: "assets/images/bed-breakfast.svg",
    lodgingDesc: "Une chambre d'hôte ou un hôtel situé à une dizaines de minutes du parc pour se reposer, couper du quotidien et passer une tendre soirée en amoureux.",
    timelineText: "À programmer ensemble avant le week-end du 18 octobre inclus !",
    sweetMessage: "Pour tes 18 ans, je voulais t'offrir un moment qui te tiens à coeur, pour s'émerveiller et profiter rien que tous les deux. Joyeux anniversaire mon amour ! ❤️",
    includedList: [
      "2 entrées pour une journée complète à la Vallée des Singes",
      "1 nuitée pour 2 personnes en chambre d'hôte ou hôtel non loin",
      "1 invitation au restaurant",
      "Tous pleins de bisous avec les câlins inclus !"
    ]
  }
};
