import type { Metadata } from "next";
import Link from "next/link";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { OFFERS, PHASES } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Engage",
  description:
    "Five ways to start with Pivora — GTM Diagnostic, Build, Operate, Built–Operate–Sustain and the Platform Growth Program — priced for value and scope, not for hours.",
};

export default function EngagementsPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              How we engage
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Five ways to start, and{" "}
              <span className="text-blue">one way to finish</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Where you start depends on how far the platform has already got
              in the market. Where it ends is the same in every case: a
              growth engine your own team can run.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE FIVE OFFERS ──────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <StaggerList>
            {OFFERS.map((o) => (
              <StaggerRow
                key={o.n}
                className="group relative overflow-hidden border-t border-rule py-9 last:border-b lg:py-11"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-blue transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <div className="grid items-baseline gap-x-10 gap-y-4 lg:grid-cols-[5rem_1fr_1fr_1.2fr]">
                  <span className="font-display text-[clamp(2.25rem,4.4vw,3.25rem)] leading-none tabular-nums text-blue/70 transition-colors duration-500 group-hover:text-blue">
                    {o.n}
                  </span>
                  <h2 className="font-display text-[clamp(1.5rem,2.7vw,2rem)] leading-[1.12] transition-transform duration-500 ease-out lg:group-hover:translate-x-1">
                    {o.name}
                  </h2>
                  <p className="text-[1.0625rem] leading-snug text-ink">
                    <span className="ev mb-1.5 block text-[0.5rem] text-ink-2">
                      Best for
                    </span>
                    {o.forWhom}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                    <span className="ev mb-1.5 block text-[0.5rem]">
                      Indicative scope
                    </span>
                    {o.scope}
                  </p>
                </div>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── HOW THEY MAP ONTO THE MODEL ──────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev flex items-center gap-3 text-bone-2">
                <span aria-hidden className="h-px w-8 bg-gold" />
                Where each one sits
              </p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                Every engagement is a phase of the same model.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                A Diagnostic is the front of Build. A Platform Growth Program
                is Operate and Sustain running together on a platform that
                already has traction. Nothing here is a separate product line.
              </p>
              <Link
                href="/built-operate-sustain"
                className="ev mt-8 inline-block border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
              >
                The model in full →
              </Link>
            </Reveal>

            <StaggerList>
              {PHASES.map((p) => (
                <StaggerRow
                  key={p.id}
                  className="group grid items-baseline gap-x-8 gap-y-2 border-t border-rule-dark py-7 last:border-b sm:grid-cols-[3rem_1fr]"
                >
                  <span className="font-display text-[2rem] leading-none text-gold/70 transition-colors duration-500 group-hover:text-gold">
                    {p.letter}
                  </span>
                  <div>
                    <p className="text-[1.25rem] leading-snug text-bone">
                      {p.name}
                    </p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-bone-2">
                      {p.objective}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── THE COMMERCIAL PRINCIPLE — §11 ───────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule">
        <Float
          amplitude={10}
          duration={12}
          className="pointer-events-none absolute -top-20 right-0 select-none"
        >
          <span
            aria-hidden
            className="font-display text-[11rem] leading-none text-blue/[0.05] lg:text-[17rem]"
          >
            ₹
          </span>
        </Float>

        <div className="relative mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The commercial principle</p>
              <h2 className="mt-6 max-w-[18ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Priced for value and scope. Not for{" "}
                <span className="strike-lines struck [--strike-color:var(--color-blue)] text-ink-2">
                  hours
                </span>
                .
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-5 self-end text-[1.0625rem] leading-relaxed text-ink-2"
            >
              <p>
                An hourly rate invites a comparison with firms that are
                selling something else entirely. It also rewards the wrong
                behaviour: a model paid by the hour has no reason to make
                itself unnecessary, and this one is designed to.
              </p>
              <p className="text-ink">
                Scope and outcome are agreed in the proposal. So is the point
                at which your team takes it over.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[42ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                Which one fits is usually obvious within half an hour of
                talking about where the platform actually is.
              </p>
              <Link
                href="/contact"
                className="fill-up shrink-0 bg-blue px-7 py-4 text-[0.9375rem] text-white"
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
