export const quizData = [
  {
    id: "1",
    title: "Quiz : Biologie Cellulaire",
    description: "Testez vos connaissances sur les organites, l'ADN et les membranes.",
    questions: [
      {
        question: "Quel est le rôle du noyau ?",
        options: ["Respiration cellulaire", "Stockage de l'ADN", "Synthèse des protéines", "Production d'énergie"],
        answer: "Stockage de l'ADN",
      },
      {
        question: "Quelle est la fonction principale des mitochondries ?",
        options: ["Digestion cellulaire", "Photosynthèse", "Production d'ATP", "Stockage de l'eau"],
        answer: "Production d'ATP",
      },
      {
        question: "Qu'est-ce qu'une cellule eucaryote possède que la procaryote n'a pas ?",
        options: ["Cytoplasme", "Membrane cellulaire", "Noyau délimité", "Ribosomes"],
        answer: "Noyau délimité",
      },
    ],
  },
  {
    id: "2",
    title: "Quiz : Algorithmique Fondamentale",
    description: "Évaluez votre compréhension des boucles, conditions et variables.",
    questions: [
      {
        question: "Quel type de boucle s'exécute au moins une fois ?",
        options: ["For", "While", "Do-While", "If"],
        answer: "Do-While",
      },
      {
        question: "Qu'est-ce qu'une variable booléenne peut contenir ?",
        options: ["Un nombre", "Une chaîne de caractères", "Vrai ou Faux", "Une liste"],
        answer: "Vrai ou Faux",
      },
      {
        question: "Dans un algorithme, que signifie 'incrémenter' une variable ?",
        options: ["La diviser", "Lui ajouter 1", "La multiplier par 2", "La soustraire de 1"],
        answer: "Lui ajouter 1",
      },
    ],
  },
  {
    id: "3",
    title: "Quiz : Histoire de France (Révolution)",
    description: "Testez vos connaissances sur les événements clés de la Révolution Française.",
    questions: [
      {
        question: "Quelle année marque la prise de la Bastille ?",
        options: ["1788", "1789", "1790", "1792"],
        answer: "1789",
      },
      {
        question: "Quel roi a été guillotiné pendant la Révolution Française ?",
        options: ["Louis XIV", "Louis XV", "Louis XVI", "Napoléon Ier"],
        answer: "Louis XVI",
      },
    ],
  },
  {
    id: "4",
    title: "Quiz : Géographie du Monde",
    description: "Identifiez des capitales, des continents et des particularités géographiques.",
    questions: [
      {
        question: "Quelle est la capitale du Canada ?",
        options: ["Toronto", "Montréal", "Vancouver", "Ottawa"],
        answer: "Ottawa",
      },
      {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        answer: "Pacifique",
      },
    ],
  },
  {
    id: "5",
    title: "Quiz : Chimie Organique",
    description: "Questions sur les groupes fonctionnels et la nomenclature.",
    questions: [
      {
        question: "Quel groupe fonctionnel caractérise un alcool ?",
        options: ["-COOH", "-OH", "-CHO", "-NH2"],
        answer: "-OH",
      },
      {
        question: "Quel est le nom de l'alcane à un atome de carbone ?",
        options: ["Éthane", "Méthane", "Propane", "Butane"],
        answer: "Méthane",
      },
    ],
  },
  {
    id: "6",
    title: "Quiz : Informatique Générale",
    description: "Connaissances générales sur les systèmes d'exploitation et le hardware.",
    questions: [
      {
        question: "Quel composant d'un ordinateur est responsable du traitement des données ?",
        options: ["RAM", "Disque Dur", "Carte Mère", "CPU"],
        answer: "CPU",
      },
      {
        question: "Quel système d'exploitation est open source ?",
        options: ["Windows", "macOS", "Linux", "iOS"],
        answer: "Linux",
      },
    ],
  },
  {
    id: "7",
    title: "Quiz : Littérature Française",
    description: "Testez vos connaissances sur les auteurs et œuvres classiques.",
    questions: [
      {
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Albert Camus"],
        answer: "Victor Hugo",
      },
    ],
  },
  {
    id: "8",
    title: "Quiz : Musique Classique",
    description: "Identifiez des compositeurs et des instruments.",
    questions: [
      {
        question: "Qui a composé la 'Symphonie n°5' ?",
        options: ["Mozart", "Bach", "Beethoven", "Chopin"],
        answer: "Beethoven",
      },
    ],
  },
  {
    id: "9",
    title: "Quiz : Physique Quantique",
    description: "Concepts de base de la mécanique quantique.",
    questions: [
      {
        question: "Quel est le concept clé de la dualité onde-particule ?",
        options: ["Relativité", "Quantification", "Superposition", "Intrication"],
        answer: "Superposition",
      },
    ],
  },
  {
    id: "10",
    title: "Quiz : Économie",
    description: "Principes fondamentaux de l'économie.",
    questions: [
      {
        question: "Quelle est la principale fonction d'une banque centrale ?",
        options: ["Accorder des prêts aux particuliers", "Émettre de la monnaie", "Gérer les bourses", "Faire des investissements privés"],
        answer: "Émettre de la monnaie",
      },
    ],
  },
];

export const exerciceData = [
  {
    id: "1",
    title: "Exercice : Fonctions Logiques",
    subject: "Technologie",
    level: "Facile",
    content: "Complétez la table de vérité pour la fonction logique $F = A \\cdot B + \\neg C$.",
    instructions: "Indiquez les valeurs de F pour toutes les combinaisons possibles de A, B et C (0 ou 1)."
  },
  {
    id: "2",
    title: "Exercice : Calcul d'aires",
    subject: "Mathématiques",
    level: "Moyen",
    content: "Calculez l'aire d'un cercle de rayon 5 cm. (Utilisez $\\pi \\approx 3.14$)",
    instructions: "Donnez le résultat au dixième près."
  },
  {
    id: "3",
    title: "Exercice : Structure HTML",
    subject: "Informatique",
    level: "Facile",
    content: "Écrivez le code HTML de base pour une page web avec un titre 'Ma Page' et un paragraphe 'Bienvenue'.",
    instructions: "N'oubliez pas les balises doctype, html, head et body."
  },
  {
    id: "4",
    title: "Exercice : Conjugaison des verbes",
    subject: "Français",
    level: "Moyen",
    content: "Conjuguez le verbe 'aller' au présent de l'indicatif pour toutes les personnes.",
    instructions: "Écrivez les six formes conjuguées."
  },
  {
    id: "5",
    title: "Exercice : Réaction Acido-Basique",
    subject: "Chimie",
    level: "Difficile",
    content: "Équilibrez l'équation de la réaction entre l'acide sulfurique (H₂SO₄) et l'hydroxyde de sodium (NaOH).",
    instructions: "Indiquez les coefficients stœchiométriques."
  },
  {
    id: "6",
    title: "Exercice : Tableaux en Python",
    subject: "Informatique",
    level: "Facile",
    content: "Créez une liste Python contenant les nombres de 1 à 5, puis ajoutez le nombre 6 à cette liste.",
    instructions: "Montrez le code et le résultat de la liste finale."
  },
  {
    id: "7",
    title: "Exercice : Forces et Mouvements",
    subject: "Physique",
    level: "Moyen",
    content: "Un objet de 2 kg est soumis à une force de 10 N. Calculez son accélération.",
    instructions: "Utilisez la deuxième loi de Newton. Donnez la réponse en m/s²."
  },
  {
    id: "8",
    title: "Exercice : Dates Historiques",
    subject: "Histoire",
    level: "Facile",
    content: "Associez les dates suivantes aux événements historiques corrects : 1492, 1789, 1945.",
    instructions: "Événements : Fin de la Seconde Guerre Mondiale, Découverte de l'Amérique, Révolution Française."
  },
  {
    id: "9",
    title: "Exercice : Grammaire Anglaise - Temps",
    subject: "Anglais",
    level: "Moyen",
    content: "Complétez la phrase suivante avec le temps correct du verbe 'go' : 'She ______ to the store every day.'",
    instructions: "Choisissez entre 'go', 'goes', 'went', 'gone'."
  },
  {
    id: "10",
    title: "Exercice : Algèbre - Équations",
    subject: "Mathématiques",
    level: "Facile",
    content: "Résolvez l'équation suivante pour x : $3x + 7 = 22$.",
    instructions: "Montrez les étapes de résolution."
  },
  {
    id: "11",
    title: "Exercice : Anatomie Humaine",
    subject: "Biologie",
    level: "Moyen",
    content: "Nommez les trois os principaux du bras humain.",
    instructions: "Donnez les noms exacts."
  },
  {
    id: "12",
    title: "Exercice : Capitales Européennes",
    subject: "Géographie",
    level: "Facile",
    content: "Associez les pays suivants à leurs capitales : France, Allemagne, Italie, Espagne.",
    instructions: "Capitales : Rome, Madrid, Berlin, Paris."
  },
];