"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { modalities, type ModalityId } from "@/lib/constants";
import { modalityPages } from "@/lib/modality-details";
import { modalityImages, unsplashUrl } from "@/lib/images";
import { PageHeader } from "@/components/page-header";
import { TaskIllustration } from "@/components/task-illustrations";

export function ModalityPage({ id }: { id: ModalityId }) {
  const reduce = useReducedMotion();
  const modality = modalities.find((m) => m.id === id)!;
  const page = modalityPages[id];
  const img = modalityImages[id];
  const others = modalities.filter((m) => m.id !== id);

  return (
    <>
      <PageHeader
        eyebrow={modality.label}
        title={modality.title}
        description={page.summary}
        image={{ src: unsplashUrl(img.id, 1400), alt: img.alt }}
        crumbs={[
          { href: "#", label: "Capabilities" },
          { href: `/${id}`, label: modality.title },
        ]}
      />

      <section className="border-b border-[var(--border)] py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Why it matters
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-tight sm:text-3xl">
              Label quality is the ceiling on {modality.title.toLowerCase()} models.
            </h2>
          </div>
          <p className="text-[var(--fg-muted)]">{page.whyItMatters}</p>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Task types
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Production-ready annotation services
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.details.map((d, i) => (
              <motion.article
                key={d.name}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="group flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--bg)] transition-colors hover:border-zinc-600"
              >
                <TaskIllustration kind={d.illustration} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                    {d.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {d.body}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-[var(--border)] pt-4">
                    {d.formats.map((f) => (
                      <li key={f}>
                        <span className="inline-block bg-[var(--accent-dim)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Schema starters
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Pick a starter, we&apos;ll tailor it to your stack
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.schemas.map((s, i) => (
              <motion.div
                key={s.name}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[4px_4px_0_0_var(--border)]"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-syne)] text-lg font-semibold">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Frequently asked
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Questions teams usually ask
              </h2>
            </div>
            <dl className="space-y-0 border border-[var(--border)] bg-[var(--bg)]">
              {page.faqs.map((f) => (
                <div
                  key={f.q}
                  className="border-b border-[var(--border)] p-5 last:border-b-0 sm:p-6"
                >
                  <dt className="font-[family-name:var(--font-syne)] text-base font-semibold text-[var(--fg)]">
                    {f.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Other capabilities
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-tight sm:text-3xl">
                Keep exploring
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[var(--fg)] bg-[var(--fg)] px-5 py-3 text-sm font-semibold text-[var(--bg)] shadow-[4px_4px_0_0_var(--accent)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Start a {modality.title.toLowerCase()} pilot
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.id}
                href={`/${o.id}`}
                className="group flex items-center justify-between border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--accent)]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {o.label}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold">
                    {o.title}
                  </p>
                  <p className="mt-2 text-sm text-[var(--fg-muted)]">
                    {o.description.split(".")[0]}.
                  </p>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
