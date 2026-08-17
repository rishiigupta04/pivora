"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { CORRIDORS } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Figure 1-1 — the two-way growth corridor. Brief §1.3.
 *
 * Two directional lanes with Pivora as the shared hub, which is the brief's
 * literal instruction. Global sits left, India right, and the two lanes run
 * in opposite directions between them — so "one firm, two directions of
 * value" is read off the picture rather than inferred from the caption.
 *
 * The hub is the one element both lanes touch. That is the whole claim.
 *
 * Real DOM text and decorative divs rather than an SVG: the labels stay
 * selectable, the lanes reflow at any width, and there is no viewBox to
 * fight. Lanes animate on transform only.
 */

/* The two ends of the corridor. Set in the display face rather than the
   mono label style — at either end of a 1100px band, a 9px monospace word
   is too quiet to anchor anything. */
function Endpoint({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span
        aria-hidden
        className="size-2 rounded-full bg-ink-2 sm:size-2.5"
      />
      <span className="font-display text-[clamp(1rem,2vw,1.5rem)] leading-none tracking-[-0.02em] text-ink">
        {label}
      </span>
    </div>
  );
}

export default function CorridorMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const still = useReducedMotion();
  const on = still || inView;

  /* A lane draws itself from its origin end, so the direction of travel is
     in the motion as well as in the arrowhead. */
  const lane = (dir: "ltr" | "rtl", delay: number) => ({
    initial: still ? undefined : { scaleX: 0 },
    animate: on ? { scaleX: 1 } : undefined,
    transition: {
      duration: still ? 0 : 0.8,
      delay: still ? 0 : delay,
      ease: EASE,
    },
    style: { transformOrigin: dir === "ltr" ? "left center" : "right center" },
  });

  const fade = (delay: number) => ({
    initial: still ? undefined : { opacity: 0, y: 12 },
    animate: on ? { opacity: 1, y: 0 } : undefined,
    transition: {
      duration: still ? 0 : 0.6,
      delay: still ? 0 : delay,
      ease: EASE,
    },
  });

  const [outbound, inbound] = CORRIDORS;

  return (
    <figure ref={ref} className="mt-12">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 sm:gap-x-6 lg:gap-x-10">
        {/* ── left endpoint ─────────────────────────────────────── */}
        <motion.div data-m {...fade(0)}>
          <Endpoint label="Global" />
        </motion.div>

        {/* ── the two lanes, and the hub between them ─────────────
            min-w-0 matters: without it the `1fr` track takes its
            min-content width from the nowrap lane labels, which pushes the
            whole grid past the page edge on a phone and clips the India
            endpoint. The labels use the short direction rather than the
            full corridor name for the same reason — and because the cards
            underneath already spell both out. */}
        <div className="flex min-w-0 flex-col items-stretch">
          {/* lane 01 — global platforms travelling into India */}
          <motion.p
            data-m
            {...fade(0.1)}
            className="ev mb-2.5 flex items-baseline gap-2 text-blue"
          >
            <span>{outbound.n}</span>
            <span className="truncate text-ink-2">
              {outbound.from} → {outbound.to}
            </span>
          </motion.p>
          <div className="relative flex items-center">
            <motion.span
              aria-hidden
              className="block h-px w-full bg-blue"
              {...lane("ltr", 0.24)}
            />
            <motion.span
              aria-hidden
              data-m
              {...fade(0.9)}
              className="absolute -right-px border-y-[5px] border-l-[9px] border-y-transparent border-l-blue"
            />
          </div>

          {/* the shared hub — the one element both lanes touch */}
          <motion.div
            data-m
            {...fade(0.42)}
            className="my-7 self-center border-2 border-blue bg-paper px-5 py-3 sm:my-10 sm:px-8 sm:py-4"
          >
            <span className="ev text-[0.5625rem] text-blue sm:text-[0.6875rem]">
              Pivora
            </span>
          </motion.div>

          {/* lane 02 — Indian platforms travelling out */}
          <div className="relative flex items-center">
            <motion.span
              aria-hidden
              className="block h-px w-full bg-ink"
              {...lane("rtl", 0.24)}
            />
            <motion.span
              aria-hidden
              data-m
              {...fade(0.9)}
              className="absolute -left-px border-y-[5px] border-r-[9px] border-y-transparent border-r-ink"
            />
          </div>
          <motion.p
            data-m
            {...fade(0.1)}
            className="ev mt-2.5 flex items-baseline justify-end gap-2 text-ink"
          >
            <span className="truncate text-ink-2">
              {inbound.from} → {inbound.to}
            </span>
            <span>{inbound.n}</span>
          </motion.p>
        </div>

        {/* ── right endpoint ────────────────────────────────────── */}
        <motion.div data-m {...fade(0)}>
          <Endpoint label="India" />
        </motion.div>
      </div>

      {/* ── what each direction is for ─────────────────────────────
          Column gap rather than a hairline divider with padding: the first
          column has to stay flush with the section's left edge, or the
          whole figure sits a step in from the copy above it. */}
      <div className="mt-14 grid gap-x-14 gap-y-8 sm:grid-cols-2">
        {CORRIDORS.map((c, i) => (
          <motion.div
            key={c.id}
            data-m
            {...fade(0.5 + i * 0.1)}
            className="border-t border-rule pt-7"
          >
            <p
              className={`ev flex items-center gap-2.5 ${
                i === 0 ? "text-blue" : "text-ink"
              }`}
            >
              <span
                aria-hidden
                className={`h-px w-6 ${i === 0 ? "bg-blue" : "bg-ink"}`}
              />
              {c.from} → {c.to}
            </p>
            <p className="mt-4 max-w-[38ch] text-[1.0625rem] leading-snug text-ink">
              {c.does}
            </p>
            <p className="mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-ink-2">
              {c.objective}
            </p>
          </motion.div>
        ))}
      </div>
    </figure>
  );
}
