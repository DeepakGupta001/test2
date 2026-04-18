"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo, Wordmark, type BrandKey } from "@/components/brand-logo";
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
    <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Used in workflows that ship models from these ecosystems
          </p>
          <p className="max-w-xl text-sm text-zinc-400 lg:text-right">
            {reliabilityLine}
          </p>
        </div>

        <div
          className="mt-8 grid grid-cols-2 items-center gap-y-8 gap-x-6 border-y border-[var(--border)] py-8 sm:grid-cols-3 md:grid-cols-5"
          role="list"
          aria-label="Representative AI ecosystem brands"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo.label}
              role="listitem"
              initial={reduce ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="flex items-center justify-center gap-2 text-zinc-400 transition-colors hover:text-[var(--fg)]"
              title={logo.label}
            >
              {logo.type === "icon" ? (
                <>
                  <BrandLogo brand={logo.brand} className="h-6 w-6" />
                  <span className="hidden text-sm font-medium lg:inline">
                    {logo.label}
                  </span>
                </>
              ) : (
                <Wordmark
                  label={logo.label}
                  className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight"
                />
              )}
            </motion.div>
          ))}
        </div>

        <p className="mt-4 font-mono text-[10px] italic text-zinc-600">
          Brand marks shown represent model & infrastructure ecosystems the
          Fieldnote stack is compatible with. Logos are property of their
          respective owners.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {studioMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-[var(--fg)] sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-[var(--fg-muted)]">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 border-t border-dashed border-[var(--border)] pt-8">
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
