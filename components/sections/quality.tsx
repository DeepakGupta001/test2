"use client";

import { motion, useReducedMotion } from "framer-motion";
import { qualityHighlights } from "@/lib/constants";

export function Quality() {
  const reduce = useReducedMotion();

  return (
    <section id="quality" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Quality & safety
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Evaluations that match production—not demo reels
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {qualityHighlights.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[4px_4px_0_0_var(--border)]"
            >
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
