const STORAGE_KEY = 'french_grammar_progress';

export const getProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
};

export const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
};

export const markNodeCompleted = (nodeId) => {
  const progress = getProgress();
  progress[nodeId] = {
    completed: true,
    completedAt: new Date().toISOString()
  };
  saveProgress(progress);
  return progress;
};

export const markNodeIncomplete = (nodeId) => {
  const progress = getProgress();
  delete progress[nodeId];
  saveProgress(progress);
  return progress;
};

export const isNodeCompleted = (nodeId) => {
  const progress = getProgress();
  return progress[nodeId]?.completed === true;
};

export const getCompletedNodes = () => {
  const progress = getProgress();
  return Object.keys(progress).filter(id => progress[id].completed);
};

export const getProgressStats = (nodes) => {
  const completed = getCompletedNodes();
  const total = nodes.length;
  const completedCount = completed.length;
  const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  
  // Group by CEFR level
  const byLevel = {};
  nodes.forEach(node => {
    const level = node.cefrLevel || 'Unknown';
    if (!byLevel[level]) {
      byLevel[level] = { total: 0, completed: 0 };
    }
    byLevel[level].total++;
    if (completed.includes(node.id)) {
      byLevel[level].completed++;
    }
  });
  
  return {
    total,
    completed: completedCount,
    percentage,
    byLevel
  };
};

export const canLearnNode = (node, progress) => {
  if (!node.prerequisites || node.prerequisites.length === 0) {
    return true;
  }
  
  return node.prerequisites.every(prereqId => 
    progress[prereqId]?.completed === true
  );
};

/** Nodes with no prerequisites, sorted for "start here" order (learning_priority, then difficulty). */
export const getRecommendedStartNodes = (nodes, limit = 8) => {
  const starters = nodes.filter(
    n => !n.prerequisites || n.prerequisites.length === 0
  );
  starters.sort((a, b) => {
    const pa = a.learning_priority ?? 99;
    const pb = b.learning_priority ?? 99;
    if (pa !== pb) return pa - pb;
    return (a.difficulty ?? 1) - (b.difficulty ?? 1);
  });
  return starters.slice(0, limit);
};

/** Next nodes the user can learn (prereqs met, not completed), sorted by priority. */
export const getRecommendedNextNodes = (nodes, progress, limit = 6) => {
  const available = nodes.filter(
    n => !isNodeCompleted(n.id) && canLearnNode(n, progress)
  );
  available.sort((a, b) => {
    const pa = a.learning_priority ?? 99;
    const pb = b.learning_priority ?? 99;
    if (pa !== pb) return pa - pb;
    return (a.difficulty ?? 1) - (b.difficulty ?? 1);
  });
  return available.slice(0, limit);
};

// Export progress to JSON file
export const exportProgress = () => {
  const progress = getProgress();
  const exportData = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    progress: progress,
    completedCount: Object.keys(progress).filter(id => progress[id].completed).length
  };
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `nodeways-progress-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Import progress from JSON file
export const importProgress = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        // Validate the import data structure
        if (!data.progress || typeof data.progress !== 'object') {
          throw new Error('Invalid progress file format');
        }
        
        // Merge with existing progress (or replace - you can change this behavior)
        const existingProgress = getProgress();
        const importedProgress = data.progress;
        
        // Option 1: Merge (keep existing, add imported)
        // const mergedProgress = { ...existingProgress, ...importedProgress };
        
        // Option 2: Replace (use imported, fallback to existing for missing keys)
        const mergedProgress = { ...existingProgress, ...importedProgress };
        
        saveProgress(mergedProgress);
        resolve(mergedProgress);
      } catch (error) {
        reject(new Error('Failed to import progress: ' + error.message));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsText(file);
  });
};

// Clear all progress
export const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return {};
  } catch (e) {
    console.error('Failed to clear progress:', e);
    return {};
  }
};