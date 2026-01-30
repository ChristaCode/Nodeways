import { useRef, useEffect, useCallback, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { CEFR_COLORS_MUTED } from '../utils/cefrMapping';
import { isNodeCompleted } from '../utils/progress';

// Single, bright yellow for all completed nodes (same for every level)
const COMPLETED_NODE_COLOR = '#FFFF00';
// Faint glow: soft radial gradient around completed nodes
const COMPLETED_GLOW_RADIUS = 18;
const COMPLETED_GLOW_INNER = 'rgba(255, 255, 0, 0.35)';
const COMPLETED_GLOW_MID = 'rgba(255, 255, 0, 0.12)';
const COMPLETED_GLOW_OUTER = 'rgba(255, 255, 0, 0)';

const BrainMap = ({ graphData, selectedNode, onNodeClick, onNodeHover, selectedCEFR }) => {
  const fgRef = useRef();
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    if (fgRef.current) {
      // Tighter layout: less repulsion, shorter links, and stronger center pull so edge nodes stay in
      fgRef.current.d3Force('charge').strength(-240);
      fgRef.current.d3Force('link').distance(85);
      fgRef.current.d3Force('link').strength(0.9);
      // Pull nodes toward the center so far-edge nodes don't drift out
      const center = fgRef.current.d3Force('center');
      if (center && typeof center.strength === 'function') {
        center.strength(0.35);
      }
    }
  }, []);

  const getNodeColor = useCallback((node) => {
    if (isNodeCompleted(node.id)) return COMPLETED_NODE_COLOR;
    const level = node.cefrLevel || 'A1';
    return CEFR_COLORS_MUTED[level] || CEFR_COLORS_MUTED.A1;
  }, []);

  const getNodeSize = useCallback((node) => {
    if (node.core_node) return 22;
    if (node.high_confusion_node) return 18;
    return 14;
  }, []);

  const handleNodeClick = useCallback((node) => {
    if (!node) return;
    if (onNodeClick) onNodeClick(node);
  }, [onNodeClick]);

  const filteredData = useCallback(() => {
    if (!selectedCEFR || selectedCEFR === 'All') return graphData;
    const filteredNodes = graphData.nodes.filter(node => node.cefrLevel === selectedCEFR);
    const nodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredLinks = graphData.links.filter(link => {
      const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
      const targetId = typeof link.target === 'object' ? link.target.id : link.target;
      return nodeIds.has(sourceId) && nodeIds.has(targetId);
    });
    return { nodes: filteredNodes, links: filteredLinks };
  }, [graphData, selectedCEFR]);

  const paintNode = useCallback((node, ctx, globalScale) => {
    const x = Number(node.x);
    const y = Number(node.y);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;

    const color = getNodeColor(node);
    const completed = isNodeCompleted(node.id);
    const isSelected = selectedNode?.id === node.id;
    const isHovered = hoveredNode?.id === node.id;
    const showLabel = isSelected || isHovered;
    const r = Math.max(8, (node.val || 10) * 1.5);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Faint glow for completed nodes (bright yellow halo)
    if (completed) {
      const gradient = ctx.createRadialGradient(
        x, y, r,
        x, y, r + COMPLETED_GLOW_RADIUS
      );
      gradient.addColorStop(0, COMPLETED_GLOW_INNER);
      gradient.addColorStop(0.5, COMPLETED_GLOW_MID);
      gradient.addColorStop(1, COMPLETED_GLOW_OUTER);
      ctx.beginPath();
      ctx.arc(x, y, r + COMPLETED_GLOW_RADIUS, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Glow for selected
    if (isSelected) {
      ctx.beginPath();
      ctx.arc(x, y, r + 8, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fill();
    }

    // "Start here" ring for nodes with no prerequisites
    const isStarter = !node.prerequisites || node.prerequisites.length === 0;
    if (isStarter) {
      ctx.beginPath();
      ctx.arc(x, y, r + 4, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
      ctx.lineWidth = Math.max(1.5, 2 / globalScale);
      ctx.setLineDash([4, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Outer ring (white border)
    ctx.beginPath();
    ctx.arc(x, y, r + 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(2, 2.5 / globalScale);
    ctx.stroke();

    // Fill
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

    // Only draw label for selected or hovered node (reduces clutter)
    if (showLabel && node.label) {
      const label = node.label;
      const fontSize = Math.max(13, Math.round(16 / globalScale));
      const displayLabel = label.length > 24 ? label.substring(0, 23) + '…' : label;

      ctx.font = `600 ${fontSize}px "Segoe UI", system-ui, -apple-system, sans-serif`;
      const textWidth = ctx.measureText(displayLabel).width;
      const padding = fontSize * 0.5;
      const boxW = textWidth + padding * 2;
      const boxH = fontSize + padding;
      const textY = y + r + fontSize * 0.7;
      const boxX = x - boxW / 2;
      const boxY = textY - fontSize / 2 - padding / 2;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      const radius = 6;
      ctx.beginPath();
      ctx.moveTo(boxX + radius, boxY);
      ctx.lineTo(boxX + boxW - radius, boxY);
      ctx.quadraticCurveTo(boxX + boxW, boxY, boxX + boxW, boxY + radius);
      ctx.lineTo(boxX + boxW, boxY + boxH - radius);
      ctx.quadraticCurveTo(boxX + boxW, boxY + boxH, boxX + boxW - radius, boxY + boxH);
      ctx.lineTo(boxX + radius, boxY + boxH);
      ctx.quadraticCurveTo(boxX, boxY + boxH, boxX, boxY + boxH - radius);
      ctx.lineTo(boxX, boxY + radius);
      ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#1e293b';
      ctx.fillText(displayLabel, x, textY);
    }
  }, [getNodeColor, selectedNode, hoveredNode]);

  const getLinkColor = useCallback(() => {
    return 'rgba(148, 163, 184, 0.35)';
  }, []);

  return (
    <div className="brainmap-wrapper">
      <div className="brainmap-canvas-buffer">
        <ForceGraph2D
        ref={fgRef}
        graphData={filteredData()}
        nodeLabel={() => ''}
        nodeColor={getNodeColor}
        nodeVal={getNodeSize}
        nodeRelSize={8}
        nodeCanvasObjectMode={() => 'replace'}
        nodeCanvasObject={paintNode}
        linkColor={getLinkColor}
        linkWidth={(link) => 1.2}
        linkDirectionalArrowLength={5}
        linkDirectionalArrowRelPos={1}
        linkDirectionalArrowColor={() => 'rgba(148, 163, 184, 0.5)'}
        onNodeClick={handleNodeClick}
        onNodeHover={(node) => {
          setHoveredNode(node || null);
          if (node) onNodeHover(node);
        }}
        cooldownTicks={100}
        onEngineStop={() => fgRef.current?.zoomToFit(400, 20)}
        backgroundColor="rgba(255,255,255,0)"
        enablePanInteraction={true}
        enableZoomInteraction={true}
      />
      </div>
    </div>
  );
};

export default BrainMap;
