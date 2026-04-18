const ACCENT = "var(--accent)";
const MUTED = "currentColor";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Side-by-side preference tallies — pairwise rating signal. */
export function PreferenceGraphic() {
  return (
    <Frame>
      {/* Two tally stacks */}
      <text
        x="50"
        y="18"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={MUTED}
        opacity="0.55"
      >
        model A
      </text>
      <text
        x="150"
        y="18"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={ACCENT}
      >
        model B ✓
      </text>

      {/* A bars */}
      {[46, 34, 28].map((h, i) => (
        <rect
          key={`a${i}`}
          x={20 + i * 22}
          y={90 - h}
          width="14"
          height={h}
          fill={MUTED}
          opacity="0.35"
        />
      ))}
      {/* B bars */}
      {[58, 66, 72].map((h, i) => (
        <rect
          key={`b${i}`}
          x={120 + i * 22}
          y={90 - h}
          width="14"
          height={h}
          fill={ACCENT}
          opacity="0.9"
        />
      ))}

      {/* axis labels */}
      {["style", "fact", "safety"].map((l, i) => (
        <text
          key={l}
          x={27 + i * 22}
          y="98"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="6.5"
          fill={MUTED}
          opacity="0.55"
        >
          {l}
        </text>
      ))}
      {["style", "fact", "safety"].map((l, i) => (
        <text
          key={`b-${l}`}
          x={127 + i * 22}
          y="98"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="6.5"
          fill={MUTED}
          opacity="0.55"
        >
          {l}
        </text>
      ))}

      {/* divider */}
      <line
        x1="100"
        y1="22"
        x2="100"
        y2="92"
        stroke={MUTED}
        strokeOpacity="0.2"
        strokeDasharray="2 3"
      />
    </Frame>
  );
}

/** Padlock + reviewer badge — access-controlled pipeline. */
export function SafetyGraphic() {
  return (
    <Frame>
      {/* padlock */}
      <g transform="translate(40,18)">
        <path
          d="M 10 14 V 10 A 10 10 0 0 1 30 10 V 14"
          fill="none"
          stroke={MUTED}
          strokeOpacity="0.55"
          strokeWidth="1.6"
        />
        <rect
          x="6"
          y="14"
          width="28"
          height="24"
          fill={ACCENT}
          fillOpacity="0.15"
          stroke={ACCENT}
          strokeWidth="1.6"
        />
        <circle cx="20" cy="26" r="2.5" fill={ACCENT} />
        <line
          x1="20"
          y1="28"
          x2="20"
          y2="33"
          stroke={ACCENT}
          strokeWidth="1.4"
        />
      </g>

      {/* connecting line */}
      <line
        x1="88"
        y1="44"
        x2="120"
        y2="44"
        stroke={MUTED}
        strokeOpacity="0.35"
        strokeDasharray="2 2"
      />

      {/* reviewer badges stack */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${120 + i * 6},${26 + i * 4})`}>
          <rect
            width="48"
            height="28"
            fill={i === 2 ? ACCENT : MUTED}
            fillOpacity={i === 2 ? 0.9 : 0.1}
            stroke={i === 2 ? ACCENT : MUTED}
            strokeOpacity={i === 2 ? 1 : 0.35}
          />
          {i === 2 && (
            <>
              <circle cx="10" cy="14" r="4" fill="#0a0a0a" />
              <rect x="18" y="10" width="26" height="2" fill="#0a0a0a" />
              <rect x="18" y="15" width="20" height="2" fill="#0a0a0a" opacity="0.7" />
              <rect x="18" y="19" width="22" height="2" fill="#0a0a0a" opacity="0.5" />
            </>
          )}
        </g>
      ))}

      {/* footer tags */}
      {[
        { x: 16, label: "PII" },
        { x: 56, label: "HIPAA" },
        { x: 106, label: "SOC2" },
        { x: 156, label: "AUDIT" },
      ].map((t) => (
        <g key={t.label}>
          <rect
            x={t.x}
            y="78"
            width="32"
            height="12"
            fill="none"
            stroke={MUTED}
            strokeOpacity="0.35"
          />
          <text
            x={t.x + 16}
            y="87"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            fill={MUTED}
            opacity="0.7"
          >
            {t.label}
          </text>
        </g>
      ))}
    </Frame>
  );
}

/** Train / eval / held-out split with metadata slices. */
export function ExportGraphic() {
  // a small "dataset tape" with colored splits
  return (
    <Frame>
      <text
        x="10"
        y="18"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={MUTED}
        opacity="0.55"
      >
        dataset · v12
      </text>
      <text
        x="190"
        y="18"
        textAnchor="end"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={ACCENT}
      >
        .parquet
      </text>

      {/* bar split */}
      <g transform="translate(10,28)">
        <rect width="126" height="16" fill={MUTED} opacity="0.3" />
        <rect x="126" width="36" height="16" fill={ACCENT} opacity="0.7" />
        <rect x="162" width="18" height="16" fill={ACCENT} opacity="0.95" />
        {/* labels */}
        <text
          x="63"
          y="12"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="8"
          fill={MUTED}
          opacity="0.8"
          dy="-1"
        >
          train 70%
        </text>
      </g>
      {/* segment labels below */}
      <text
        x="144"
        y="54"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={ACCENT}
      >
        eval 20%
      </text>
      <text
        x="180"
        y="54"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={ACCENT}
      >
        held 10%
      </text>

      {/* metadata columns */}
      <g transform="translate(10,62)">
        {[
          { w: 30, label: "id" },
          { w: 42, label: "label" },
          { w: 50, label: "split" },
          { w: 28, label: "iaa" },
          { w: 28, label: "ver" },
        ].map((col, i, arr) => {
          const x = arr.slice(0, i).reduce((s, c) => s + c.w + 2, 0);
          return (
            <g key={col.label}>
              <rect
                x={x}
                y="0"
                width={col.w}
                height="10"
                fill={MUTED}
                opacity="0.12"
              />
              <text
                x={x + 3}
                y="8"
                fontFamily="var(--font-geist-mono), monospace"
                fontSize="6.5"
                fill={MUTED}
                opacity="0.75"
              >
                {col.label}
              </text>
              {/* cell values */}
              {[0, 1, 2].map((row) => (
                <rect
                  key={row}
                  x={x + 2}
                  y={12 + row * 5}
                  width={col.w - 4}
                  height="1.5"
                  fill={row === 1 && col.label === "iaa" ? ACCENT : MUTED}
                  opacity={row === 1 && col.label === "iaa" ? 0.9 : 0.4}
                />
              ))}
            </g>
          );
        })}
      </g>
    </Frame>
  );
}
