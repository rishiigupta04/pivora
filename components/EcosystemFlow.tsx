"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { TRACKS } from "@/lib/content";
import { CountUp } from "./motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The ecosystem flow — Brief §4.4, Section 06.
 *
 * Platform OEM → Pivora → Enterprise / GCC / GSI → Global Market. Kept
 * architectural and simple, as the brief requires: no route-map arcs, no
 * glowing particles, no globe. Pivora is drawn as the hub because that is
 * the actual claim — one firm standing between a platform and three tracks
 * that do not buy the same way.
 *
 * Each track returns revenue in India *and* a second, larger opening beyond
 * it. That "opens twice" idea is the strongest thing on the page, so it is
 * drawn rather than described.
 *
 * Built from ordinary elements with orthogonal connectors rather than an
 * SVG path diagram. Deliberate: an SVG stretched to a fluid container has
 * to fight non-uniform scaling, and every label inside one is invisible to
 * ordinary text selection. Here every word is real DOM text, the connectors
 * are decorative divs, and the whole thing reflows without a viewBox.
 *
 * Connectors animate on transform only, so nothing re-lays-out per frame.
 */
export default function EcosystemFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const still = useReducedMotion();
  const on = still || inView;

  const grow = (axis: "x" | "y", delay: number) => ({
    initial: still ? undefined : { [axis === "x" ? "scaleX" : "scaleY"]: 0 },
    animate: on ? { scaleX: 1, scaleY: 1 } : undefined,
    transition: {
      duration: still ? 0 : 0.55,
      delay: still ? 0 : delay,
      ease: EASE,
    },
  });

  const fade = (delay: number) => ({
    initial: still ? undefined : { opacity: 0, y: 14 },
    animate: on ? { opacity: 1, y: 0 } : undefined,
    transition: {
      duration: still ? 0 : 0.6,
      delay: still ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <figure ref={ref} className="mt-14">
      {/* ── source ─────────────────────────────────────────────── */}
      <div className="flex flex-col items-center">
        <motion.p
          data-m
          {...fade(0)}
          className="ev border border-rule bg-paper px-5 py-3 text-ink"
        >
          Your platform
        </motion.p>
        <motion.span
          aria-hidden
          className="block h-9 w-px origin-top bg-rule"
          {...grow("y", 0.14)}
        />

        {/* the hub */}
        <motion.p
          data-m
          {...fade(0.24)}
          className="ev border-2 border-blue bg-paper px-6 py-3 text-blue"
        >
          Pivora
        </motion.p>
        <motion.span
          aria-hidden
          className="block h-9 w-px origin-top bg-rule"
          {...grow("y", 0.34)}
        />
      </div>

      {/* horizontal rail joining the three tracks (desktop only) */}
      <motion.span
        aria-hidden
        className="mx-auto hidden h-px w-2/3 origin-left bg-rule md:block"
        {...grow("x", 0.42)}
      />

      {/* ── the three tracks ───────────────────────────────────── */}
      <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
        {TRACKS.map((t, i) => (
          <li key={t.id} className="flex flex-col items-center">
            <motion.span
              aria-hidden
              className="hidden h-8 w-px origin-top bg-rule md:block"
              {...grow("y", 0.54 + i * 0.08)}
            />

            <motion.div
              data-m
              initial={still ? undefined : { opacity: 0, y: 22 }}
              animate={on ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: still ? 0 : 0.7,
                delay: still ? 0 : 0.62 + i * 0.1,
                ease: EASE,
              }}
              className="group w-full border border-rule bg-paper p-6 transition-colors duration-500 hover:border-blue"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[2rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                  {t.n}
                </span>
                <h3 className="font-display text-[1.25rem] leading-tight">
                  {t.short}
                </h3>
              </div>

              {/* every track opens twice — the figure is the first thing
                  the eye lands on, not a caption under a label. Where no
                  verified figure exists the card says that rather than
                  borrowing an unrelated number to fill the space. */}
              <div className="mt-6 border-t border-rule pt-5">
                {t.proof ? (
                  <>
                    <p className="ev flex items-center gap-2.5 text-ink-2">
                      <span aria-hidden className="size-1.5 shrink-0 bg-blue" />
                      India
                    </p>
                    <p className="mt-2.5 font-display text-[clamp(2.25rem,3.4vw,3rem)] leading-none tracking-[-0.03em] tabular-nums text-ink">
                      <CountUp value={t.proof.value} />
                    </p>
                    <p className="ev mt-2 text-[0.5rem] text-ink-2">
                      Source — {t.proof.source}
                    </p>
                  </>
                ) : t.noProof ? (
                  <>
                    <p className="ev flex items-center gap-2.5 text-ink-2">
                      <span
                        aria-hidden
                        className="size-1.5 shrink-0 border border-ink-2"
                      />
                      India
                    </p>
                    <p className="mt-2.5 max-w-[26ch] text-[0.9375rem] leading-snug text-ink-2">
                      {t.noProof}
                    </p>
                  </>
                ) : null}

                <p className="mt-6 flex gap-3 border-t border-rule pt-4 text-[0.9375rem] leading-snug text-ink-2">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 border border-blue"
                  />
                  {t.multiplier}
                </p>
              </div>
            </motion.div>

            <motion.span
              aria-hidden
              className="hidden h-8 w-px origin-top bg-rule md:block"
              {...grow("y", 0.92 + i * 0.08)}
            />
          </li>
        ))}
      </ol>

      {/* ── converge ───────────────────────────────────────────── */}
      <motion.span
        aria-hidden
        className="mx-auto hidden h-px w-2/3 origin-left bg-rule md:block"
        {...grow("x", 1.12)}
      />
      <div className="mt-10 flex flex-col items-center md:mt-0">
        <motion.span
          aria-hidden
          className="hidden h-10 w-px origin-top bg-blue md:block"
          {...grow("y", 1.22)}
        />
        <motion.p
          data-m
          {...fade(1.3)}
          className="ev border-2 border-blue bg-paper px-5 py-3 text-blue"
        >
          Global market
        </motion.p>
      </div>

      <figcaption className="mt-10 border-t border-rule pt-4 text-sm leading-relaxed text-ink-2">
        Each track returns revenue in India and a second, larger opening
        beyond it. That is the multiplier — and it is why India is a
        launchpad rather than a territory.
      </figcaption>
    </figure>
  );
}
