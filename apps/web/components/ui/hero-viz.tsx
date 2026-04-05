"use client";

import { useEffect, useState } from "react";

const nodes = [
  { id: "input", x: 50, y: 50, label: "Input", color: "#3B82F6" },
  { id: "ai", x: 200, y: 30, label: "AI Agent", color: "#FF7A00" },
  { id: "process", x: 200, y: 110, label: "Process", color: "#8B5CF6" },
  { id: "decide", x: 350, y: 50, label: "Decision", color: "#FF7A00" },
  { id: "output1", x: 480, y: 20, label: "CRM Sync", color: "#22C55E" },
  { id: "output2", x: 480, y: 80, label: "Auto-Email", color: "#22C55E" },
  { id: "output3", x: 480, y: 140, label: "Dashboard", color: "#3B82F6" },
];

const edges = [
  { from: "input", to: "ai" },
  { from: "input", to: "process" },
  { from: "ai", to: "decide" },
  { from: "process", to: "decide" },
  { from: "decide", to: "output1" },
  { from: "decide", to: "output2" },
  { from: "decide", to: "output3" },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function HeroViz() {
  const [activeEdge, setActiveEdge] = useState(0);
  const [pulseNode, setPulseNode] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEdge((p) => {
        const next = (p + 1) % edges.length;
        setPulseNode(edges[next]?.to || "");
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 560,
        aspectRatio: "560 / 180",
        margin: "0 auto",
      }}
    >
      <svg
        viewBox="0 0 560 180"
        fill="none"
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <defs>
          <filter id="glow-orange">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-dot">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          const isActive = activeEdge === i;
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={from.x + 40}
                y1={from.y + 16}
                x2={to.x}
                y2={to.y + 16}
                stroke={isActive ? "#FF7A00" : "rgba(255,255,255,0.06)"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? "none" : "4 4"}
                filter={isActive ? "url(#glow-orange)" : undefined}
                style={{
                  transition: "all 0.4s ease",
                }}
              />
              {/* Traveling dot */}
              {isActive && (
                <circle r="3" fill="#FF7A00" filter="url(#glow-dot)">
                  <animateMotion
                    dur="0.8s"
                    repeatCount="1"
                    path={`M${from.x + 40},${from.y + 16} L${to.x},${to.y + 16}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isPulsing = pulseNode === node.id;
          return (
            <g key={node.id}>
              {/* Pulse ring */}
              {isPulsing && (
                <rect
                  x={node.x - 4}
                  y={node.y - 4}
                  width={88}
                  height={40}
                  rx="12"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1"
                  opacity="0.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0"
                    dur="0.8s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="width"
                    values="88;100"
                    dur="0.8s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="height"
                    values="40;48"
                    dur="0.8s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="x"
                    values={`${node.x - 4};${node.x - 10}`}
                    dur="0.8s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="y"
                    values={`${node.y - 4};${node.y - 8}`}
                    dur="0.8s"
                    fill="freeze"
                  />
                </rect>
              )}
              {/* Node body */}
              <rect
                x={node.x}
                y={node.y}
                width={80}
                height={32}
                rx="8"
                fill="#111827"
                stroke={isPulsing ? node.color : "rgba(255,255,255,0.08)"}
                strokeWidth={isPulsing ? 1.5 : 1}
                style={{ transition: "stroke 0.3s ease" }}
              />
              {/* Dot indicator */}
              <circle
                cx={node.x + 14}
                cy={node.y + 16}
                r="3"
                fill={node.color}
                opacity={isPulsing ? 1 : 0.6}
              />
              {/* Label */}
              <text
                x={node.x + 26}
                y={node.y + 20}
                fill={isPulsing ? "#fff" : "#94A3B8"}
                fontSize="10"
                fontFamily="var(--font-body)"
                fontWeight="500"
                style={{ transition: "fill 0.3s ease" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
