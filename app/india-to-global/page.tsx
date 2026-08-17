import type { Metadata } from "next";
import Link from "next/link";
import Cited from "@/components/Cited";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { CORRIDORS, MARKET, SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Indian Platforms → Global",
  description:
    "Pivora helps Indian Enterprise B2B platforms use India as the foundation for international expansion — global ICP, market-entry sequencing, enterprise references and partner-led growth.",
};

const corridor = CORRIDORS[1];

/**
 * §20.3 — the India multiplier. Loops 01 and 02 rest on the verified GCC
 * and alliance facts in §20.1. Loops 03 and 04 are standard
 * enterprise-platform reference mechanics, and the brief is explicit that
 * they are to be presented as strategy rather than as statistics — so they
 * are labelled that way on the page rather than quietly blended in.
 */
const LOOPS = [
  {
    n: "01",
    head: "A GCC win reaches the parent",
    body: "A Global Capability Centre is often the global process owner and the technology decision influencer for its parent enterprise. Winning the India arm puts your platform in front of the group that decides what gets adopted everywhere else.",
    basis: "verified",
    stat: MARKET.gccCount,
  },
  {
    n: "02",
    head: "A GSI carries you into its own accounts",
    body: "An integrator that has built a practice around your platform here has a commercial reason to take it into its global client base. That is a different economic relationship from a reseller agreement.",
    basis: "verified",
    stat: MARKET.gccRevenue,
  },
  {
    n: "03",
    head: "An enterprise reference travels",
    body: "A named Indian bank, manufacturer or telecom that runs your platform in production is a reference an international prospect will take a call about. Sector peers listen to sector peers.",
    basis: "strategy",
    stat: null,
  },
  {
    n: "04",
    head: "A proven playbook replicates",
    body: "Once you have documented why customers bought, who influenced the deal and what the objection patterns were, the next market is a sequencing exercise rather than a fresh start.",
    basis: "strategy",
    stat: null,
  },
];

export default function IndiaToGlobalPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule">
        <Float
          amplitude={12}
          duration={12}
          className="pointer-events-none absolute -top-24 right-0 select-none"
        >
          <span
            aria-hidden
            className="font-display text-[13rem] leading-none text-blue/[0.06] lg:text-[20rem]"
          >
            02
          </span>
        </Float>

        <div className="relative mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Corridor 02 — India → Global
            </p>
            <h1 className="mt-7 max-w-[15ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              India is not the ceiling. It is the{" "}
              <span className="text-blue">launchpad</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              {corridor.audience} The hard part is rarely the ambition. It is
              that international expansion gets attempted in every direction
              at once, and the references that won India were never built to
              travel.
            </p>
          </Reveal>
          <Reveal delay={0.2} mode="mount">
            <p className="mt-8 max-w-measure border-l-2 border-blue pl-6 text-[1.0625rem] leading-relaxed text-ink">
              <span className="ev block text-ink-2">Commercial objective</span>
              <span className="mt-2.5 block">{corridor.objective}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE INDIA MULTIPLIER — §20.3 ─────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The India multiplier</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              An India win is not a{" "}
              <span className="text-blue">local win</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              Because of how GCCs, integrators and reference selling actually
              work, each success here compounds outward. The first two loops
              are measurable. The second two are how enterprise platforms
              travel, and you should weigh them differently.
            </p>
          </Reveal>

          <StaggerList className="mt-14">
            {LOOPS.map((l) => (
              <StaggerRow
                key={l.n}
                className="group grid items-baseline gap-x-10 gap-y-4 border-t border-rule py-8 last:border-b lg:grid-cols-[4rem_1.2fr_1fr]"
              >
                <span className="font-display text-[2.25rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                  {l.n}
                </span>
                <div>
                  <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] leading-snug">
                    {l.head}
                  </h3>
                  <p className="mt-3 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                    {l.body}
                  </p>
                </div>

                <div>
                  {l.stat ? (
                    <>
                      <p className="font-display text-[2rem] leading-none tabular-nums text-ink">
                        {l.stat.value}
                      </p>
                      <p className="mt-2.5 max-w-[26ch] text-sm leading-snug text-ink-2">
                        {l.stat.label}
                      </p>
                      <p className="ev mt-2 text-[0.5rem] text-ink-2">
                        Source — {l.stat.source}
                      </p>
                    </>
                  ) : (
                    <p className="ev border border-rule px-3 py-2 text-[0.5rem] leading-relaxed text-ink-2">
                      Mechanics, not a measured figure
                    </p>
                  )}
                </div>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── WHAT PIVORA DOES ─────────────────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.35fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
              <p className="ev flex items-center gap-3 text-bone-2">
                <span aria-hidden className="h-px w-8 bg-gold" />
                The expansion
              </p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                {corridor.does}
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                Sequenced, not simultaneous. One market at a time, chosen
                against what your existing proof will actually carry — and a
                global operating model your own team ends up running.
              </p>
            </Reveal>

            <StaggerList ordered>
              {corridor.motion.map((m, i) => (
                <StaggerRow
                  key={m}
                  className="group flex items-baseline gap-6 border-t border-rule-dark py-6 last:border-b"
                >
                  <span className="ev text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1.0625rem,1.7vw,1.25rem)] leading-snug text-bone">
                    {m}
                  </span>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── THE HOME MARKET ──────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The base you are building from</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                The domestic market is getting more valuable, not less.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                Going global is not a reason to stop compounding here. The
                same accounts that fund the expansion are the ones that
                produce the references it depends on.
              </p>
            </Reveal>

            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {[MARKET.softwareGrowth, MARKET.gcc2030, MARKET.gccPeople, MARKET.thirdEconomy].map(
                (s, i) => (
                  <Float
                    key={s.label}
                    amplitude={5 + i}
                    duration={8 + i}
                    delay={i * 0.5}
                  >
                    <div className="lift">
                      <Cited stat={s} size="sm" />
                    </div>
                  </Float>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH CAPABILITIES APPLY ─────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The work</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Which capabilities this corridor draws on.
              </h2>
            </Reveal>
            <StaggerList>
              {[SERVICES[3], SERVICES[2], SERVICES[1]].map((s) => (
                <StaggerRow
                  key={s.id}
                  className="border-t border-rule py-6 last:border-b"
                >
                  <Link
                    href={`/what-we-do#${s.id}`}
                    className="group flex items-baseline gap-6"
                  >
                    <span className="ev text-blue">{s.n}</span>
                    <span className="flex-1">
                      <span className="block font-display text-[1.375rem] leading-snug transition-transform duration-500 group-hover:translate-x-1">
                        {s.name}
                      </span>
                      <span className="mt-2 block text-[0.9375rem] leading-snug text-ink-2">
                        {s.line}
                      </span>
                    </span>
                  </Link>
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
              <p className="max-w-[40ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                If India proved the platform works, the next question is which
                market proves it travels.
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
