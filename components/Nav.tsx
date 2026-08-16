"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Wordmark from "./Wordmark";

const LINKS = [
  { href: "/model", label: "The Model", note: "Build, Operate, Sustain, Transfer" },
  { href: "/doors", label: "Three Doors", note: "Where India revenue comes from" },
  { href: "/how-we-sell", label: "How We Sell", note: "Eight checks before a forecast" },
  { href: "/founder", label: "Founder", note: "Subrato Bandhu" },
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

  /* A full-screen panel must not leave the page scrolling behind it. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur-md transition-[border-color,box-shadow] duration-500 ${
        scrolled
          ? "border-rule shadow-[0_1px_24px_-16px_rgba(20,18,14,0.5)]"
          : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-wide items-center justify-between px-6 transition-[height] duration-500 lg:px-10 ${
          scrolled ? "h-[3.75rem]" : "h-[4.5rem]"
        }`}
      >
        <Link
          href="/"
          className="group shrink-0 py-2.5 lg:py-0"
          aria-label="Pivora Consulting — home"
        >
          <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-px">
            <Wordmark />
          </span>
        </Link>

        {/* desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center gap-2 py-1 text-[0.9375rem] transition-colors duration-300 ${
                  active ? "text-blue" : "text-ink-2 hover:text-ink"
                }`}
              >
                {/* a dot slides in ahead of the label on hover */}
                <span
                  aria-hidden
                  className={`block size-1.5 rounded-full bg-blue transition-all duration-400 ease-out ${
                    active
                      ? "scale-100 opacity-100"
                      : "-ml-3.5 scale-0 opacity-0 group-hover:ml-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />
                {l.label}

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
          aria-controls="mobile-nav"
          className="relative -mr-2 flex size-11 items-center justify-center lg:hidden"
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

      {/* ── full-screen mobile panel ───────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Main"
            className="fixed inset-x-0 top-0 z-30 flex h-dvh flex-col bg-paper pt-[4.5rem] lg:hidden"
            initial={still ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={still ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: still ? 0 : 0.4, ease: EASE }}
          >
            <ul className="flex-1 overflow-y-auto px-6 pt-6">
              {LINKS.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <motion.li
                    key={l.href}
                    className="border-b border-rule"
                    initial={still ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: still ? 0 : 0.5,
                      delay: still ? 0 : 0.08 + i * 0.07,
                      ease: EASE,
                    }}
                  >
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className="flex items-baseline gap-4 py-5"
                    >
                      <span
                        className={`ev shrink-0 ${
                          active ? "text-blue" : "text-ink-2"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block font-display text-[1.75rem] leading-tight tracking-[-0.02em] ${
                            active ? "text-blue" : "text-ink"
                          }`}
                        >
                          {l.label}
                        </span>
                        <span className="mt-1 block text-sm text-ink-2">
                          {l.note}
                        </span>
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="px-6 pb-8"
              initial={still ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: still ? 0 : 0.5,
                delay: still ? 0 : 0.08 + LINKS.length * 0.07,
                ease: EASE,
              }}
            >
              {/* the ownership motif, as the panel's one ornament */}
              <div aria-hidden className="mb-6 flex h-1.5 w-full">
                <div className="w-1/3 bg-blue" />
                <div className="flex-1 bg-gold" />
              </div>
              <Link
                href="/contact"
                className="fill-up block bg-ink px-5 py-4 text-center text-paper"
              >
                Start a conversation
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
