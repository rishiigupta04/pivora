"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { DOORS } from "@/lib/content";
import { CountUp } from "./motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The Three Doors route map.
 *
 * One product fans out into three routes; each route returns India revenue
 * *and* a second, global outcome; the three converge on global scale. That
 * "opens twice" idea is the strongest thing on the page and was previously
 * only stated in prose.
 *
 * Built from ordinary elements with orthogonal connectors rather than an
 * SVG path diagram. Deliberate: an SVG stretched to a fluid container has
 * to fight non-uniform scaling, and every label inside one is invisible to
 * ordinary text selection. Here every word is real DOM text, the connectors
 * are decorative divs, and the whole thing reflows without a viewBox.
 *
 * Connectors animate on transform only, so nothing re-lays-out per frame.
 */
export default function DoorsMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const still = useReducedMotion();
  const on = still || inView;

  const grow = (axis: "x" | "y", delay: number) => ({
    initial: still ? undefined : { [axis === "x" ? "scaleX" : "scaleY"]: 0 },
    animate: on ? { scaleX: 1, scaleY: 1 } : undefined,
    transition: { duration: still ? 0 : 0.55, delay: still ? 0 : delay, ease: EASE },
  });

  return (
    <figure ref={ref} className="mt-14">
      {/* ── source ─────────────────────────────────────────────── */}
      <div className="flex flex-col items-center">
        <motion.p
          data-m
          initial={still ? undefined : { opacity: 0, y: 14 }}
          animate={on ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: still ? 0 : 0.6, ease: EASE }}
          className="ev border border-rule bg-paper px-5 py-3 text-ink"
        >
          Your product
        </motion.p>
        <motion.span
          aria-hidden
          className="block h-10 w-px origin-top bg-rule"
          {...grow("y", 0.18)}
        />
      </div>

      {/* horizontal rail joining the three routes (desktop only) */}
      <motion.span
        aria-hidden
        className="mx-auto hidden h-px w-2/3 origin-left bg-rule md:block"
        {...grow("x", 0.3)}
      />

      {/* ── the three doors ────────────────────────────────────── */}
      <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
        {DOORS.map((d, i) => (
          <li key={d.id} className="flex flex-col items-center">
            <motion.span
              aria-hidden
              className="hidden h-8 w-px origin-top bg-rule md:block"
              {...grow("y", 0.42 + i * 0.08)}
            />

            <motion.div
              data-m
              initial={still ? undefined : { opacity: 0, y: 22 }}
              animate={on ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: still ? 0 : 0.7,
                delay: still ? 0 : 0.5 + i * 0.1,
                ease: EASE,
              }}
              className="group w-full border border-rule bg-paper p-6 transition-colors duration-500 hover:border-blue"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[2rem] leading-none text-blue/55 transition-colors duration-500 group-hover:text-blue">
                  {d.n}
                </span>
                <h3 className="font-display text-[1.25rem] leading-tight">
                  {d.name}
                </h3>
              </div>

              {/* every door opens twice — the figure is the first thing
                  the eye lands on, not a caption under a label */}
              <div className="mt-6 border-t border-rule pt-5">
                {d.proof && (
                  <>
                    <p className="ev flex items-center gap-2.5 text-ink-2">
                      <span aria-hidden className="size-1.5 shrink-0 bg-blue" />
                      India revenue
                    </p>
                    <p className="mt-2.5 font-display text-[clamp(2.25rem,3.4vw,3rem)] leading-none tracking-[-0.03em] tabular-nums text-ink">
                      <CountUp value={d.proof.value} />
                    </p>
                    <p className="ev mt-2 text-[0.5rem] text-ink-2">
                      Source — {d.proof.source}
                    </p>
                  </>
                )}

                <p className="mt-6 flex gap-3 border-t border-rule pt-4 text-[0.9375rem] leading-snug text-ink-2">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 border border-blue"
                  />
                  {d.multiplier}
                </p>
              </div>
            </motion.div>

            <motion.span
              aria-hidden
              className="hidden h-8 w-px origin-top bg-rule md:block"
              {...grow("y", 0.8 + i * 0.08)}
            />
          </li>
        ))}
      </ol>

      {/* ── converge ───────────────────────────────────────────── */}
      <motion.span
        aria-hidden
        className="mx-auto hidden h-px w-2/3 origin-left bg-rule md:block"
        {...grow("x", 1.0)}
      />
      <div className="mt-10 flex flex-col items-center md:mt-0">
        <motion.span
          aria-hidden
          className="hidden h-10 w-px origin-top bg-blue md:block"
          {...grow("y", 1.1)}
        />
        <motion.p
          data-m
          initial={still ? undefined : { opacity: 0, y: 14 }}
          animate={on ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: still ? 0 : 0.6,
            delay: still ? 0 : 1.2,
            ease: EASE,
          }}
          className="ev border-2 border-blue bg-paper px-5 py-3 text-blue"
        >
          Global scale
        </motion.p>
      </div>

      <figcaption className="mt-10 border-t border-rule pt-4 text-sm leading-relaxed text-ink-2">
        Each route returns revenue in India and a second, larger opening
        beyond it. That is the multiplier — and it is why India is an
        operating investment rather than a territory.
      </figcaption>
    </figure>
  );
}
