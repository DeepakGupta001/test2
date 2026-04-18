import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-syne)] text-xl font-semibold"
            >
              Fieldnote
              <span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--fg-muted)]">
              A multimodal data studio producing training & evaluation data for
              speech, image, and video models.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              Studio
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[var(--accent)]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[var(--accent)]">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--accent)]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--accent)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              Capabilities
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/speech" className="hover:text-[var(--accent)]">
                  Speech & audio
                </Link>
              </li>
              <li>
                <Link href="/image" className="hover:text-[var(--accent)]">
                  Image
                </Link>
              </li>
              <li>
                <Link href="/video" className="hover:text-[var(--accent)]">
                  Video
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-dashed border-[var(--border)] pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fieldnote Studio. Data for models.</p>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Footer"
          >
            <Link
              href="/services"
              className="font-mono text-[11px] uppercase tracking-widest hover:text-[var(--accent)]"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-widest hover:text-[var(--accent)]"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="font-mono text-[11px] uppercase tracking-widest hover:text-[var(--accent)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[11px] uppercase tracking-widest hover:text-[var(--accent)]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
