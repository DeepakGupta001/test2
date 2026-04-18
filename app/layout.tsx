import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "zyka foundry — Multimodal training data for AI",
    template: "%s · zyka foundry",
  },
  description:
    "Human-labeled speech, image, and video data plus SFT corpora, RLHF, rubrics, and eval harnesses—studio-grade QA, MOS/MUSHRA, and exports for model training.",
  openGraph: {
    title: "zyka foundry — Multimodal training data for AI",
    description:
      "Annotation, post-training data, and evaluations: diarization, segmentation, tracking, LiDAR 3D, dialogue, and multimodal labeling.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zyka foundry — Multimodal training data for AI",
    description:
      "Human-labeled data and evaluations for perception and speech models.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
