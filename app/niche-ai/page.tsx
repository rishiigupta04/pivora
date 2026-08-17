import type { Metadata } from "next";
import Link from "next/link";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import {
  AI_SERVICES,
  AI_GATE,
  AI_DECISIONS,
  AI_OUTCOMES,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Niche AI Value Services",
  description:
    "Pivora carries AI only where it materially strengthens a differentiated Enterprise B2B platform or creates a high-value GTM wedge. Five services, and a gate in front of them.",
};

export default function NicheAiPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule">
        <Float
          amplitude={12}
          duration={12}
          className="pointer-events-none absolute -top-20 right-0 select-none"
        >
          <span
            aria-hidden
            className="font-display text-[13rem] leading-none text-blue/[0.06] lg:text-[20rem]"
          >
            AI
          </span>
        </Float>

        <div className="relative mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Niche AI value services
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              AI should create enterprise value, not{" "}
              <span className="text-blue">another AI project</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Pivora carries AI only where it materially strengthens a
              differentiated Enterprise B2B platform or creates a high-value
              GTM wedge. That rules out most of what gets asked for, which is
              the point.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE FIVE SERVICES ────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The services</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Five, deliberately narrow.
            </h2>
          </Reveal>

          <StaggerList className="mt-14">
            {AI_SERVICES.map((s) => (
              <StaggerRow
                key={s.n}
                className="group grid items-baseline gap-x-10 gap-y-3 border-t border-rule py-8 last:border-b lg:grid-cols-[4rem_1fr_1.1fr_14rem]"
              >
                <span className="font-display text-[2.25rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                  {s.n}
                </span>
                <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] leading-snug">
                  {s.name}
                </h3>
                <p className="text-[1.0625rem] leading-relaxed text-ink-2">
                  {s.does}
                </p>
                <p className="text-[0.9375rem] leading-snug text-ink">
                  <span className="ev mb-1.5 block text-[0.5rem] text-ink-2">
                    Outcome
                  </span>
                  {s.outcome}
                </p>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── THE QUALIFICATION GATE ───────────────────────────────────────
          Dark, and built as a descent: six checks in sequence, any one of
          which ends the conversation. */}
      <section className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 pt-20 lg:px-10 lg:pt-28">
          <Reveal kind="mask">
            <p className="ev flex items-center gap-3 text-bone-2">
              <span aria-hidden className="h-px w-8 bg-gold" />
              The qualification gate
            </p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,4vw,3rem)] leading-[1.04] text-bone">
              Six checks in sequence. Any{" "}
              <span className="text-gold">no</span> ends it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
              These run before an AI engagement is accepted, not after it has
              been scoped. Most enquiries do not clear all six, and that is
              the gate working rather than failing.
            </p>
          </Reveal>
        </div>

        <StaggerList ordered className="mx-auto mt-14 max-w-wide px-6 lg:px-10">
          {AI_GATE.map((g, i) => (
            <StaggerRow
              key={g}
              className="group relative overflow-hidden border-t border-rule-dark last:border-b"
            >
              <div className="relative grid gap-x-10 gap-y-3 py-7 md:grid-cols-[7rem_1fr] lg:py-9">
                <div className="flex items-baseline gap-4">
                  <span className="ev text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* The gate narrows as you descend it. */}
                  <span
                    aria-hidden
                    className="mt-2 block h-px origin-left bg-gold/45 transition-transform duration-500 group-hover:bg-gold"
                    style={{ width: `${3.5 - i * 0.45}rem` }}
                  />
                </div>
                <p className="max-w-[38ch] text-[clamp(1.125rem,1.9vw,1.5rem)] leading-[1.25] text-bone">
                  {g}
                </p>
              </div>
            </StaggerRow>
          ))}
        </StaggerList>

        {/* ── WHAT WE TAKE AND WHAT WE DECLINE ───────────────────────── */}
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <h2 className="max-w-[24ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
              What that gate actually turns down.
            </h2>
          </Reveal>

          <StaggerList className="mt-12">
            {AI_DECISIONS.map((d) => (
              <StaggerRow
                key={d.request}
                className="group grid items-baseline gap-x-8 gap-y-2 border-t border-rule-dark py-6 last:border-b md:grid-cols-[5rem_1.2fr_1fr]"
              >
                <span
                  className={`ev ${d.yes ? "text-gold" : "text-bone-2"}`}
                  aria-hidden
                >
                  {d.yes ? "Yes" : "No"}
                </span>
                <p
                  className={`text-[clamp(1.0625rem,1.7vw,1.25rem)] leading-snug ${
                    d.yes ? "text-bone" : "text-bone-2"
                  }`}
                >
                  <span className="sr-only">
                    {d.yes ? "Accepted: " : "Declined: "}
                  </span>
                  {/* Declined requests are struck as the row is read —
                      the same gesture the negation list uses, because it
                      means the same thing. */}
                  {d.yes ? (
                    d.request
                  ) : (
                    <span className="strike-lines [--strike-color:var(--color-gold)]">
                      {d.request}
                    </span>
                  )}
                </p>
                <p className="text-[0.9375rem] leading-snug text-bone-2">
                  {d.reason}
                </p>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── OUTCOME CATEGORIES ───────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">What AI has to produce</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Five categories of outcome, and one of them has to apply.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                Every piece of AI work has to land in at least one of these
                before it starts. If we cannot say which one it belongs to,
                that is the answer.
              </p>
            </Reveal>

            <StaggerList className="self-start">
              {AI_OUTCOMES.map((o) => (
                <StaggerRow
                  key={o.category}
                  className="group grid items-baseline gap-x-8 gap-y-1.5 border-t border-rule py-5 last:border-b sm:grid-cols-[13rem_1fr]"
                >
                  <p className="text-[1.125rem] leading-snug text-ink transition-transform duration-500 group-hover:translate-x-1">
                    {o.category}
                  </p>
                  <p className="text-[0.9375rem] leading-snug text-ink-2">
                    {o.examples}
                  </p>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[42ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                If your AI capability is genuinely differentiated, the problem
                is usually commercialising it rather than building it.
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
