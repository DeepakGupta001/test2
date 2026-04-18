import {
  siAnthropic,
  siGoogle,
  siMeta,
  siNvidia,
  siMistralai,
  siHuggingface,
  siDatabricks,
  siPerplexity,
  siOllama,
} from "simple-icons";

interface SimpleIcon {
  title: string;
  path: string;
  hex: string;
}

/** Real AI / ML company brand marks (from simple-icons). */
export const brandIcons = {
  anthropic: siAnthropic as SimpleIcon,
  google: siGoogle as SimpleIcon,
  meta: siMeta as SimpleIcon,
  nvidia: siNvidia as SimpleIcon,
  mistral: siMistralai as SimpleIcon,
  huggingface: siHuggingface as SimpleIcon,
  databricks: siDatabricks as SimpleIcon,
  perplexity: siPerplexity as SimpleIcon,
  ollama: siOllama as SimpleIcon,
} as const;

export type BrandKey = keyof typeof brandIcons;

interface BrandLogoProps {
  brand: BrandKey;
  className?: string;
  /** Render the monochrome SVG path in currentColor. */
  mono?: boolean;
}

export function BrandLogo({ brand, className, mono = true }: BrandLogoProps) {
  const icon = brandIcons[brand];
  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      className={className}
      fill={mono ? "currentColor" : `#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

/** Simple text wordmark for brands not in simple-icons (e.g. OpenAI). */
export function Wordmark({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={
        className ??
        "font-[family-name:var(--font-syne)] text-base font-semibold tracking-tight"
      }
    >
      {label}
    </span>
  );
}
