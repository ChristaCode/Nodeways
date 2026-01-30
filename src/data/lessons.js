// Lesson content for each grammar concept
// A1 Level Lessons - Complete coverage of beginner French grammar

export const lessons = {
  // === NOUNS & ARTICLES ===
  
  nouns: {
    title: "Nouns in French",
    content: [
      {
        type: "paragraph",
        text: "Nouns are words that name people, places, things, or ideas. In French, every noun has a gender: masculine or feminine. This is fundamental to French grammar."
      },
      {
        type: "heading",
        text: "Key Points"
      },
      {
        type: "list",
        items: [
          "Every French noun is either masculine or feminine",
          "Gender is not always logical (la table is feminine, le livre is masculine)",
          "Gender affects articles, adjectives, and pronouns",
          "Plurals are usually formed by adding -s, but there are exceptions"
        ]
      },
      {
        type: "heading",
        text: "Examples"
      },
      {
        type: "examples",
        items: [
          { french: "le livre", english: "the book (masculine)" },
          { french: "la table", english: "the table (feminine)" },
          { french: "les livres", english: "the books (plural)" },
          { french: "un chat", english: "a cat (masculine)" },
          { french: "une voiture", english: "a car (feminine)" }
        ]
      },
      {
        type: "tip",
        text: "💡 Tip: Always learn nouns with their articles (le/la) to remember gender. Don't try to memorize gender rules—practice makes it natural!"
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "What is the gender of 'livre' (book)?",
        options: ["Masculine", "Feminine", "Both", "Neither"],
        correct: 0,
        explanation: "Le livre is masculine. Use 'le' (not 'la') with livre."
      },
      {
        type: "multiple_choice",
        question: "Which is correct: ___ maison (house)?",
        options: ["le", "la", "les", "un"],
        correct: 1,
        explanation: "La maison is correct. Maison is feminine, so it takes 'la'."
      }
    ]
  },
  
  gender: {
    title: "Gender in French",
    content: [
      {
        type: "paragraph",
        text: "French nouns have grammatical gender. This is one of the most important concepts in French grammar and affects almost everything you say."
      },
      {
        type: "heading",
        text: "Understanding Gender"
      },
      {
        type: "paragraph",
        text: "Unlike English, French assigns gender to all nouns. This gender affects:"
      },
      {
        type: "list",
        items: [
          "Articles (le/la, un/une)",
          "Adjectives (must agree with gender)",
          "Past participles (with être verbs)",
          "Pronouns (il/elle)"
        ]
      },
      {
        type: "heading",
        text: "Common Patterns"
      },
      {
        type: "paragraph",
        text: "While there are no foolproof rules, some patterns can help:"
      },
      {
        type: "examples",
        items: [
          { french: "le garçon", english: "the boy (masculine)" },
          { french: "la fille", english: "the girl (feminine)" },
          { french: "un chat", english: "a cat (masculine)" },
          { french: "une maison", english: "a house (feminine)" }
        ]
      },
      {
        type: "tip",
        text: "💡 Tip: There's no foolproof rule for gender. Learn nouns with their articles (le/la) to remember gender. Practice with flashcards!"
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "Which article is correct: ___ voiture",
        options: ["le", "la", "les", "un"],
        correct: 1,
        explanation: "La voiture is correct. Voiture is feminine, so it takes 'la'."
      },
      {
        type: "multiple_choice",
        question: "Is 'café' (coffee) masculine or feminine?",
        options: ["Masculine", "Feminine"],
        correct: 0,
        explanation: "Le café is masculine. Remember: le café, not la café."
      }
    ]
  },

  number: {
    title: "Number: Singular and Plural",
    content: [
      {
        type: "paragraph",
        text: "French nouns can be singular (one) or plural (more than one). Understanding how to form plurals is essential for basic communication."
      },
      {
        type: "heading",
        text: "Basic Plural Formation"
      },
      {
        type: "paragraph",
        text: "Most French nouns form the plural by adding -s:"
      },
      {
        type: "examples",
        items: [
          { french: "le livre → les livres", english: "the book → the books" },
          { french: "la table → les tables", english: "the table → the tables" },
          { french: "un chat → des chats", english: "a cat → some cats" }
        ]
      },
      {
        type: "heading",
        text: "Important Exceptions"
      },
      {
        type: "list",
        items: [
          "Nouns ending in -s, -x, -z: no change (le prix → les prix)",
          "Nouns ending in -au, -eu: add -x (le château → les châteaux)",
          "Nouns ending in -al: change to -aux (le journal → les journaux)"
        ]
      },
      {
        type: "heading",
        text: "Articles with Plurals"
      },
      {
        type: "paragraph",
        text: "All plural nouns use 'les' (definite) or 'des' (indefinite), regardless of gender:"
      },
      {
        type: "examples",
        items: [
          { french: "les livres", english: "the books" },
          { french: "les tables", english: "the tables" },
          { french: "des chats", english: "some cats" }
        ]
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "What is the plural of 'le livre'?",
        options: ["le livres", "les livre", "les livres", "la livres"],
        correct: 2,
        explanation: "Les livres is correct. Add -s and use 'les' for plural."
      },
      {
        type: "fill_blank",
        question: "Complete: J'ai deux ___ (I have two cats)",
        answer: "chats",
        explanation: "Chats is the plural of chat. Add -s for plural."
      }
    ]
  },

  definite_articles: {
    title: "Definite Articles (le, la, les)",
    content: [
      {
        type: "paragraph",
        text: "Definite articles are used for specific or known nouns. They must agree with the gender and number of the noun."
      },
      {
        type: "heading",
        text: "Forms"
      },
      {
        type: "examples",
        items: [
          { french: "le (masculine singular)", english: "the" },
          { french: "la (feminine singular)", english: "the" },
          { french: "les (plural, both genders)", english: "the" }
        ]
      },
      {
        type: "heading",
        text: "When to Use Definite Articles"
      },
      {
        type: "list",
        items: [
          "With specific nouns: le livre (the book)",
          "With general concepts: j'aime le chocolat (I like chocolate)",
          "With countries: la France, le Canada",
          "With languages: le français, l'anglais",
          "With days of the week: le lundi (Mondays)"
        ]
      },
      {
        type: "heading",
        text: "Examples"
      },
      {
        type: "examples",
        items: [
          { french: "le garçon", english: "the boy" },
          { french: "la fille", english: "the girl" },
          { french: "les enfants", english: "the children" },
          { french: "j'aime le café", english: "I like coffee" }
        ]
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "Choose the correct article: ___ table",
        options: ["le", "la", "les", "un"],
        correct: 1,
        explanation: "La table is correct because table is feminine singular."
      },
      {
        type: "fill_blank",
        question: "Complete: J'aime ___ chocolat (I like chocolate)",
        answer: "le",
        explanation: "Use 'le' for general concepts like 'chocolate'."
      }
    ]
  },

  indefinite_articles: {
    title: "Indefinite Articles (un, une, des)",
    content: [
      {
        type: "paragraph",
        text: "Indefinite articles are used for non-specific nouns. They mean 'a', 'an', or 'some' in English."
      },
      {
        type: "heading",
        text: "Forms"
      },
      {
        type: "examples",
        items: [
          { french: "un (masculine singular)", english: "a/an" },
          { french: "une (feminine singular)", english: "a/an" },
          { french: "des (plural)", english: "some" }
        ]
      },
      {
        type: "heading",
        text: "When to Use Indefinite Articles"
      },
      {
        type: "list",
        items: [
          "With non-specific nouns: un livre (a book)",
          "When introducing something: C'est une table (It's a table)",
          "With quantities: J'ai des amis (I have some friends)"
        ]
      },
      {
        type: "heading",
        text: "Examples"
      },
      {
        type: "examples",
        items: [
          { french: "un garçon", english: "a boy" },
          { french: "une fille", english: "a girl" },
          { french: "des livres", english: "some books" },
          { french: "J'ai un chat", english: "I have a cat" }
        ]
      },
      {
        type: "tip",
        text: "💡 Tip: 'Des' is used for plural indefinite nouns. It's like saying 'some' in English."
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "Choose the correct article: J'ai ___ chat (I have a cat)",
        options: ["le", "la", "un", "une"],
        correct: 2,
        explanation: "Un chat is correct. Chat is masculine, so use 'un'."
      },
      {
        type: "fill_blank",
        question: "Complete: C'est ___ table (It's a table)",
        answer: "une",
        explanation: "Une table is correct. Table is feminine, so use 'une'."
      }
    ]
  },

  // === PRONOUNS ===

  subject_pronouns: {
    title: "Subject Pronouns",
    content: [
      {
        type: "paragraph",
        text: "Subject pronouns indicate who or what performs the action. They're essential for every sentence with a verb."
      },
      {
        type: "heading",
        text: "The Subject Pronouns"
      },
      {
        type: "examples",
        items: [
          { french: "je", english: "I" },
          { french: "tu", english: "you (informal)" },
          { french: "il", english: "he/it (masculine)" },
          { french: "elle", english: "she/it (feminine)" },
          { french: "nous", english: "we" },
          { french: "vous", english: "you (formal/plural)" },
          { french: "ils", english: "they (masculine/mixed)" },
          { french: "elles", english: "they (feminine only)" }
        ]
      },
      {
        type: "heading",
        text: "Important Notes"
      },
      {
        type: "list",
        items: [
          "Je becomes j' before a vowel: j'aime (I like)",
          "Tu is informal (friends, family); vous is formal (strangers, respect)",
          "Il/elle can mean 'it' for things: il est grand (it is big)",
          "Ils is used for mixed groups (men + women)"
        ]
      },
      {
        type: "heading",
        text: "Examples in Sentences"
      },
      {
        type: "examples",
        items: [
          { french: "Je suis français", english: "I am French" },
          { french: "Tu parles anglais", english: "You speak English" },
          { french: "Il est étudiant", english: "He is a student" },
          { french: "Nous aimons le café", english: "We like coffee" }
        ]
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "Which pronoun means 'we'?",
        options: ["je", "tu", "nous", "vous"],
        correct: 2,
        explanation: "Nous means 'we'. Je = I, tu = you (informal), vous = you (formal/plural)."
      },
      {
        type: "fill_blank",
        question: "Complete: ___ suis étudiant (I am a student)",
        answer: "Je",
        explanation: "Je means 'I'. It becomes 'j'' before vowels: j'aime."
      }
    ]
  },

  // === VERBS ===

  verbs: {
    title: "Verbs: The Basics",
    content: [
      {
        type: "paragraph",
        text: "Verbs express actions, states, or occurrences. In French, verbs must be conjugated to match the subject."
      },
      {
        type: "heading",
        text: "What is a Verb?"
      },
      {
        type: "paragraph",
        text: "Verbs are action words. In French, every verb has different forms depending on who is doing the action."
      },
      {
        type: "examples",
        items: [
          { french: "parler", english: "to speak" },
          { french: "être", english: "to be" },
          { french: "avoir", english: "to have" },
          { french: "aimer", english: "to like/love" }
        ]
      },
      {
        type: "heading",
        text: "Verb Groups"
      },
      {
        type: "list",
        items: [
          "-er verbs: most common (parler, aimer, manger)",
          "-ir verbs: second group (finir, choisir)",
          "-re verbs: third group (vendre, attendre)",
          "Irregular verbs: don't follow patterns (être, avoir, aller)"
        ]
      },
      {
        type: "heading",
        text: "The Infinitive"
      },
      {
        type: "paragraph",
        text: "The infinitive is the base form of the verb (to speak, to eat). In French, infinitives end in -er, -ir, or -re."
      },
      {
        type: "tip",
        text: "💡 Tip: Start with -er verbs—they're the easiest and most common!"
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "Which is a French verb?",
        options: ["le livre", "parler", "la table", "un chat"],
        correct: 1,
        explanation: "Parler (to speak) is a verb. The others are nouns."
      }
    ]
  },

  verb_conjugation: {
    title: "Verb Conjugation",
    content: [
      {
        type: "paragraph",
        text: "Conjugation means changing the verb ending to match the subject. This is essential in French—every verb must be conjugated."
      },
      {
        type: "heading",
        text: "Why Conjugate?"
      },
      {
        type: "paragraph",
        text: "In English, we say 'I speak' and 'he speaks' (only the third person changes). In French, every person has a different ending."
      },
      {
        type: "heading",
        text: "The Pattern for -er Verbs"
      },
      {
        type: "paragraph",
        text: "Most French verbs end in -er. Here's the basic pattern using 'parler' (to speak):"
      },
      {
        type: "examples",
        items: [
          { french: "je parle", english: "I speak" },
          { french: "tu parles", english: "you speak" },
          { french: "il/elle parle", english: "he/she speaks" },
          { french: "nous parlons", english: "we speak" },
          { french: "vous parlez", english: "you speak" },
          { french: "ils/elles parlent", english: "they speak" }
        ]
      },
      {
        type: "heading",
        text: "Steps to Conjugate"
      },
      {
        type: "list",
        items: [
          "Take the infinitive: parler",
          "Remove the -er ending: parl-",
          "Add the appropriate ending: -e, -es, -e, -ons, -ez, -ent"
        ]
      },
      {
        type: "tip",
        text: "💡 Tip: Practice with common verbs like aimer (to like), manger (to eat), and habiter (to live)."
      }
    ],
    exercises: [
      {
        type: "fill_blank",
        question: "Complete: Tu ___ français (You speak French)",
        answer: "parles",
        explanation: "Tu parles uses the -es ending for 'tu'."
      },
      {
        type: "multiple_choice",
        question: "How do you say 'we speak'?",
        options: ["je parle", "tu parles", "nous parlons", "vous parlez"],
        correct: 2,
        explanation: "Nous parlons is correct. Nous uses the -ons ending."
      }
    ]
  },

  regular_er_verbs: {
    title: "Regular -er Verbs",
    content: [
      {
        type: "paragraph",
        text: "Regular -er verbs are the most common verbs in French. Once you learn the pattern, you can conjugate thousands of verbs!"
      },
      {
        type: "heading",
        text: "The Conjugation Pattern"
      },
      {
        type: "paragraph",
        text: "All regular -er verbs follow the same pattern. Here's 'aimer' (to like/love) as an example:"
      },
      {
        type: "examples",
        items: [
          { french: "j'aime", english: "I like" },
          { french: "tu aimes", english: "you like" },
          { french: "il/elle aime", english: "he/she likes" },
          { french: "nous aimons", english: "we like" },
          { french: "vous aimez", english: "you like" },
          { french: "ils/elles aiment", english: "they like" }
        ]
      },
      {
        type: "heading",
        text: "Common -er Verbs"
      },
      {
        type: "list",
        items: [
          "aimer (to like/love)",
          "parler (to speak)",
          "manger (to eat)",
          "habiter (to live)",
          "travailler (to work)",
          "étudier (to study)",
          "regarder (to watch)",
          "écouter (to listen)"
        ]
      },
      {
        type: "heading",
        text: "Practice Examples"
      },
      {
        type: "examples",
        items: [
          { french: "J'aime le café", english: "I like coffee" },
          { french: "Tu habites à Paris", english: "You live in Paris" },
          { french: "Nous travaillons", english: "We work" }
        ]
      }
    ],
    exercises: [
      {
        type: "fill_blank",
        question: "Complete: J'___ le français (I like French)",
        answer: "aime",
        explanation: "J'aime uses the -e ending for 'je' (which becomes j' before vowels)."
      },
      {
        type: "fill_blank",
        question: "Complete: Nous ___ à Paris (We live in Paris)",
        answer: "habitons",
        explanation: "Nous habitons uses the -ons ending for 'nous'."
      }
    ]
  },

  present_tense: {
    title: "Present Tense (Le Présent)",
    content: [
      {
        type: "paragraph",
        text: "The present tense is used to express current actions, general truths, and habitual actions. It's the most important tense to learn first."
      },
      {
        type: "heading",
        text: "When to Use Present Tense"
      },
      {
        type: "list",
        items: [
          "Current actions: Je parle (I am speaking)",
          "General truths: Le soleil brille (The sun shines)",
          "Habitual actions: Je mange à midi (I eat at noon)"
        ]
      },
      {
        type: "heading",
        text: "Regular -er Verbs"
      },
      {
        type: "paragraph",
        text: "Most French verbs end in -er. Here's how to conjugate them:"
      },
      {
        type: "examples",
        items: [
          { french: "je parle", english: "I speak" },
          { french: "tu parles", english: "you speak" },
          { french: "il/elle parle", english: "he/she speaks" },
          { french: "nous parlons", english: "we speak" },
          { french: "vous parlez", english: "you speak" },
          { french: "ils/elles parlent", english: "they speak" }
        ]
      },
      {
        type: "heading",
        text: "Essential Irregular Verbs"
      },
      {
        type: "paragraph",
        text: "These must be memorized—they're used constantly:"
      },
      {
        type: "examples",
        items: [
          { french: "être (to be): je suis, tu es, il est, nous sommes, vous êtes, ils sont", english: "" },
          { french: "avoir (to have): j'ai, tu as, il a, nous avons, vous avez, ils ont", english: "" },
          { french: "aller (to go): je vais, tu vas, il va, nous allons, vous allez, ils vont", english: "" }
        ]
      }
    ],
    exercises: [
      {
        type: "fill_blank",
        question: "Complete: Je ___ français. (I speak French)",
        answer: "parle",
        explanation: "Je parle is the first person singular form of parler."
      },
      {
        type: "multiple_choice",
        question: "How do you say 'I am'?",
        options: ["je suis", "j'ai", "je vais", "je parle"],
        correct: 0,
        explanation: "Je suis means 'I am'. It's the present tense of être."
      }
    ]
  },

  infinitive: {
    title: "The Infinitive",
    content: [
      {
        type: "paragraph",
        text: "The infinitive is the base form of the verb—the 'to' form in English (to speak, to eat, to go)."
      },
      {
        type: "heading",
        text: "What is the Infinitive?"
      },
      {
        type: "paragraph",
        text: "In French, infinitives end in -er, -ir, or -re. They're the form you find in dictionaries."
      },
      {
        type: "examples",
        items: [
          { french: "parler", english: "to speak" },
          { french: "finir", english: "to finish" },
          { french: "vendre", english: "to sell" },
          { french: "être", english: "to be" },
          { french: "avoir", english: "to have" }
        ]
      },
      {
        type: "heading",
        text: "When to Use the Infinitive"
      },
      {
        type: "list",
        items: [
          "After certain verbs: Je veux parler (I want to speak)",
          "After prepositions: pour manger (to eat/for eating)",
          "In verb phrases: Je vais étudier (I'm going to study)"
        ]
      },
      {
        type: "heading",
        text: "Common Verbs + Infinitive"
      },
      {
        type: "examples",
        items: [
          { french: "vouloir + infinitive", english: "to want to do something" },
          { french: "pouvoir + infinitive", english: "to be able to do something" },
          { french: "aimer + infinitive", english: "to like to do something" },
          { french: "aller + infinitive", english: "to be going to do (near future)" }
        ]
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "What is the infinitive form of 'je parle'?",
        options: ["parler", "parles", "parlons", "parlez"],
        correct: 0,
        explanation: "Parler is the infinitive. Remove the conjugation to get the base form."
      },
      {
        type: "fill_blank",
        question: "Complete: Je veux ___ (I want to speak)",
        answer: "parler",
        explanation: "After 'vouloir', use the infinitive form 'parler'."
      }
    ]
  },

  // === SENTENCE STRUCTURE ===

  sentence_structure: {
    title: "Sentence Structure",
    content: [
      {
        type: "paragraph",
        text: "French sentence structure follows a basic pattern: Subject + Verb + Object (SVO), similar to English but with some important differences."
      },
      {
        type: "heading",
        text: "Basic Word Order"
      },
      {
        type: "paragraph",
        text: "The most common sentence structure is:"
      },
      {
        type: "examples",
        items: [
          { french: "Subject + Verb", english: "Je parle (I speak)" },
          { french: "Subject + Verb + Object", english: "J'aime le café (I like coffee)" },
          { french: "Subject + Verb + Adjective", english: "Il est grand (He is tall)" }
        ]
      },
      {
        type: "heading",
        text: "Key Differences from English"
      },
      {
        type: "list",
        items: [
          "Adjectives usually come AFTER the noun: une voiture rouge (a red car)",
          "Some common adjectives come BEFORE: un bon livre (a good book)",
          "Negation wraps around the verb: Je ne parle pas (I don't speak)"
        ]
      },
      {
        type: "heading",
        text: "Simple Sentence Examples"
      },
      {
        type: "examples",
        items: [
          { french: "Je suis étudiant", english: "I am a student" },
          { french: "Tu aimes le chocolat", english: "You like chocolate" },
          { french: "Il habite à Paris", english: "He lives in Paris" },
          { french: "Nous parlons français", english: "We speak French" }
        ]
      },
      {
        type: "tip",
        text: "💡 Tip: Start with simple Subject + Verb sentences, then add objects and adjectives."
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "What is the correct word order?",
        options: ["Je aime le café", "J'aime le café", "Aime je le café", "Le café j'aime"],
        correct: 1,
        explanation: "J'aime le café follows Subject + Verb + Object order."
      },
      {
        type: "fill_blank",
        question: "Complete: ___ suis français (I am French)",
        answer: "Je",
        explanation: "Je is the subject pronoun. The order is Subject (Je) + Verb (suis) + Adjective (français)."
      }
    ]
  },

  negation: {
    title: "Negation (Saying 'No')",
    content: [
      {
        type: "paragraph",
        text: "To make a sentence negative in French, you use 'ne...pas' around the verb. This is the most common way to say 'no' or 'not'."
      },
      {
        type: "heading",
        text: "Basic Negation: ne...pas"
      },
      {
        type: "paragraph",
        text: "Place 'ne' before the verb and 'pas' after it:"
      },
      {
        type: "examples",
        items: [
          { french: "Je ne parle pas", english: "I don't speak" },
          { french: "Tu n'aimes pas", english: "You don't like" },
          { french: "Il n'est pas", english: "He is not" },
          { french: "Nous ne travaillons pas", english: "We don't work" }
        ]
      },
      {
        type: "heading",
        text: "Important Notes"
      },
      {
        type: "list",
        items: [
          "Ne becomes n' before a vowel: Je n'aime pas (I don't like)",
          "With être and avoir: Je ne suis pas (I am not), Je n'ai pas (I don't have)",
          "Both 'ne' and 'pas' are required—you can't use just one"
        ]
      },
      {
        type: "heading",
        text: "Other Negative Words"
      },
      {
        type: "paragraph",
        text: "You can replace 'pas' with other words:"
      },
      {
        type: "examples",
        items: [
          { french: "ne...jamais", english: "never" },
          { french: "ne...rien", english: "nothing" },
          { french: "ne...personne", english: "nobody" }
        ]
      },
      {
        type: "tip",
        text: "💡 Tip: In spoken French, 'ne' is often dropped, but always use both 'ne' and 'pas' in writing!"
      }
    ],
    exercises: [
      {
        type: "fill_blank",
        question: "Complete: Je ___ parle ___ anglais (I don't speak English)",
        answer: "ne pas",
        explanation: "Use 'ne' before the verb and 'pas' after: Je ne parle pas."
      },
      {
        type: "multiple_choice",
        question: "How do you say 'I don't like'?",
        options: ["Je n'aime", "Je n'aime pas", "Je pas aime", "Je aime ne pas"],
        correct: 1,
        explanation: "Je n'aime pas is correct. Ne becomes n' before vowels, and pas comes after the verb."
      }
    ]
  },

  elision: {
    title: "Elision (Dropping Vowels)",
    content: [
      {
        type: "paragraph",
        text: "Elision is when you drop a vowel at the end of a word before a word starting with a vowel. This makes French flow more naturally."
      },
      {
        type: "heading",
        text: "What is Elision?"
      },
      {
        type: "paragraph",
        text: "Certain words drop their final vowel and add an apostrophe when followed by a word starting with a vowel or silent 'h'."
      },
      {
        type: "heading",
        text: "Common Elisions"
      },
      {
        type: "examples",
        items: [
          { french: "le → l'", english: "le ami → l'ami (the friend)" },
          { french: "je → j'", english: "je aime → j'aime (I like)" },
          { french: "de → d'", english: "de anglais → d'anglais (of English)" },
          { french: "ne → n'", english: "ne aime → n'aime (don't like)" },
          { french: "que → qu'", english: "que elle → qu'elle (that she)" }
        ]
      },
      {
        type: "heading",
        text: "When Elision Happens"
      },
      {
        type: "list",
        items: [
          "le, la, de, je, me, te, se, ne, que → before vowels",
          "Also before silent 'h': l'heure (the hour), not le heure",
          "Required, not optional—you must use elision"
        ]
      },
      {
        type: "heading",
        text: "Examples in Sentences"
      },
      {
        type: "examples",
        items: [
          { french: "J'aime le français", english: "I like French" },
          { french: "L'étudiant parle", english: "The student speaks" },
          { french: "Il n'aime pas", english: "He doesn't like" }
        ]
      },
      {
        type: "tip",
        text: "💡 Tip: Elision is mandatory! Always use l'ami, not le ami, and j'aime, not je aime."
      }
    ],
    exercises: [
      {
        type: "multiple_choice",
        question: "Which is correct?",
        options: ["je aime", "j'aime", "je aimes", "j'aimes"],
        correct: 1,
        explanation: "J'aime is correct. Je becomes j' before vowels."
      },
      {
        type: "fill_blank",
        question: "Complete: ___ étudiant (the student)",
        answer: "L'",
        explanation: "L'étudiant is correct. Le becomes l' before vowels."
      }
    ]
  },

  // === MICRO-LESSONS (small chunks, each lights up one node) ===

  present_tense_er: {
    title: "Present: -er verbs",
    content: [
      { type: "paragraph", text: "Most French verbs end in -er (parler, aimer, manger). To conjugate: remove -er and add the endings -e, -es, -e, -ons, -ez, -ent for je, tu, il/elle, nous, vous, ils/elles." },
      { type: "heading", text: "Endings" },
      { type: "list", items: ["je → -e", "tu → -es", "il/elle → -e", "nous → -ons", "vous → -ez", "ils/elles → -ent"] },
      { type: "examples", items: [
        { french: "je parle", english: "I speak" },
        { french: "tu parles", english: "you speak" },
        { french: "il parle", english: "he speaks" },
        { french: "nous parlons", english: "we speak" },
        { french: "vous parlez", english: "you speak" },
        { french: "ils parlent", english: "they speak" }
      ]},
      { type: "tip", text: "💡 The -ent in ils/elles parlent is silent—it sounds like 'parl'." }
    ],
    exercises: [
      { type: "fill_blank", question: "Je ___ français (I speak French)", answer: "parle", explanation: "Je parle = I speak. Je takes -e." },
      { type: "multiple_choice", question: "How do you say 'we speak'?", options: ["je parle", "tu parles", "nous parlons", "ils parlent"], correct: 2, explanation: "Nous parlons = we speak." }
    ]
  },
  present_tense_ir: {
    title: "Present: -ir verbs",
    content: [
      { type: "paragraph", text: "Verbs like finir (to finish), choisir (to choose), and réfléchir (to think) belong to the second group. Remove -ir and add -is, -is, -it, -issons, -issez, -issent." },
      { type: "heading", text: "Endings" },
      { type: "list", items: ["je → -is", "tu → -is", "il/elle → -it", "nous → -issons", "vous → -issez", "ils/elles → -issent"] },
      { type: "examples", items: [
        { french: "je finis", english: "I finish" },
        { french: "tu finis", english: "you finish" },
        { french: "il finit", english: "he finishes" },
        { french: "nous finissons", english: "we finish" },
        { french: "ils finissent", english: "they finish" }
      ]},
      { type: "tip", text: "💡 Je and tu both use -is for -ir verbs." }
    ],
    exercises: [
      { type: "fill_blank", question: "Tu ___ (You finish)", answer: "finis", explanation: "Tu finis uses the -is ending." },
      { type: "multiple_choice", question: "How do you say 'they finish'?", options: ["ils finit", "ils finissent", "ils finissons", "ils finis"], correct: 1, explanation: "Ils finissent = they finish." }
    ]
  },
  present_tense_etre_avoir: {
    title: "Present: être & avoir",
    content: [
      { type: "paragraph", text: "Être (to be) and avoir (to have) are the two most important verbs in French. They are irregular—you must memorize their forms." },
      { type: "heading", text: "Être (to be)" },
      { type: "examples", items: [
        { french: "je suis", english: "I am" },
        { french: "tu es", english: "you are" },
        { french: "il/elle est", english: "he/she is" },
        { french: "nous sommes", english: "we are" },
        { french: "vous êtes", english: "you are" },
        { french: "ils/elles sont", english: "they are" }
      ]},
      { type: "heading", text: "Avoir (to have)" },
      { type: "examples", items: [
        { french: "j'ai", english: "I have" },
        { french: "tu as", english: "you have" },
        { french: "il/elle a", english: "he/she has" },
        { french: "nous avons", english: "we have" },
        { french: "vous avez", english: "you have" },
        { french: "ils/elles ont", english: "they have" }
      ]},
      { type: "tip", text: "💡 Memorize these—you'll use them in every conversation and for compound tenses." }
    ],
    exercises: [
      { type: "multiple_choice", question: "How do you say 'I am'?", options: ["je suis", "j'ai", "je vais", "je parle"], correct: 0, explanation: "Je suis = I am." },
      { type: "multiple_choice", question: "How do you say 'he has'?", options: ["il est", "il a", "il ont", "il as"], correct: 1, explanation: "Il a = he has." }
    ]
  },
  definite_articles_forms: {
    title: "le, la, les",
    content: [
      { type: "paragraph", text: "The definite article (the) has three forms in French: le (masculine singular), la (feminine singular), and les (plural for both genders). The article always agrees with the noun." },
      { type: "heading", text: "Summary" },
      { type: "list", items: ["le + masculine singular: le livre, le chat", "la + feminine singular: la table, la voiture", "les + any plural: les livres, les tables"] },
      { type: "examples", items: [
        { french: "le livre", english: "the book" },
        { french: "la table", english: "the table" },
        { french: "les livres", english: "the books" },
        { french: "les tables", english: "the tables" }
      ]},
      { type: "tip", text: "💡 La becomes l' before a vowel: l'amie (the friend). Le also becomes l': l'ami." }
    ],
    exercises: [
      { type: "multiple_choice", question: "___ table (the table)", options: ["le", "la", "les"], correct: 1, explanation: "La table—table is feminine." },
      { type: "fill_blank", question: "___ chat (the cat)", answer: "le", explanation: "Le chat—chat is masculine." }
    ]
  },
  definite_articles_usage: {
    title: "When to use 'the'",
    content: [
      { type: "paragraph", text: "Use le/la/les for specific things (the book I'm holding) and also for general concepts and preferences. In French, you often use 'the' where English doesn't." },
      { type: "heading", text: "General concepts" },
      { type: "paragraph", text: "When talking about something in general (coffee, chocolate, life), French uses the definite article." },
      { type: "examples", items: [
        { french: "J'aime le café", english: "I like coffee" },
        { french: "J'adore la musique", english: "I love music" },
        { french: "Le français est difficile", english: "French is difficult" }
      ]},
      { type: "tip", text: "💡 Don't say 'J'aime café'—you need the article: J'aime le café." }
    ],
    exercises: [
      { type: "fill_blank", question: "J'aime ___ chocolat (I like chocolate)", answer: "le", explanation: "General concepts use le/la/les." },
      { type: "multiple_choice", question: "How do you say 'I love music'?", options: ["J'aime musique", "J'aime la musique", "J'aime le musique"], correct: 1, explanation: "La musique—music is feminine, and the article is required." }
    ]
  },
  subject_pronouns_list: {
    title: "je, tu, il, elle...",
    content: [
      { type: "paragraph", text: "Subject pronouns replace the subject of the sentence. They tell you who is doing the action. French has one more form than English: tu (informal you) and vous (formal or plural you)." },
      { type: "heading", text: "The pronouns" },
      { type: "list", items: ["je = I", "tu = you (informal)", "il = he / elle = she", "nous = we", "vous = you (formal or plural)", "ils = they (m/mixed) / elles = they (all f)"] },
      { type: "examples", items: [
        { french: "Je parle", english: "I speak" },
        { french: "Tu manges", english: "You eat" },
        { french: "Il est français", english: "He is French" },
        { french: "Nous aimons", english: "We like" }
      ]},
      { type: "tip", text: "💡 Je becomes j' before a vowel: j'aime, j'ai. This is elision." }
    ],
    exercises: [
      { type: "multiple_choice", question: "Which means 'we'?", options: ["je", "tu", "nous", "vous"], correct: 2, explanation: "Nous = we." },
      { type: "multiple_choice", question: "Which means 'she'?", options: ["il", "elle", "ils", "elles"], correct: 1, explanation: "Elle = she." }
    ]
  },
  subject_pronouns_tu_vous: {
    title: "Tu vs vous",
    content: [
      { type: "paragraph", text: "French has two ways to say 'you': tu (informal) and vous (formal or plural). Choosing the right one is part of politeness and register." },
      { type: "heading", text: "When to use tu" },
      { type: "list", items: ["Friends and family", "Children", "Peers in casual settings", "When someone invites you: On peut se tutoyer? = We can use tu?"] },
      { type: "heading", text: "When to use vous" },
      { type: "list", items: ["Strangers and people you don't know well", "Older people or people in authority", "To show respect or politeness", "When addressing more than one person (you all)"] },
      { type: "tip", text: "💡 When in doubt, use vous. You can always switch to tu if the other person suggests it." }
    ],
    exercises: [
      { type: "multiple_choice", question: "To address a stranger politely, you use:", options: ["tu", "vous"], correct: 1, explanation: "Vous is formal and polite." },
      { type: "multiple_choice", question: "To say 'you all' (multiple people), you use:", options: ["tu", "vous"], correct: 1, explanation: "Vous is also the plural you." }
    ]
  },
  negation_ne_pas: {
    title: "ne...pas",
    content: [
      { type: "paragraph", text: "To make a sentence negative in French, you wrap the verb with ne...pas. Ne goes before the verb, pas after it. In spoken French, ne is often dropped, but in writing you use both." },
      { type: "heading", text: "Placement" },
      { type: "list", items: ["Ne (or n') + verb + pas", "Ne becomes n' before a vowel or silent h"] },
      { type: "examples", items: [
        { french: "Je ne parle pas", english: "I don't speak" },
        { french: "Tu n'aimes pas", english: "You don't like" },
        { french: "Il n'est pas là", english: "He is not here" }
      ]},
      { type: "tip", text: "💡 With compound tenses (e.g. passé composé), ne...pas wraps the auxiliary: Je n'ai pas parlé." }
    ],
    exercises: [
      { type: "fill_blank", question: "Je ___ parle ___ (I don't speak)", answer: "ne pas", explanation: "Ne before verb, pas after." },
      { type: "multiple_choice", question: "How do you say 'I don't like'?", options: ["Je n'aime", "Je n'aime pas", "Je pas aime"], correct: 1, explanation: "Je n'aime pas—ne becomes n' before the vowel." }
    ]
  },
  negation_jamais_rien: {
    title: "ne...jamais, ne...rien",
    content: [
      { type: "paragraph", text: "Besides ne...pas (not), you can use other negative words in the same structure: ne...jamais (never), ne...rien (nothing), ne...personne (nobody), ne...plus (no longer)." },
      { type: "heading", text: "Common negative expressions" },
      { type: "examples", items: [
        { french: "ne...jamais", english: "never" },
        { french: "ne...rien", english: "nothing" },
        { french: "ne...personne", english: "nobody" },
        { french: "ne...plus", english: "no longer" }
      ]},
      { type: "examples", items: [
        { french: "Je ne mange jamais", english: "I never eat" },
        { french: "Je ne vois rien", english: "I see nothing" },
        { french: "Je n'ai plus de café", english: "I have no more coffee" }
      ]},
      { type: "tip", text: "💡 The structure is always ne + verb + negative word (jamais, rien, etc.)." }
    ],
    exercises: [
      { type: "multiple_choice", question: "How do you say 'never'?", options: ["ne...pas", "ne...jamais", "ne...rien"], correct: 1, explanation: "Ne...jamais = never." },
      { type: "multiple_choice", question: "How do you say 'I see nothing'?", options: ["Je ne vois pas", "Je ne vois rien", "Je vois rien"], correct: 1, explanation: "Je ne vois rien = I see nothing." }
    ]
  },
  nouns_basics: {
    title: "What is a noun?",
    content: [
      { type: "paragraph", text: "Nouns are words that name people, places, things, or ideas. In French, every noun has a grammatical gender: masculine or feminine. There is no 'it'—everything is he or she." },
      { type: "heading", text: "Why it matters" },
      { type: "list", items: ["Articles depend on gender: le livre, la table", "Adjectives agree: un grand livre, une grande table", "Pronouns depend on gender: il/elle"] },
      { type: "examples", items: [
        { french: "le livre", english: "the book (m)" },
        { french: "la maison", english: "the house (f)" },
        { french: "un ami", english: "a friend (m)" },
        { french: "une amie", english: "a friend (f)" }
      ]},
      { type: "tip", text: "💡 Always learn nouns with their article (le/la) so you remember the gender." }
    ],
    exercises: [
      { type: "multiple_choice", question: "Which is a noun?", options: ["parler", "le livre", "très", "oui"], correct: 1, explanation: "Le livre (the book) is a noun." },
      { type: "multiple_choice", question: "Every French noun has:", options: ["number only", "gender only", "gender and number", "neither"], correct: 2, explanation: "Nouns have gender (m/f) and number (singular/plural)." }
    ]
  },
  nouns_gender_intro: {
    title: "Nouns have gender",
    content: [
      { type: "paragraph", text: "French nouns are either masculine or feminine. There are some patterns (e.g. -tion is often feminine), but there is no foolproof rule. The best strategy is to learn each noun with its article." },
      { type: "heading", text: "Don't rely on meaning" },
      { type: "paragraph", text: "Gender is grammatical, not always logical. La table is feminine, le livre is masculine. Le féminin and la masculinité show that even the words for 'masculine' and 'feminine' don't match!" },
      { type: "examples", items: [
        { french: "le garçon", english: "the boy" },
        { french: "la fille", english: "the girl" },
        { french: "le vélo", english: "the bicycle" },
        { french: "la voiture", english: "the car" }
      ]},
      { type: "tip", text: "💡 Use flashcards with le/la on the front to drill gender." }
    ],
    exercises: [
      { type: "multiple_choice", question: "La voiture is:", options: ["masculine", "feminine"], correct: 1, explanation: "La = feminine." },
      { type: "multiple_choice", question: "Which article goes with 'livre' (book)?", options: ["la", "le", "les"], correct: 1, explanation: "Le livre—livre is masculine." }
    ]
  },
  gender_le_la: {
    title: "le vs la",
    content: [
      { type: "paragraph", text: "Le is the definite article for masculine singular nouns; la is for feminine singular. Your choice depends entirely on the noun's gender—and you have to learn that by heart." },
      { type: "heading", text: "Before a vowel" },
      { type: "paragraph", text: "Both le and la become l' before a vowel or silent h: l'ami, l'amie, l'hôtel. The noun is still masculine or feminine; the article just contracts." },
      { type: "examples", items: [
        { french: "le garçon → l'ami", english: "the boy → the (male) friend" },
        { french: "la fille → l'amie", english: "the girl → the (female) friend" },
        { french: "le livre", english: "the book" },
        { french: "la table", english: "the table" }
      ]},
      { type: "tip", text: "💡 When in doubt, look the word up in a dictionary—it will show m. or f." }
    ],
    exercises: [
      { type: "fill_blank", question: "___ garçon (the boy)", answer: "Le", explanation: "Garçon is masculine." },
      { type: "multiple_choice", question: "___ amie (the friend - female)", options: ["le", "la", "l'"], correct: 2, explanation: "Before a vowel we use l': l'amie." }
    ]
  },
  number_plural_s: {
    title: "Plurals: add -s",
    content: [
      { type: "paragraph", text: "Most French nouns form the plural by adding -s, just like in English. The definite article for all plurals is les (whether the singular was le or la)." },
      { type: "heading", text: "Basic rule" },
      { type: "list", items: ["Singular: le livre, la table", "Plural: les livres, les tables", "The -s is usually not pronounced"] },
      { type: "examples", items: [
        { french: "le livre → les livres", english: "the book → the books" },
        { french: "la table → les tables", english: "the table → the tables" },
        { french: "le chat → les chats", english: "the cat → the cats" },
        { french: "la voiture → les voitures", english: "the car → the cars" }
      ]},
      { type: "tip", text: "💡 There are exceptions (e.g. -al → -aux, -eu → -eux), but -s is the most common." }
    ],
    exercises: [
      { type: "fill_blank", question: "The plural of le chat is les ___", answer: "chats", explanation: "Add -s: les chats." },
      { type: "multiple_choice", question: "What article do you use for plural nouns?", options: ["le", "la", "les"], correct: 2, explanation: "Les is used for all plurals." }
    ]
  }
};

// Get lesson for a node ID
export const getLesson = (nodeId) => {
  return lessons[nodeId] || null;
};

// Check if a lesson exists
export const hasLesson = (nodeId) => {
  return nodeId in lessons;
};