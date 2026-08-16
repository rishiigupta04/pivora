"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Motion primitives.
 *
 * One easing curve and one distance scale across the whole site, so
 * everything moves as though it came from the same hand. Every export
 * collapses to a plain element under prefers-reduced-motion rather than
 * animating faster — a shorter animation is still an animation.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/**
 * Headline entrance — a longer, heavier rise than body copy.
 *
 * This used to animate `clip-path` so type emerged from behind an edge.
 * It kept leaving headings stranded: present in layout, opacity 0, never
 * resolving — across three separate attempted fixes, on different pages,
 * with and without a scroll trigger. A clip-path interpolation that fails
 * fails *invisibly*, which on a client site means a section silently ships
 * with no heading.
 *
 * Opacity and transform only. Nearly the same read, and it cannot strand
 * copy. If the masked version is worth revisiting it needs a guaranteed
 * visible fallback first, not another attempt at the interpolation.
 */
const mask: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: EASE },
  },
};

/** Figures carry a little more weight than body copy. */
const lift: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.965 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.04 } },
};

const VARIANTS = { rise, mask, lift } as const;

type Kind = keyof typeof VARIANTS;

/**
 * A sliver is enough to trigger.
 *
 * This was 0.2, meaning a fifth of the element had to be visible before it
 * would ever animate — which left blocks near the page bottom permanently
 * hidden, because a tall footer meant they never cleared the threshold.
 * The cost of triggering slightly early is nothing; the cost of never
 * triggering is copy that does not exist for the reader.
 */
const VIEWPORT = { once: true, amount: 0.05 } as const;

export function Reveal({
  children,
  className,
  kind = "rise",
  delay = 0,
  mode = "inView",
}: {
  children: ReactNode;
  className?: string;
  kind?: Kind;
  delay?: number;
  /**
   * "mount" plays as soon as the component mounts. Use it for anything
   * above the fold: hero copy that waits on a scroll trigger can end up
   * stuck in its hidden state — occupying layout while painting nothing —
   * and the reader just sees a hole where the headline should be.
   */
  mode?: "inView" | "mount";
}) {
  // Explicit useInView rather than the `whileInView` prop. `whileInView`
  // was silently never firing for these wrappers, leaving headings parked
  // on their hidden state — present in layout, painting nothing. This is
  // the same pattern the handover and struck-list already use, and it
  // resolves reliably.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const still = useReducedMotion();

  if (still) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      data-m
      className={className}
      variants={VARIANTS[kind]}
      initial="hidden"
      animate={mode === "mount" || inView ? "show" : "hidden"}
      // Only set a transition when there is a delay to apply. Passing one
      // unconditionally overrides the variant's own duration and easing.
      {...(delay ? { transition: { delay } } : {})}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a set of children so they arrive in sequence, not as a block. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  // Explicit useInView, matching Reveal. The `whileInView` prop silently
  // failed to fire for some wrappers on this site, stranding whole blocks
  // at opacity 0 — see the note on VIEWPORT.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const still = useReducedMotion();
  if (still) return <div className={className}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      data-m
      className={className}
      variants={group}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  kind = "rise",
}: {
  children: ReactNode;
  className?: string;
  kind?: Kind;
}) {
  const still = useReducedMotion();
  if (still) return <div className={className}>{children}</div>;
  return (
    <motion.div data-m className={className} variants={VARIANTS[kind]}>
      {children}
    </motion.div>
  );
}

/** Semantic list variants — same motion, correct elements. */
export function StaggerList({
  children,
  className,
  ordered = false,
}: {
  children: ReactNode;
  className?: string;
  ordered?: boolean;
}) {
  const ref = useRef<HTMLUListElement & HTMLOListElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const still = useReducedMotion();
  const Tag = ordered ? motion.ol : motion.ul;
  if (still) {
    return ordered ? (
      <ol className={className}>{children}</ol>
    ) : (
      <ul className={className}>{children}</ul>
    );
  }
  return (
    <Tag
      ref={ref}
      data-m
      className={className}
      variants={group}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </Tag>
  );
}

/**
 * Scroll parallax. The inner layer drifts against the page as the element
 * crosses the viewport, which gives a flat image some depth without
 * announcing itself. Spring-damped so a fast scroll doesn't snap it.
 */
export function Parallax({
  children,
  className,
  distance = 44,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 120, damping: 26, mass: 0.5 });

  return (
    <div ref={ref} className={className}>
      {still ? (
        children
      ) : (
        <motion.div style={{ y }} className="h-full w-full">
          {children}
        </motion.div>
      )}
    </div>
  );
}

/**
 * A figure that counts up when it arrives.
 *
 * Parses the prefix and suffix off the value ("$161.5B" → $ · 161.5 · B) so
 * only the number animates, and preserves the original decimal places and
 * thousands grouping — a figure that lands on "161.53B" or drops a comma
 * would be a different, wrong number.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Same low threshold as everything else. At 0.5 two of three figures in
  // a row would never fire and sat frozen at zero — a wrong number on
  // screen is far worse than an animation that starts a touch early.
  const inView = useInView(ref, VIEWPORT);
  const still = useReducedMotion();

  const parts = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  const numStr = parts?.[2] ?? "";
  const target = parseFloat(numStr.replace(/,/g, "")) || 0;
  const decimals = (numStr.split(".")[1] ?? "").length;
  const grouped = numStr.includes(",");

  const mv = useMotionValue(0);
  const shown = useTransform(mv, (v) =>
    (grouped
      ? v.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : v.toFixed(decimals))
  );

  useEffect(() => {
    if (!inView || still || !parts) return;
    const controls = animate(mv, target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, still, target, mv, parts]);

  if (!parts || still) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parts[1]}
      <motion.span>{shown}</motion.span>
      {parts[3]}
    </span>
  );
}

/**
 * A slow, continuous drift. Amplitude and duration vary per instance so a
 * group of them never pulses in unison, which is what makes floating
 * elements read as mechanical.
 */
export function Float({
  children,
  className,
  amplitude = 7,
  duration = 7,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}) {
  const still = useReducedMotion();
  if (still) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerRow({
  children,
  className,
  kind = "rise",
}: {
  children: ReactNode;
  className?: string;
  kind?: Kind;
}) {
  const still = useReducedMotion();
  if (still) return <li className={className}>{children}</li>;
  return (
    <motion.li data-m className={className} variants={VARIANTS[kind]}>
      {children}
    </motion.li>
  );
}
