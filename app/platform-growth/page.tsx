import type { Metadata } from "next";
import Link from "next/link";
import RampStairs from "@/components/RampStairs";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import {
  RAMP,
  RAMP_RULE,
  GROWTH_LAYERS,
  PRODUCT_LED_RULE,
  GROWTH_MOTION,
  WEDGE_PATH,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform Growth Model",
  description:
    "How product strength becomes repeatable enterprise revenue — the 0 → 1 → 3 → 10 → Global ramp, six growth layers, and the path from one use case to platform expansion.",
};

const gate = RAMP[0];

export default function PlatformGrowthPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Platform growth
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Do not scale a{" "}
              <span className="text-blue">broken GTM motion</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              {RAMP_RULE} Enterprise platform growth depends on the
              interaction of product value, executive sponsorship, use cases,
              ecosystem leverage, commercial model and expansion — not on a
              generic sales funnel with more people pointed at it.
            </p>
          </Reveal>
        </div>

        {/* the acronym-equivalent: the ramp, spelled out before it is
            explained */}
        <div className="mx-auto flex max-w-wide flex-wrap items-baseline gap-x-4 gap-y-2 px-6 pb-12 lg:px-10 lg:pb-16">
          {RAMP.map((s, i) => (
            <span key={s.key} className="flex items-baseline gap-4">
              <span className="font-display text-[clamp(1.875rem,4.4vw,3.5rem)] leading-none tabular-nums text-blue/70">
                {s.key}
              </span>
              {i < RAMP.length - 1 && (
                <span aria-hidden className="text-blue/70">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ── THE RAMP ─────────────────────────────────────────────────────
          Dark, because these are gates rather than an argument — the same
          treatment the site gives every other piece of machinery. */}
      <section className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 pt-20 pb-20 lg:px-10 lg:pt-28 lg:pb-28">
          <Reveal kind="mask">
            <h2 className="max-w-[22ch] text-[clamp(1.875rem,4vw,3rem)] leading-[1.04] text-bone">
              Five stages, and each one is gated by the{" "}
              <span className="text-gold">one before it</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
              First prove the wedge. Then prove repeatability. Then, and only
              then, add volume. Skipping a stage does not accelerate the ramp —
              it just moves the failure later, when it costs more.
            </p>
          </Reveal>

          <RampStairs />
        </div>

        {/* ── STAGE 0, IN FULL ───────────────────────────────────────── */}
        <div className="border-t border-rule-dark">
          <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-14 lg:gap-24">
              <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
                <p className="ev flex items-center gap-3 text-gold">
                  <span aria-hidden className="h-px w-8 bg-gold" />
                  Stage 0 — the gate
                </p>
                <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                  {gate.question}
                </h2>
                <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                  This is the only stage where the answer can be no, and it
                  has to be able to be no or none of the others mean anything.
                  Ten things get examined before Pivora takes a platform on.
                </p>
                <p className="ev mt-8 border-t border-rule-dark pt-4 text-gold">
                  Pivora should be willing to say no — and does
                </p>
              </Reveal>

              <StaggerList ordered>
                {gate.detail.map((d, i) => (
                  <StaggerRow
                    key={d}
                    className="group flex items-baseline gap-6 border-t border-rule-dark py-5 last:border-b"
                  >
                    <span className="ev text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[clamp(1.0625rem,1.7vw,1.25rem)] leading-snug text-bone">
                      {d}
                    </span>
                  </StaggerRow>
                ))}
              </StaggerList>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX GROWTH LAYERS — §7.1 ─────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The growth model</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Six layers, and a weak one anywhere caps the rest.
            </h2>
          </Reveal>

          <StaggerList className="mt-14 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {GROWTH_LAYERS.map((l) => (
              <StaggerRow
                key={l.n}
                className="group relative overflow-hidden bg-paper p-7 transition-colors duration-500 hover:bg-paper-2 lg:p-9"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 -right-1 font-display text-[7.5rem] leading-none text-blue/[0.07] transition-colors duration-500 select-none group-hover:text-blue/[0.14] lg:text-[9rem]"
                >
                  {l.n}
                </span>
                <div className="relative">
                  <p className="ev flex items-center gap-2.5 text-blue">
                    <span
                      aria-hidden
                      className="h-px w-5 origin-left bg-blue transition-transform duration-500 group-hover:scale-x-[1.8]"
                    />
                    {l.layer}
                  </p>
                  <p className="mt-4 max-w-[24ch] text-[clamp(1.125rem,1.7vw,1.375rem)] leading-[1.28] text-ink">
                    {l.question}
                  </p>
                </div>
              </StaggerRow>
            ))}
          </StaggerList>

          {/* the three-phase motion */}
          <Reveal className="mt-14 border-t border-rule pt-10">
            <p className="max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              {PRODUCT_LED_RULE}
            </p>
            <ol className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              {GROWTH_MOTION.map((m, i) => (
                <li key={m.phase} className="flex items-center gap-4">
                  <span className="ev border border-rule px-4 py-2.5 text-ink">
                    {m.phase}
                  </span>
                  {i < GROWTH_MOTION.length - 1 && (
                    <span aria-hidden className="text-blue">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── WEDGE TO EXPANSION — §7.2 ────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule bg-paper-2">
        <Float
          amplitude={12}
          duration={11}
          className="pointer-events-none absolute -top-20 right-0 select-none"
        >
          <span
            aria-hidden
            className="font-display text-[11rem] leading-none text-blue/[0.05] lg:text-[17rem]"
          >
            →
          </span>
        </Float>

        <div className="relative mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">From use case to platform</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Six commercial questions, asked in order.
            </h2>
          </Reveal>

          <StaggerList className="mt-14">
            {WEDGE_PATH.map((w) => (
              <StaggerRow
                key={w.n}
                className="group grid items-baseline gap-x-10 gap-y-3 border-t border-rule py-7 last:border-b lg:grid-cols-[4rem_9rem_1fr_1.1fr]"
              >
                <span className="font-display text-[2rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                  {w.n}
                </span>
                <p className="ev text-ink">{w.stage}</p>
                <p className="text-[clamp(1.0625rem,1.7vw,1.25rem)] leading-snug text-ink">
                  {w.question}
                </p>
                <p className="text-[0.9375rem] leading-snug text-ink-2">
                  <span className="ev mb-1.5 block text-[0.5rem]">
                    What Pivora does
                  </span>
                  {w.action}
                </p>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[42ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                The ramp is the sequence. Built–Operate–Sustain is who runs it
                while it happens.
              </p>
              <Link
                href="/built-operate-sustain"
                className="wipe shrink-0 border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                The operating model
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
