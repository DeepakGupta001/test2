"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/constants";
import { PipelineDiagram } from "@/components/graphics/pipeline-diagram";

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--bg-elevated)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              How we work
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              From rubric to export—without losing the plot
            </h2>
            <p className="mt-4 text-[var(--fg-muted)]">
              A vertically integrated loop: instructions, reviewers, and
              platform telemetry stay in sync so quality scales with throughput.
            </p>

            <div className="mt-8 text-zinc-500">
              <PipelineDiagram />
            </div>
          </div>
          <ol className="space-y-0 border border-[var(--border)] bg-[var(--bg)]">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={reduce ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-[var(--border)] p-5 last:border-b-0 sm:p-6"
              >
                <span className="font-mono text-xs text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-syne)] text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
