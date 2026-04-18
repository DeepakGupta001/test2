"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[var(--border)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative border-l-4 border-[var(--accent)] pl-6 sm:pl-10"
        >
          <blockquote className="font-[family-name:var(--font-syne)] text-2xl font-medium leading-snug text-[var(--fg)] sm:text-3xl lg:text-[2rem]">
            Data is not neutral—it encodes choices. We treat labels as craft:
            precise, reviewable, and accountable to the humans who will live
            with your model&apos;s mistakes.
          </blockquote>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            The richest models are raised on the richness of real experience—not
            on synthetic sameness. Our job is to channel that depth into
            structured supervision: curious, exacting, and unapologetically
            human, so the systems you deploy remain useful when the world gets
            messy.
          </p>
          <footer className="mt-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
            — Fieldnote studio charter
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
