"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { DEDICATED, SHARED } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The execution engine, drawn as a boundary.
 *
 * The whole point of this section is *where the line sits*: the dedicated
 * team is inside your business and on your forecast; the bench is outside
 * it and reached for. A list cannot draw a boundary, so this does.
 *
 * Solid border = yours. Dashed border = borrowed. That reads without a
 * legend, which is why the two boxes carry no key.
 *
 * Carbon ground, so blue-lift and gold rather than blue and ink.
 */
export default function EngineMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const still = useReducedMotion();
  const on = still || inView;

  const rise = (delay: number) => ({
    initial: still ? undefined : { opacity: 0, y: 18 },
    animate: on ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: still ? 0 : 0.6, delay: still ? 0 : delay, ease: EASE },
  });

  return (
    <figure ref={ref} className="mt-14">
      {/* ── inside the client's business ───────────────────────── */}
      <motion.div
        data-m
        {...rise(0)}
        className="relative border border-blue-lift p-6 lg:p-8"
      >
        <span className="ev absolute -top-2.5 left-6 bg-carbon px-3 text-blue-lift">
          Inside your business
        </span>

        <ul className="mt-4 grid gap-px bg-rule-dark sm:grid-cols-2 lg:grid-cols-5">
          {DEDICATED.map((d, i) => (
            <motion.li
              key={d.role}
              data-m
              {...rise(0.12 + i * 0.07)}
              // Five roles in a two-column grid leave an empty sixth cell
              // that reads as a stray box; the last one spans instead.
              className="group bg-carbon p-4 transition-colors duration-500 hover:bg-carbon-2 sm:last:col-span-2 lg:last:col-span-1"
            >
              <span
                aria-hidden
                className="mb-3 block h-px w-6 origin-left bg-blue-lift transition-transform duration-500 group-hover:scale-x-[2]"
              />
              <p className="text-[1.0625rem] leading-tight text-bone">
                {d.role}
              </p>
              <p className="mt-2 text-sm leading-snug text-bone-2">{d.note}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* ── the reach ──────────────────────────────────────────── */}
      <div className="flex flex-col items-center">
        <motion.span
          aria-hidden
          className="block h-9 w-px origin-top bg-rule-dark"
          initial={still ? undefined : { scaleY: 0 }}
          animate={on ? { scaleY: 1 } : undefined}
          transition={{ duration: still ? 0 : 0.5, delay: still ? 0 : 0.5, ease: EASE }}
        />
        <motion.p data-m {...rise(0.6)} className="ev py-2 text-gold">
          ↑ drawn on as needed ↓
        </motion.p>
        <motion.span
          aria-hidden
          className="block h-9 w-px origin-top bg-rule-dark"
          initial={still ? undefined : { scaleY: 0 }}
          animate={on ? { scaleY: 1 } : undefined}
          transition={{ duration: still ? 0 : 0.5, delay: still ? 0 : 0.66, ease: EASE }}
        />
      </div>

      {/* ── the bench, outside ─────────────────────────────────── */}
      <motion.div
        data-m
        {...rise(0.75)}
        className="relative border border-dashed border-rule-dark p-6 lg:p-8"
      >
        <span className="ev absolute -top-2.5 left-6 bg-carbon px-3 text-bone-2">
          Pivora&apos;s bench — not your headcount
        </span>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SHARED.map((s, i) => (
            <motion.li
              key={s}
              data-m
              {...rise(0.85 + i * 0.05)}
              className="border border-rule-dark px-3 py-2 text-sm text-bone-2 transition-colors duration-500 hover:border-gold hover:text-bone"
            >
              {s}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <figcaption className="rule-t mt-10 pt-4 text-sm leading-relaxed text-bone-2">
        The line is the product. Inside it, named people on your forecast.
        Outside it, expertise you reach for on a pursuit without carrying it
        as headcount for the rest of the year.
      </figcaption>
    </figure>
  );
}
