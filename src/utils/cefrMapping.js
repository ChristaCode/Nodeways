// Map nodes to CEFR levels based on learning_priority and difficulty
// A1: Priority 1, Difficulty 1-2 (Beginner basics)
// A2: Priority 1-2, Difficulty 2-3 (Elementary)
// B1: Priority 2-3, Difficulty 3-4 (Intermediate)
// B2: Priority 3-4, Difficulty 4 (Upper Intermediate)
// C1: Priority 4-5, Difficulty 4-5 (Advanced)
// C2: Priority 5, Difficulty 5 (Proficient)

export const getCEFRLevel = (node) => {
  const { learning_priority, difficulty } = node;
  
  // A1 - Absolute beginner essentials
  if (learning_priority === 1 && difficulty <= 2) {
    return 'A1';
  }
  
  // A2 - Elementary
  if (learning_priority <= 2 && difficulty <= 3) {
    return 'A2';
  }
  
  // B1 - Intermediate
  if (learning_priority <= 3 && difficulty <= 4) {
    return 'B1';
  }
  
  // B2 - Upper Intermediate
  if (learning_priority <= 4 && difficulty <= 4) {
    return 'B2';
  }
  
  // C1 - Advanced
  if (learning_priority <= 5 && difficulty <= 5) {
    return 'C1';
  }
  
  // C2 - Proficient (very advanced)
  return 'C2';
};

export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// Rich, distinct CEFR colors for the brain map
export const CEFR_COLORS = {
  A1: '#2563eb',   // vibrant blue
  A2: '#059669',   // emerald
  B1: '#d97706',   // amber
  B2: '#dc2626',   // red
  C1: '#9333ea',   // violet
  C2: '#4f46e5'    // indigo
};

// Lighter variants for uncompleted nodes (same hue, softer)
export const CEFR_COLORS_MUTED = {
  A1: '#93c5fd',
  A2: '#6ee7b7',
  B1: '#fcd34d',
  B2: '#fca5a5',
  C1: '#e9d5ff',
  C2: '#a5b4fc'
};

export const CEFR_LABELS = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper Intermediate',
  C1: 'Advanced',
  C2: 'Proficient'
};