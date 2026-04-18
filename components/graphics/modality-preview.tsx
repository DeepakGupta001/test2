import {
  TaskIllustration,
  type IllustrationKey,
} from "@/components/task-illustrations";
import type { ModalityId } from "@/lib/constants";

interface PreviewTask {
  kind: IllustrationKey;
  label: string;
}

/**
 * Featured task diagrams per modality — 3 tiles per card.
 * Chosen to represent the breadth of each modality at a glance.
 */
const previews: Record<ModalityId, PreviewTask[]> = {
  speech: [
    { kind: "transcription", label: "Transcription" },
    { kind: "diarization", label: "Diarization" },
    { kind: "phoneme", label: "Phonemes" },
  ],
  image: [
    { kind: "bbox", label: "Bounding boxes" },
    { kind: "semantic-seg", label: "Segmentation" },
    { kind: "keypoints", label: "Keypoints" },
  ],
  video: [
    { kind: "tracking", label: "Tracking" },
    { kind: "temporal-seg", label: "Temporal" },
    { kind: "lidar-3d", label: "3D / LiDAR" },
  ],
};

export function ModalityPreview({ modality }: { modality: ModalityId }) {
  const tasks = previews[modality];
  return (
    <div className="relative grid h-full grid-cols-3 divide-x divide-[var(--border)]">
      {tasks.map((t) => (
        <div
          key={t.kind}
          className="relative flex flex-col justify-between bg-[var(--bg)]"
        >
          <div className="flex-1 px-2 py-3">
            <TaskIllustration kind={t.kind} bare />
          </div>
          <p className="border-t border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500">
            {t.label}
          </p>
        </div>
      ))}
    </div>
  );
}
