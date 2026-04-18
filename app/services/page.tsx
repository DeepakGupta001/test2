import type { Metadata } from "next";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { CoreServices } from "@/components/sections/core-services";
import { Process } from "@/components/sections/process";
import { Quality } from "@/components/sections/quality";
import { ComplianceStrip } from "@/components/sections/compliance-strip";
import { unsplashUrl, aboutImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services — SFT, RLHF, evals, rubrics, multimodal",
  description:
    "Post-training data and evaluation services: supervised fine-tuning corpora, RLHF, custom benchmarks, rubrics, multi-turn dialogue, and multimodal labeling.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHeader
          eyebrow="Core services"
          title="Post-training, evaluation & multimodal data"
          description="One studio for the data classes your model team actually uses—SFT corpora, preference data, rubric-gated QA, custom eval suites, and cross-modal labeling."
          image={{ src: unsplashUrl(aboutImage.id, 1400), alt: aboutImage.alt }}
          crumbs={[{ href: "/services", label: "Services" }]}
        />
        <CoreServices />
        <Process />
        <Quality />
        <ComplianceStrip />
      </main>
      <SiteFooter />
    </>
  );
}
