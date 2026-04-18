import type { Metadata } from "next";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { ModalityPage } from "@/components/modality-page";

export const metadata: Metadata = {
  title: "Video annotation — tracking, temporal, LiDAR 3D, captioning",
  description:
    "Temporal video labels: object tracking, temporal segmentation, action recognition, 3D LiDAR boxes, human interaction, captioning, anomaly detection, and video quality evaluation.",
};

export default function VideoPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ModalityPage id="video" />
      </main>
      <SiteFooter />
    </>
  );
}
