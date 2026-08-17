"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { SCROLL_LOCK } from "@/lib/scroll-lock";

type Instance = {
  destroy?: () => void;
  lenisInstance?: {
    resize?: () => void;
    stop?: () => void;
    start?: () => void;
    scrollTo?: (
      target: number,
      opts?: { immediate?: boolean; force?: boolean }
    ) => void;
  };
};

/**
 * Locomotive Scroll v5 (Lenis-backed).
 *
 * v5 smooths the *native* scroll position rather than transforming a fake
 * container the way v4 did — which is why sticky columns and CSS
 * scroll-driven animations still work underneath it.
 *
 * The important part here is re-measuring. Lenis caches the scrollable
 * height, and if that cache goes stale it clamps scrolling to the old
 * limit — the page simply stops partway down and only a reload fixes it.
 * Four things invalidate it on this site:
 *
 *   - client-side route changes (every page is a different height)
 *   - the founder portrait decoding after first paint
 *   - the three webfonts swapping in and reflowing text
 *   - any late layout shift at all
 *
 * So we resize on pathname change, on a ResizeObserver over the body, on
 * window load, and once fonts are ready. Re-measuring is cheap; being
 * stuck is not.
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const inst = useRef<Instance | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let ro: ResizeObserver | undefined;
    let raf = 0;

    const resize = () => {
      inst.current?.lenisInstance?.resize?.();
    };

    (async () => {
      const mod = await import("locomotive-scroll");
      if (cancelled) return;
      const LocomotiveScroll = mod.default;
      inst.current = new LocomotiveScroll({
        lenisOptions: {
          duration: 1.0,
          smoothWheel: true,
          // Touch keeps its native momentum; smoothing there fights the
          // platform instead of improving it.
          syncTouch: false,
        },
      } as never) as Instance;

      ro = new ResizeObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(resize);
      });
      ro.observe(document.body);
      window.addEventListener("load", resize);
      document.fonts?.ready.then(resize).catch(() => {});
      raf = requestAnimationFrame(resize);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("load", resize);
      inst.current?.destroy?.();
      inst.current = null;
    };
  }, []);

  /**
   * Park Lenis while a full-screen overlay is open.
   *
   * Locking the body stops native scrolling but not Lenis, which drives the
   * scroll position from its own animation loop — so the page would carry
   * on moving behind the index panel. Stopping it also makes Lenis swallow
   * wheel events over the overlay instead of acting on them, which is what
   * we want everywhere except the panel's own scrollable list. That list
   * carries `data-lenis-prevent`, and Lenis checks for it before it checks
   * whether it is stopped, so native scrolling there still works.
   */
  useEffect(() => {
    const onLock = (e: Event) => {
      const locked = (e as CustomEvent<boolean>).detail;
      const lenis = inst.current?.lenisInstance;
      if (locked) lenis?.stop?.();
      else lenis?.start?.();
    };
    window.addEventListener(SCROLL_LOCK, onLock);
    return () => window.removeEventListener(SCROLL_LOCK, onLock);
  }, []);

  /**
   * A route change swaps the whole document height under Lenis, and Lenis
   * holds its own scroll position — so Next's own reset-to-top gets
   * overridden and you land partway down the new page, past its opening.
   * Jump to 0 immediately, then re-measure once the new tree has painted.
   */
  useEffect(() => {
    const lenis = inst.current?.lenisInstance;
    lenis?.scrollTo?.(0, { immediate: true, force: true });
    window.scrollTo(0, 0);

    const id = window.setTimeout(() => {
      inst.current?.lenisInstance?.resize?.();
      inst.current?.lenisInstance?.scrollTo?.(0, { immediate: true, force: true });
    }, 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
