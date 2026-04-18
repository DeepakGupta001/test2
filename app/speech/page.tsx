import type { Metadata } from "next";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { ModalityPage } from "@/components/modality-page";

export const metadata: Metadata = {
  title: "Speech & audio data — transcription, diarization, MOS/MUSHRA",
  description:
    "Production-grade audio annotation: transcription, speaker diarization, emotion, language ID, phoneme alignment, event tagging, intent/entities, and MOS/MUSHRA evaluation.",
};

export default function SpeechPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ModalityPage id="speech" />
      </main>
      <SiteFooter />
    </>
  );
}
