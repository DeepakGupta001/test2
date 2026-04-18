import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import {
  unsplashUrl,
  workImage,
  videoImage,
  imageImage,
  speechImage,
} from "@/lib/images";

export const metadata: Metadata = {
  title: "Work — selected programs & case notes",
  description:
    "Selected programs zyka foundry has run across robotics, clinical imaging, media, defense, and fintech—each with rubric design, QA, and evaluation-ready exports.",
};

const cases = [
  {
    sector: "Autonomous mobility",
    title: "Multi-sensor 3D labeling for a driver-assist platform",
    body: "Calibrated LiDAR + camera tracking across long urban sequences, with 3D box attributes and occlusion-aware adjudication. Release-blocked on per-class recall and track persistence.",
    tags: ["LiDAR 3D", "Tracking", "Temporal segmentation"],
    imageId: videoImage.id,
    alt: "Autonomous driving sensor scene",
  },
  {
    sector: "Clinical imaging",
    title: "Multi-reader panels for radiology model validation",
    body: "De-identified studies, credentialed reader cohort, and structured adjudication with inter-reader agreement tracking feeding an FDA-aligned eval pipeline.",
    tags: ["DICOM-SEG", "Reader panels", "Adjudication"],
    imageId: imageImage.id,
    alt: "Medical imaging close-up",
  },
  {
    sector: "Conversational AI",
    title: "Preference data + MOS panels for a voice assistant",
    body: "Pairwise preference across response quality, safety, and helpfulness—plus MOS for voice-synthesis quality, all with rubric calibration drills.",
    tags: ["RLHF", "MOS", "Dialogue"],
    imageId: speechImage.id,
    alt: "Studio microphone",
  },
  {
    sector: "Document AI",
    title: "Layout + OCR training for multilingual forms",
    body: "Reading order, key–value extraction, and table structure for forms in 14 languages, with handwriting handling and a custom validation schema.",
    tags: ["OCR", "Layout", "Multilingual"],
    imageId: workImage.id,
    alt: "Research lab scene",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHeader
          eyebrow="Work"
          title="Programs shipped, quietly."
          description="Most of our work sits behind NDA. These anonymized notes describe the shape of programs we run—and the outcomes model teams actually care about."
          image={{ src: unsplashUrl(workImage.id, 1400), alt: workImage.alt }}
          crumbs={[{ href: "/work", label: "Work" }]}
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {cases.map((c) => (
                <article
                  key={c.title}
                  className="group relative flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] transition-colors hover:border-zinc-500"
                >
                  <div className="relative h-48 w-full overflow-hidden border-b border-[var(--border)]">
                    <Image
                      src={unsplashUrl(c.imageId, 1000)}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-[var(--bg-elevated)]/30 to-transparent" />
                    <span className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
                      {c.sector}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {c.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <li key={t}>
                          <span className="inline-block border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-dashed border-[var(--border)] pt-8">
              <p className="text-sm text-[var(--fg-muted)]">
                Want a tailored case sample for your sector?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)] hover:text-[var(--fg)]"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
