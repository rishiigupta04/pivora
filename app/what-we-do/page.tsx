import type { Metadata } from "next";
import Link from "next/link";
import {
  Float,
  Reveal,
  Stagger,
  StaggerItem,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { SERVICES, SERVICE_SKELETON, LANGUAGE_RULES } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Four focused capabilities for Enterprise B2B platforms — market entry and GTM, enterprise revenue acceleration, GCC and GSI growth, and India to global expansion.",
};

/**
 * §3.4 and §11.2. Each service answers the same three questions the Brand
 * Guidelines require — what problem, what we actually do, what outcome —
 * and the grounds alternate so four sections read as four capabilities
 * rather than one long list.
 */
const TONE = [
  {
    section: "bg-paper",
    ghost: "text-blue/[0.07]",
    accent: "text-blue",
    bullet: "bg-blue",
    rule: "border-rule",
    body: "text-ink-2",
    head: "text-ink",
  },
  {
    section: "on-carbon bg-carbon",
    ghost: "text-bone/[0.06]",
    accent: "text-gold",
    bullet: "bg-gold",
    rule: "border-rule-dark",
    body: "text-bone-2",
    head: "text-bone",
  },
  {
    section: "bg-paper-2",
    ghost: "text-blue/[0.08]",
    accent: "text-blue",
    bullet: "bg-blue",
    rule: "border-rule",
    body: "text-ink-2",
    head: "text-ink",
  },
  {
    section: "on-carbon bg-carbon",
    ghost: "text-bone/[0.06]",
    accent: "text-gold",
    bullet: "bg-gold",
    rule: "border-rule-dark",
    body: "text-bone-2",
    head: "text-bone",
  },
] as const;

export default function WhatWeDoPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              What we do
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Four capabilities. Not twenty{" "}
              <span className="text-blue">offerings</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              A narrow service architecture is the point, not a limitation. A
              consultancy with twenty offerings is telling you it has no
              specialism. These four are what a high-value Enterprise B2B
              platform actually needs, and each one is tied to a measurable
              commercial outcome.
            </p>
          </Reveal>
        </div>

        {/* index — the four at a glance before the depth */}
        <Stagger className="mx-auto grid max-w-wide gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <StaggerItem key={s.id} className="bg-paper">
              <a
                href={`#${s.id}`}
                className="group flex h-full items-baseline gap-4 px-6 py-7 transition-colors duration-500 hover:bg-paper-2 lg:px-8"
              >
                <span className="font-display text-[2rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                  {s.n}
                </span>
                <span className="flex-1">
                  <span className="block text-[1.0625rem] leading-snug text-ink">
                    {s.name}
                  </span>
                  <span className="ev mt-1.5 block text-[0.5rem] text-ink-2">
                    {s.short}
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── ONE SECTION PER SERVICE ──────────────────────────────────── */}
      {SERVICES.map((s, i) => {
        const t = TONE[i];
        const flip = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`relative scroll-mt-20 overflow-hidden border-b ${t.rule} ${t.section}`}
          >
            {/* the numeral, floating, oversized */}
            <Float
              amplitude={10}
              duration={9 + i}
              delay={i * 0.6}
              className="pointer-events-none absolute -top-10 right-2 select-none lg:right-10"
            >
              <span
                aria-hidden
                className={`font-display text-[13rem] leading-none lg:text-[20rem] ${t.ghost}`}
              >
                {s.n}
              </span>
            </Float>

            <div className="relative mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
              <div
                // md, not lg: a 900px laptop window was falling back to a
                // single stacked column and losing the whole two-up rhythm.
                className={`grid gap-10 md:gap-12 lg:gap-20 ${
                  flip
                    ? "md:grid-cols-[1fr_1.15fr]"
                    : "md:grid-cols-[1.15fr_1fr]"
                }`}
              >
                <Reveal kind="mask" className={flip ? "md:order-2" : undefined}>
                  <p className={`ev flex items-center gap-3 ${t.accent}`}>
                    <span aria-hidden className={`h-px w-8 ${t.bullet}`} />
                    {s.n}
                  </p>
                  <h2
                    className={`mt-6 max-w-[15ch] text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] ${t.head}`}
                  >
                    {s.name}
                  </h2>

                  <p className={`ev mt-9 ${t.body}`}>The problem</p>
                  <p
                    className={`mt-3 max-w-measure text-[1.0625rem] leading-relaxed ${t.body}`}
                  >
                    {s.problem}
                  </p>

                  <div className={`mt-10 border-t pt-7 ${t.rule}`}>
                    <p className={`ev ${t.accent}`}>The measurable outcome</p>
                    <p
                      className={`mt-3 max-w-measure text-[clamp(1.125rem,1.9vw,1.375rem)] leading-snug ${t.head}`}
                    >
                      {s.outcome}
                    </p>
                  </div>
                </Reveal>

                <div className={flip ? "md:order-1" : undefined}>
                  <p className={`ev border-b pb-4 ${t.rule} ${t.body}`}>
                    What Pivora actually does
                  </p>
                  <StaggerList>
                    {s.work.map((w) => (
                      <StaggerRow
                        key={w}
                        className={`group flex gap-5 border-b py-5 ${t.rule}`}
                      >
                        <span
                          aria-hidden
                          className={`mt-2.5 h-px w-6 shrink-0 origin-left transition-transform duration-500 group-hover:scale-x-150 ${t.bullet}`}
                        />
                        <span
                          className={`text-[1.0625rem] leading-snug ${t.head}`}
                        >
                          {w}
                        </span>
                      </StaggerRow>
                    ))}
                  </StaggerList>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── HOW EVERY SERVICE PAGE IS BUILT — §11.2 ──────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The discipline</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Every capability is described in the same seven blocks.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                Fixed order, no exceptions. It is harder to hide a weak
                proposition inside a structure that always asks the same
                questions in the same sequence.
              </p>
            </Reveal>

            <StaggerList ordered className="self-start">
              {SERVICE_SKELETON.map((b, i) => (
                <StaggerRow
                  key={b}
                  className="flex items-baseline gap-6 border-t border-rule py-4 last:border-b"
                >
                  <span className="ev text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.0625rem] text-ink">{b}</span>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE RULES — §11.1 ────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">How we describe the work</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              The verb matters more than the noun.
            </h2>
          </Reveal>

          <StaggerList className="mt-12">
            {LANGUAGE_RULES.map((r) => (
              <StaggerRow
                key={r.say}
                className="group grid items-baseline gap-x-10 gap-y-2 border-t border-rule py-6 last:border-b md:grid-cols-2"
              >
                <p className="text-[clamp(1.125rem,2vw,1.375rem)] leading-snug text-ink">
                  {r.say}
                </p>
                <p className="text-[1.0625rem] leading-snug text-ink-2">
                  {/* struck on hover — the phrasing being rejected */}
                  <span className="strike-lines [--strike-color:var(--color-blue)]">
                    {r.not}
                  </span>
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
                All four run inside the same operating model. That is what
                makes them a business rather than a menu.
              </p>
              <Link
                href="/built-operate-sustain"
                className="wipe shrink-0 border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                Built–Operate–Sustain
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
