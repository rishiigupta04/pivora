"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { RAMP } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Figure 6-1 — the platform ramp. Brief §6.
 *
 * Five gated stages drawn as an ascending staircase, because the shape is
 * the argument: each stage sits on the one before it, and volume is added
 * last. A row of equal cards would say the opposite.
 *
 * Stage 0 carries gold and its own rejection line. It is a real
 * qualification gate — Pivora should be willing to decline a platform that
 * fails it — and drawing it as just another step would bury that.
 *
 * Carbon ground, so gold is legible (13.4:1) and doing the work blue does
 * on paper.
 */
export default function RampStairs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const still = useReducedMotion();
  const on = still || inView;

  return (
    <figure ref={ref} className="mt-14">
      {/* ── desktop: the staircase ───────────────────────────────
          Each step stands on a leg that reaches down to one shared
          baseline. A longer leg lifts its step higher, so the five tops
          climb left to right and the ascent is the picture rather than a
          caption under it. */}
      <ol className="hidden items-end gap-px md:grid md:grid-cols-5">
        {RAMP.map((s, i) => {
          const gate = i === 0;
          const leg = i * 38;
          return (
            <li key={s.key} className="flex h-full flex-col justify-end">
              <motion.div
                data-m
                initial={still ? undefined : { opacity: 0, y: 20 }}
                animate={on ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: still ? 0 : 0.7,
                  delay: still ? 0 : 0.15 + i * 0.1,
                  ease: EASE,
                }}
                className={`group border-t bg-carbon p-5 transition-colors duration-500 hover:bg-carbon-2 lg:p-6 ${
                  gate ? "border-gold" : "border-rule-dark"
                }`}
              >
                <p
                  className={`font-display text-[clamp(2rem,3.4vw,2.75rem)] leading-none tabular-nums ${
                    gate ? "text-gold" : "text-bone"
                  }`}
                >
                  {s.key}
                </p>
                <p className="ev mt-4 text-bone-2">{s.name}</p>
                <p className="mt-3 text-[1.0625rem] leading-snug text-bone">
                  {s.question}
                </p>
                <p className="mt-4 border-t border-rule-dark pt-3 text-sm leading-snug text-bone-2">
                  {s.focus}
                </p>
              </motion.div>

              {/* the leg down to the baseline */}
              <motion.span
                aria-hidden
                className={`block w-px origin-bottom ${
                  gate ? "bg-gold" : "bg-rule-dark"
                }`}
                style={{ height: leg }}
                initial={still ? undefined : { scaleY: 0 }}
                animate={on ? { scaleY: 1 } : undefined}
                transition={{
                  duration: still ? 0 : 0.5,
                  delay: still ? 0 : 0.25 + i * 0.1,
                  ease: EASE,
                }}
              />
            </li>
          );
        })}
      </ol>

      {/* the ground the staircase stands on */}
      <motion.span
        aria-hidden
        className="hidden h-px w-full origin-left bg-rule-dark md:block"
        initial={still ? undefined : { scaleX: 0 }}
        animate={on ? { scaleX: 1 } : undefined}
        transition={{ duration: still ? 0 : 0.8, ease: EASE }}
      />

      {/* ── mobile: the same sequence, stacked ─────────────────── */}
      <ol className="md:hidden">
        {RAMP.map((s, i) => {
          const gate = i === 0;
          return (
            <motion.li
              key={s.key}
              data-m
              initial={still ? undefined : { opacity: 0, y: 18 }}
              animate={on ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: still ? 0 : 0.6,
                delay: still ? 0 : 0.08 + i * 0.08,
                ease: EASE,
              }}
              className={`flex gap-5 border-t py-6 last:border-b ${
                gate ? "border-gold" : "border-rule-dark"
              }`}
            >
              <span
                className={`font-display text-[2.25rem] leading-none tabular-nums ${
                  gate ? "text-gold" : "text-bone/55"
                }`}
              >
                {s.key}
              </span>
              <div>
                <p className="ev text-bone-2">{s.name}</p>
                <p className="mt-2.5 text-[1.0625rem] leading-snug text-bone">
                  {s.question}
                </p>
                <p className="mt-3 text-sm leading-snug text-bone-2">
                  {s.focus}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <figcaption className="rule-t mt-10 pt-4 text-sm leading-relaxed text-bone-2">
        Stage 0 is a real gate, not a formality. Everything after it assumes
        the one before it actually worked.
      </figcaption>
    </figure>
  );
}
