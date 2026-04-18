"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A compact "session view" panel used to fill the tall Speech bento tile
 * on the landing page. Designed to read as annotation-tool output — not
 * a real tool screenshot, but same information density.
 */
export function SpeechShowcase() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-6 flex flex-1 flex-col border-t border-dashed border-[var(--border)] pt-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          sample session
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
          SP-0142 · en-US
        </span>
      </div>

      {/* Spectrogram panel */}
      <div className="relative mt-3 border border-[var(--border)] bg-[var(--bg)]">
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5">
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
            spectrogram · 0 – 4 kHz
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-[var(--accent)] ${reduce ? "" : "animate-pulse"}`}
              aria-hidden
            />
            live
          </span>
        </div>
        <Spectrogram />
      </div>

      {/* Dual-speaker timeline */}
      <div className="mt-3 border border-[var(--border)] bg-[var(--bg)] px-3 py-3">
        <SpeakerTimeline reduce={reduce ?? false} />
      </div>

      {/* Transcript lines */}
      <ul className="mt-3 space-y-1.5 font-mono text-[10.5px] leading-relaxed text-zinc-400 sm:text-[11px]">
        {transcript.map((t) => (
          <li key={t.time} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:gap-x-3">
            <span className="shrink-0 text-zinc-600">{t.time}</span>
            <span
              className={`shrink-0 font-semibold ${
                t.speaker === "A" ? "text-[var(--accent)]" : "text-zinc-300"
              }`}
            >
              {t.speaker === "A" ? "SPK-A" : "SPK-B"}
            </span>
            <span className="min-w-0 flex-1 basis-full sm:basis-0">{t.text}</span>
          </li>
        ))}
      </ul>

      {/* Bottom metrics strip */}
      <div className="mt-4 grid grid-cols-2 border border-[var(--border)] bg-[var(--bg)] text-center sm:grid-cols-4">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`border-[var(--border)] px-2 py-2.5 ${
              i < 2 ? "border-b sm:border-b-0" : ""
            } ${i % 2 === 0 ? "border-r" : ""} sm:border-b-0 sm:border-r sm:last:border-r-0`}
          >
            <p className="font-[family-name:var(--font-syne)] text-base font-semibold text-[var(--fg)]">
              {m.value}
            </p>
            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const transcript = [
  { time: "00:04", speaker: "A", text: '"The patient was admitted for chest discomfort."' },
  { time: "00:12", speaker: "B", text: '"Any signs of inflammation on the scan?"' },
  { time: "00:15", speaker: "A", text: '"Yes — elevated WBC and mild edema."' },
] as const;

const metrics = [
  { value: "2.1%", label: "WER" },
  { value: "0.87", label: "IAA κ" },
  { value: "62", label: "locales" },
  { value: "420h", label: "/ week" },
] as const;

function Spectrogram() {
  // 60 vertical columns, each a stack of 12 cells with varying opacity —
  // pseudo-spectrogram. Deterministic seed for consistent render.
  const COLS = 60;
  const ROWS = 12;
  const cells: { row: number; col: number; intensity: number }[] = [];
  for (let c = 0; c < COLS; c++) {
    // frequency envelope: more energy in low-mid bands, bursts around speech regions
    const speechBurst = Math.max(
      0,
      Math.sin((c / COLS) * Math.PI * 2.2) * 0.6 +
        Math.sin((c / COLS) * Math.PI * 6.5) * 0.3,
    );
    for (let r = 0; r < ROWS; r++) {
      const bandFalloff = Math.exp(-Math.pow((r - 3) / 4, 2));
      const noise = ((c * 7 + r * 31) % 17) / 17 - 0.5;
      const intensity = Math.max(
        0,
        Math.min(1, bandFalloff * (0.35 + speechBurst * 0.75) + noise * 0.25),
      );
      cells.push({ row: r, col: c, intensity });
    }
  }

  return (
    <svg
      viewBox="0 0 300 80"
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      {cells.map((cell, i) => {
        const w = 300 / COLS;
        const h = 80 / ROWS;
        const x = cell.col * w;
        const y = cell.row * h;
        const intense = cell.intensity > 0.55;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={w - 0.4}
            height={h - 0.4}
            fill={intense ? "var(--accent)" : "currentColor"}
            opacity={intense ? cell.intensity * 0.9 : cell.intensity * 0.45}
          />
        );
      })}
      {/* playhead */}
      <line x1="186" y1="0" x2="186" y2="80" stroke="var(--accent)" strokeWidth="1.2" />
      <rect x="180" y="0" width="12" height="4" fill="var(--accent)" />
    </svg>
  );
}

function SpeakerTimeline({ reduce }: { reduce: boolean }) {
  // Two-lane speaker activity blocks on a 0–100% timeline
  const laneA = [
    { x: 0, w: 22 },
    { x: 28, w: 16 },
    { x: 58, w: 14 },
    { x: 84, w: 16 },
  ];
  const laneB = [
    { x: 24, w: 4 },
    { x: 46, w: 10 },
    { x: 74, w: 8 },
  ];
  return (
    <div className="space-y-2.5">
      {[
        { label: "SPK-A", color: "var(--accent)", segs: laneA, opacity: 0.9 },
        { label: "SPK-B", color: "currentColor", segs: laneB, opacity: 0.55 },
      ].map((lane) => (
        <div key={lane.label} className="flex items-center gap-3">
          <span
            className={`w-10 shrink-0 font-mono text-[9px] uppercase tracking-widest ${
              lane.label === "SPK-A" ? "text-[var(--accent)]" : "text-zinc-400"
            }`}
          >
            {lane.label}
          </span>
          <div className="relative h-3 flex-1 border border-[var(--border)] bg-[var(--bg-elevated)]">
            {lane.segs.map((s, i) => (
              <motion.span
                key={i}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: "easeOut",
                }}
                className="absolute inset-y-0 origin-left"
                style={{
                  left: `${s.x}%`,
                  width: `${s.w}%`,
                  backgroundColor: lane.color,
                  opacity: lane.opacity,
                }}
                aria-hidden
              />
            ))}
          </div>
        </div>
      ))}
      {/* axis */}
      <div className="flex justify-between pl-[52px] font-mono text-[9px] uppercase tracking-widest text-zinc-600">
        <span>0s</span>
        <span>15s</span>
        <span>30s</span>
        <span>45s</span>
        <span>60s</span>
      </div>
    </div>
  );
}
