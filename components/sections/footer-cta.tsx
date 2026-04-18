"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FooterCTA() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us what you&apos;re training next.
            </h2>
            <p className="mt-4 max-w-md text-[var(--fg-muted)]">
              Share timelines, modalities, and compliance needs—we&apos;ll
              respond with a scoped pilot, sample rubric, and throughput plan.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 border-t border-dashed border-[var(--border)] pt-8 font-mono text-[11px] uppercase tracking-widest text-zinc-500 sm:grid-cols-3">
              <li>→ Scoped pilot</li>
              <li>→ Sample rubric</li>
              <li>→ Throughput plan</li>
              <li>→ Eval design</li>
              <li>→ Security docs</li>
              <li>→ Pricing model</li>
            </ul>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="border border-[var(--border)] bg-[var(--bg-elevated)]/90 p-6 backdrop-blur-md sm:p-8"
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-xs uppercase tracking-widest text-zinc-500"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label
                  htmlFor="note"
                  className="font-mono text-xs uppercase tracking-widest text-zinc-500"
                >
                  What are you labeling?
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={4}
                  placeholder="Modalities, volume, locales, SLAs…"
                  className="mt-2 w-full resize-y border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-[var(--fg)] bg-[var(--fg)] py-3 text-sm font-semibold text-[var(--bg)] shadow-[4px_4px_0_0_var(--accent)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 sm:w-auto sm:px-8"
              >
                Request a call
              </button>
              <p className="font-mono text-[11px] text-zinc-600">
                No spam—just a human reply within two business days.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
