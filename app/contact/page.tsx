import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Calendar, Shield } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { FooterCTA } from "@/components/sections/footer-cta";
import { unsplashUrl, contactImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact — start a data program",
  description:
    "Tell us what you're training next. We'll respond with a scoped pilot, sample rubric, and throughput plan within two business days.",
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    body: "hello@zykafoundry.com",
    cta: "mailto:hello@zykafoundry.com",
    ctaLabel: "Send a note",
  },
  {
    icon: Calendar,
    title: "Book a call",
    body: "30-minute scoping session with a studio lead—modality-specific when possible.",
    cta: "#contact-form",
    ctaLabel: "Jump to the form",
  },
  {
    icon: Shield,
    title: "Security review",
    body: "We share SOC-aligned documentation, DPAs, and on-prem options under NDA.",
    cta: "mailto:security@zykafoundry.com",
    ctaLabel: "Request the docs",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHeader
          eyebrow="Contact"
          title="Let's scope a pilot."
          description="Share modalities, volume, timelines, and compliance needs. You'll hear back from a human within two business days."
          image={{ src: unsplashUrl(contactImage.id, 1400), alt: contactImage.alt }}
          crumbs={[{ href: "/contact", label: "Contact" }]}
        />

        <section className="border-b border-[var(--border)] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <article
                    key={c.title}
                    className="flex flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-syne)] text-lg font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {c.body}
                    </p>
                    <a
                      href={c.cta}
                      className="mt-4 inline-flex self-start border-b border-[var(--accent)] font-mono text-xs uppercase tracking-widest text-[var(--accent)] hover:text-[var(--fg)]"
                    >
                      {c.ctaLabel}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <div id="contact-form">
          <FooterCTA />
        </div>

        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--border)] bg-[var(--bg)]">
              <Image
                src={unsplashUrl(contactImage.id, 1200)}
                alt={contactImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                What happens next
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
                From first email to first labels
              </h2>
              <ol className="mt-6 space-y-5 text-[var(--fg-muted)]">
                <li className="flex gap-4">
                  <span className="font-mono text-[11px] text-[var(--accent)]">
                    01
                  </span>
                  <p>
                    <span className="font-semibold text-[var(--fg)]">
                      Scoping call.
                    </span>{" "}
                    Modality, volume, SLAs, and what &ldquo;good&rdquo; looks
                    like for your eval suite.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[11px] text-[var(--accent)]">
                    02
                  </span>
                  <p>
                    <span className="font-semibold text-[var(--fg)]">
                      Pilot design.
                    </span>{" "}
                    Sample rubric, calibration set, and a scoped pilot you can
                    grade end-to-end.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[11px] text-[var(--accent)]">
                    03
                  </span>
                  <p>
                    <span className="font-semibold text-[var(--fg)]">
                      Production.
                    </span>{" "}
                    Workforce ramp, QA dashboards, and versioned exports into
                    your MLOps pipeline.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
