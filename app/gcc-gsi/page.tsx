import type { Metadata } from "next";
import Link from "next/link";
import EcosystemFlow from "@/components/EcosystemFlow";
import PartnerLadder from "@/components/PartnerLadder";
import {
  CountUp,
  Float,
  Reveal,
  Stagger,
  StaggerItem,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { TRACKS, PARTNER_SCORECARD } from "@/lib/content";

export const metadata: Metadata = {
  title: "GCC & GSI Ecosystem",
  description:
    "India's Global Capability Centres and Global System Integrators are growth multipliers, not partner logos. How Pivora turns each of the three tracks into pipeline.",
};

/**
 * Each track gets its own ground rather than its own tab. Giving each one a
 * full section — and alternating the ground under it — makes the three feel
 * genuinely distinct while leaving nothing gated behind a selector.
 */
const TONE = [
  {
    section: "bg-paper",
    ghost: "text-blue/[0.07]",
    accent: "text-blue",
    bullet: "bg-blue",
    rule: "border-rule",
    body: "text-ink-2",
    head: "text-ink",
  },
  {
    section: "on-carbon bg-carbon",
    ghost: "text-bone/[0.06]",
    accent: "text-gold",
    bullet: "bg-gold",
    rule: "border-rule-dark",
    body: "text-bone-2",
    head: "text-bone",
  },
  {
    section: "bg-paper-2",
    ghost: "text-blue/[0.08]",
    accent: "text-blue",
    bullet: "bg-blue",
    rule: "border-rule",
    body: "text-ink-2",
    head: "text-ink",
  },
] as const;

export default function GccGsiPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              The ecosystem
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              India revenue is not one market. It is{" "}
              <span className="text-blue">three</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Indian enterprises, Global Capability Centres and Global System
              Integrators buy differently, on different timelines, for
              different reasons. Treating them as one funnel is the most
              common and most expensive mistake we see — and each of the three
              is a route to something larger than the first deal.
            </p>
          </Reveal>
        </div>

        {/* the flow — the whole argument in one picture */}
        <div className="mx-auto max-w-wide px-6 pb-16 lg:px-10 lg:pb-20">
          <EcosystemFlow />
        </div>

        {/* index — the three tracks at a glance before the depth */}
        <Stagger className="mx-auto grid max-w-wide gap-px bg-rule sm:grid-cols-3">
          {TRACKS.map((t) => (
            <StaggerItem key={t.id} className="bg-paper">
              <a
                href={`#${t.id}`}
                className="group flex h-full items-baseline gap-4 px-6 py-7 transition-colors duration-500 hover:bg-paper-2 lg:px-10"
              >
                <span className="font-display text-[2.25rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                  {t.n}
                </span>
                <span className="flex-1">
                  <span className="block text-[1.0625rem] leading-snug text-ink">
                    {t.name}
                  </span>
                  <span className="ev mt-1.5 block text-[0.5rem] text-ink-2">
                    {t.short}
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── ONE SECTION PER TRACK ────────────────────────────────────── */}
      {TRACKS.map((t, i) => {
        const tone = TONE[i];
        const flip = i === 1;
        return (
          <section
            key={t.id}
            id={t.id}
            className={`relative scroll-mt-20 overflow-hidden border-b ${tone.rule} ${tone.section}`}
          >
            {/* the numeral, floating, oversized */}
            <Float
              amplitude={10}
              duration={9 + i}
              delay={i * 0.6}
              className="pointer-events-none absolute -top-10 right-2 select-none lg:right-10"
            >
              <span
                aria-hidden
                className={`font-display text-[13rem] leading-none lg:text-[20rem] ${tone.ghost}`}
              >
                {t.n}
              </span>
            </Float>

            <div className="relative mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
              <div
                className={`grid gap-10 md:gap-12 lg:gap-20 ${
                  flip
                    ? "md:grid-cols-[1fr_1.15fr]"
                    : "md:grid-cols-[1.15fr_1fr]"
                }`}
              >
                <Reveal kind="mask" className={flip ? "md:order-2" : undefined}>
                  <p className={`ev flex items-center gap-3 ${tone.accent}`}>
                    <span aria-hidden className={`h-px w-8 ${tone.bullet}`} />
                    Track {t.n}
                  </p>
                  <h2
                    className={`mt-6 max-w-[14ch] text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.02] ${tone.head}`}
                  >
                    {t.name}
                  </h2>
                  <p
                    className={`mt-7 max-w-measure text-[1.0625rem] leading-relaxed ${tone.body}`}
                  >
                    {t.thesis}
                  </p>

                  {t.proof ? (
                    <div className={`mt-10 border-t pt-7 ${tone.rule}`}>
                      <p
                        className={`font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none tabular-nums ${tone.head}`}
                      >
                        <CountUp value={t.proof.value} />
                      </p>
                      <p
                        className={`mt-3 max-w-[32ch] text-sm leading-snug ${tone.body}`}
                      >
                        {t.proof.label}
                      </p>
                      <p className={`ev mt-2 text-[0.5rem] ${tone.body}`}>
                        Source — {t.proof.source}
                      </p>
                    </div>
                  ) : t.noProof ? (
                    /* Fallback for a track whose figure has been pulled.
                       Saying the market is unmeasured is stronger than
                       borrowing an unrelated number to fill the space. */
                    <div className={`mt-10 border-t pt-7 ${tone.rule}`}>
                      <p className={`ev ${tone.accent}`}>An unmeasured market</p>
                      <p
                        className={`mt-3 max-w-[36ch] text-[1.0625rem] leading-relaxed ${tone.body}`}
                      >
                        {t.noProof}
                      </p>
                    </div>
                  ) : null}

                  <p
                    className={`mt-8 flex gap-3 border-t pt-6 text-[1.0625rem] leading-snug ${tone.rule} ${tone.head}`}
                  >
                    <span
                      aria-hidden
                      className={`mt-2 size-1.5 shrink-0 border ${
                        i === 1 ? "border-gold" : "border-blue"
                      }`}
                    />
                    {t.multiplier}
                  </p>
                </Reveal>

                <div className={flip ? "md:order-1" : undefined}>
                  <p className={`ev border-b pb-4 ${tone.rule} ${tone.body}`}>
                    How we work this track
                  </p>
                  <StaggerList>
                    {t.motion.map((m) => (
                      <StaggerRow
                        key={m}
                        className={`group flex gap-5 border-b py-5 ${tone.rule}`}
                      >
                        <span
                          aria-hidden
                          className={`mt-2.5 h-px w-6 shrink-0 origin-left transition-transform duration-500 group-hover:scale-x-150 ${tone.bullet}`}
                        />
                        <span
                          className={`text-[1.0625rem] leading-snug ${tone.head}`}
                        >
                          {m}
                        </span>
                      </StaggerRow>
                    ))}
                  </StaggerList>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── PARTNER MATURITY LADDER — §8 ─────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">Partner maturity</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              The objective is not to collect{" "}
              <span className="text-blue">partner logos</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              An unsupported partnership produces an announcement and no
              revenue. Every partner sits somewhere on this ladder, and the
              only question worth asking each quarter is whether it moved.
            </p>
          </Reveal>

          <PartnerLadder />
        </div>
      </section>

      {/* ── PARTNER SCORECARD ────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The scorecard</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Nine things we track on every partner.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                Reviewed quarterly, with the partner in the room. A
                relationship that cannot fill this in is a relationship that
                is not producing anything.
              </p>
            </Reveal>

            <StaggerList className="grid gap-px self-start bg-rule sm:grid-cols-2 lg:grid-cols-3">
              {PARTNER_SCORECARD.map((s, i) => (
                <StaggerRow
                  key={s}
                  className="group bg-paper-2 p-5 transition-colors duration-500 hover:bg-paper"
                >
                  <span className="ev text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2.5 text-[1.0625rem] leading-snug text-ink">
                    {s}
                  </p>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── THE MULTIPLIER ───────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The multiplier</p>
              <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02]">
                Every track opens <span className="text-blue">twice</span>.
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-2"
            >
              <p>
                An enterprise win produces a reference that travels across a
                sector. A GCC win puts your platform in front of the parent
                company&apos;s global architecture function. A properly built
                integrator practice carries you into deals you were never
                invited to.
              </p>
              <p className="text-ink">
                This is why India is a launchpad rather than a territory. The
                revenue is worth having. The route to global scale that comes
                with it is worth more.
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
              <p className="max-w-[40ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                Picking which track to open first is a qualification decision,
                not a marketing one.
              </p>
              <Link
                href="/platform-growth"
                className="wipe shrink-0 border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                How we sequence it
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
