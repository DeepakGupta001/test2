import type { Metadata } from "next";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { ModalityPage } from "@/components/modality-page";

export const metadata: Metadata = {
  title: "Image annotation — boxes, segmentation, keypoints, OCR, medical",
  description:
    "Pixel-accurate image labels: bounding boxes, semantic & instance segmentation, keypoints, classification, polygons, medical imaging, RLHF ratings, and OCR/document annotation.",
};

export default function ImagePage() {
  return (
    <>
      <Header />
      <main id="main">
        <ModalityPage id="image" />
      </main>
      <SiteFooter />
    </>
  );
}
