import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the zyka foundry website and services. Read our policies on use of the site, engagements, and limitations.",
};

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "1. Agreement",
    paragraphs: [
      "These Terms & Conditions (“Terms”) govern your access to the zyka foundry website and any pilot, statement of work, or other written engagement executed with zyka foundry (“we,” “us,” or “our”). By using the site or signing an order form, you agree to these Terms.",
      "If you are accepting on behalf of a company, you represent that you have authority to bind that organization.",
    ],
  },
  {
    heading: "2. The site",
    paragraphs: [
      "The site is provided for information about our studio and capabilities. We may change or discontinue content at any time. We do not warrant that the site will be uninterrupted or error-free.",
      "You agree not to misuse the site: no unlawful access, scraping that degrades our systems, introducing malware, or attempting to circumvent security controls.",
    ],
  },
  {
    heading: "3. Professional services",
    paragraphs: [
      "Data programs, deliverables, fees, confidentiality, data handling, SLAs, and liability caps are defined in your order form, statement of work, data processing agreement, or other signed contract. If there is a conflict between these Terms and a signed agreement, the signed agreement controls for that engagement.",
    ],
  },
  {
    heading: "4. Intellectual property",
    paragraphs: [
      "The site, branding, and our documentation are owned by zyka foundry or our licensors. Except for rights expressly granted in a written contract, no license is granted to our IP.",
      "Client data and model-related materials you provide remain yours subject to the engagement documents.",
    ],
  },
  {
    heading: "5. Disclaimer",
    paragraphs: [
      "The site and any informal guidance we provide before a contract are offered “as is.” To the fullest extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, neither party will be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or goodwill, arising from use of the site or these Terms.",
      "For use of the site only (no underlying services contract), our total liability will not exceed one hundred U.S. dollars (USD $100).",
    ],
  },
  {
    heading: "7. Indemnity",
    paragraphs: [
      "You will defend and indemnify zyka foundry against third-party claims arising from your misuse of the site, your content you submit without rights, or your violation of these Terms, except to the extent caused by our willful misconduct.",
    ],
  },
  {
    heading: "8. Governing law",
    paragraphs: [
      "These Terms are governed by the laws of the jurisdiction specified in your services agreement, or if none is specified, by the laws applicable in the place where zyka foundry is organized, without regard to conflict-of-law rules.",
    ],
  },
  {
    heading: "9. Changes",
    paragraphs: [
      "We may update these Terms by posting a revised version on this page and updating the “Last updated” date. Material changes to how we operate the site will be reflected here. Continued use after changes constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "10. Contact",
    paragraphs: [
      "Questions about these Terms: hello@zykafoundry.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHeader
          eyebrow="Legal"
          title="Terms & Conditions"
          description="Rules for using this website and how they relate to professional engagements with zyka foundry. This page is a template—have counsel review before relying on it in production."
          crumbs={[{ href: "/terms", label: "Terms" }]}
        />

        <section className="border-b border-[var(--border)] py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="font-mono text-xs text-zinc-500">
              Last updated: April 18, 2026
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[var(--fg-muted)]">
              For our privacy practices, see{" "}
              <Link
                href="/privacy"
                className="border-b border-[var(--accent)] text-[var(--accent)] hover:text-[var(--fg)]"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <div className="mt-12 space-y-12">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold tracking-tight text-[var(--fg)] sm:text-2xl">
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--fg-muted)]">
                    {s.paragraphs.map((p, i) => (
                      <p key={`${s.heading}-${i}`}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
