"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/speech", label: "Speech" },
  { href: "/image", label: "Image" },
  { href: "/video", label: "Video" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight text-[var(--fg)]"
        >
          Fieldnote
          <span className="text-[var(--accent)]">.</span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm text-[var(--fg-muted)] lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors hover:text-[var(--fg)] ${
                  active ? "text-[var(--fg)]" : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--accent)]"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="shrink-0 border border-[var(--fg)] bg-[var(--fg)] px-4 py-2 text-sm font-semibold text-[var(--bg)] shadow-[4px_4px_0_0_var(--accent)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
