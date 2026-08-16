"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Route entry transition.
 *
 * Opacity only, deliberately. Animating a transform here would leave a
 * `transform` on the wrapper permanently, and a transformed ancestor
 * becomes the containing block for its descendants — which quietly breaks
 * every `position: sticky` column inside the pages. A cross-fade costs
 * nothing and has no side effects.
 *
 * Entry-only: exit animations need the old tree kept alive, which fights
 * App Router navigation rather than cooperating with it.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const still = useReducedMotion();

  if (still) return <>{children}</>;

  return (
    <motion.div
      data-m
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
