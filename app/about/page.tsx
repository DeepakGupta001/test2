import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Differentiators } from "@/components/sections/differentiators";
import { ComplianceStrip } from "@/components/sections/compliance-strip";
import { unsplashUrl, aboutImage, heroImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About — the studio behind the data",
  description:
    "zyka foundry is a multimodal data studio: rubric-driven workflows, credentialed reviewers, and platform operations built for AI training and evaluation.",
};

const principles = [
  {
    title: "Rubric before volume",
    body: "Every program starts with disambiguated instructions, calibration examples, and inter-rater targets. If the rubric is wrong, scale only makes the problem bigger.",
  },
  {
    title: "Reviewer craft",
    body: "We invest in training, credentialing, and escalation paths. Quality comes from people who understand the task—not click farms optimized for throughput.",
  },
  {
    title: "Platform accountability",
    body: "Live QA dashboards, audit trails, and versioned schemas so the data you ship is defensible—long after the pilot is forgotten.",
  },
  {
    title: "Stay technical",
    body: "Our PMs read diffs, our leads debug eval harnesses. We meet your model team where they work, not in a sales-slide layer above it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHeader
          eyebrow="About"
          title="A studio for data that models can actually learn from."
          description="zyka foundry produces training and evaluation data for AI teams—multimodal, rubric-driven, and close enough to the model team that feedback loops stay tight."
          image={{ src: unsplashUrl(aboutImage.id, 1400), alt: aboutImage.alt }}
          crumbs={[{ href: "/about", label: "About" }]}
        />

        <section className="border-b border-[var(--border)] py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Charter
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Why we exist
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
              <p>
                Modern AI systems are constrained by data, not parameters. The
                hardest work is upstream of training: deciding what to label,
                how to label it, and how to know when you&apos;re done.
              </p>
              <p>
                We started zyka foundry because that upstream work was being
                treated as a commodity. It isn&apos;t. It&apos;s craft. Building
                an assistant that handles a clinical edge case, or a perception
                system that sees a rare object, starts with humans who care
                about getting those examples right.
              </p>
              <p>
                Our job is to design those programs, staff the right reviewers,
                and give your model team data they can defend in production.
              </p>
            </div>
          </div>
        </section>

        <Differentiators />

        <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Principles
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
                How we work
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {principles.map((p, i) => (
                <article
                  key={p.title}
                  className="border border-[var(--border)] bg-[var(--bg)] p-6 shadow-[4px_4px_0_0_var(--border)]"
                >
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border)] py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[8px_8px_0_0_rgba(39,39,42,0.9)]">
              <Image
                src={unsplashUrl(heroImage.id, 1400)}
                alt={heroImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--bg)]/50" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Team
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Operators, linguists, clinicians, engineers
              </h2>
              <p className="mt-4 text-[var(--fg-muted)]">
                We hire domain experts alongside ML engineers—because the
                problems live at the boundary. Our studio leads have shipped
                speech, vision, and multimodal programs for frontier AI teams.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Reviewers worldwide
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-semibold">
                    2,400+
                  </dd>
                </div>
                <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Linguist leads
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-semibold">
                    35
                  </dd>
                </div>
                <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Clinical readers
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-semibold">
                    80+
                  </dd>
                </div>
                <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    ML engineers
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-semibold">
                    18
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <ComplianceStrip />
      </main>
      <SiteFooter />
    </>
  );
}
