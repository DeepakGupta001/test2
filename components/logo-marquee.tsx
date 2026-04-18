"use client";

import { BrandLogo, Wordmark, type BrandKey } from "@/components/brand-logo";

type LogoItem =
  | { type: "icon"; brand: BrandKey; label: string }
  | { type: "text"; label: string };

interface LogoMarqueeProps {
  logos: LogoItem[];
  /** Seconds per full loop. Lower = faster. */
  durationSec?: number;
  reverse?: boolean;
}

export function LogoMarquee({
  logos,
  durationSec = 38,
  reverse = false,
}: LogoMarqueeProps) {
  return (
    <div
      className="logo-marquee group relative overflow-hidden"
      aria-label="Representative AI ecosystem brands"
      role="region"
    >
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg-elevated)] to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg-elevated)] to-transparent sm:w-24"
        aria-hidden
      />

      <div
        className="marquee-track flex w-max gap-14 py-8"
        style={{
          animationDuration: `${durationSec}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((loop) => (
          <ul
            key={loop}
            className="flex shrink-0 items-center gap-14"
            aria-hidden={loop === 1}
          >
            {logos.map((logo) => (
              <li
                key={`${loop}-${logo.label}`}
                className="flex shrink-0 items-center gap-3 text-zinc-400 transition-colors hover:text-[var(--fg)]"
                title={logo.label}
              >
                {logo.type === "icon" ? (
                  <>
                    <BrandLogo brand={logo.brand} className="h-7 w-7" />
                    <span className="whitespace-nowrap text-sm font-medium">
                      {logo.label}
                    </span>
                  </>
                ) : (
                  <Wordmark
                    label={logo.label}
                    className="whitespace-nowrap font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight"
                  />
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
