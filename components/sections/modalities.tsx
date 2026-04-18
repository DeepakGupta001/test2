"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { modalities } from "@/lib/constants";
import { ModalityPreview } from "@/components/graphics/modality-preview";
import { SpeechShowcase } from "@/components/graphics/speech-showcase";

export function Modalities() {
  const reduce = useReducedMotion();

  return (
    <section id="modalities" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Capabilities
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Speech, image, video—built for training and eval
            </h2>
            <p className="mt-4 text-base text-[var(--fg-muted)] sm:text-[1.05rem]">
              Pick a modality. Each tile lists production-ready task types we run
              with rubrics, QA gates, and export schemas tailored to your stack.
            </p>
          </div>
          <p className="font-mono text-[11px] leading-relaxed text-zinc-500">
            Click a card for the full capability page →
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-4 sm:mt-12 sm:gap-5 md:grid-cols-4 lg:mt-14 lg:gap-6">
          {modalities.map((m, index) => {
            return (
              <motion.article
                key={m.id}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`group relative flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] transition-colors hover:border-zinc-500 ${m.bentoClass}`}
              >
                <Link
                  href={`/${m.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`${m.title} — see capability details`}
                />
                <div className="relative h-44 w-full overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
                  <ModalityPreview modality={m.id} />
                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-[var(--bg-elevated)] to-transparent px-4 py-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
                      {m.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      preview
                    </span>
                  </div>
                  <div className="absolute right-3 bottom-3 z-20 flex h-8 w-8 items-center justify-center border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:border-[var(--accent)]">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-[var(--fg)] sm:text-xl">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--fg-muted)] sm:text-sm">
                    {m.description}
                  </p>
                  <div className="mt-4 border-t border-dashed border-[var(--border)] pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      Outcomes
                    </p>
                    <ul className="mt-2 list-none space-y-1.5">
                      {m.outcomes.map((o) => (
                        <li
                          key={o}
                          className="flex gap-2 text-[0.85rem] leading-snug text-zinc-400 sm:text-sm"
                        >
                          <span className="text-[var(--accent)]" aria-hidden>
                            ·
                          </span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {m.capabilities.map((cap) => (
                      <li key={cap}>
                        <span className="inline-block border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 font-mono text-[10.5px] leading-tight text-zinc-300 transition-colors group-hover:border-zinc-600 sm:px-2.5 sm:py-1 sm:text-[11px]">
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {m.id === "speech" && <SpeechShowcase />}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
