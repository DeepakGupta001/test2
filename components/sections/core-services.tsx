"use client";

import { motion, useReducedMotion } from "framer-motion";
import { coreDataServices } from "@/lib/constants";
import { OrbitGraphic } from "@/components/graphics/section-marks";

export function CoreServices() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--bg-elevated)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Core data services
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Post-training, eval, and multimodal—in one studio
            </h2>
            <p className="mt-4 text-[var(--fg-muted)]">
              The same service classes enterprises expect from top data partners:
              SFT corpora, preference data, rigorous evals, rubrics, dialogue,
              and cross-modal labels—without juggling five vendors.
            </p>
            <p className="mt-4 max-w-lg font-mono text-[11px] leading-relaxed text-zinc-500">
              Offerings mirror how frontier teams buy data: scoped pilots →
              production scale → continuous eval refresh.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[320px] text-zinc-500 sm:max-w-[360px]">
            <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
            <OrbitGraphic className="h-full w-full" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreDataServices.map((svc, i) => (
            <motion.article
              key={svc.title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="flex flex-col border border-[var(--border)] bg-[var(--bg)] p-5 sm:p-6"
            >
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold leading-snug text-[var(--fg)]">
                {svc.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                {svc.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                {svc.facets.map((f) => (
                  <li key={f}>
                    <span className="inline-block bg-[var(--accent-dim)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
