import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  crumbs?: { href: string; label: string }[];
}

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  crumbs = [],
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,rgba(200,255,77,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {crumbs.length > 0 ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1 font-mono text-xs uppercase tracking-widest text-zinc-500"
          >
            <Link href="/" className="hover:text-[var(--accent)]">
              Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                {i === crumbs.length - 1 ? (
                  <span className="text-[var(--fg)]">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-[var(--accent)]">
                    {c.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]">
              {description}
            </p>
          </div>
          {image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[8px_8px_0_0_rgba(39,39,42,0.9)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--bg)]/60" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
