"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { PHASES } from "@/lib/content";
import { Float } from "./motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The handover, read in one glance.
 *
 * Four rows, blue retreating and gold advancing down the page. Each row
 * carries an oversized ghosted letter drifting behind it — the letters are
 * the only ornament, and they earn it by being the model's actual name.
 *
 * Still no percentages printed on the bars. The weights encode the shape of
 * the model, not a measured figure from any engagement, and a printed "65%"
 * would read as a claim we cannot source.
 */
export default function Handover() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const still = useReducedMotion();

  return (
    <div ref={ref} className="mt-12">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-rule-dark pb-4">
        <span className="ev flex items-center gap-2 text-blue-lift">
          <span aria-hidden className="size-2.5 bg-blue-lift" />
          Pivora
        </span>
        <span className="ev flex items-center gap-2 text-gold">
          <span aria-hidden className="size-2.5 bg-gold" />
          Your team
        </span>
      </div>

      <ol>
        {PHASES.map((p, i) => (
          <li
            key={p.id}
            className="group relative grid items-baseline gap-x-8 gap-y-3 overflow-hidden border-b border-rule-dark py-7 lg:grid-cols-[13rem_1fr_15rem] lg:py-9"
          >
            {/* Floating ghost letter. Sits behind everything, drifts on its
                own clock, and brightens slightly as the row is hovered. */}
            <Float
              amplitude={6 + i * 1.5}
              duration={7 + i * 0.9}
              delay={i * 0.5}
              className="pointer-events-none absolute -top-3 right-1 select-none lg:right-4"
            >
              {/* Sized to the row, not to the section. Anything taller gets
                  sliced mid-glyph by the row's clipping and stops reading
                  as a letter at all. */}
              <span
                aria-hidden
                className="font-display text-[3.75rem] leading-none text-bone/[0.07] transition-colors duration-700 group-hover:text-bone/[0.13] lg:text-[4.5rem]"
              >
                {p.letter}
              </span>
            </Float>

            <div className="relative flex items-baseline gap-3">
              <span className="font-display text-3xl leading-none text-bone">
                {p.letter}
              </span>
              <span className="text-[1.0625rem] text-bone">{p.name}</span>
              {p.optional && (
                <span className="ev text-[0.5rem] text-gold">Optional</span>
              )}
            </div>

            <div
              className="relative flex h-3 w-full overflow-hidden bg-gold lg:h-3.5"
              role="img"
              aria-label={`${p.name}: ${p.shift}`}
            >
              <motion.span
                className="absolute inset-y-0 left-0 origin-left bg-blue-lift"
                style={{ width: `${p.pivora}%` }}
                initial={{ scaleX: 0 }}
                animate={still || inView ? { scaleX: 1 } : undefined}
                transition={{
                  duration: still ? 0 : 0.7,
                  delay: still ? 0 : 0.12 + i * 0.13,
                  ease: EASE,
                }}
              />
            </div>

            <p className="relative text-[0.9375rem] leading-snug text-bone-2">
              {p.shift}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
