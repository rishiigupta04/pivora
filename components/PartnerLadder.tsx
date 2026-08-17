"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { PARTNER_LADDER } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Figure 8-1 — the partner maturity ladder. Brief §8.
 *
 * Five levels, L0 to L4. The bar each level carries extends further than
 * the last, so the distance between "we signed something" and "this partner
 * produces pipeline" is visible rather than asserted. That distance is the
 * page's core story: the objective is not to collect partner logos, it is
 * to create productive partner motions.
 *
 * L0 is drawn hollow. A logo relationship is an outline of a partnership,
 * and the ladder should say so before the copy does.
 */
export default function PartnerLadder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const still = useReducedMotion();
  const on = still || inView;

  return (
    <figure ref={ref} className="mt-14">
      <ol>
        {PARTNER_LADDER.map((l, i) => {
          const hollow = i === 0;
          const reach = 20 + i * 20;
          return (
            <motion.li
              key={l.level}
              data-m
              initial={still ? undefined : { opacity: 0, y: 18 }}
              animate={on ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: still ? 0 : 0.65,
                delay: still ? 0 : 0.08 + i * 0.1,
                ease: EASE,
              }}
              className="group grid items-baseline gap-x-8 gap-y-3 border-t border-rule py-7 last:border-b md:grid-cols-[4rem_1fr_15rem]"
            >
              <span
                className={`font-display text-[1.75rem] leading-none tabular-nums transition-colors duration-500 ${
                  hollow
                    ? "text-ink-2/75"
                    : "text-blue/70 group-hover:text-blue"
                }`}
              >
                {l.level}
              </span>

              <div>
                <p className="text-[1.125rem] leading-snug text-ink">
                  {l.name}
                </p>
                {/* the reach bar — how far up the ladder this level gets */}
                <div className="mt-3.5 h-1.5 w-full bg-paper-3">
                  <motion.span
                    aria-hidden
                    className={`block h-full origin-left ${
                      hollow
                        ? "border border-ink-2/45 bg-transparent"
                        : "bg-blue"
                    }`}
                    style={{ width: `${reach}%` }}
                    initial={still ? undefined : { scaleX: 0 }}
                    animate={on ? { scaleX: 1 } : undefined}
                    transition={{
                      duration: still ? 0 : 0.75,
                      delay: still ? 0 : 0.2 + i * 0.1,
                      ease: EASE,
                    }}
                  />
                </div>
              </div>

              <p className="text-[0.9375rem] leading-snug text-ink-2">
                {l.body}
              </p>
            </motion.li>
          );
        })}
      </ol>

      <figcaption className="mt-6 text-sm leading-relaxed text-ink-2">
        Every partner sits on one of these five rungs, and gets reviewed
        against it quarterly. Movement from L0 to L4 is the only partner
        metric that means anything.
      </figcaption>
    </figure>
  );
}
