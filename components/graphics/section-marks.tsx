/**
 * Small decorative SVG marks used at the top of sections / as corner accents.
 * All are pure SVG, theme-aware, and aria-hidden.
 */

const ACCENT = "var(--accent)";

export function CornerTicks({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M 4 20 L 4 4 L 20 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      <path
        d="M 60 4 L 76 4 L 76 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      <path
        d="M 76 60 L 76 76 L 60 76"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      <path
        d="M 20 76 L 4 76 L 4 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      <circle cx="40" cy="40" r="4" fill={ACCENT} />
      <circle cx="40" cy="40" r="14" fill="none" stroke={ACCENT} strokeOpacity="0.5" />
      <circle cx="40" cy="40" r="24" fill="none" stroke={ACCENT} strokeOpacity="0.25" />
    </svg>
  );
}

/** Blueprint-style "section index" stamp, e.g. "§ 03 · PROCESS". */
export function SectionStamp({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 ${className}`}
    >
      <span className="text-[var(--accent)]">§ {index}</span>
      <span className="h-3 w-px bg-[var(--border)]" aria-hidden />
      <span>{label}</span>
    </div>
  );
}

/** Orbit / radial graphic — used on core-services header. */
export function OrbitGraphic({ className = "" }: { className?: string }) {
  const nodes = [
    { a: 0, label: "SFT" },
    { a: 60, label: "RLHF" },
    { a: 120, label: "Eval" },
    { a: 180, label: "Rubric" },
    { a: 240, label: "CoT" },
    { a: 300, label: "MM" },
  ];
  const cx = 100;
  const cy = 100;
  const r = 64;
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <circle
        cx={cx}
        cy={cy}
        r={r - 16}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeDasharray="2 3"
      />
      <circle cx={cx} cy={cy} r="6" fill={ACCENT} />
      <text
        x={cx}
        y={cy + 3}
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fontWeight="700"
        fill="#0a0a0a"
      >
        core
      </text>
      {nodes.map((n) => {
        const rad = (n.a * Math.PI) / 180;
        const x = cx + Math.cos(rad) * r;
        const y = cy + Math.sin(rad) * r;
        return (
          <g key={n.label}>
            <line
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeOpacity="0.15"
            />
            <rect
              x={x - 16}
              y={y - 8}
              width="32"
              height="14"
              fill="var(--bg)"
              stroke={ACCENT}
              strokeWidth="1"
            />
            <text
              x={x}
              y={y + 2}
              textAnchor="middle"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="7"
              fill={ACCENT}
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Dotted pattern used as background accent inside differentiator icon cells. */
export function DotGrid({ className = "" }: { className?: string }) {
  const dots = [];
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      dots.push([x * 10 + 4, y * 10 + 4]);
    }
  }
  return (
    <svg
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {dots.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="0.8"
          fill="currentColor"
          opacity={((i * 13) % 7) / 20 + 0.05}
        />
      ))}
    </svg>
  );
}
