// Learning domains for "all of French" – Grammar, Vocabulary, Listening, Reading, Culture

export const LEARNING_DOMAINS = [
  { id: 'grammar', label: 'Grammar', shortLabel: 'Grammar', icon: '📐', description: 'Structures, conjugations, and rules' },
  { id: 'vocabulary', label: 'Vocabulary', shortLabel: 'Vocab', icon: '📚', description: 'Words and phrases by topic' },
  { id: 'listening', label: 'Listening', shortLabel: 'Listen', icon: '🎧', description: 'Comprehension and pronunciation' },
  { id: 'reading', label: 'Reading', shortLabel: 'Read', icon: '📖', description: 'Texts and comprehension' },
  { id: 'culture', label: 'Culture', shortLabel: 'Culture', icon: '🇫🇷', description: 'Regions, customs, and context' },
];

export const getDomainById = (id) => LEARNING_DOMAINS.find((d) => d.id === id) ?? LEARNING_DOMAINS[0];
