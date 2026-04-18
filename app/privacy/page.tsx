import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How zyka foundry collects, uses, and protects information when you use our website and work with our studio.",
};

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "1. Who we are",
    paragraphs: [
      "This Privacy Policy describes how zyka foundry (“we,” “us”) handles personal information in connection with our public website and marketing activities. If you engage us for professional services, additional terms in your contract and data processing agreements apply to program data.",
    ],
  },
  {
    heading: "2. Information we collect",
    paragraphs: [
      "Contact details you submit (name, email, company, role) when you reach out via forms or email.",
      "Technical data from your browser or device (IP address, general location, device type, pages viewed, and cookies or similar technologies where enabled).",
      "Communications you send us, including support or scoping correspondence.",
    ],
  },
  {
    heading: "3. How we use information",
    paragraphs: [
      "To respond to inquiries, schedule calls, and operate pilots or contracts you request.",
      "To secure the site, prevent abuse, and improve performance and content.",
      "To comply with law and enforce our terms, where required.",
      "With your consent or as otherwise described when we collect the information.",
    ],
  },
  {
    heading: "4. Sharing",
    paragraphs: [
      "We use service providers (e.g. hosting, email, analytics) who process data on our instructions and are bound by confidentiality and security obligations.",
      "We may disclose information if required by law, to protect rights and safety, or in connection with a merger or asset transfer with notice where appropriate.",
      "We do not sell your personal information as that term is commonly defined in U.S. state privacy laws.",
    ],
  },
  {
    heading: "5. Retention",
    paragraphs: [
      "We retain contact and correspondence for as long as needed to fulfill the purposes above, maintain business records, and meet legal obligations. Technical logs may be kept for shorter periods.",
    ],
  },
  {
    heading: "6. Security",
    paragraphs: [
      "We implement reasonable administrative, technical, and organizational measures designed to protect personal information. No method of transmission over the Internet is completely secure.",
    ],
  },
  {
    heading: "7. International transfers",
    paragraphs: [
      "If you access the site from outside the country where we operate, your information may be processed in other countries with different data protection laws. We use appropriate safeguards where required.",
    ],
  },
  {
    heading: "8. Your choices & rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, or restrict processing of your personal information, or to object to certain processing. Contact us to exercise these rights.",
      "You can opt out of marketing emails via the unsubscribe link in those messages.",
    ],
  },
  {
    heading: "9. Children",
    paragraphs: [
      "The site is not directed at children under 16, and we do not knowingly collect their personal information.",
    ],
  },
  {
    heading: "10. Changes",
    paragraphs: [
      "We may update this policy from time to time. The “Last updated” date will change when we do. Continued use of the site after updates means you accept the revised policy.",
    ],
  },
  {
    heading: "11. Contact",
    paragraphs: [
      "Privacy questions: hello@zykafoundry.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="How we handle information when you browse this site or get in touch. Engagements involving training or evaluation data are also governed by your signed agreements."
          crumbs={[{ href: "/privacy", label: "Privacy" }]}
        />

        <section className="border-b border-[var(--border)] py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="font-mono text-xs text-zinc-500">
              Last updated: April 18, 2026
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[var(--fg-muted)]">
              See also{" "}
              <Link
                href="/terms"
                className="border-b border-[var(--accent)] text-[var(--accent)] hover:text-[var(--fg)]"
              >
                Terms & Conditions
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
