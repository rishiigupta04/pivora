import type { Metadata } from "next";
import Link from "next/link";
import Cited from "@/components/Cited";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { MARKET, EXECUTION_GAP_BASE, SOURCES, QUOTES } from "@/lib/content";

export const metadata: Metadata = {
  title: "India Market Evidence",
  description:
    "Every figure Pivora publishes, with its named source and date — plus the figures that were removed because they could not be verified.",
};

const OPPORTUNITY = [
  MARKET.itSpend,
  MARKET.itSpend2026,
  MARKET.softwareGrowth,
  MARKET.gccCount,
  MARKET.gccRevenue,
  MARKET.gccPeople,
];

const GAP = [MARKET.delays, MARKET.overrun, MARKET.costOverrun, MARKET.loss];

const founderQuote = QUOTES[2];

export default function MarketPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              India market evidence
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              The case for India, and the reason it{" "}
              <span className="text-blue">goes wrong</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              The numbers a board asks for before approving an India
              investment, and the ones that explain why so many of those
              investments underdeliver. Each is attributed where it sits, so
              you can lift it straight into a paper of your own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE OPPORTUNITY — §20.1 ──────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The opportunity</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Six numbers a board will ask for.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {OPPORTUNITY.map((s, i) => (
              <Float
                key={s.label}
                amplitude={5 + (i % 3)}
                duration={8 + (i % 4)}
                delay={i * 0.4}
              >
                <div className="lift">
                  <Cited stat={s} size="sm" />
                </div>
              </Float>
            ))}
          </div>

          <Reveal className="mt-16 grid gap-10 border-t border-rule pt-10 md:grid-cols-2 lg:gap-20">
            <div>
              <Cited stat={MARKET.gcc2030} size="sm" />
            </div>
            <div>
              <Cited stat={MARKET.thirdEconomy} size="sm" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE EXECUTION GAP — §20.2 ────────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev flex items-center gap-3 text-bone-2">
              <span aria-hidden className="h-px w-8 bg-gold" />
              The execution gap
            </p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,4vw,3rem)] leading-[1.04] text-bone">
              Demand is not the problem.{" "}
              <span className="text-gold">Execution is.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
              One study quantifies exactly the pain Built–Operate–Sustain is
              designed to remove. All four figures come from the same base,
              which is printed with them — a percentage without its
              denominator will not survive the first question about it.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {GAP.map((s, i) => (
              <Float
                key={s.label}
                amplitude={5 + i}
                duration={8 + i}
                delay={i * 0.5}
              >
                <div className="lift">
                  <Cited stat={s} size="sm" tone="dark" />
                </div>
              </Float>
            ))}
          </div>

          <p className="ev mt-14 max-w-[60ch] border-t border-rule-dark pt-5 text-[0.5625rem] leading-relaxed text-bone-2">
            {EXECUTION_GAP_BASE}
          </p>
        </div>
      </section>

      {/* ── SOURCES — §22 ────────────────────────────────────────────
          An ordinary sources appendix, which is what a page full of
          statistics owes its reader. The vetting notes that used to sit
          above it were about how this site was built rather than about
          India, and belong in /review with the rest of the internal
          checklist. */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">Sources</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Everything cited above, in one place.
            </h2>
          </Reveal>

          <StaggerList ordered className="mt-14">
            {SOURCES.map((s) => (
              <StaggerRow
                key={s.n}
                className="grid items-baseline gap-x-10 gap-y-2 border-t border-rule py-6 last:border-b lg:grid-cols-[3rem_1.6fr_1fr_7rem]"
              >
                <span className="ev text-blue">
                  {String(s.n).padStart(2, "0")}
                </span>
                <p className="text-[1.0625rem] leading-snug text-ink">
                  {s.claim}
                </p>
                <p className="text-[0.9375rem] leading-snug text-ink-2">
                  {s.source}
                </p>
                <p className="ev text-[0.5625rem] text-ink-2 lg:text-right">
                  {s.when}
                </p>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <blockquote className="max-w-[46ch] border-l-2 border-blue pl-6">
              <p className="font-display text-[clamp(1.5rem,3vw,2.125rem)] leading-snug text-ink">
                &ldquo;{founderQuote.text}&rdquo;
              </p>
              <footer className="mt-5 text-[0.9375rem] leading-snug text-ink-2">
                <span className="text-ink">{founderQuote.who}</span> —{" "}
                {founderQuote.where}
                <span className="ev mt-2 block text-[0.5rem]">
                  {founderQuote.when}
                </span>
              </footer>
            </blockquote>
            <Link
              href="/global-to-india"
              className="wipe mt-12 inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              What this means for a platform entering India
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
