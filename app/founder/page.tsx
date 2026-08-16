import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Float,
  Parallax,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { CAREER, KPMG_PROOF, FIT, NOT_A_FIT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Subrato Bandhu — 20+ years of enterprise GTM leadership in India, and why Pivora exists.",
};

const PRINCIPLES = [
  {
    head: "We take the number, not the brief",
    body: "An advisor is paid for a recommendation. We are paid for what happens after it. If we are not prepared to carry the target, we are not the right partner.",
  },
  {
    head: "Qualification before activity",
    body: "Meetings and demos are inputs, not evidence. A deal either clears the eight checks or it comes off the forecast — including when that makes the quarter look worse.",
  },
  {
    head: "Built to be handed over",
    body: "Everything is documented, staffed and governed on the assumption that someone else will run it. That constraint produces better decisions than a retainer ever has.",
  },
  {
    head: "We say no in the first conversation",
    body: "India is a serious operating investment. Where a company isn't ready to make one, saying so early is more useful than a proposal that quietly fails eighteen months in.",
  },
];

export default function FounderPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="mx-auto grid max-w-wide items-end gap-12 px-6 pt-16 pb-14 md:grid-cols-[1.35fr_1fr] md:gap-14 lg:px-10 lg:pt-24 lg:pb-16 lg:gap-20">
          <div>
            <Reveal kind="mask" mode="mount">
              <p className="ev flex items-center gap-3 text-ink-2">
                <span aria-hidden className="h-px w-8 bg-blue" />
                Founder
              </p>
              <h1 className="mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.94]">
                Subrato
                <br />
                <span className="text-blue">Bandhu</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12} mode="mount">
              <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
                Twenty-plus years selling and leading enterprise software GTM
                in India — as an individual contributor, a country leader and
                a regional vice-president.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} mode="mount">
            <figure className="relative mx-auto w-full max-w-[16rem] md:mx-0 md:ml-auto md:max-w-[19rem]">
              <span
                aria-hidden
                className="absolute -top-3 -left-3 h-20 w-20 border-t-2 border-l-2 border-blue"
              />
              <Parallax className="relative aspect-[3/4] w-full overflow-hidden border border-rule bg-paper-3">
                <Image
                  src="/subrato-bandhu.jpg"
                  alt="Subrato Bandhu, founder of Pivora Consulting"
                  fill
                  sizes="(min-width: 768px) 22rem, 70vw"
                  className="scale-[1.1] object-cover object-top"
                  style={{
                    filter:
                      "grayscale(0.38) sepia(0.2) contrast(1.05) brightness(0.965)",
                  }}
                  priority
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-paper-3 opacity-40 mix-blend-multiply"
                />
              </Parallax>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── WHY PIVORA EXISTS ────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.35fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <h2 className="max-w-[16ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                The same problem kept arriving in different packaging.
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-2"
            >
              <p>
                A global software company decides India matters. It hires a
                country manager, sets a number, and waits. Eighteen months
                later the pipeline is thin, the first rollout is late, and the
                conclusion drawn back at headquarters is that India is hard —
                when what actually happened is that nobody built an operating
                motion underneath the ambition.
              </p>
              <p>
                Subrato has been on every side of that: carrying a bag,
                building presales functions, running a country, and leading a
                region. The pattern is consistent enough to be a business.
              </p>
              <p className="text-ink">
                Pivora is that business — an operating partner that builds the
                India function, runs it accountably, and is structured to hand
                it over.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE SEPARATION ───────────────────────────────────────────────
          The content rule ("never imply Pivora achieved a former employer's
          result") is enforced by the layout. Two grounds, a hard seam down
          the middle, and neither side borrowing the other's credibility. */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-20 lg:px-10 lg:pt-28">
          <Reveal kind="mask">
            <p className="ev text-blue">The record</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Two records. Kept apart on purpose.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-wide gap-px bg-rule md:grid-cols-2">
          {/* career */}
          <Reveal className="relative overflow-hidden bg-paper px-6 py-12 lg:px-10 lg:py-14">
            <Float
              amplitude={9}
              duration={10}
              className="pointer-events-none absolute -top-10 -right-4 select-none"
            >
              <span
                aria-hidden
                className="font-display text-[5rem] leading-none text-blue/[0.06] md:text-[9rem]"
              >
                01
              </span>
            </Float>
            <div className="relative">
              <p className="ev flex items-center gap-3 text-blue">
                <span aria-hidden className="h-px w-6 bg-blue" />
                Subrato&apos;s career — before Pivora
              </p>

              <StaggerList className="mt-8">
                {CAREER.map((c) => (
                  <StaggerRow
                    key={c.org}
                    className="group flex items-baseline justify-between gap-6 border-b border-rule py-4"
                  >
                    <span className="text-[1.125rem] text-ink transition-transform duration-500 group-hover:translate-x-1">
                      {c.org}
                    </span>
                    <span className="ev shrink-0 text-[0.5rem] text-ink-2">
                      {c.role}
                    </span>
                  </StaggerRow>
                ))}
              </StaggerList>

              <div className="mt-9 border-l-2 border-blue pl-6">
                <p className="ev text-ink-2">Milestone — {KPMG_PROOF.year}</p>
                <p className="mt-2 text-[1.125rem] leading-snug text-ink">
                  {KPMG_PROOF.what}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  {KPMG_PROOF.note}
                </p>
              </div>
            </div>
          </Reveal>

          {/* pivora */}
          <Reveal
            delay={0.12}
            className="relative overflow-hidden bg-paper-2 px-6 py-12 lg:px-10 lg:py-14"
          >
            <Float
              amplitude={7}
              duration={12}
              delay={1}
              className="pointer-events-none absolute -top-10 -right-4 select-none"
            >
              <span
                aria-hidden
                className="font-display text-[5rem] leading-none text-ink/[0.05] md:text-[9rem]"
              >
                02
              </span>
            </Float>
            <div className="relative">
              <p className="ev flex items-center gap-3 text-ink-2">
                <span aria-hidden className="h-px w-6 bg-ink-2" />
                Pivora&apos;s own engagements
              </p>
              <p className="mt-8 max-w-[34ch] text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.3] text-ink">
                Client work is covered by confidentiality and is not published
                here. We&apos;ll talk about it directly, under NDA, in the
                first conversation.
              </p>
              <p className="mt-6 max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-2">
                Nothing in the column to the left is a Pivora result. Those are
                roles Subrato held at other companies, and the outcomes belong
                to those companies. We would rather show you a thin honest
                record than a thick borrowed one.
              </p>
              <p className="ev mt-10 border-t border-rule pt-4 text-[0.5rem] text-ink-2">
                No invented customers, logos, partnerships or case studies
                appear anywhere on this site
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW WE THINK ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
              <p className="ev text-ink-2">Principles</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                How we think
              </h2>
            </Reveal>

            <StaggerList ordered>
              {PRINCIPLES.map((p, i) => (
                <StaggerRow
                  key={p.head}
                  className="group grid gap-4 border-t border-rule py-8 last:border-b sm:grid-cols-[4.5rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-[2.5rem] leading-none text-blue/40 transition-colors duration-500 group-hover:text-blue">
                    {String(i + 1).padStart(2, "0")}
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

      {/* ── WHO'S A FIT ──────────────────────────────────────────────── */}
      <section id="fit" className="on-carbon scroll-mt-20 bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <h2 className="max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
              We are a good fit for some companies and a{" "}
              <span className="text-gold">poor one</span> for others.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="ev border-b border-gold pb-3 text-gold">A fit</p>
              <StaggerList>
                {FIT.map((f) => (
                  <StaggerRow
                    key={f}
                    className="group flex gap-4 border-b border-rule-dark py-5 text-[1.0625rem] leading-snug text-bone"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-6 shrink-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-150"
                    />
                    {f}
                  </StaggerRow>
                ))}
              </StaggerList>
            </div>

            <div>
              <p className="ev border-b border-rule-dark pb-3 text-bone-2">
                Not a fit
              </p>
              <StaggerList>
                {NOT_A_FIT.map((f) => (
                  <StaggerRow
                    key={f}
                    className="group relative flex gap-4 border-b border-rule-dark py-5 text-[1.0625rem] leading-snug text-bone-2"
                  >
                    <span aria-hidden className="mt-px shrink-0 font-mono">
                      ✕
                    </span>
                    <span className="strike-lines [--strike-color:var(--color-bone-2)]">
                      {f}
                    </span>
                  </StaggerRow>
                ))}
              </StaggerList>
            </div>
          </div>

          <Reveal className="rule-t mt-16 pt-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[42ch] font-display text-[clamp(1.375rem,2.6vw,1.875rem)] leading-snug text-bone">
                If you recognise yourself on the left, the next step is a
                conversation.
              </p>
              <Link
                href="/contact"
                className="ev shrink-0 border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
              >
                Start one →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
