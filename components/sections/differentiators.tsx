"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Users, LayoutDashboard } from "lucide-react";
import { differentiators } from "@/lib/constants";

const icons = [Cpu, Users, LayoutDashboard] as const;

export function Differentiators() {
  const reduce = useReducedMotion();

  return (
    <section
      id="differentiators"
      className="scroll-mt-24 border-b border-[var(--border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            What sets us apart
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Engine, workforce, platform—one integrated loop
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            The same trio trusted data partners use to ship at scale—tuned for
            multimodal programs where a single bad rubric line costs you a
            release window.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {differentiators.map((item, i) => {
            const Icon = icons[i] ?? Cpu;
            return (
              <motion.article
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative flex flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-6 pt-8 shadow-[4px_4px_0_0_var(--border)] transition-shadow hover:shadow-[6px_6px_0_0_var(--accent-dim)] sm:p-7"
              >
                <span
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {item.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-dashed border-[var(--border)] pt-5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-zinc-400">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-[var(--accent)]"
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
