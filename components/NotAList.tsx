"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/** Seconds per character. Fast enough to read as typing, not as a stunt. */
const CHAR = 0.013;
/** Beat between a line finishing and the stroke starting through it. */
const BEAT = 0.07;
/** How long the stroke takes to cross a line. */
const STRIKE = 0.28;
/** Next line begins well before the stroke lands, so nothing queues up. */
const OVERLAP = 0.5;

/**
 * "What Pivora is not" — each line types itself out, then gets struck
 * through with a brush stroke, one after another.
 *
 * The stroke is an SVG path animated by `pathLength`, not a CSS
 * `line-through`: a real stroke can be drawn left-to-right over time, and
 * two slightly-offset passes at different weights give it the uneven edge
 * of a pen rather than the machine-perfect rule of a text decoration.
 *
 * Words are inline-block so characters never split across a line break,
 * with ordinary spaces between them so the line can still wrap.
 */
export default function NotAList({ items }: { items: string[] }) {
  const ref = useRef<HTMLUListElement>(null);
  // amount, not margin: swapping to a rootMargin stopped it firing here
  // altogether. This threshold is verified working on this site.
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const still = useReducedMotion();

  // Each line's start time depends on how long every line before it took.
  let clock = 0;
  const timing = items.map((text) => {
    const start = clock;
    const strikeAt = start + text.length * CHAR + BEAT;
    clock = strikeAt + STRIKE * OVERLAP;
    return { start, strikeAt };
  });

  return (
    <ul ref={ref} className="mt-10 space-y-2 sm:space-y-3">
      {items.map((text, i) => {
        const { start, strikeAt } = timing[i];
        let charIndex = 0;

        return (
          <li
            key={text}
            // Raised the floor from 1.125rem — these were set small to keep
            // each phrase on one line, which the old single-bar strike
            // required. The strike now paints per line fragment, so a wrap
            // is struck correctly and the type can be sized to read.
            // The 2.875rem cap is unchanged, so desktop is untouched.
            className="relative w-fit max-w-full font-display text-[clamp(1.5rem,5.5vw,2.875rem)] leading-[1.3] tracking-[-0.02em] text-ink-2"
          >
            {/* The stroke is a per-line-fragment background rather than one
                positioned bar, so a phrase that wraps gets struck on every
                line it occupies. Framer drives background-size directly, so
                the class's own transition is switched off here. */}
            <motion.span
              // `strike-managed` keeps StrikeOnView's hands off these —
              // their strike is sequenced here, one line at a time, and a
              // global pass would force all five on at once.
              className="strike-lines strike-managed [--strike-color:var(--color-blue)] [--strike-weight:3px] [transition:none]"
              initial={{ backgroundSize: "0% 3px" }}
              animate={still || inView ? { backgroundSize: "100% 3px" } : undefined}
              transition={{
                duration: still ? 0 : STRIKE,
                delay: still ? 0 : strikeAt,
                ease: [0.33, 0, 0.12, 1],
              }}
            >
              {/* the words */}
              {text.split(" ").map((word, wi, words) => (
                <span key={wi}>
                  <span className="inline-block">
                    {[...word].map((ch, ci) => {
                      const delay = start + charIndex * CHAR;
                      charIndex += 1;
                      return still ? (
                        <span key={ci}>{ch}</span>
                      ) : (
                        <motion.span
                          key={ci}
                          data-m
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : undefined}
                          transition={{ duration: 0.14, delay, ease: "linear" }}
                        >
                          {ch}
                        </motion.span>
                      );
                    })}
                  </span>
                  {wi < words.length - 1 ? " " : null}
                </span>
              ))}

            </motion.span>
          </li>
        );
      })}
    </ul>
  );
}
