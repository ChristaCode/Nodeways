import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BrainMap from '../components/BrainMap';
import NodeDetails from '../components/NodeDetails';
import ProgressControls from '../components/ProgressControls';
import { getCEFRLevel, CEFR_LEVELS, CEFR_COLORS, CEFR_LABELS } from '../utils/cefrMapping';
import { 
  getProgress, 
  markNodeCompleted, 
  markNodeIncomplete, 
  getProgressStats 
} from '../utils/progress';
import { LEARNING_DOMAINS } from '../data/learningDomains';
import { getGraphForDomain } from '../data/graphLoader';
import '../App.css';

function BrainMapPage() {
  const navigate = useNavigate();
  const [selectedDomain, setSelectedDomain] = useState('grammar');
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedCEFR, setSelectedCEFR] = useState('All');
  const [progress, setProgress] = useState(getProgress());

  // Process graph data for selected domain: add CEFR levels and enhance nodes
  const graphData = useMemo(() => {
    const raw = getGraphForDomain(selectedDomain);
    const rawNodes = raw?.nodes ?? [];
    const rawEdges = raw?.edges ?? [];
    const nodes = rawNodes.map(node => ({
      ...node,
      cefrLevel: getCEFRLevel(node)
    }));

    const nodeMap = new Map(nodes.map(node => [node.id, node]));

    const links = rawEdges
      .map(edge => {
        const sourceNode = nodeMap.get(edge.from);
        const targetNode = nodeMap.get(edge.to);
        if (sourceNode && targetNode) {
          return {
            source: sourceNode,
            target: targetNode,
            relationship: edge.relationship
          };
        }
        return null;
      })
      .filter(Boolean);

    return { nodes, links };
  }, [selectedDomain]);

  // Update progress stats
  const stats = useMemo(() => getProgressStats(graphData.nodes), [graphData.nodes, progress]);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleNodeHover = (node) => {
    setHoveredNode(node);
  };

  const handleLearn = (nodeId) => {
    const newProgress = markNodeCompleted(nodeId);
    setProgress(newProgress);
  };

  const handleUnlearn = (nodeId) => {
    const newProgress = markNodeIncomplete(nodeId);
    setProgress(newProgress);
  };

  const handleStartLesson = (nodeId) => {
    navigate(`/lesson/${nodeId}`);
  };

  const handleDomainChange = (domainId) => {
    setSelectedDomain(domainId);
    setSelectedNode(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">
          <h1>Nodeways</h1>
          <span className="header-tagline">Your learning map</span>
        </div>
        <div className="domain-tabs">
          {LEARNING_DOMAINS.map(d => (
            <button
              key={d.id}
              type="button"
              className={`domain-tab ${selectedDomain === d.id ? 'active' : ''}`}
              onClick={() => handleDomainChange(d.id)}
              title={d.description}
            >
              <span className="domain-tab-icon">{d.icon}</span>
              <span className="domain-tab-label">{d.shortLabel}</span>
            </button>
          ))}
        </div>
        <div className="header-controls">
          <div className="cefr-filter">
            <button
              className={`cefr-button ${selectedCEFR === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCEFR('All')}
            >
              All Levels
            </button>
            {CEFR_LEVELS.map(level => (
              <button
                key={level}
                className={`cefr-button ${selectedCEFR === level ? 'active' : ''}`}
                onClick={() => setSelectedCEFR(level)}
                style={{
                  borderColor: CEFR_COLORS[level],
                  ...(selectedCEFR === level ? { background: CEFR_COLORS[level] } : {})
                }}
              >
                {level}
              </button>
            ))}
          </div>
          <div className="progress-by-level" aria-label="Progress by CEFR level">
            {CEFR_LEVELS.map(level => {
              const levelStats = stats.byLevel[level] || { total: 0, completed: 0 };
              if (levelStats.total === 0) return null;
              const pct = Math.round((levelStats.completed / levelStats.total) * 100);
              return (
                <div key={level} className="level-progress" title={`${CEFR_LABELS[level]} (${level}): ${levelStats.completed}/${levelStats.total} — ${pct}%`}>
                  <span className="level-progress-label">{level}</span>
                  <div className="level-progress-bar-wrap">
                    <div
                      className="level-progress-bar"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: CEFR_COLORS[level]
                      }}
                    />
                  </div>
                  <span className="level-progress-count">{levelStats.completed}/{levelStats.total}</span>
                </div>
              );
            })}
          </div>
          <div className="progress-info">
            <div className="progress-stat">
              <div className="progress-stat-value">{stats.completed}</div>
              <div className="progress-stat-label">Completed</div>
            </div>
            <div className="progress-stat">
              <div className="progress-stat-value">{stats.total}</div>
              <div className="progress-stat-label">Total</div>
            </div>
            <div className="progress-stat">
              <div className="progress-stat-value">{stats.percentage}%</div>
              <div className="progress-stat-label">Progress</div>
            </div>
            <ProgressControls onProgressChange={setProgress} />
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="brainmap-container">
          <BrainMap
            graphData={graphData}
            selectedNode={selectedNode}
            onNodeClick={handleNodeClick}
            onNodeHover={handleNodeHover}
            onNodeDoubleClick={handleStartLesson}
            selectedCEFR={selectedCEFR}
          />
        </div>
        <aside className="sidebar">
          <NodeDetails
            node={selectedNode}
            graphData={graphData}
            selectedDomain={selectedDomain}
            onLearn={handleLearn}
            onUnlearn={handleUnlearn}
            onStartLesson={handleStartLesson}
            onSelectNode={setSelectedNode}
          />
        </aside>
      </div>
    </div>
  );
}

export default BrainMapPage;