"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LogoMarquee } from "@/components/logo-marquee";
import { type BrandKey } from "@/components/brand-logo";
import { reliabilityLine, studioMetrics } from "@/lib/constants";

type LogoItem =
  | { type: "icon"; brand: BrandKey; label: string }
  | { type: "text"; label: string };

const logos: LogoItem[] = [
  { type: "text", label: "OpenAI" },
  { type: "icon", brand: "anthropic", label: "Anthropic" },
  { type: "icon", brand: "google", label: "Google" },
  { type: "icon", brand: "meta", label: "Meta" },
  { type: "icon", brand: "nvidia", label: "NVIDIA" },
  { type: "icon", brand: "mistral", label: "Mistral AI" },
  { type: "icon", brand: "huggingface", label: "Hugging Face" },
  { type: "icon", brand: "databricks", label: "Databricks" },
  { type: "icon", brand: "perplexity", label: "Perplexity" },
  { type: "icon", brand: "ollama", label: "Ollama" },
];

export function SocialProof() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
            Used in workflows that ship models from these ecosystems
          </p>
          <p className="max-w-xl text-sm text-zinc-400 lg:text-right">
            {reliabilityLine}
          </p>
        </div>
      </div>

      <div className="mt-6 border-y border-[var(--border)] sm:mt-8">
        <div className="mx-auto max-w-[1400px]">
          <LogoMarquee logos={logos} durationSec={42} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mt-4 font-mono text-[10px] italic text-zinc-600">
          Brand marks shown represent model & infrastructure ecosystems the zyka
          foundry stack is compatible with. Logos are property of their
          respective owners.
        </p>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-8">
          {studioMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="font-[family-name:var(--font-syne)] text-[1.75rem] font-semibold leading-tight text-[var(--fg)] sm:text-3xl lg:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-[var(--fg-muted)]">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-dashed border-[var(--border)] pt-6 sm:mt-10 sm:gap-3 sm:pt-8">
          {[
            "Robotics & autonomy",
            "Clinical imaging",
            "Media & entertainment",
            "Defense & geospatial",
            "Fintech & risk",
            "Auto OEM telematics",
          ].map((tag) => (
            <span
              key={tag}
              className="border border-[var(--border)] bg-[var(--bg)] px-3 py-1 font-mono text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
