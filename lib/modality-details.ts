import type { ModalityId } from "@/lib/constants";
import type { IllustrationKey } from "@/components/task-illustrations";

export interface CapabilityDetail {
  name: string;
  body: string;
  formats: string[];
  illustration: IllustrationKey;
}

export interface ModalityPageData {
  summary: string;
  whyItMatters: string;
  details: CapabilityDetail[];
  schemas: { name: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const modalityPages: Record<ModalityId, ModalityPageData> = {
  speech: {
    summary:
      "Studio-grade audio annotation and spoken-language evaluation for ASR, TTS, voice assistants, and multilingual speech models.",
    whyItMatters:
      "Raw transcripts aren't enough. Real deployments fail on accents, overlap, cross-talk, emotion, and rare events—the exact territory our specialized reviewers and linguists work in.",
    details: [
      {
        name: "Transcription",
        body: "Verbatim, clean-read, or diplomatic—with punctuation policy, disfluency handling, and time-aligned words. Native-speaker reviewers for 60+ locales.",
        formats: ["JSON / WebVTT / TTML", "Word-level timing", "Custom style guide"],
        illustration: "transcription",
      },
      {
        name: "Speaker diarization",
        body: "Who-spoke-when with overlap handling and speaker identity linking across long sessions. Paired with transcripts for multi-speaker training sets.",
        formats: ["RTTM", "Speaker turn JSON", "Overlap annotations"],
        illustration: "diarization",
      },
      {
        name: "Emotion & sentiment",
        body: "Multi-label emotion, valence/arousal, and intent-adjacent sentiment. Calibration drills keep reviewers consistent across shifts.",
        formats: ["Per-utterance tags", "Continuous V/A scores"],
        illustration: "emotion",
      },
      {
        name: "Language identification",
        body: "Code-switch spans, dialect labels, and confidence rationales—useful for routing and for training robust multilingual models.",
        formats: ["Interval-level LID", "Dialect tags"],
        illustration: "language-id",
      },
      {
        name: "Phoneme alignment",
        body: "Forced-aligned phoneme and syllable boundaries audited by trained linguists, with lexicon variants for TTS and pronunciation modeling.",
        formats: ["TextGrid", "Phoneme JSON"],
        illustration: "phoneme",
      },
      {
        name: "Audio event tagging",
        body: "Non-speech events (laughter, keyboard, sirens, music) with hierarchical taxonomies—clean signal for audio-LLMs and safety products.",
        formats: ["AudioSet-style labels", "Custom ontologies"],
        illustration: "audio-events",
      },
      {
        name: "Intent & entity labeling",
        body: "Domain intents, slot values, and dialogue acts—paired with rejection and out-of-scope examples that keep assistants honest.",
        formats: ["NLU JSON", "Rasa / custom schema"],
        illustration: "intent-entity",
      },
      {
        name: "Spoken language evaluation",
        body: "MOS and MUSHRA panels for TTS, voice cloning, and codec quality—plus side-by-side model ranking with clear stimuli protocols.",
        formats: ["MOS 1–5", "MUSHRA scores", "Pairwise preference"],
        illustration: "mos-mushra",
      },
    ],
    schemas: [
      {
        name: "ASR training",
        body: "Audio → transcript JSON with punctuation policy, speaker tags, and disfluency flags. Delivered with a held-out eval split.",
      },
      {
        name: "TTS / voice",
        body: "Recording script coverage, phoneme alignment, and MOS/MUSHRA rubrics tied to voice identity and style.",
      },
      {
        name: "Voice assistants",
        body: "Intent + slot schema, dialogue acts, and multi-turn traces with adversarial & rejection examples.",
      },
    ],
    faqs: [
      {
        q: "Do you handle sensitive voice data?",
        a: "Yes—access-controlled pipelines, PII redaction, and signed reviewer agreements. We support on-prem and VPC-isolated workflows for regulated programs.",
      },
      {
        q: "Can reviewers work in non-English locales?",
        a: "We staff native speakers for 60+ locales and dialects, with linguist leads for phoneme and prosody work.",
      },
      {
        q: "What evaluation protocols do you run?",
        a: "ITU-style MOS, MUSHRA panels, CCR, and pairwise preference—design, pilot, and production-scale runs.",
      },
    ],
  },
  image: {
    summary:
      "Pixel-accurate image labels for perception, document AI, and clinical imaging—delivered in clean ontologies and schema-first exports.",
    whyItMatters:
      "Modern vision systems are bounded by label quality, not model capacity. We catch the ambiguous corners—occluded objects, class boundaries, edge cases—that silently degrade production metrics.",
    details: [
      {
        name: "Bounding boxes",
        body: "2D tight-fit boxes with class + attribute taxonomies, occlusion flags, and crowd handling. Review gates catch boundary drift early.",
        formats: ["COCO", "Pascal VOC", "Custom JSON"],
        illustration: "bbox",
      },
      {
        name: "Semantic segmentation",
        body: "Per-pixel class masks with clear class priorities for overlapping semantics. Shared palette + versioned ontologies.",
        formats: ["PNG masks", "RLE", "COCO-stuff"],
        illustration: "semantic-seg",
      },
      {
        name: "Instance segmentation",
        body: "Mask-per-instance for counting, tracking prep, and occlusion-heavy scenes—paired with a clear instance-ID policy.",
        formats: ["COCO-RLE", "LabelMe", "Custom"],
        illustration: "instance-seg",
      },
      {
        name: "Keypoints & pose",
        body: "Human and object keypoints with visibility flags, skeleton schemas, and calibration for inter-rater consistency.",
        formats: ["COCO keypoints", "Custom skeletons"],
        illustration: "keypoints",
      },
      {
        name: "Image classification",
        body: "Single-label, multi-label, and hierarchical taxonomies—plus active-learning-ready hard-negative mining.",
        formats: ["CSV / JSON", "WebDataset"],
        illustration: "classification",
      },
      {
        name: "Polygon & polyline",
        body: "Fine polygons for arbitrary shapes and polylines for lanes, wires, and linear structures. QA on vertex density + closure rules.",
        formats: ["GeoJSON", "LabelMe", "Custom"],
        illustration: "polygon",
      },
      {
        name: "Medical imaging",
        body: "Radiologist & clinical-reader cohorts with de-identification pathways, DICOM overlays, and inter-reader agreement tracking.",
        formats: ["DICOM-SEG", "NIfTI masks", "Structured reports"],
        illustration: "medical",
      },
      {
        name: "Quality rating (RLHF)",
        body: "Human preference on generated images—aesthetic, prompt adherence, safety, and artifact rubrics with calibration data.",
        formats: ["Pairwise / Likert", "Rubric scorecards"],
        illustration: "rlhf-rating",
      },
      {
        name: "OCR & document annotation",
        body: "Text regions, reading order, key-value pairs, tables, and form fields—with multilingual coverage and handwriting handling.",
        formats: ["PAGE XML", "FUNSD-style", "Custom schema"],
        illustration: "ocr",
      },
    ],
    schemas: [
      {
        name: "Perception",
        body: "Detection + segmentation with harmonized ontology, occlusion flags, and split-level eval metadata.",
      },
      {
        name: "Document AI",
        body: "Layout + OCR + semantic fields, with reading order and validation rules aligned to your downstream IDP.",
      },
      {
        name: "Clinical imaging",
        body: "De-identified studies with reader panels, adjudication, and audit trails—tuned to IRB / HIPAA needs.",
      },
    ],
    faqs: [
      {
        q: "Can you work with our ontology?",
        a: "Yes—we start from your taxonomy and extend it with disambiguation rules and examples so reviewers apply it consistently.",
      },
      {
        q: "How do you handle medical data?",
        a: "Access controls, reviewer credentialing, and secure environments. We sign BAAs where required and follow your institution's data-handling protocols.",
      },
      {
        q: "What export formats do you support?",
        a: "COCO, Pascal VOC, CVAT, WebDataset, DICOM-SEG, and custom JSON—schema versioning included.",
      },
    ],
  },
  video: {
    summary:
      "Temporal video labels for tracking, action understanding, interaction analysis, 3D perception, and video-LLM training.",
    whyItMatters:
      "Video is where label quality and cost collide. We design programs that keep frame-accuracy where it matters and use dense review only where the model is actually weak.",
    details: [
      {
        name: "Object tracking",
        body: "Multi-object tracking with consistent IDs, occlusion handling, and re-identification protocols across long clips.",
        formats: ["MOT JSON", "KITTI-MOT", "Custom"],
        illustration: "tracking",
      },
      {
        name: "Temporal segmentation",
        body: "Frame-accurate action spans with taxonomy design, boundary tolerance, and adjudication on ambiguous cuts.",
        formats: ["Interval JSON", "ActivityNet-style"],
        illustration: "temporal-seg",
      },
      {
        name: "Action recognition",
        body: "Atomic and composite actions, paired with hard-negatives and distractor clips to reduce shortcut learning.",
        formats: ["Clip-level tags", "Span-level actions"],
        illustration: "action",
      },
      {
        name: "3D bounding boxes (LiDAR)",
        body: "Sensor-fusion review with calibrated LiDAR + camera, including track IDs, heading, size, and motion attributes.",
        formats: ["KITTI 3D", "nuScenes-like", "Custom"],
        illustration: "lidar-3d",
      },
      {
        name: "Human interaction annotation",
        body: "Pose + social-role + interaction graphs for safety-critical and analytics use cases. Reviewer coaching on intent vs. action.",
        formats: ["Interaction JSON", "Graph exports"],
        illustration: "interaction",
      },
      {
        name: "Video captioning",
        body: "Dense, temporally grounded captions with style guides for video-LLM training and retrieval systems.",
        formats: ["Dense captions JSON", "Time-coded text"],
        illustration: "captioning",
      },
      {
        name: "Anomaly detection",
        body: "Rare-event mining + labeled anomaly spans with rationale traces—useful for monitoring and safety systems.",
        formats: ["Span-level tags", "Event ontologies"],
        illustration: "anomaly",
      },
      {
        name: "Video quality evaluation",
        body: "Subjective quality ratings for encoders, generative video, and super-resolution—MOS/ACR and pairwise protocols.",
        formats: ["ACR 1–5", "Pairwise preference"],
        illustration: "video-quality",
      },
    ],
    schemas: [
      {
        name: "Tracking & ADAS",
        body: "Multi-object tracking + 3D LiDAR boxes with synchronized sensor exports.",
      },
      {
        name: "Action & interaction",
        body: "Temporal spans + interaction graphs with clear action taxonomy and ambiguity rules.",
      },
      {
        name: "Video-LLM training",
        body: "Dense captions + long-context QA pairs, filtered for prompt leakage and style drift.",
      },
    ],
    faqs: [
      {
        q: "How do you manage review cost on long video?",
        a: "Tiered sampling + active review: dense labeling where the model is weak, cheaper sampling elsewhere, always gated by rubric adherence.",
      },
      {
        q: "Do you support LiDAR + camera fusion?",
        a: "Yes—we use calibrated multi-sensor tooling with track-consistency checks across frames.",
      },
      {
        q: "What about generative video evaluation?",
        a: "We run ACR/MOS and pairwise panels with artifact-specific rubrics (flicker, identity drift, motion realism).",
      },
    ],
  },
};
