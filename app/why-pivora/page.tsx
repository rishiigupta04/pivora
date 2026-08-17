import type { Metadata } from "next";
import Link from "next/link";
import NotAList from "@/components/NotAList";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import {
  PRINCIPLES,
  NOT_A,
  SELECTIVITY,
  POSITIONING,
  QUALIFY,
  ESSENCE,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Pivora",
  description:
    "Focus over breadth, quality over volume, outcomes over activity, partners not vendors — and what each of those four principles actually costs.",
};

export default function WhyPivoraPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Why Pivora
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Selectivity is not modesty. It is the{" "}
              <span className="text-blue">product</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              A firm with twenty offerings is telling you it has no
              specialism. Pivora works on one thing — high-value Enterprise
              B2B platform products — and the four principles below are what
              that costs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE FOUR PRINCIPLES ──────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
              <p className="ev text-ink-2">Principles</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Four, and each one rules something out.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                A principle that costs nothing to hold is a slogan. These
                narrow the business on purpose.
              </p>
            </Reveal>

            <StaggerList ordered>
              {PRINCIPLES.map((p) => (
                <StaggerRow
                  key={p.n}
                  className="group grid gap-4 border-t border-rule py-8 last:border-b sm:grid-cols-[4.5rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-[2.5rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] leading-snug">
                      {p.head}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-2">
                      {p.body}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── THE NEGATION — §1.4 ──────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <p className="ev reveal text-ink-2">What Pivora is not</p>
          <NotAList items={NOT_A} />
          <Reveal className="mt-14 max-w-measure border-t border-rule pt-8">
            <p className="text-[1.0625rem] leading-relaxed text-ink-2">
              {SELECTIVITY}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE POSITIONING STATEMENT — §1.1a ────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="relative mx-auto max-w-wide overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
          <Float
            amplitude={10}
            duration={12}
            className="pointer-events-none absolute -top-16 right-0 select-none"
          >
            <span
              aria-hidden
              className="font-display text-[12rem] leading-none text-bone/[0.05] lg:text-[18rem]"
            >
              &ldquo;
            </span>
          </Float>

          <div className="relative">
            <p className="ev text-bone-2">The positioning</p>
            <Reveal kind="mask">
              <p className="mt-8 max-w-[34ch] font-display text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.2] text-bone">
                {POSITIONING}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE QUALIFICATION STANDARD — §12 ─────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.35fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The standard</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Six dimensions, and a platform clears all of them.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                This is what gets examined before Pivora takes an engagement
                on. It is published because a firm that is genuinely selective
                should be willing to say what it selects for.
              </p>
            </Reveal>

            <StaggerList className="self-start">
              {QUALIFY.map((q) => (
                <StaggerRow
                  key={q.dimension}
                  className="group grid items-baseline gap-x-8 gap-y-1.5 border-t border-rule py-5 last:border-b sm:grid-cols-[12rem_1fr]"
                >
                  <p className="text-[1.125rem] leading-snug text-ink transition-transform duration-500 group-hover:translate-x-1">
                    {q.dimension}
                  </p>
                  <p className="text-[1.0625rem] leading-snug text-ink-2">
                    {q.expectation}
                  </p>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <p className="max-w-[40ch] font-display text-[clamp(1.75rem,3.6vw,2.75rem)] leading-snug">
              {ESSENCE}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
              <Link
                href="/about#fit"
                className="wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                Who we&apos;re a fit for
              </Link>
              <Link
                href="/contact"
                className="wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                Start a conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
