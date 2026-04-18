"use client";

import { motion, useReducedMotion } from "framer-motion";
import { complianceNotes } from "@/lib/constants";

export function ComplianceStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[var(--border)] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Trust & governance
        </p>
        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {complianceNotes.map((c, i) => (
            <motion.div
              key={c.title}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-dashed border-[var(--border)] bg-[var(--bg-elevated)] p-5 sm:p-6"
            >
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
