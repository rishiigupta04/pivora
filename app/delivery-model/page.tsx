import type { Metadata } from "next";
import Link from "next/link";
import EngineMap from "@/components/EngineMap";
import {
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { CLIENT_ASKS, DERISK, DELIVERY_STANDARD } from "@/lib/content";

export const metadata: Metadata = {
  title: "Delivery Model",
  description:
    "Dedicated client pods that sell, one governance layer that keeps quality consistent, and a shared bench of senior specialist skills every engagement can reach.",
};

export default function DeliveryModelPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Delivery & execution
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Advice is easy to sell and hard to{" "}
              <span className="text-blue">value</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Pivora&apos;s difference is operating depth: dedicated client
              pods that sell, a governance layer that keeps quality
              consistent across them, and a shared services bench that gives
              every client access to senior specialist skills they could not
              justify carrying full time.
            </p>
          </Reveal>
          <Reveal delay={0.2} mode="mount">
            <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
              {DELIVERY_STANDARD.map((s) => (
                <li key={s} className="ev flex items-center gap-2.5 text-ink-2">
                  <span aria-hidden className="size-1.5 shrink-0 bg-blue" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── THE ENGINE ───────────────────────────────────────────────────
          Dark, because this is the machinery. The boundary between what
          sits inside the client's business and what is reached for is the
          whole point of the section. */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask" className="max-w-[46rem]">
            <p className="ev flex items-center gap-3 text-bone-2">
              <span aria-hidden className="h-px w-8 bg-blue-lift" />
              The execution engine
            </p>
            <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
              A pod inside your business, backed by a bench outside it.
            </h2>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
              The dedicated pod is yours — named people, in your deals, on
              your forecast. The bench is not headcount you pay for; it is
              expertise you reach for when a pursuit needs it. Pod sizes are
              illustrative and the model scales up or down per client.
            </p>
          </Reveal>

          <EngineMap />
        </div>
      </section>

      {/* ── THE DE-RISKING EQUATION — §21.2 ──────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The de-risking equation</p>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Two risks removed. Two commitments made.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-rule md:grid-cols-2">
            {/* removed */}
            <div className="bg-paper-2 pt-8 md:pr-10">
              <p className="ev flex items-center gap-2.5 text-ink-2">
                <span aria-hidden className="h-px w-6 bg-ink-2" />
                What comes off your books
              </p>
              <StaggerList className="mt-6">
                {DERISK.removed.map((r) => (
                  <StaggerRow
                    key={r.risk}
                    className="group flex gap-4 border-t border-rule py-6 last:border-b"
                  >
                    <span aria-hidden className="mt-px shrink-0 font-mono text-ink-2">
                      ✕
                    </span>
                    <div>
                      <p className="text-[1.125rem] leading-snug text-ink-2">
                        <span className="strike-lines [--strike-color:var(--color-blue)]">
                          {r.risk}
                        </span>
                      </p>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                        {r.body}
                      </p>
                    </div>
                  </StaggerRow>
                ))}
              </StaggerList>
              <div className="h-8" />
            </div>

            {/* committed */}
            <div className="bg-paper-2 pt-8 md:pl-10">
              <p className="ev flex items-center gap-2.5 text-blue">
                <span aria-hidden className="h-px w-6 bg-blue" />
                What you get in exchange
              </p>
              <StaggerList className="mt-6">
                {DERISK.committed.map((c) => (
                  <StaggerRow
                    key={c.value}
                    className="group flex gap-4 border-t border-rule py-6 last:border-b"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-6 shrink-0 origin-left bg-blue transition-transform duration-500 group-hover:scale-x-150"
                    />
                    <div>
                      <p className="text-[1.125rem] leading-snug text-ink">
                        {c.value}
                      </p>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                        {c.body}
                      </p>
                    </div>
                  </StaggerRow>
                ))}
              </StaggerList>
              <div className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR ASKS — §21.1 ─────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">Our asks</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                What we need from you, said up front.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                A pod only works if it operates as part of your organisation
                rather than alongside it. These are the conditions for that,
                and they are in the proposal rather than discovered in month
                three.
              </p>
            </Reveal>

            <StaggerList className="self-start">
              {CLIENT_ASKS.map((a, i) => (
                <StaggerRow
                  key={a.ask}
                  className="group grid gap-x-8 gap-y-2 border-t border-rule py-6 last:border-b sm:grid-cols-[3rem_1fr]"
                >
                  <span className="ev text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[1.125rem] leading-snug text-ink">
                      {a.ask}
                    </p>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                      {a.means}
                    </p>
                  </div>
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
                The engine only matters if the pipeline going through it is
                real.
              </p>
              <Link
                href="/engagements"
                className="wipe shrink-0 border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                How engagements are scoped
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
