"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CornerTicks } from "@/components/graphics/section-marks";

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-b border-[var(--border)] py-16 sm:py-20 lg:py-24">
      <CornerTicks className="pointer-events-none absolute right-4 top-4 hidden h-16 w-16 text-[var(--accent)] opacity-60 sm:block sm:right-6 sm:top-6 sm:h-20 sm:w-20" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative border-l-4 border-[var(--accent)] pl-5 sm:pl-10"
        >
          <blockquote className="font-[family-name:var(--font-syne)] text-xl font-medium leading-snug text-[var(--fg)] sm:text-2xl md:text-3xl lg:text-[2rem]">
            Data is not neutral—it encodes choices. We treat labels as craft:
            precise, reviewable, and accountable to the humans who will live
            with your model&apos;s mistakes.
          </blockquote>
          <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-[var(--fg-muted)] sm:mt-8 sm:text-lg">
            The richest models are raised on the richness of real experience—not
            on synthetic sameness. Our job is to channel that depth into
            structured supervision: curious, exacting, and unapologetically
            human, so the systems you deploy remain useful when the world gets
            messy.
          </p>
          <footer className="mt-6 font-mono text-[11px] uppercase tracking-widest text-zinc-500 sm:mt-8 sm:text-xs">
            — zyka foundry studio charter
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
