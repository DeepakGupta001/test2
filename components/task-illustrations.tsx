/**
 * Inline SVG diagrams that explain each annotation task visually.
 * Consistent viewBox "0 0 200 100" keeps the aspect uniform across cards.
 * Colors use currentColor for neutral strokes and CSS var --accent for highlights.
 */

export type IllustrationKey =
  // Speech
  | "transcription"
  | "diarization"
  | "emotion"
  | "language-id"
  | "phoneme"
  | "audio-events"
  | "intent-entity"
  | "mos-mushra"
  // Image
  | "bbox"
  | "semantic-seg"
  | "instance-seg"
  | "keypoints"
  | "classification"
  | "polygon"
  | "medical"
  | "rlhf-rating"
  | "ocr"
  // Video
  | "tracking"
  | "temporal-seg"
  | "action"
  | "lidar-3d"
  | "interaction"
  | "captioning"
  | "anomaly"
  | "video-quality";

const ACCENT = "var(--accent)";
const MUTED = "currentColor";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
    >
      <rect
        x="1"
        y="1"
        width="198"
        height="98"
        fill="none"
        stroke={MUTED}
        strokeOpacity="0.15"
        strokeDasharray="3 3"
      />
      {children}
    </svg>
  );
}

// ---------- Shared helpers ----------
function Wave({
  y = 50,
  x = 10,
  w = 180,
  amp = 10,
  stroke = MUTED,
  opacity = 0.5,
}: {
  y?: number;
  x?: number;
  w?: number;
  amp?: number;
  stroke?: string;
  opacity?: number;
}) {
  const steps = 40;
  const dx = w / steps;
  let d = `M ${x} ${y}`;
  for (let i = 0; i <= steps; i++) {
    const yy = y + (Math.sin(i * 0.9) * amp * (0.4 + Math.cos(i * 0.3) * 0.6));
    d += ` L ${x + i * dx} ${yy}`;
  }
  return (
    <path d={d} fill="none" stroke={stroke} strokeWidth="1.2" opacity={opacity} />
  );
}

// =========================================================
// SPEECH
// =========================================================

function Transcription() {
  return (
    <Frame>
      <Wave x={10} y={35} w={70} amp={12} stroke={ACCENT} opacity={0.9} />
      <path
        d="M 86 50 L 104 50"
        stroke={MUTED}
        strokeOpacity="0.5"
        strokeWidth="1.2"
        markerEnd="url(#tx-arrow)"
      />
      <defs>
        <marker
          id="tx-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 0 L 8 5 L 0 10 z" fill={MUTED} fillOpacity="0.5" />
        </marker>
      </defs>
      <rect x="110" y="28" width="78" height="3" fill={MUTED} opacity="0.9" />
      <rect x="110" y="38" width="66" height="3" fill={MUTED} opacity="0.55" />
      <rect x="110" y="48" width="72" height="3" fill={MUTED} opacity="0.7" />
      <rect x="110" y="58" width="50" height="3" fill={MUTED} opacity="0.4" />
      <text
        x="10"
        y="82"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={MUTED}
        opacity="0.55"
      >
        audio
      </text>
      <text
        x="110"
        y="82"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={ACCENT}
      >
        transcript.json
      </text>
    </Frame>
  );
}

function Diarization() {
  return (
    <Frame>
      <text
        x="10"
        y="28"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={MUTED}
        opacity="0.7"
      >
        SPK-A
      </text>
      <text
        x="10"
        y="62"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={MUTED}
        opacity="0.7"
      >
        SPK-B
      </text>
      <rect x="42" y="18" width="40" height="12" fill={ACCENT} opacity="0.85" />
      <rect x="96" y="18" width="14" height="12" fill={ACCENT} opacity="0.45" />
      <rect
        x="130"
        y="18"
        width="56"
        height="12"
        fill={ACCENT}
        opacity="0.85"
      />
      <rect x="82" y="52" width="18" height="12" fill={MUTED} opacity="0.55" />
      <rect x="108" y="52" width="26" height="12" fill={MUTED} opacity="0.8" />
      {/* Timeline axis */}
      <line
        x1="42"
        y1="80"
        x2="190"
        y2="80"
        stroke={MUTED}
        strokeOpacity="0.3"
      />
      {[0, 25, 50, 75, 100].map((t, i) => (
        <line
          key={i}
          x1={42 + (148 * t) / 100}
          y1="78"
          x2={42 + (148 * t) / 100}
          y2="82"
          stroke={MUTED}
          strokeOpacity="0.3"
        />
      ))}
    </Frame>
  );
}

function Emotion() {
  return (
    <Frame>
      <Wave x={10} y={65} w={180} amp={8} stroke={MUTED} opacity={0.4} />
      {[
        { x: 14, label: "neutral", accent: false },
        { x: 62, label: "joy", accent: true },
        { x: 102, label: "anger", accent: false },
        { x: 148, label: "calm", accent: true },
      ].map((t) => (
        <g key={t.label}>
          <rect
            x={t.x}
            y="22"
            width="38"
            height="16"
            rx="8"
            fill={t.accent ? ACCENT : "none"}
            stroke={t.accent ? "none" : MUTED}
            strokeOpacity="0.45"
            opacity={t.accent ? 0.9 : 1}
          />
          <text
            x={t.x + 19}
            y="33"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            fill={t.accent ? "#0a0a0a" : MUTED}
            opacity={t.accent ? 1 : 0.75}
          >
            {t.label}
          </text>
          <line
            x1={t.x + 19}
            y1="40"
            x2={t.x + 19}
            y2="58"
            stroke={t.accent ? ACCENT : MUTED}
            strokeOpacity={t.accent ? 0.8 : 0.3}
            strokeDasharray="2 2"
          />
        </g>
      ))}
    </Frame>
  );
}

function LanguageId() {
  const segs = [
    { lang: "en", x: 10, w: 48, accent: true },
    { lang: "es", x: 58, w: 42, accent: false },
    { lang: "ja", x: 100, w: 50, accent: true },
    { lang: "fr", x: 150, w: 40, accent: false },
  ];
  return (
    <Frame>
      {segs.map((s) => (
        <g key={s.lang}>
          <Wave
            x={s.x}
            y={50}
            w={s.w}
            amp={8}
            stroke={s.accent ? ACCENT : MUTED}
            opacity={s.accent ? 0.9 : 0.45}
          />
          <line
            x1={s.x}
            y1="22"
            x2={s.x}
            y2="78"
            stroke={MUTED}
            strokeOpacity="0.25"
            strokeDasharray="2 2"
          />
          <text
            x={s.x + s.w / 2}
            y="88"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="9"
            fill={s.accent ? ACCENT : MUTED}
            opacity={s.accent ? 1 : 0.7}
          >
            {s.lang}
          </text>
        </g>
      ))}
      <line
        x1="190"
        y1="22"
        x2="190"
        y2="78"
        stroke={MUTED}
        strokeOpacity="0.25"
        strokeDasharray="2 2"
      />
    </Frame>
  );
}

function Phoneme() {
  const ph = ["/h/", "/ɛ/", "/l/", "/oʊ/", "/w/", "/ɜ˞/", "/l/", "/d/"];
  return (
    <Frame>
      <Wave x={10} y={30} w={180} amp={7} stroke={MUTED} opacity={0.45} />
      {ph.map((p, i) => {
        const x = 12 + i * 23;
        return (
          <g key={i}>
            <line
              x1={x}
              y1="22"
              x2={x}
              y2="60"
              stroke={ACCENT}
              strokeOpacity="0.25"
            />
            <rect
              x={x}
              y="60"
              width="22"
              height="16"
              fill="none"
              stroke={ACCENT}
              strokeOpacity="0.6"
            />
            <text
              x={x + 11}
              y="71"
              textAnchor="middle"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="8"
              fill={ACCENT}
            >
              {p}
            </text>
          </g>
        );
      })}
      <line
        x1="196"
        y1="22"
        x2="196"
        y2="60"
        stroke={ACCENT}
        strokeOpacity="0.25"
      />
    </Frame>
  );
}

function AudioEvents() {
  return (
    <Frame>
      <Wave x={10} y={60} w={180} amp={6} stroke={MUTED} opacity={0.35} />
      {/* Spikes */}
      {[40, 100, 158].map((x, i) => (
        <g key={i}>
          <line
            x1={x}
            y1="28"
            x2={x}
            y2="62"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          <circle cx={x} cy="28" r="3" fill={ACCENT} />
        </g>
      ))}
      {[
        { x: 40, label: "siren" },
        { x: 100, label: "dog" },
        { x: 158, label: "glass" },
      ].map((t) => (
        <text
          key={t.label}
          x={t.x}
          y="22"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="8"
          fill={ACCENT}
        >
          {t.label}
        </text>
      ))}
      <text
        x="10"
        y="86"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.55"
      >
        event timeline
      </text>
    </Frame>
  );
}

function IntentEntity() {
  return (
    <Frame>
      <text
        x="10"
        y="42"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="11"
        fill={MUTED}
        opacity="0.9"
      >
        Book a flight to{" "}
        <tspan fill={ACCENT} fontWeight="600">
          Tokyo
        </tspan>{" "}
        on{" "}
        <tspan fill={ACCENT} fontWeight="600">
          Friday
        </tspan>
      </text>
      {/* Entity underlines */}
      <rect x="88" y="46" width="28" height="1.5" fill={ACCENT} />
      <rect x="133" y="46" width="28" height="1.5" fill={ACCENT} />
      <text
        x="88"
        y="60"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={ACCENT}
      >
        LOCATION
      </text>
      <text
        x="133"
        y="60"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={ACCENT}
      >
        DATE
      </text>
      {/* Intent pill */}
      <rect
        x="10"
        y="72"
        width="62"
        height="14"
        rx="7"
        fill="none"
        stroke={MUTED}
        strokeOpacity="0.45"
      />
      <text
        x="41"
        y="82"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.8"
      >
        intent: book_flight
      </text>
    </Frame>
  );
}

function MosMushra() {
  const bars = [20, 38, 55, 70, 82];
  return (
    <Frame>
      {bars.map((h, i) => (
        <g key={i}>
          <rect
            x={30 + i * 28}
            y={90 - h}
            width="18"
            height={h}
            fill={i === 3 ? ACCENT : MUTED}
            opacity={i === 3 ? 0.9 : 0.35}
          />
          <text
            x={30 + i * 28 + 9}
            y="98"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            fill={MUTED}
            opacity="0.6"
          >
            {i + 1}
          </text>
        </g>
      ))}
      <text
        x="10"
        y="18"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={ACCENT}
      >
        MOS / MUSHRA
      </text>
      <text
        x="178"
        y="18"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.55"
        textAnchor="end"
      >
        n=420
      </text>
    </Frame>
  );
}

// =========================================================
// IMAGE
// =========================================================

function ImageFrame({ children }: { children: React.ReactNode }) {
  return (
    <Frame>
      <rect
        x="10"
        y="14"
        width="180"
        height="72"
        fill={MUTED}
        fillOpacity="0.05"
        stroke={MUTED}
        strokeOpacity="0.2"
      />
      {children}
    </Frame>
  );
}

function Bbox() {
  const boxes = [
    { x: 28, y: 30, w: 52, h: 40, label: "car" },
    { x: 100, y: 38, w: 36, h: 32, label: "person" },
    { x: 148, y: 46, w: 30, h: 24, label: "sign" },
  ];
  return (
    <ImageFrame>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          {/* corner marks */}
          {[
            [b.x, b.y],
            [b.x + b.w, b.y],
            [b.x, b.y + b.h],
            [b.x + b.w, b.y + b.h],
          ].map(([cx, cy], j) => (
            <circle key={j} cx={cx} cy={cy} r="1.6" fill={ACCENT} />
          ))}
          <rect
            x={b.x}
            y={b.y - 10}
            width={b.label.length * 5 + 6}
            height="10"
            fill={ACCENT}
          />
          <text
            x={b.x + 3}
            y={b.y - 2}
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            fill="#0a0a0a"
            fontWeight="600"
          >
            {b.label}
          </text>
        </g>
      ))}
    </ImageFrame>
  );
}

function SemanticSeg() {
  return (
    <ImageFrame>
      {/* sky */}
      <rect x="10" y="14" width="180" height="28" fill={ACCENT} opacity="0.25" />
      {/* building */}
      <rect x="10" y="42" width="90" height="44" fill={MUTED} opacity="0.35" />
      {/* road */}
      <polygon
        points="10,86 190,86 190,70 100,60"
        fill={ACCENT}
        opacity="0.55"
      />
      {/* car */}
      <rect x="120" y="52" width="50" height="18" fill={MUTED} opacity="0.7" />
      {/* legend */}
      <g transform="translate(12,92)">
        {[
          { c: ACCENT, o: 0.25, l: "sky" },
          { c: MUTED, o: 0.35, l: "bldg" },
          { c: ACCENT, o: 0.55, l: "road" },
          { c: MUTED, o: 0.7, l: "car" },
        ].map((i, idx) => (
          <g key={idx} transform={`translate(${idx * 44},0)`}>
            <rect width="6" height="4" fill={i.c} opacity={i.o} />
          </g>
        ))}
      </g>
    </ImageFrame>
  );
}

function InstanceSeg() {
  return (
    <ImageFrame>
      <path
        d="M 30 40 Q 50 28 70 42 Q 78 58 64 72 Q 42 78 28 66 Q 22 52 30 40 Z"
        fill={ACCENT}
        opacity="0.55"
      />
      <text
        x="45"
        y="56"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill="#0a0a0a"
        fontWeight="700"
      >
        #1
      </text>
      <path
        d="M 92 32 Q 118 26 132 44 Q 138 62 120 72 Q 98 74 88 60 Q 82 44 92 32 Z"
        fill={MUTED}
        opacity="0.5"
      />
      <text
        x="106"
        y="54"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill="#0a0a0a"
        fontWeight="700"
      >
        #2
      </text>
      <path
        d="M 150 46 Q 172 40 184 58 Q 182 74 162 78 Q 146 72 148 60 Q 146 50 150 46 Z"
        fill={ACCENT}
        opacity="0.35"
      />
      <text
        x="162"
        y="62"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill="#0a0a0a"
        fontWeight="700"
      >
        #3
      </text>
    </ImageFrame>
  );
}

function Keypoints() {
  const pts: Record<string, [number, number]> = {
    head: [100, 26],
    neck: [100, 40],
    lsh: [84, 44],
    rsh: [116, 44],
    lelb: [74, 60],
    relb: [126, 60],
    lwr: [68, 76],
    rwr: [132, 76],
    hip: [100, 62],
    lkn: [90, 80],
    rkn: [110, 80],
  };
  const edges: [keyof typeof pts, keyof typeof pts][] = [
    ["head", "neck"],
    ["neck", "lsh"],
    ["neck", "rsh"],
    ["lsh", "lelb"],
    ["lelb", "lwr"],
    ["rsh", "relb"],
    ["relb", "rwr"],
    ["neck", "hip"],
    ["hip", "lkn"],
    ["hip", "rkn"],
  ];
  return (
    <ImageFrame>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={pts[a][0]}
          y1={pts[a][1]}
          x2={pts[b][0]}
          y2={pts[b][1]}
          stroke={ACCENT}
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />
      ))}
      {Object.entries(pts).map(([k, [x, y]]) => (
        <circle key={k} cx={x} cy={y} r="2.4" fill={ACCENT} />
      ))}
      <text
        x="14"
        y="24"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.6"
      >
        17 kpts
      </text>
    </ImageFrame>
  );
}

function Classification() {
  return (
    <ImageFrame>
      {/* "image content" abstract */}
      <circle cx="100" cy="52" r="22" fill={MUTED} opacity="0.3" />
      <circle cx="92" cy="48" r="2" fill={MUTED} opacity="0.7" />
      <circle cx="108" cy="48" r="2" fill={MUTED} opacity="0.7" />
      <path
        d="M 90 60 Q 100 66 110 60"
        fill="none"
        stroke={MUTED}
        strokeOpacity="0.7"
      />
      <rect
        x="72"
        y="82"
        width="56"
        height="12"
        fill={ACCENT}
        opacity="0.9"
      />
      <text
        x="100"
        y="91"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill="#0a0a0a"
        fontWeight="700"
      >
        label: cat
      </text>
    </ImageFrame>
  );
}

function Polygon() {
  const pts = [
    [40, 30],
    [90, 22],
    [140, 34],
    [168, 58],
    [144, 80],
    [78, 78],
    [40, 62],
  ];
  return (
    <ImageFrame>
      <polygon
        points={pts.map((p) => p.join(",")).join(" ")}
        fill={ACCENT}
        fillOpacity="0.15"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      {pts.map(([x, y], i) => (
        <rect
          key={i}
          x={x - 2}
          y={y - 2}
          width="4"
          height="4"
          fill={ACCENT}
        />
      ))}
      <text
        x="14"
        y="24"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.6"
      >
        {pts.length} vertices
      </text>
    </ImageFrame>
  );
}

function Medical() {
  return (
    <ImageFrame>
      <circle
        cx="100"
        cy="50"
        r="34"
        fill={MUTED}
        opacity="0.12"
        stroke={MUTED}
        strokeOpacity="0.35"
      />
      <circle
        cx="100"
        cy="50"
        r="22"
        fill={MUTED}
        opacity="0.18"
      />
      {/* Lesion highlight */}
      <path
        d="M 112 46 Q 120 50 116 58 Q 108 62 104 56 Q 102 48 112 46 Z"
        fill={ACCENT}
        fillOpacity="0.7"
        stroke={ACCENT}
        strokeWidth="1.2"
      />
      <line
        x1="132"
        y1="38"
        x2="116"
        y2="50"
        stroke={ACCENT}
        strokeOpacity="0.6"
      />
      <rect
        x="134"
        y="30"
        width="44"
        height="14"
        fill="none"
        stroke={ACCENT}
        strokeOpacity="0.7"
      />
      <text
        x="156"
        y="40"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={ACCENT}
      >
        ROI #1
      </text>
      <text
        x="14"
        y="24"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.6"
      >
        DICOM
      </text>
    </ImageFrame>
  );
}

function RlhfRating() {
  return (
    <Frame>
      {/* Two candidate tiles */}
      <rect
        x="12"
        y="18"
        width="72"
        height="56"
        fill={MUTED}
        fillOpacity="0.08"
        stroke={ACCENT}
        strokeWidth="1.6"
      />
      <rect
        x="116"
        y="18"
        width="72"
        height="56"
        fill={MUTED}
        fillOpacity="0.05"
        stroke={MUTED}
        strokeOpacity="0.3"
      />
      <text
        x="48"
        y="50"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="9"
        fill={ACCENT}
      >
        A
      </text>
      <text
        x="152"
        y="50"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="9"
        fill={MUTED}
        opacity="0.5"
      >
        B
      </text>
      {/* Preference arrow + label */}
      <path
        d="M 92 50 L 108 50"
        stroke={ACCENT}
        strokeWidth="1.2"
        markerEnd="url(#rl-arr)"
      />
      <defs>
        <marker
          id="rl-arr"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 0 L 8 5 L 0 10 z" fill={ACCENT} />
        </marker>
      </defs>
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={ACCENT}
      >
        A &gt; B
      </text>
      <text
        x="100"
        y="16"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.55"
      >
        pairwise preference
      </text>
    </Frame>
  );
}

function Ocr() {
  return (
    <ImageFrame>
      {[24, 36, 48, 60, 72].map((y, i) => (
        <rect
          key={i}
          x={20}
          y={y}
          width={160 - i * 10}
          height="3"
          fill={MUTED}
          opacity="0.3"
        />
      ))}
      {/* OCR boxes */}
      <rect
        x="18"
        y="22"
        width="84"
        height="8"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.2"
      />
      <rect
        x="18"
        y="34"
        width="110"
        height="8"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.2"
      />
      <rect
        x="18"
        y="58"
        width="60"
        height="8"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.2"
      />
      <text
        x="130"
        y="40"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="6.5"
        fill={ACCENT}
      >
        field: total
      </text>
    </ImageFrame>
  );
}

// =========================================================
// VIDEO
// =========================================================

function Tracking() {
  const frames = [16, 76, 136];
  return (
    <Frame>
      {frames.map((fx, i) => (
        <g key={i}>
          <rect
            x={fx}
            y={20}
            width="48"
            height="52"
            fill={MUTED}
            fillOpacity="0.06"
            stroke={MUTED}
            strokeOpacity="0.2"
          />
          <rect
            x={fx + 10 + i * 8}
            y={36}
            width="18"
            height="16"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.4"
          />
          <text
            x={fx + 19 + i * 8}
            y={34}
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="6"
            fill={ACCENT}
          >
            id:07
          </text>
          <text
            x={fx + 24}
            y={82}
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            fill={MUTED}
            opacity="0.55"
          >
            t{i}
          </text>
        </g>
      ))}
      {/* connecting dashes */}
      {frames.slice(0, -1).map((fx, i) => (
        <line
          key={i}
          x1={fx + 48}
          y1={46}
          x2={frames[i + 1]}
          y2={46}
          stroke={ACCENT}
          strokeOpacity="0.4"
          strokeDasharray="2 2"
        />
      ))}
    </Frame>
  );
}

function TemporalSeg() {
  const segs = [
    { x: 10, w: 42, label: "idle", accent: false },
    { x: 52, w: 62, label: "talk", accent: true },
    { x: 114, w: 30, label: "walk", accent: false },
    { x: 144, w: 46, label: "talk", accent: true },
  ];
  return (
    <Frame>
      {segs.map((s, i) => (
        <g key={i}>
          <rect
            x={s.x}
            y="38"
            width={s.w}
            height="22"
            fill={s.accent ? ACCENT : MUTED}
            opacity={s.accent ? 0.85 : 0.25}
          />
          <text
            x={s.x + s.w / 2}
            y="52"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="8"
            fill={s.accent ? "#0a0a0a" : MUTED}
            fontWeight={s.accent ? 700 : 400}
            opacity={s.accent ? 1 : 0.7}
          >
            {s.label}
          </text>
        </g>
      ))}
      <line
        x1="10"
        y1="70"
        x2="190"
        y2="70"
        stroke={MUTED}
        strokeOpacity="0.3"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <line
            x1={10 + i * 36}
            y1="68"
            x2={10 + i * 36}
            y2="72"
            stroke={MUTED}
            strokeOpacity="0.4"
          />
          <text
            x={10 + i * 36}
            y="82"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            fill={MUTED}
            opacity="0.5"
          >
            {i * 2}s
          </text>
        </g>
      ))}
      <text
        x="10"
        y="26"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill={MUTED}
        opacity="0.6"
      >
        clip · action spans
      </text>
    </Frame>
  );
}

function Action() {
  return (
    <Frame>
      <rect
        x="56"
        y="14"
        width="88"
        height="62"
        fill={MUTED}
        fillOpacity="0.06"
        stroke={MUTED}
        strokeOpacity="0.2"
      />
      {/* Stick figure jumping */}
      <circle cx="100" cy="30" r="5" fill="none" stroke={ACCENT} strokeWidth="1.4" />
      <line
        x1="100"
        y1="35"
        x2="100"
        y2="52"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      <line
        x1="100"
        y1="42"
        x2="88"
        y2="36"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      <line
        x1="100"
        y1="42"
        x2="112"
        y2="36"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      <line
        x1="100"
        y1="52"
        x2="92"
        y2="66"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      <line
        x1="100"
        y1="52"
        x2="108"
        y2="66"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      {/* motion arcs */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M ${78 - i * 4} ${72 - i * 2} Q ${100} ${56 - i * 4} ${122 + i * 4} ${72 - i * 2}`}
          fill="none"
          stroke={ACCENT}
          strokeOpacity={0.3 - i * 0.08}
          strokeDasharray="2 3"
        />
      ))}
      {/* Action label */}
      <rect
        x="72"
        y="82"
        width="56"
        height="12"
        fill={ACCENT}
      />
      <text
        x="100"
        y="91"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill="#0a0a0a"
        fontWeight="700"
      >
        action: jump
      </text>
    </Frame>
  );
}

function Lidar3d() {
  // Isometric cube
  const X = 100;
  const Y = 50;
  const s = 26;
  const dy = 14;
  return (
    <Frame>
      {/* Point cloud dots */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (i / 60) * Math.PI * 2;
        const r = 24 + ((i * 7) % 20);
        const cx = X + Math.cos(angle) * r * 1.4;
        const cy = Y + Math.sin(angle) * r * 0.8;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="0.9"
            fill={MUTED}
            opacity="0.35"
          />
        );
      })}
      {/* Bottom rect */}
      <polygon
        points={`${X - s},${Y + dy} ${X},${Y + dy + dy / 1.6} ${X + s},${Y + dy} ${X},${Y + dy - dy / 1.6}`}
        fill={ACCENT}
        fillOpacity="0.1"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      {/* Top rect */}
      <polygon
        points={`${X - s},${Y - dy} ${X},${Y - dy + dy / 1.6} ${X + s},${Y - dy} ${X},${Y - dy - dy / 1.6}`}
        fill={ACCENT}
        fillOpacity="0.2"
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      {/* Vertical edges */}
      {[
        [X - s, Y - dy, X - s, Y + dy],
        [X + s, Y - dy, X + s, Y + dy],
        [X, Y - dy + dy / 1.6, X, Y + dy + dy / 1.6],
        [X, Y - dy - dy / 1.6, X, Y + dy - dy / 1.6],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={ACCENT}
          strokeWidth="1.4"
        />
      ))}
      <text
        x="14"
        y="22"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={ACCENT}
      >
        3D · heading 42°
      </text>
      <text
        x="186"
        y="92"
        textAnchor="end"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.55"
      >
        LiDAR
      </text>
    </Frame>
  );
}

function Interaction() {
  return (
    <Frame>
      {/* Figure A */}
      <g>
        <circle cx="52" cy="32" r="6" fill="none" stroke={ACCENT} strokeWidth="1.4" />
        <line x1="52" y1="38" x2="52" y2="60" stroke={ACCENT} strokeWidth="1.4" />
        <line x1="52" y1="46" x2="64" y2="52" stroke={ACCENT} strokeWidth="1.4" />
        <line x1="52" y1="46" x2="42" y2="52" stroke={ACCENT} strokeWidth="1.4" />
        <line x1="52" y1="60" x2="44" y2="76" stroke={ACCENT} strokeWidth="1.4" />
        <line x1="52" y1="60" x2="60" y2="76" stroke={ACCENT} strokeWidth="1.4" />
      </g>
      {/* Figure B */}
      <g opacity="0.7">
        <circle cx="148" cy="32" r="6" fill="none" stroke={MUTED} strokeWidth="1.4" />
        <line x1="148" y1="38" x2="148" y2="60" stroke={MUTED} strokeWidth="1.4" />
        <line x1="148" y1="46" x2="136" y2="52" stroke={MUTED} strokeWidth="1.4" />
        <line x1="148" y1="46" x2="160" y2="52" stroke={MUTED} strokeWidth="1.4" />
        <line x1="148" y1="60" x2="140" y2="76" stroke={MUTED} strokeWidth="1.4" />
        <line x1="148" y1="60" x2="156" y2="76" stroke={MUTED} strokeWidth="1.4" />
      </g>
      {/* interaction line */}
      <path
        d="M 66 50 C 90 32, 110 32, 134 50"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.4"
        strokeDasharray="3 2"
      />
      <rect x="78" y="18" width="44" height="14" fill={ACCENT} />
      <text
        x="100"
        y="28"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill="#0a0a0a"
        fontWeight="700"
      >
        hand_off
      </text>
    </Frame>
  );
}

function Captioning() {
  return (
    <Frame>
      <rect
        x="10"
        y="12"
        width="180"
        height="56"
        fill={MUTED}
        fillOpacity="0.06"
        stroke={MUTED}
        strokeOpacity="0.2"
      />
      {/* simple scene */}
      <line
        x1="10"
        y1="56"
        x2="190"
        y2="56"
        stroke={MUTED}
        strokeOpacity="0.3"
      />
      <rect x="60" y="36" width="30" height="20" fill={MUTED} opacity="0.35" />
      <rect x="110" y="30" width="40" height="26" fill={MUTED} opacity="0.5" />
      <circle cx="30" cy="52" r="4" fill={ACCENT} opacity="0.7" />
      {/* caption bar */}
      <rect x="10" y="72" width="180" height="18" fill={ACCENT} opacity="0.9" />
      <text
        x="100"
        y="84"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fill="#0a0a0a"
        fontWeight="600"
      >
        &quot;person walking past two parked cars&quot;
      </text>
    </Frame>
  );
}

function Anomaly() {
  // Timeline with spike
  const pts = [
    [10, 70],
    [25, 66],
    [40, 72],
    [55, 68],
    [70, 70],
    [85, 64],
    [100, 28],
    [115, 66],
    [130, 70],
    [145, 66],
    [160, 68],
    [175, 70],
    [190, 66],
  ];
  const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
  return (
    <Frame>
      <path d={d} fill="none" stroke={MUTED} strokeOpacity="0.55" strokeWidth="1.3" />
      <circle cx="100" cy="28" r="4" fill={ACCENT} />
      <circle cx="100" cy="28" r="9" fill="none" stroke={ACCENT} strokeOpacity="0.4" />
      <line
        x1="100"
        y1="28"
        x2="100"
        y2="14"
        stroke={ACCENT}
        strokeWidth="1.2"
      />
      <rect x="76" y="2" width="48" height="12" fill={ACCENT} />
      <text
        x="100"
        y="11"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill="#0a0a0a"
        fontWeight="700"
      >
        anomaly
      </text>
      <line
        x1="10"
        y1="86"
        x2="190"
        y2="86"
        stroke={MUTED}
        strokeOpacity="0.3"
      />
      <text
        x="10"
        y="96"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.55"
      >
        timeline · score
      </text>
    </Frame>
  );
}

function VideoQuality() {
  // Arc gauge
  const cx = 100;
  const cy = 70;
  const r = 38;
  // Arc from 180° to 0° (top half)
  const start = { x: cx - r, y: cy };
  const end = { x: cx + r, y: cy };
  // Needle at 78/100 → angle = 180 - (78*180/100) = 180 - 140.4 = 39.6°
  const angle = (180 - 78 * 1.8) * (Math.PI / 180);
  const nx = cx + Math.cos(angle) * (r - 6);
  const ny = cy - Math.sin(angle) * (r - 6);
  return (
    <Frame>
      <rect
        x="14"
        y="14"
        width="54"
        height="36"
        fill={MUTED}
        fillOpacity="0.08"
        stroke={MUTED}
        strokeOpacity="0.2"
      />
      <rect
        x="132"
        y="14"
        width="54"
        height="36"
        fill={MUTED}
        fillOpacity="0.08"
        stroke={MUTED}
        strokeOpacity="0.2"
      />
      <path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`}
        fill="none"
        stroke={MUTED}
        strokeOpacity="0.3"
        strokeWidth="3"
      />
      <path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${nx} ${ny}`}
        fill="none"
        stroke={ACCENT}
        strokeWidth="3"
      />
      <circle cx={cx} cy={cy} r="3" fill={ACCENT} />
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={ACCENT} strokeWidth="1.6" />
      <text
        x={cx}
        y={cy - 14}
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="11"
        fontWeight="700"
        fill={ACCENT}
      >
        78
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="7"
        fill={MUTED}
        opacity="0.6"
      >
        ACR / 100
      </text>
    </Frame>
  );
}

// ---------- Registry ----------
export const taskIllustrations: Record<IllustrationKey, React.ComponentType> = {
  transcription: Transcription,
  diarization: Diarization,
  emotion: Emotion,
  "language-id": LanguageId,
  phoneme: Phoneme,
  "audio-events": AudioEvents,
  "intent-entity": IntentEntity,
  "mos-mushra": MosMushra,
  bbox: Bbox,
  "semantic-seg": SemanticSeg,
  "instance-seg": InstanceSeg,
  keypoints: Keypoints,
  classification: Classification,
  polygon: Polygon,
  medical: Medical,
  "rlhf-rating": RlhfRating,
  ocr: Ocr,
  tracking: Tracking,
  "temporal-seg": TemporalSeg,
  action: Action,
  "lidar-3d": Lidar3d,
  interaction: Interaction,
  captioning: Captioning,
  anomaly: Anomaly,
  "video-quality": VideoQuality,
};

export function TaskIllustration({
  kind,
  className = "",
  bare = false,
}: {
  kind: IllustrationKey;
  className?: string;
  /** Render SVG without the framed wrapper — useful inside other graphics. */
  bare?: boolean;
}) {
  const Component = taskIllustrations[kind];
  if (bare) {
    return (
      <div className={`h-full w-full text-zinc-500 ${className}`} aria-hidden>
        <Component />
      </div>
    );
  }
  return (
    <div
      className={`relative flex h-28 w-full items-center justify-center border-b border-[var(--border)] bg-[var(--bg)] text-zinc-500 ${className}`}
      aria-hidden
    >
      <div className="h-full w-full px-3 py-3">
        <Component />
      </div>
    </div>
  );
}
