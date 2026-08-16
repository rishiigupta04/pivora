"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { COMMITTEE } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The buying committee, before and now.
 *
 * "The committee grew sideways" is abstract as a sentence and immediate as
 * a picture: one seat on the left, four on the right. The champion appears
 * on both sides deliberately — the argument is not that they stopped
 * mattering, it is that they stopped being sufficient.
 *
 * Every seat here comes from the AI position stated above it. No extra
 * roles invented, and the section is already labelled as our read of the
 * market rather than sourced data.
 */
export default function CommitteeMap() {
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
    <figure ref={ref} className="mt-12">
      <div className="grid gap-8 md:grid-cols-[0.85fr_auto_1.35fr] md:items-start md:gap-6">
        {/* expected */}
        <motion.div data-m {...rise(0)}>
          <p className="ev border-b border-rule pb-3 text-ink-2">
            {COMMITTEE.expected.label}
          </p>
          <div className="mt-5 border border-rule bg-paper p-5">
            <span aria-hidden className="mb-3 block h-px w-6 bg-ink-2" />
            <p className="text-[1.0625rem] leading-tight text-ink">
              {COMMITTEE.expected.seat}
            </p>
            <p className="mt-2 text-sm leading-snug text-ink-2">
              {COMMITTEE.expected.note}
            </p>
          </div>
        </motion.div>

        {/* the growth */}
        <motion.div
          data-m
          {...rise(0.2)}
          className="flex items-center justify-center md:h-full md:pt-20"
        >
          <span className="ev flex items-center gap-3 text-blue">
            <span
              aria-hidden
              className="hidden h-px w-8 bg-blue md:block"
            />
            grew
            <span
              aria-hidden
              className="hidden h-px w-8 bg-blue md:block"
            />
          </span>
        </motion.div>

        {/* actual */}
        <motion.div data-m {...rise(0.3)}>
          <p className="ev border-b border-blue pb-3 text-blue">
            {COMMITTEE.actual.label}
          </p>
          <ul className="mt-5 grid gap-px bg-rule sm:grid-cols-2">
            {COMMITTEE.actual.seats.map((s, i) => {
              const champion = i === 0;
              return (
                <motion.li
                  key={s.role}
                  data-m
                  {...rise(0.4 + i * 0.09)}
                  className={`group bg-paper p-5 transition-colors duration-500 hover:bg-paper-2 ${
                    champion ? "border-l-2 border-l-ink" : "border-l-2 border-l-blue"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mb-3 block h-px w-6 origin-left transition-transform duration-500 group-hover:scale-x-[2] ${
                      champion ? "bg-ink-2" : "bg-blue"
                    }`}
                  />
                  <p className="text-[1.0625rem] leading-tight text-ink">
                    {s.role}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-ink-2">
                    {s.note}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>

      <figcaption className="mt-10 border-t border-rule pt-4 text-sm leading-relaxed text-ink-2">
        Three of those four seats evaluate governance, not capability. A deck
        built for the first column will be answered by the second.
      </figcaption>
    </figure>
  );
}
