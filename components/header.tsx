"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  // Close the drawer automatically if the viewport grows past the
  // breakpoint where the drawer element itself is hidden — prevents
  // the body-scroll lock from getting orphaned after a resize.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight text-[var(--fg)]"
        >
          zyka foundry
          <span className="text-[var(--accent)]">.</span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm text-[var(--fg-muted)] lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = isActive(item.href);
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

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden shrink-0 border border-[var(--fg)] bg-[var(--fg)] px-4 py-2 text-sm font-semibold text-[var(--bg)] shadow-[4px_4px_0_0_var(--accent)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 sm:inline-flex"
          >
            Start a project
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] transition-colors hover:border-[var(--fg-muted)] lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="border-t border-[var(--border)] bg-[var(--bg)]">
          <nav
            className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6"
            aria-label="Mobile primary"
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-[var(--border)] py-3 text-base transition-colors ${
                    active
                      ? "text-[var(--accent)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="font-[family-name:var(--font-syne)] text-lg">
                    {item.label}
                  </span>
                  <span
                    className="font-mono text-[11px] uppercase tracking-widest text-zinc-500"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex w-full items-center justify-center border border-[var(--fg)] bg-[var(--fg)] px-4 py-3 text-sm font-semibold text-[var(--bg)] shadow-[4px_4px_0_0_var(--accent)]"
            >
              Start a project
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
