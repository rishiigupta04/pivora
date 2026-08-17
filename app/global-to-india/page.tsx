import type { Metadata } from "next";
import Link from "next/link";
import Cited from "@/components/Cited";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { CORRIDORS, MARKET, TRACKS, SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Global Platforms → India",
  description:
    "Pivora builds the India entry and scale engine for global Enterprise B2B platforms — through Indian enterprises, Global Capability Centres and Global System Integrators.",
};

const [corridor] = CORRIDORS;

/* The four figures a global platform's board will ask about, in the order
   they get asked. Every one carries its source (§20). */
const EVIDENCE = [
  MARKET.itSpend,
  MARKET.itSpend2026,
  MARKET.gccCount,
  MARKET.digitalRevenue,
];

export default function GlobalToIndiaPage() {
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
            01
          </span>
        </Float>

        <div className="relative mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Corridor 01 — Global → India
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Enter India properly, or don&apos;t{" "}
              <span className="text-blue">enter it</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              {corridor.audience} The market is big enough to deserve a real
              investment and unforgiving enough to expose a half one — a
              country hire, a target and a partner list is not a
              go-to-market engine.
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

      {/* ── THE EVIDENCE — §20.1 ─────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The opportunity</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              The case for India, in numbers a CIO can check.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {EVIDENCE.map((s, i) => (
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
            ))}
          </div>

          <Reveal className="mt-16 border-t border-rule pt-8">
            <p className="max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              India is also projected to become the world&apos;s{" "}
              <span className="text-ink">third-largest economy by 2027</span>{" "}
              on IMF, EY and Morgan Stanley projections — useful context for a
              board paper, and attributable when someone asks where it came
              from.
            </p>
            <Link
              href="/market"
              className="wipe mt-6 inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              The India opportunity in full
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT PIVORA DOES ─────────────────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.35fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
              <p className="ev flex items-center gap-3 text-bone-2">
                <span aria-hidden className="h-px w-8 bg-gold" />
                The build
              </p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                {corridor.does}
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                This is the Build phase of Built–Operate–Sustain, applied to a
                market entry. It ends with a documented blueprint and an
                executable plan — not a recommendation deck.
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

      {/* ── THE THREE TRACKS ─────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">Where the revenue comes from</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Three tracks, and they do not buy the same way.
            </h2>
          </Reveal>

          <StaggerList className="mt-12 grid gap-px bg-rule md:grid-cols-3">
            {TRACKS.map((t) => (
              <StaggerRow key={t.id} className="bg-paper">
                <Link
                  href={`/gcc-gsi#${t.id}`}
                  className="group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-paper-2 lg:p-8"
                >
                  <p className="ev flex items-center gap-2.5 text-blue">
                    <span
                      aria-hidden
                      className="h-px w-5 origin-left bg-blue transition-transform duration-500 group-hover:scale-x-[1.8]"
                    />
                    {t.n}
                  </p>
                  <h3 className="mt-4 font-display text-[1.5rem] leading-tight">
                    {t.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-snug text-ink-2">
                    {t.line}
                  </p>
                  <p className="mt-6 flex gap-3 border-t border-rule pt-4 text-[0.9375rem] leading-snug text-ink">
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 border border-blue"
                    />
                    {t.multiplier}
                  </p>
                </Link>
              </StaggerRow>
            ))}
          </StaggerList>
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
              {SERVICES.slice(0, 3).map((s) => (
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
                Building an India business is an operating investment. If you
                are ready to make one, we should talk.
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
