export type ModalityId = "speech" | "image" | "video";

export interface Modality {
  id: ModalityId;
  label: string;
  title: string;
  description: string;
  /** Model outcomes / deliverables this modality unlocks */
  outcomes: string[];
  capabilities: string[];
  /** Grid area hints for bento layout (md+). */
  bentoClass: string;
}

export const modalities: Modality[] = [
  {
    id: "speech",
    label: "01 — Audio",
    title: "Speech & audio",
    description:
      "Turn messy audio into structured supervision: who spoke, what they felt, and how it should sound to humans. We align transcripts with diarization, lexicons, and evaluation protocols so ASR, TTS, and spoken-dialog models learn the right failure modes.",
    outcomes: [
      "ASR + diarization that survives accents & noise",
      "TTS / voice UX judged with MOS & MUSHRA",
      "Spoken assistants with intent + slot fidelity",
    ],
    bentoClass: "md:col-span-2 md:row-span-2",
    capabilities: [
      "Transcription",
      "Speaker diarization",
      "Emotion & sentiment tagging",
      "Language identification",
      "Phoneme alignment",
      "Audio event tagging",
      "Intent & entity labeling",
      "Spoken language evaluation (MOS / MUSHRA)",
    ],
  },
  {
    id: "image",
    label: "02 — Vision",
    title: "Image",
    description:
      "Pixel-accurate labels for perception and document AI—from boxes to masks to clinical detail. Schema-first exports (COCO-style, custom JSON, DICOM overlays) keep your trainers and eval harnesses in sync.",
    outcomes: [
      "Detection & segmentation with clean ontology",
      "Doc AI with OCR + layout + reading order",
      "Clinical imaging with reviewer traceability",
    ],
    bentoClass: "md:col-span-2 md:row-span-1",
    capabilities: [
      "Bounding boxes",
      "Semantic segmentation",
      "Instance segmentation",
      "Keypoints & pose",
      "Image classification",
      "Polygon & polyline",
      "Medical imaging",
      "Quality rating (RLHF)",
      "OCR & document annotation",
    ],
  },
  {
    id: "video",
    label: "03 — Time",
    title: "Video",
    description:
      "Temporal structure for models that must understand motion, interaction, and rare events. From frame-accurate spans to LiDAR-aligned 3D boxes, we ship labels your trackers and video-LLMs can actually train on.",
    outcomes: [
      "Tracking + temporal segmentation for long clips",
      "Action & interaction graphs for safety-critical scenes",
      "Anomaly + quality signals for monitoring products",
    ],
    bentoClass: "md:col-span-2 md:row-span-1",
    capabilities: [
      "Object tracking",
      "Temporal segmentation",
      "Action recognition",
      "3D bounding boxes (LiDAR)",
      "Human interaction annotation",
      "Video captioning",
      "Anomaly detection",
      "Video quality evaluation",
    ],
  },
];

/** Hero strip — quick credibility (Ethara-style “proven track” density). */
export const heroStats = [
  { value: "40+", label: "programs shipped" },
  { value: "120k+", label: "reviewed hours / yr" },
  { value: "60+", label: "locales & dialects" },
  { value: "99.2%", label: "rubric adherence (avg.)" },
] as const;

export const studioMetrics = [
  { value: "40+", label: "annotation programs shipped" },
  { value: "120k+", label: "reviewed task hours / year" },
  { value: "18", label: "verticals covered" },
] as const;

/** Placeholder org names — swap for real logos when available (Scale-style logo river). */
export const trustLogos = [
  { name: "Helio Robotics", short: "Helio" },
  { name: "Northwind Health", short: "NW Health" },
  { name: "Kestrel Defense", short: "Kestrel" },
  { name: "Lumen Broadcast", short: "Lumen" },
  { name: "Cobalt Fintech", short: "Cobalt" },
  { name: "Atlas Mobility", short: "Atlas" },
] as const;

/**
 * Enterprise positioning line — inspired by Scale’s “important decisions” framing (original wording).
 */
export const reliabilityLine =
  "Training and evaluation data you can defend in production—not just in a slide deck.";

export const differentiators = [
  {
    title: "Human-aligned data engine",
    summary:
      "Workflows built for preference learning, rubric-gated QA, and reproducible exports—so labels teach the behavior you want, not the shortcuts annotators guess.",
    bullets: [
      "Instruction libraries + edge-case playbooks",
      "Inter-rater agreement targets per task family",
      "Versioned schemas & audit trails",
    ],
  },
  {
    title: "Vertically integrated workforce",
    summary:
      "Domain cohorts with escalation paths, not anonymous throughput. Recruiting, certification, and coaching stay in-house so quality doesn’t decay at scale.",
    bullets: [
      "Specialists for clinical, geospatial, and media",
      "Live QA dashboards + spot audits",
      "Locale-native reviewers for speech & OCR",
    ],
  },
  {
    title: "Platform-driven operations",
    summary:
      "One stack for tasking, sampling, review, and client reporting. Your PMs see progress, blockers, and quality—without chasing spreadsheets.",
    bullets: [
      "Automated sampling & active review",
      "SLA alerts & throughput forecasting",
      "Exports to S3 / GCS / your MLOps hooks",
    ],
  },
] as const;

/**
 * Core services — themes synthesized from Ethara’s public services page (LLM post-training, eval, rubrics, multimodal).
 * Copy is original to zyka foundry; structure mirrors enterprise data partner offerings.
 */
export const coreDataServices = [
  {
    title: "Supervised fine-tuning (SFT) corpora",
    description:
      "Instruction–response pairs, tool-use traces, and domain packs that steer base models toward your product behaviors—with refusal and safety examples baked in.",
    facets: [
      "Task-specific curricula",
      "Multi-step reasoning traces",
      "Code + STEM workbooks",
    ],
  },
  {
    title: "RLHF & human preference",
    description:
      "Ranking, pairwise, and critique data that trains reward models and aligns outputs to human taste—paired with MOS/MUSHRA where perception matters.",
    facets: [
      "Preference elicitation design",
      "Reward model training loops",
      "Harmlessness & helpfulness axes",
    ],
  },
  {
    title: "Evaluations & benchmarks",
    description:
      "Custom suites beyond public leaderboards: scenario tests, red-team prompts, regression gates, and per-slice fairness checks tied to your deployment.",
    facets: [
      "Scenario harness design",
      "Automated + human judging",
      "Release-blocking scorecards",
    ],
  },
  {
    title: "Rubrics & scoring frameworks",
    description:
      "Objective criteria for subjective tasks—style, factuality, toxicity, clinical appropriateness—so reviewers score the same thing every shift.",
    facets: [
      "Rubric versioning",
      "Calibration drills",
      "Adjudication workflows",
    ],
  },
  {
    title: "Multi-turn dialogue & CoT",
    description:
      "Long-context conversations, tool calls, and chain-of-thought-style reasoning chains with editor QA—built for models that must show their work.",
    facets: [
      "Stateful dialogue trees",
      "Reasoning visibility",
      "Context carry-over tests",
    ],
  },
  {
    title: "Multimodal labeling",
    description:
      "Aligned text ↔ image ↔ audio ↔ video annotations for unified models—one ontology across modalities, one QA standard.",
    facets: [
      "Cross-modal grounding",
      "Caption ↔ region alignment",
      "Video-LLM instruction packs",
    ],
  },
] as const;

export const processSteps = [
  {
    title: "Scope & rubric",
    body: "We translate your model goals into unambiguous instructions, edge cases, and acceptance tests—before a single label ships.",
  },
  {
    title: "Studio workforce",
    body: "Domain-trained annotators work in cohorts with escalation paths—not anonymous click farms.",
  },
  {
    title: "Platform QA",
    body: "Inter-rater checks, spot audits, and programmatic gates keep quality visible as volume scales.",
  },
  {
    title: "Delivery & iteration",
    body: "Exports, schema versioning, and feedback loops so your training sets improve with every drop.",
  },
] as const;

export const qualityHighlights = [
  {
    title: "Human preference & ratings",
    body: "Side-by-side, MOS, MUSHRA, and RLHF-style ranking for speech and vision quality—not just correctness.",
  },
  {
    title: "Safety & domain depth",
    body: "Medical imaging and sensitive workflows follow protocol, access control, and reviewer certification.",
  },
  {
    title: "Evaluation-ready exports",
    body: "Splits, metadata, and reproducibility hooks so your eval suite matches production reality.",
  },
] as const;

export const complianceNotes = [
  {
    title: "Governance",
    text: "PII handling, data residency, and retention policies scoped per program—documentation you can hand to security review.",
  },
  {
    title: "Clinical & regulated",
    text: "De-identification pathways, reader certifications, and audit logs for imaging and other high-stakes domains.",
  },
] as const;

export const footerLinks = [
  { href: "#modalities", label: "Capabilities" },
  { href: "#services", label: "Core services" },
  { href: "#differentiators", label: "Why zyka foundry" },
  { href: "#process", label: "Process" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
] as const;
