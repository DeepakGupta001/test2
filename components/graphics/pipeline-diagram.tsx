"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Pipeline diagram for the Process section.
 * Flows: Raw data → Rubric → Reviewers → QA gates → Export packet
 * Rendered as a single SVG with subtle "data dot" motion along the path.
 */
export function PipelineDiagram() {
  const reduce = useReducedMotion();

  const nodes = [
    { x: 34, label: "Raw" },
    { x: 90, label: "Rubric" },
    { x: 148, label: "Review" },
    { x: 206, label: "QA" },
    { x: 264, label: "Export" },
  ];
  const y = 80;

  return (
    <div className="relative w-full border border-[var(--border)] bg-[var(--bg)] p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        <span>data flow</span>
        <span className="text-[var(--accent)]">live · gated</span>
      </div>

      <svg
        viewBox="0 0 300 160"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Pipeline diagram: raw data flows through rubric, reviewers, QA gates, and export"
      >
        {/* background grid */}
        <defs>
          <pattern
            id="pipe-grid"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 16 0 L 0 0 0 16"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.08"
              strokeWidth="0.5"
            />
          </pattern>
          <marker
            id="arrow-pipe"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 0 0 L 8 5 L 0 10 z" fill="var(--accent)" />
          </marker>
        </defs>
        <rect width="300" height="160" fill="url(#pipe-grid)" />

        {/* trunk line */}
        <line
          x1="22"
          y1={y}
          x2="282"
          y2={y}
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="1.4"
        />

        {/* tick marks */}
        {nodes.map((n) => (
          <line
            key={`tick-${n.x}`}
            x1={n.x}
            y1={y - 5}
            x2={n.x}
            y2={y + 5}
            stroke="var(--accent)"
            strokeOpacity="0.6"
          />
        ))}

        {/* feedback loop */}
        <path
          d="M 264 72 C 264 40, 90 40, 90 72"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeDasharray="3 3"
          strokeWidth="1"
          markerEnd="url(#arrow-pipe)"
        />
        <text
          x="177"
          y="34"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="8"
          fill="currentColor"
          opacity="0.55"
        >
          feedback · rubric v2
        </text>

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <rect
              x={n.x - 18}
              y={y + 12}
              width="36"
              height="18"
              fill={i === 2 || i === 3 ? "var(--accent)" : "none"}
              stroke="var(--accent)"
              strokeWidth="1.2"
              opacity={i === 2 || i === 3 ? 0.95 : 1}
            />
            <text
              x={n.x}
              y={y + 24}
              textAnchor="middle"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="8"
              fill={i === 2 || i === 3 ? "#0a0a0a" : "var(--accent)"}
              fontWeight={i === 2 || i === 3 ? 700 : 500}
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={y - 12}
              textAnchor="middle"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="8"
              fill="currentColor"
              opacity="0.55"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}

        {/* bottom rails — outputs */}
        <g transform="translate(0,124)">
          {[
            { x: 148, label: "reject" },
            { x: 206, label: "needs-review" },
            { x: 264, label: "ship" },
          ].map((o, i) => (
            <g key={o.label}>
              <line
                x1={o.x}
                y1="0"
                x2={o.x}
                y2="12"
                stroke="currentColor"
                strokeOpacity="0.3"
                strokeDasharray="2 2"
              />
              <circle
                cx={o.x}
                cy="14"
                r="2.2"
                fill={i === 2 ? "var(--accent)" : "currentColor"}
                opacity={i === 2 ? 1 : 0.5}
              />
              <text
                x={o.x}
                y="26"
                textAnchor="middle"
                fontFamily="var(--font-geist-mono), monospace"
                fontSize="7"
                fill="currentColor"
                opacity={i === 2 ? 0.85 : 0.5}
              >
                {o.label}
              </text>
            </g>
          ))}
        </g>

        {/* traveling data dot */}
        {!reduce && (
          <motion.circle
            r="3"
            fill="var(--accent)"
            initial={{ cx: 22, cy: y }}
            animate={{ cx: [22, 282, 22] }}
            transition={{
              duration: 6.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        )}
      </svg>
    </div>
  );
}
