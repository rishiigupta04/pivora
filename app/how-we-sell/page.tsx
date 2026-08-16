import type { Metadata } from "next";
import Link from "next/link";
import CommitteeMap from "@/components/CommitteeMap";
import {
  Float,
  Reveal,
  Stagger,
  StaggerItem,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { GATES, AI_POV } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Sell",
  description:
    "The eight checks every deal clears before it is forecast, and Pivora's position on what AI-native vendors face in the India buying committee.",
};

export default function HowWeSellPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              How we sell
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              We don&apos;t confuse activity with{" "}
              <span className="text-blue">pipeline</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Every deal is tested against the same eight checks, and we argue
              against it rather than for it. A deal that can&apos;t answer all
              eight isn&apos;t early. It isn&apos;t a deal.
            </p>
          </Reveal>
        </div>

        {/* the acronym, spelled out as a graphic before it is explained */}
        <Stagger className="mx-auto flex max-w-wide flex-wrap items-baseline gap-x-3 gap-y-2 px-6 pb-12 lg:px-10 lg:pb-16">
          {GATES.map((g, i) => (
            <StaggerItem key={`${g.k}-${i}`}>
              <span className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-none text-blue/70">
                {g.k}
              </span>
            </StaggerItem>
          ))}
          <StaggerItem className="ml-2 self-end">
            <span className="ev text-ink-2">Eight checks</span>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── THE GATES ────────────────────────────────────────────────────
          Dark, because this is the machinery of the thing rather than the
          argument for it. Each check is a full band you descend through —
          the shape of a filter, not a table of contents. */}
      <section className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 pt-20 lg:px-10 lg:pt-28">
          <Reveal kind="mask">
            <h2 className="max-w-[20ch] text-[clamp(1.875rem,4vw,3rem)] leading-[1.04] text-bone">
              A deal clears all eight, or it is{" "}
              <span className="text-gold">not counted</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
              The left column is what has to be true. The right is what
              disqualifies it — and the right column is the one that does the
              work.
            </p>
          </Reveal>
        </div>

        <StaggerList className="mx-auto mt-14 max-w-wide px-6 lg:px-10">
          {GATES.map((g, i) => (
            <StaggerRow
              key={`${g.k}-${g.name}`}
              className="group relative overflow-hidden border-t border-rule-dark last:border-b"
            >
              <div className="relative grid gap-x-10 gap-y-4 py-8 md:grid-cols-[7rem_1fr_1fr] lg:py-10">
                {/* index + letter */}
                <div className="flex items-baseline gap-4">
                  <span className="ev text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[3rem] leading-none text-bone transition-colors duration-500 group-hover:text-gold lg:text-[3.75rem]">
                    {g.k}
                  </span>
                </div>

                {/* what has to be true */}
                <div>
                  <p className="ev text-bone-2">{g.name}</p>
                  <p className="mt-3 max-w-[26ch] text-[clamp(1.125rem,1.8vw,1.5rem)] leading-[1.25] text-bone">
                    {g.ask}
                  </p>
                </div>

                {/* what removes it */}
                <div className="md:pt-7">
                  <p className="ev text-[0.5rem] text-gold">
                    Disqualifies
                  </p>
                  <p className="mt-2.5 max-w-[32ch] text-[0.9375rem] leading-snug text-bone-2">
                    <span className="strike-lines [--strike-color:var(--color-gold)]">
                      {g.fail}
                    </span>
                  </p>
                </div>
              </div>
            </StaggerRow>
          ))}
        </StaggerList>

        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <p className="max-w-[46ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug text-bone">
              A forecast built this way is smaller. It is also the one we will
              stand behind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── AI POSITION ──────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="relative mx-auto max-w-wide overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
          <Float
            amplitude={12}
            duration={11}
            className="pointer-events-none absolute -top-16 right-0 select-none"
          >
            <span
              aria-hidden
              className="font-display text-[12rem] leading-none text-blue/[0.06] lg:text-[18rem]"
            >
              AI
            </span>
          </Float>

          <div className="relative grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-14 lg:gap-24">
            <div className="md:sticky md:top-28 md:self-start">
              <Reveal kind="mask">
                <p className="ev text-ink-2">Pivora&apos;s position</p>
                <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                  Selling AI in India is a{" "}
                  <span className="text-blue">governance conversation</span> in
                  a capability costume.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="ev mt-8 border-t border-rule pt-4 text-ink-2">
                  Our read of the market — not sourced data
                </p>
              </Reveal>
            </div>

            <StaggerList>
              {AI_POV.map((p) => (
                <StaggerRow
                  key={p.n}
                  className="group border-t border-rule py-8 last:border-b"
                >
                  <div className="flex gap-6">
                    <span className="font-display text-[2.25rem] leading-none text-blue/45 transition-colors duration-500 group-hover:text-blue">
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
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>

          <CommitteeMap />

          <Reveal className="relative mt-14 border-t border-rule pt-10">
            <div className="grid gap-6 md:grid-cols-[1fr_1.25fr] md:gap-14 lg:gap-24">
              <p className="ev text-ink-2">What that changes for us</p>
              <p className="max-w-measure text-[1.0625rem] leading-relaxed text-ink">
                Presales carries the governance answer from the first meeting
                rather than the security review. And the checks get stricter,
                not looser — an AI deal with an enthusiastic champion and no
                named economic buyer is the most common way a promising
                quarter evaporates.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[40ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                Qualification is a discipline. Someone has to own it.
              </p>
              <Link
                href="/model#engine"
                className="wipe shrink-0 border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                See the execution engine
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
