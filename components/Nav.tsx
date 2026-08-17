"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Wordmark from "./Wordmark";
import { INDEX } from "@/lib/nav";
import { SCROLL_LOCK } from "@/lib/scroll-lock";

/**
 * Brief §3.1 specifies an eleven-item top bar and then flags it for
 * confirmation, because eleven items is a lot of bar. This resolves it a
 * third way: four primary links carry the positioning — including both
 * directions of the growth corridor, which §2 requires to be visible early
 * and repeatedly — and an Index opens the complete page map.
 *
 * That satisfies the acceptance rule in §18 ("every page has at least one
 * working inbound nav link, no orphan pages") without spending the whole
 * header on navigation. Tracked in OPEN_ITEMS for sign-off.
 */
const PRIMARY = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/global-to-india", label: "Global → India" },
  { href: "/india-to-global", label: "India → Global" },
  { href: "/built-operate-sustain", label: "Built–Operate–Sustain" },
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const still = useReducedMotion();

  /* The bar tightens once you leave the top — a small signal that the page
     is in motion, and it buys back vertical space on a phone. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* A full-screen panel must not leave the page scrolling behind it.
     The body lock handles native scroll; the event tells SmoothScroll to
     park Lenis, which runs its own scroll loop and would otherwise keep
     driving the page underneath the overlay. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent(SCROLL_LOCK, { detail: open }));
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent(SCROLL_LOCK, { detail: false }));
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  /* Escape closes it. A full-screen overlay with no keyboard exit is a trap. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  let row = 0;

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur-md transition-[border-color,box-shadow] duration-500 ${
        scrolled
          ? "border-rule shadow-[0_1px_24px_-16px_rgba(20,18,14,0.5)]"
          : "border-transparent"
      }`}
    >
      {/* relative z-40 keeps the bar above the index panel below it. The
          panel is a child of this header, so its z-30 is resolved inside
          the header's own stacking context — without this the panel paints
          over the bar and the close button becomes untappable. */}
      <div
        className={`relative z-40 mx-auto flex max-w-wide items-center justify-between px-6 transition-[height] duration-500 lg:px-10 ${
          scrolled ? "h-[3.75rem]" : "h-[4.5rem]"
        }`}
      >
        <Link
          href="/"
          className="group shrink-0 py-2.5 xl:py-0"
          aria-label="Pivora Consulting — home"
        >
          <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-px">
            <Wordmark />
          </span>
        </Link>

        {/* desktop */}
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {PRIMARY.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center py-1 text-[0.9375rem] transition-colors duration-300 ${
                  active ? "text-blue" : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}

                {/* Hover is carried by the underline sweep alone, and the
                    current page by the solid indicator below it — the label
                    colour shifts for both. */}
                {!active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100"
                  />
                )}

                {active &&
                  (still ? (
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-blue"
                    />
                  ) : (
                    <motion.span
                      layoutId="nav-indicator"
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-blue"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ))}
              </Link>
            );
          })}

          {/* The rest of the map. Everything §3.2 defines is one click from
              here, on every page. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-index"
            className={`ev flex items-center gap-2.5 py-1 transition-colors duration-300 ${
              open ? "text-ink" : "text-ink-2 hover:text-ink"
            }`}
          >
            {/* two rules that cross into an X once the panel is open */}
            <span aria-hidden className="relative block size-3.5">
              <span
                className={`absolute left-0 block h-px w-3.5 bg-current transition-all duration-400 ease-out ${
                  open ? "top-1.5 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-3.5 bg-current transition-all duration-400 ease-out ${
                  open ? "top-1.5 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
            {open ? "Close" : "Index"}
          </button>

          <Link
            href="/contact"
            className="fill-up bg-ink px-5 py-2.5 text-[0.9375rem] text-paper"
          >
            Start a conversation
          </Link>
        </nav>

        {/* mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="site-index"
          className="relative -mr-2 flex size-11 items-center justify-center xl:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px bg-ink transition-all duration-400 ease-out ${
                open ? "top-1.5 w-5 rotate-45" : "top-0 w-5"
              }`}
            />
            <span
              className={`absolute left-0 block h-px bg-ink transition-all duration-400 ease-out ${
                open ? "top-1.5 w-5 -rotate-45" : "top-3 w-3.5"
              }`}
            />
          </span>
        </button>
      </div>

      {/* ── the index ──────────────────────────────────────────────
          One overlay for both breakpoints: a single scrolling column on a
          phone, three columns of groups on a wide screen. */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-index"
            aria-label="All pages"
            className="fixed inset-x-0 top-0 z-30 flex h-dvh flex-col bg-paper pt-[4.5rem]"
            initial={still ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={still ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: still ? 0 : 0.4, ease: EASE }}
          >
            {/* min-h-0 is load-bearing. A `flex-1` child keeps
                `min-height: auto`, which means it refuses to shrink below
                its content — so `overflow-y-auto` never engages, the list
                overflows the panel instead of scrolling inside it, and the
                bottom of the map is simply unreachable.

                data-lenis-prevent is the other half: Lenis intercepts wheel
                events document-wide and, with the body locked, swallows
                them without scrolling anything. The attribute is checked
                before Lenis handles the event, so the native scroll of this
                container wins.

                overscroll-contain stops a fast flick at the end of the list
                from chaining through to the page behind the overlay. */}
            <div
              data-lenis-prevent
              className="mx-auto w-full max-w-wide min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pt-6 lg:px-10 xl:pt-10"
            >
              <div className="grid gap-x-14 gap-y-10 xl:grid-cols-3">
                {INDEX.map((group) => (
                  <div key={group.head}>
                    <p className="ev border-b border-rule pb-3 text-ink-2">
                      {group.head}
                    </p>
                    <ul>
                      {group.links.map((l) => {
                        const active = pathname === l.href;
                        row += 1;
                        const i = row;
                        return (
                          <motion.li
                            key={l.href}
                            className="border-b border-rule"
                            initial={still ? false : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: still ? 0 : 0.45,
                              delay: still ? 0 : 0.05 + i * 0.028,
                              ease: EASE,
                            }}
                          >
                            <Link
                              href={l.href}
                              aria-current={active ? "page" : undefined}
                              className="group flex items-baseline gap-4 py-4"
                            >
                              <span className="flex-1">
                                <span
                                  className={`block font-display text-[1.375rem] leading-tight tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-1 xl:text-[1.5rem] ${
                                    active ? "text-blue" : "text-ink"
                                  }`}
                                >
                                  {l.label}
                                </span>
                                <span className="mt-1 block text-sm leading-snug text-ink-2">
                                  {l.note}
                                </span>
                              </span>
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* shrink-0 so the CTA keeps its full height on a short
                viewport and the list gives up the space instead. */}
            <div className="mx-auto w-full max-w-wide shrink-0 px-6 pb-8 lg:px-10">
              {/* the ownership motif, as the panel's one ornament */}
              <div aria-hidden className="mt-6 mb-6 flex h-1.5 w-full">
                <div className="w-1/4 bg-blue" />
                <div className="flex-1 bg-gold" />
              </div>
              <Link
                href="/contact"
                className="fill-up block bg-ink px-5 py-4 text-center text-paper xl:inline-block xl:px-9"
              >
                Start a conversation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
