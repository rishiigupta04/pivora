"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

const INTERACTIVE = 'a,button,input,textarea,select,summary,[role="tab"],label';

/**
 * A dot on the pointer and a ring that trails it on a spring.
 *
 * The lag was previously a hand-rolled lerp. A real spring settles
 * differently — it overshoots very slightly and eases out — which is the
 * difference between "delayed" and "weighted".
 *
 * Guardrails: fine pointers only, off under reduced motion, and the native
 * cursor is hidden by a class this component adds, so if it never mounts
 * the ordinary cursor is untouched.
 */
export default function Cursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const spring = { stiffness: 340, damping: 30, mass: 0.6 };
  const rx = useSpring(x, spring);
  const ry = useSpring(y, spring);

  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [shown, setShown] = useState(false);
  const last = useRef(0);
  const still = useReducedMotion();

  useEffect(() => {
    if (still) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");
    setActive(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setShown(true);

      // Hit-testing on every move is wasteful; ~12×/sec is imperceptible.
      const now = e.timeStamp;
      if (now - last.current < 80) return;
      last.current = now;

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      setHover(!!el?.closest(INTERACTIVE));
      root.classList.toggle("cursor-dark", !!el?.closest(".on-carbon"));
    };
    const onLeave = () => setShown(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      root.classList.remove("has-cursor", "cursor-dark");
    };
  }, [still, x, y]);

  if (!active) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className={`cursor-ring${hover ? " is-hover" : ""}`}
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hover ? 1.75 : 1, opacity: shown ? 1 : 0 }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 22 } }}
      />
      <motion.div
        aria-hidden
        className="cursor-dot"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: shown && !hover ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
