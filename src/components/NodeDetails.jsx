import { getCEFRLevel, CEFR_LABELS } from '../utils/cefrMapping';
import { isNodeCompleted, canLearnNode, getProgress, getRecommendedStartNodes, getRecommendedNextNodes } from '../utils/progress';
import { hasLesson } from '../data/lessons';

const NodeDetails = ({ node, graphData, selectedDomain, onLearn, onUnlearn, onStartLesson, onSelectNode }) => {
  if (!node) {
    const progress = getProgress();
    const startNodes = getRecommendedStartNodes(graphData?.nodes ?? [], 8);
    const nextNodes = getRecommendedNextNodes(graphData?.nodes ?? [], progress, 6);
    const showNext = nextNodes.length > 0 && nextNodes.some(n => !startNodes.find(s => s.id === n.id));

    return (
      <div className="empty-state getting-started">
        <h3 className="getting-started-title">Where to start</h3>
        <p className="getting-started-subtitle">
          These topics have no prerequisites. Click one to see details, or start a lesson directly.
        </p>
        <ul className="start-nodes-list">
          {startNodes.map((n, i) => (
            <li key={n.id} className="start-node-item">
              <button
                type="button"
                className="start-node-select"
                onClick={() => onSelectNode?.(n)}
              >
                <span className="start-node-order">{i + 1}</span>
                <span className="start-node-label">{n.label}</span>
                <span className={`cefr-badge small ${(n.cefrLevel || 'A1').toLowerCase()}`}>
                  {n.cefrLevel || 'A1'}
                </span>
              </button>
              {hasLesson(n.id) && (
                <button
                  type="button"
                  className="start-node-lesson"
                  onClick={() => onStartLesson?.(n.id)}
                  title="Start lesson"
                >
                  📚 Lesson
                </button>
              )}
            </li>
          ))}
        </ul>
        {showNext && (
          <>
            <h4 className="getting-started-next-title">Suggested next lessons</h4>
            <ul className="start-nodes-list next-nodes">
              {nextNodes.filter(n => !startNodes.find(s => s.id === n.id)).slice(0, 5).map(n => (
                <li key={n.id} className="start-node-item">
                  <button
                    type="button"
                    className="start-node-select"
                    onClick={() => onSelectNode?.(n)}
                  >
                    <span className="start-node-label">{n.label}</span>
                    <span className={`cefr-badge small ${(n.cefrLevel || 'A1').toLowerCase()}`}>
                      {n.cefrLevel || 'A1'}
                    </span>
                  </button>
                  {hasLesson(n.id) && (
                    <button
                      type="button"
                      className="start-node-lesson"
                      onClick={() => onStartLesson?.(n.id)}
                      title="Start lesson"
                    >
                      📚
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="getting-started-hint">Or click any node on the map to see its details.</p>
      </div>
    );
  }

  const completed = isNodeCompleted(node.id);
  const progress = getProgress();
  const canLearn = canLearnNode(node, progress);
  const cefrLevel = node.cefrLevel || getCEFRLevel(node);

  // Get prerequisite nodes
  const prerequisites = node.prerequisites
    ? node.prerequisites
        .map(id => graphData.nodes.find(n => n.id === id))
        .filter(Boolean)
    : [];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      1: 'difficulty-1',
      2: 'difficulty-2',
      3: 'difficulty-3',
      4: 'difficulty-4',
      5: 'difficulty-5'
    };
    return colors[difficulty] || 'difficulty-1';
  };

  return (
    <div className="node-details">
      <button
        type="button"
        className="back-to-start"
        onClick={() => onSelectNode?.(null)}
      >
        ← Back to Where to start
      </button>
      <div className="sidebar-header">
        <h2>{node.label}</h2>
        <span className={`cefr-badge ${cefrLevel.toLowerCase()}`}>
          {cefrLevel} - {CEFR_LABELS[cefrLevel]}
        </span>
      </div>

      <div className="node-details">
        <h3>
          <span>Difficulty</span>
          <span className={`difficulty-badge ${getDifficultyColor(node.difficulty)}`}>
            {node.difficulty}/5
          </span>
        </h3>

        <div className="node-description">
          {node.description}
        </div>

        {node.words && node.words.length > 0 && (
          <div className="vocab-words-section">
            <h4 className="vocab-words-title">Vocabulary ({node.words.length} words)</h4>
            <div className="vocab-words-list-wrap">
              <ul className="vocab-words-list">
                {node.words.map((w, i) => (
                  <li key={i} className="vocab-word-item">
                    <span className="vocab-word-fr">{w.fr}</span>
                    <span className="vocab-word-en">{w.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {node.core_node && (
          <div style={{ marginTop: '1rem' }}>
            <span style={{ 
              padding: '0.25rem 0.75rem',
              background: '#e3f2fd',
              color: '#1976d2',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              Core Concept
            </span>
          </div>
        )}

        {node.high_confusion_node && (
          <div style={{ marginTop: '1rem' }}>
            <span style={{ 
              padding: '0.25rem 0.75rem',
              background: '#ffebee',
              color: '#c62828',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              High Confusion Area
            </span>
          </div>
        )}

        {prerequisites.length > 0 && (
          <div className="prerequisites-list">
            <h4>Prerequisites</h4>
            {prerequisites.map(prereq => {
              const prereqCompleted = isNodeCompleted(prereq.id);
              return (
                <span
                  key={prereq.id}
                  className={`prerequisite-tag ${prereqCompleted ? 'completed' : ''}`}
                >
                  {prereq.label}
                </span>
              );
            })}
          </div>
        )}

        {hasLesson(node.id) ? (
          <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
            <button
              className="learn-button lesson-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onStartLesson) onStartLesson(node.id);
              }}
              style={{ 
                width: '100%',
                zIndex: 1000,
                position: 'relative',
                cursor: 'pointer',
                fontSize: '1.1rem',
                padding: '1rem'
              }}
            >
              📚 Start Lesson
            </button>
            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#666', textAlign: 'center' }}>
              Click to open lesson page
            </div>
          </div>
        ) : (
          <div className="lesson-coming-soon">
            Lesson content for this topic coming soon. You can still mark it as learned below.
          </div>
        )}

        <button
          className={`learn-button ${completed ? 'completed' : ''} ${!canLearn && !completed ? 'disabled' : ''}`}
          onClick={() => {
            if (completed) {
              onUnlearn(node.id);
            } else if (canLearn) {
              onLearn(node.id);
            }
          }}
          disabled={!canLearn && !completed}
          style={!canLearn && !completed ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
        >
          {completed ? '✓ Completed' : canLearn ? 'Mark as Learned' : 'Complete Prerequisites First'}
        </button>

        {/* Suggested next lessons: nodes with prerequisites met, not completed, excluding current */}
        {(() => {
          const suggested = getRecommendedNextNodes(graphData?.nodes ?? [], progress, 6)
            .filter(n => n.id !== node.id)
            .slice(0, 5);
          if (suggested.length === 0) return null;
          return (
            <div className="suggested-next-section">
              <h4 className="suggested-next-title">Suggested next lessons</h4>
              <p className="suggested-next-subtitle">You've met the prerequisites for these. Pick one to continue.</p>
              <ul className="suggested-next-list">
                {suggested.map(n => (
                  <li key={n.id} className="suggested-next-item">
                    <button
                      type="button"
                      className="suggested-next-select"
                      onClick={() => onSelectNode?.(n)}
                    >
                      <span className="suggested-next-label">{n.label}</span>
                      <span className={`cefr-badge small ${(n.cefrLevel || 'A1').toLowerCase()}`}>
                        {n.cefrLevel || 'A1'}
                      </span>
                    </button>
                    {hasLesson(n.id) && (
                      <button
                        type="button"
                        className="suggested-next-lesson"
                        onClick={() => onStartLesson?.(n.id)}
                        title="Start lesson"
                      >
                        📚 Lesson
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default NodeDetails;