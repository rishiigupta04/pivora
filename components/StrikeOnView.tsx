"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Draws the strike-throughs on touch screens as each one is scrolled to.
 *
 * Two earlier attempts failed, and the reasons are worth keeping:
 *
 *  1. A CSS scroll timeline — `animation-timeline` is unsupported in iOS
 *     Safari, so its struck fallback was what actually shipped and every
 *     line arrived already crossed out.
 *  2. An IntersectionObserver — which never fired. These targets are
 *     `display: inline` (they have to be: a background only paints per
 *     line fragment on an inline box, which is what makes a wrapped
 *     phrase get struck on every line). A fresh observer with three
 *     elements confirmed on screen reported nothing.
 *
 * So this measures rects directly on scroll, throttled to a frame. For a
 * dozen elements that is trivial work, and it cannot be defeated by how
 * the element happens to be laid out.
 *
 * Desktop keeps its hover behaviour; this only runs below md.
 */
export default function StrikeOnView() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    if (!window.matchMedia("(max-width: 767px)").matches) {
      root.dataset.strike = "desktop";
      return;
    }

    let raf = 0;
    let pending: HTMLElement[] = [];
    let onScroll: (() => void) | undefined;

    const timer = window.setTimeout(() => {
      pending = Array.from(
        document.querySelectorAll<HTMLElement>(".strike-lines")
      ).filter(
        (el) =>
          !el.classList.contains("struck") &&
          !el.classList.contains("strike-draw") &&
          // Sequenced elsewhere (the negation list). Touching these forces
          // every line struck at once and destroys the sequence.
          !el.classList.contains("strike-managed")
      );
      root.dataset.strike = `watching:${pending.length}`;
      if (!pending.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        pending.forEach((el) => el.classList.add("is-struck"));
        pending = [];
        return;
      }

      /**
       * A rAF loop rather than a scroll listener: Lenis drives the scroll
       * position itself and native `scroll` events never reach window
       * here — a listener is registered and simply never called.
       *
       * The size is written as an inline style rather than toggling a
       * class. A class-based rule was being out-ranked and silently did
       * nothing; an inline style cannot lose. The loop stops as soon as
       * every line is drawn, so it costs nothing after the first pass.
       */
      const tick = () => {
        const limit = window.innerHeight * 0.88;
        pending = pending.filter((el) => {
          // Measure a block ancestor, not the inline element itself. An
          // inline box fragments across lines and reports rects that do
          // not behave like a normal element — the same reason an
          // IntersectionObserver on these never fired.
          const box = (el.closest("li,p,div,figure") ?? el) as HTMLElement;
          const b = box.getBoundingClientRect();
          if (b.top < limit && b.bottom > 0) {
            el.style.backgroundSize = "100% var(--strike-weight)";
            return false;
          }
          return true;
        });

        if (!pending.length) {
          root.dataset.strike = "done";
          raf = 0;
          return;
        }
        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    }, 200);

    return () => {
      window.clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, [pathname]);

  return null;
}
