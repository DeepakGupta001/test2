"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { HeroFallback } from "@/components/three/hero-fallback";
import { heroStats, reliabilityLine } from "@/lib/constants";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="hero-mesh relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(200,255,77,0.06)_48%,transparent_62%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:gap-16">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            Multimodal data studio
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-5xl lg:text-[3.25rem]"
          >
            Human-labeled data for models that ship.
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            We produce speech, image, and video annotations with studio-grade
            rubrics, QA, and tooling—so your training and eval sets match
            reality, not a leaderboard fantasy.
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 max-w-xl border-l-2 border-[var(--accent)] pl-4 text-sm font-medium leading-relaxed text-zinc-300"
          >
            {reliabilityLine}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex border border-[var(--fg)] bg-[var(--fg)] px-6 py-3 text-sm font-semibold text-[var(--bg)] shadow-[4px_4px_0_0_var(--accent)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              Book an intro
            </a>
            <a
              href="#modalities"
              className="inline-flex border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-3 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--fg-muted)]"
            >
              Explore capabilities
            </a>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-3 py-3 backdrop-blur-sm"
              >
                <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {s.label}
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-syne)] text-xl font-semibold text-[var(--fg)] sm:text-2xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative aspect-square w-full max-w-md justify-self-end md:max-w-none"
        >
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 border-t-2 border-r-2 border-[var(--accent)]/40 md:block" />
          <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b-2 border-l-2 border-[var(--accent)]/40 md:block" />
          <div className="absolute inset-0 rounded-sm border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[8px_8px_0_0_rgba(39,39,42,0.9)]">
            <div className="h-full min-h-[280px] w-full md:min-h-[360px]">
              {reduce ? <HeroFallback /> : <HeroScene />}
            </div>
          </div>
          <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            Live lattice · preview
          </p>
        </motion.div>
      </div>
    </section>
  );
}
