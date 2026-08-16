import type { Stat } from "@/lib/content";
import { CountUp } from "./motion";

/**
 * A figure that carries its own source.
 *
 * The citation is not a footnote — it is part of the component, so an
 * uncited number is visibly broken rather than quietly plausible. This is
 * the content rule ("cite, don't over-claim") enforced structurally.
 */
export default function Cited({
  stat,
  size = "md",
  tone = "light",
}: {
  stat: Stat;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const value = {
    sm: "text-[2.25rem] lg:text-[2.75rem]",
    md: "text-[3.25rem] lg:text-[4rem]",
    lg: "text-[4.5rem] lg:text-[6.5rem]",
  }[size];

  return (
    <figure className="max-w-[22rem]">
      <div
        className={`font-display font-normal leading-[0.95] tracking-[-0.03em] tabular-nums ${value} ${
          dark ? "text-bone" : "text-ink"
        }`}
      >
        <CountUp value={stat.value} />
      </div>
      <figcaption className="mt-4">
        <p
          className={`text-[0.9375rem] leading-snug ${
            dark ? "text-bone-2" : "text-ink-2"
          }`}
        >
          {stat.label}
        </p>
        <p
          className={`ev mt-3 border-t pt-2 text-[0.5625rem] ${
            dark
              ? "border-rule-dark text-bone-2"
              : "border-rule text-ink-2"
          }`}
        >
          Source — {stat.source}
        </p>
      </figcaption>
    </figure>
  );
}
