import type { Metadata } from "next";
import Link from "next/link";
import Handover from "@/components/Handover";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { PHASES, SUSTAIN_TEST } from "@/lib/content";

export const metadata: Metadata = {
  title: "Built–Operate–Sustain",
  description:
    "Build the engine, operate the engine, transfer the capability. Pivora's operating model for turning a GTM strategy into commercial traction and then into something the client owns.",
};

export default function BuiltOperateSustainPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-24">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              The operating model
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Build the engine. Operate it.{" "}
              <span className="text-blue">Then make it yours.</span>
            </h1>
          </Reveal>
          <div className="mt-8 grid gap-12 md:grid-cols-[1.15fr_1fr] md:gap-14 lg:gap-24">
            <Reveal delay={0.12} mode="mount">
              <p className="max-w-measure text-lg leading-relaxed text-ink-2">
                Built–Operate–Sustain answers the buyer&apos;s most important
                question: can you actually create growth, or will you simply
                give us a strategy deck?
              </p>
            </Reveal>
            <Reveal
              delay={0.2}
              mode="mount"
              className="space-y-5 self-end text-[1.0625rem] leading-relaxed text-ink-2"
            >
              <p>
                Many platform companies enter a market with a strategy
                document, a country hire and a partner list. That is not a
                GTM engine. The gap appears between strategy and execution —
                positioning is weak, pipeline is inconsistent, partners are
                inactive, enterprise access is shallow, deals stall and the
                organisation becomes dependent on a few individuals.
              </p>
              <p className="text-ink">
                Built–Operate–Sustain closes that execution gap.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE HANDOVER ────────────────────────────────────────────────
          Dark, because this is the machinery of the thing rather than the
          argument for it. The page descends here. */}
      <section className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 pt-20 lg:px-10 lg:pt-28">
          <h2 className="reveal max-w-[20ch] text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.08] text-bone">
            Watch who is carrying the weight.
          </h2>
          <p className="reveal reveal-2 mt-5 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
            Blue is us. Gold is you. Read down the three rows and the whole
            model is visible in one look — and notice that the last bar does
            not empty. Sustain is not an exit.
          </p>

          <Handover />
        </div>

        {/* ── ONE BAND PER PHASE ─────────────────────────────────────── */}
        <div className="mx-auto max-w-wide px-6 pt-20 lg:px-10 lg:pt-24">
          {PHASES.map((p, i) => (
            <section
              key={p.id}
              id={p.id}
              className="relative scroll-mt-24 overflow-hidden border-t border-rule-dark pt-16 pb-4 lg:pt-20"
            >
              <Float
                amplitude={9}
                duration={9 + i}
                delay={i * 0.6}
                className="pointer-events-none absolute -top-8 right-0 select-none"
              >
                <span
                  aria-hidden
                  className="font-display text-[9rem] leading-none text-bone/[0.055] lg:text-[15rem]"
                >
                  {p.letter}
                </span>
              </Float>

              <div className="relative grid gap-10 md:gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
                <Reveal kind="mask">
                  <p className="ev flex items-center gap-3 text-gold">
                    <span aria-hidden className="h-px w-8 bg-gold" />
                    Phase {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] text-bone">
                    {p.name}
                  </h2>
                  <p className="mt-6 max-w-measure text-[clamp(1.125rem,1.9vw,1.375rem)] leading-snug text-bone">
                    {p.objective}
                  </p>
                  <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                    {p.premise}
                  </p>

                  <div className="mt-10 border-t border-rule-dark pt-7">
                    <p className="ev text-gold">Proof of completion</p>
                    <p className="mt-3 max-w-measure text-[1.0625rem] leading-relaxed text-bone">
                      {p.exit}
                    </p>
                  </div>
                </Reveal>

                <div>
                  <p className="ev border-b border-rule-dark pb-4 text-bone-2">
                    Scope
                  </p>
                  <StaggerList>
                    {p.work.map((w) => (
                      <StaggerRow
                        key={w}
                        className="group flex gap-5 border-b border-rule-dark py-5"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 h-px w-6 shrink-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-150"
                        />
                        <span className="text-[1.0625rem] leading-snug text-bone">
                          {w}
                        </span>
                      </StaggerRow>
                    ))}
                  </StaggerList>

                  {/* §5.2 — the same phase in the client's own language. */}
                  <div className="mt-10 border-l-2 border-gold pl-6">
                    <p className="ev text-bone-2">What you actually see</p>
                    <p className="mt-3 max-w-measure text-[1.0625rem] leading-relaxed text-bone">
                      {p.sees}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
          <div className="h-20 lg:h-24" />
        </div>
      </section>

      {/* ── THE SUSTAIN TEST — §5.1 ──────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The Sustain transition test</p>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Three things change, and you can check all of them.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              Sustain never means leaving. It means your dependence on Pivora
              falls because your own capability rises — which is a claim you
              should be able to audit rather than take on trust.
            </p>
          </Reveal>

          {/* Three columns, read left to right: the arc of the transition.
              The column heads only exist on a wide screen; stacked, each
              cell carries its own label instead. */}
          <div className="mt-14 hidden grid-cols-3 gap-x-10 md:grid">
            {["Before", "During", "After"].map((h, i) => (
              <p
                key={h}
                className={`ev pb-4 ${i === 2 ? "text-blue" : "text-ink-2"}`}
              >
                {h}
              </p>
            ))}
          </div>
          <StaggerList className="mt-14 md:mt-0">
            {SUSTAIN_TEST.map((r) => (
              <StaggerRow
                key={r.before}
                className="grid gap-x-10 gap-y-4 border-t border-rule py-7 last:border-b md:grid-cols-3"
              >
                <p className="text-[1.0625rem] leading-snug text-ink-2">
                  <span className="ev mb-2 block text-[0.5rem] md:hidden">
                    Before
                  </span>
                  {r.before}
                </p>
                <p className="text-[1.0625rem] leading-snug text-ink-2">
                  <span className="ev mb-2 block text-[0.5rem] md:hidden">
                    During
                  </span>
                  {r.during}
                </p>
                <p className="text-[1.0625rem] leading-snug text-ink">
                  <span className="ev mb-2 block text-[0.5rem] text-blue md:hidden">
                    After
                  </span>
                  {r.after}
                </p>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── WHAT WE ARE NOT SELLING ──────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
            <Reveal kind="mask">
              <h2 className="max-w-[18ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Pivora does not sell{" "}
                <span className="strike-lines struck [--strike-color:var(--color-blue)] text-ink-2">
                  consulting
                </span>
                .
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-5 self-end text-[1.0625rem] leading-relaxed text-ink-2"
            >
              <p>
                What is on offer is a journey: from commercial architecture,
                to traction, to an institutionalised capability. Those are
                three different things, they are sequenced, and each one has
                a proof of completion attached to it.
              </p>
              <p className="text-ink">
                A retainer has no natural end. This does, and it is written
                down at the start.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-rule pt-8">
            <Link
              href="/delivery-model"
              className="wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              How the pods are staffed
            </Link>
            <Link
              href="/engagements"
              className="wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              The five ways to start
            </Link>
            <Link
              href="/platform-growth"
              className="wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              The ramp underneath it
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[42ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                A model is only worth anything if someone is accountable for
                running it.
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
