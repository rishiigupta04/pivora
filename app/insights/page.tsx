import type { Metadata } from "next";
import Link from "next/link";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { INSIGHT_PILLARS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on Enterprise B2B platform GTM in India, GCC-led technology adoption, GSI ecosystem strategy and India-to-global expansion.",
};

/**
 * §3.3 defines six pillars. No articles have been supplied yet, so the page
 * publishes the pillars and the editorial standard rather than inventing
 * posts or shipping six "coming soon" cards — the same non-fabrication rule
 * that governs the case studies page.
 */
export default function InsightsPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Insights
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Six pillars we have a{" "}
              <span className="text-blue">position</span> on.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Writing here is drawn from work, not from a content calendar.
              These are the six areas where Pivora has something specific to
              say — and the pieces get published as they are actually worth
              reading rather than to a schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE PILLARS ──────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <StaggerList>
            {INSIGHT_PILLARS.map((p) => (
              <StaggerRow
                key={p.n}
                className="group relative overflow-hidden border-t border-rule py-9 last:border-b lg:py-11"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-blue transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <div className="grid items-baseline gap-x-10 gap-y-3 md:grid-cols-[5rem_1fr_1.3fr]">
                  <span className="font-display text-[clamp(2.25rem,4.4vw,3.25rem)] leading-none tabular-nums text-blue/70 transition-colors duration-500 group-hover:text-blue">
                    {p.n}
                  </span>
                  <h2 className="font-display text-[clamp(1.5rem,2.7vw,2rem)] leading-[1.12] transition-transform duration-500 ease-out md:group-hover:translate-x-1">
                    {p.pillar}
                  </h2>
                  <p className="text-[1.0625rem] leading-relaxed text-ink-2">
                    {p.themes}
                  </p>
                </div>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── THE EDITORIAL STANDARD ───────────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="relative mx-auto max-w-wide overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
          <Float
            amplitude={12}
            duration={12}
            className="pointer-events-none absolute -top-20 right-0 select-none"
          >
            <span
              aria-hidden
              className="font-display text-[11rem] leading-none text-bone/[0.05] lg:text-[17rem]"
            >
              ¶
            </span>
          </Float>

          <div className="relative grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-bone-2">The standard</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                We label an opinion as an{" "}
                <span className="text-gold">opinion</span>.
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-5 self-end text-[1.0625rem] leading-relaxed text-bone-2"
            >
              <p>
                Some of what we write is measured — a figure from a named
                research house, with the date it was published beside it.
                Some of it is our own read of a market we work in every day,
                which is a different kind of claim and gets marked as one.
              </p>
              <p className="text-bone">
                Blurring the two is how a reader ends up quoting our hunch to
                their board.
              </p>
            </Reveal>
          </div>

          <Reveal className="rule-t mt-14 pt-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[44ch] font-display text-[clamp(1.375rem,2.6vw,1.875rem)] leading-snug text-bone">
                The measured half is already published — the India numbers a
                board will ask you for.
              </p>
              <Link
                href="/market"
                className="ev shrink-0 border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
              >
                India market evidence →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[42ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                If one of these pillars is the problem you are actually
                sitting with, the conversation is more useful than the
                article.
              </p>
              <Link
                href="/contact"
                className="fill-up shrink-0 bg-primary px-7 py-4 text-[0.9375rem] text-white"
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
