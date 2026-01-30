import { useRef } from 'react';
import { exportProgress, importProgress, clearProgress } from '../utils/progress';

const ProgressControls = ({ onProgressChange }) => {
  const fileInputRef = useRef(null);

  const handleExport = () => {
    exportProgress();
  };

  const handleImport = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const newProgress = await importProgress(file);
      onProgressChange(newProgress);
      alert('Progress imported successfully!');
    } catch (error) {
      alert(error.message);
    }
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all progress? This cannot be undone.')) {
      const cleared = clearProgress();
      onProgressChange(cleared);
      alert('Progress cleared!');
    }
  };

  return (
    <div className="progress-controls">
      <button 
        className="control-button export-button"
        onClick={handleExport}
        title="Export your progress to a file"
      >
        📥 Export
      </button>
      <label className="control-button import-button">
        📤 Import
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleImport}
          style={{ display: 'none' }}
        />
      </label>
      <button 
        className="control-button clear-button"
        onClick={handleClear}
        title="Clear all progress"
      >
        🗑️ Clear
      </button>
    </div>
  );
};

export default ProgressControls;