import Link from "next/link";
import Image from "next/image";
import Cited from "@/components/Cited";
import CorridorMap from "@/components/CorridorMap";
import EcosystemFlow from "@/components/EcosystemFlow";
import Handover from "@/components/Handover";
import NotAList from "@/components/NotAList";
import {
  Float,
  Parallax,
  Reveal,
  Stagger,
  StaggerItem,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import {
  MARKET,
  EXECUTION_GAP_BASE,
  NOT_A,
  CORRIDORS,
  SERVICES,
  PRINCIPLES,
  TRACKS,
  AI_SERVICES,
  CASE_PLACEHOLDER,
  INSIGHT_PILLARS,
} from "@/lib/content";

/**
 * Home carries the entire argument, in the order §4.3 sets out: hero, the
 * two-way proposition, the service architecture, the operating model, why
 * Pivora, the ecosystem, proof, insights, and one closing CTA.
 *
 * Each block summarises and then routes to its dedicated page. A visitor
 * should be able to decide whether to keep reading without making a single
 * navigation decision — but the depth lives on the pages, not here.
 */

/* §4.2 — the proof-of-model strip. */
const STRIP = ["Selective", "Specialist", "Outcome-led", "Ecosystem-connected"];

export default function Home() {
  return (
    <>
      {/* ── HERO — §4.1 ──────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center border-b border-rule">
        <div className="mx-auto grid w-full max-w-wide items-center gap-12 px-6 py-14 md:grid-cols-[1.6fr_1fr] md:gap-14 lg:gap-20 lg:px-10">
          <div>
            {/* Not an eyebrow label. The site's own gesture — a struck
                negation — stating §1.4's selectivity in the first second,
                before the headline has to. */}
            <Reveal kind="mask" mode="mount">
              <p className="flex flex-wrap items-baseline gap-x-5 gap-y-1 font-display text-[clamp(1.25rem,2.1vw,1.75rem)] leading-tight tracking-[-0.02em]">
                <span className="text-ink">Platform growth specialists.</span>
                <span className="strike-lines strike-draw [--strike-color:var(--color-blue)] text-ink-2/75">
                  Not a consultancy.
                </span>
              </p>
              <h1 className="mt-6 text-[clamp(2.375rem,4.9vw,4.25rem)] leading-[0.98] text-balance">
                <span className="block text-ink">Enterprise B2B platforms.</span>
                <span className="block text-blue">India to global.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12} mode="mount">
              <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
                We help high-value Enterprise B2B platform companies enter,
                scale and create measurable growth through India — its
                enterprises, its Global Capability Centres and its Global
                System Integrators. And we help Indian platforms use India as
                a{" "}
                <em className="font-display text-[1.15em] leading-none italic text-ink">
                  launchpad
                </em>{" "}
                for global enterprise growth.
              </p>
            </Reveal>

            {/* §4.1 — the dual CTA. Both directions of the corridor are a
                decision the visitor makes here, not a menu item they have to
                go looking for. */}
            <Reveal delay={0.2} mode="mount">
              <div className="mt-9 grid gap-px border border-rule bg-rule sm:grid-cols-2">
                {CORRIDORS.map((c) => (
                  <Link
                    key={c.id}
                    href={`/${c.id}`}
                    className="group relative overflow-hidden bg-paper p-6 transition-colors duration-500 hover:bg-paper-2"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-blue transition-transform duration-700 ease-out group-hover:scale-x-100"
                    />
                    <p className="ev flex items-center gap-2.5 text-ink-2">
                      <span aria-hidden className="h-px w-5 bg-blue" />
                      For {c.from === "Global" ? "global" : "Indian"} platforms
                    </p>
                    <p className="mt-3.5 font-display text-[1.25rem] leading-snug transition-transform duration-500 ease-out group-hover:translate-x-1">
                      Build your{" "}
                      {c.from === "Global" ? "India" : "global"} growth engine
                      <span
                        aria-hidden
                        className="ml-2 inline-block text-blue transition-transform duration-500 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* The founder, immediately. This is a founder-led firm and the
              portrait is the only thing on the site that isn't type — it
              carries the whole right column and stops the page opening on
              a wall of words. §14.6: photography, used sparingly. */}
          <Reveal delay={0.26} mode="mount">
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
                  // The studio background is a cool white that fights the warm
                  // paper ground. Pulling saturation down and warmth up makes
                  // the portrait sit in the palette instead of on top of it.
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
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-rule pt-3">
                <span className="text-[1.0625rem] text-ink">Subrato Bandhu</span>
                <span className="ev text-right text-[0.5rem] text-ink-2">
                  Founder
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── PROOF-OF-MODEL STRIP — §4.2 ──────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <ul className="mx-auto flex max-w-wide flex-wrap items-center gap-x-10 gap-y-3 px-6 py-6 lg:px-10">
          {STRIP.map((s) => (
            <li key={s} className="ev flex items-center gap-2.5 text-ink-2">
              <span aria-hidden className="size-1.5 shrink-0 bg-blue" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* ── THE TWO-WAY PROPOSITION — §1.3 ───────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The proposition</p>
            <h2 className="mt-6 max-w-[17ch] text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.03]">
              One firm, <span className="text-blue">two directions</span> of
              value.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              Global platforms come to India for a market and find an
              ecosystem. Indian platforms already have the ecosystem and need
              a route out of it. Pivora is the hub both directions run
              through — the same enterprise, GCC and GSI relationships,
              worked from opposite ends.
            </p>
          </Reveal>

          <CorridorMap />

          <Reveal className="mt-12 flex flex-wrap gap-x-10 gap-y-3">
            {CORRIDORS.map((c) => (
              <Link
                key={c.id}
                href={`/${c.id}`}
                className="wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                Explore {c.from} → {c.to}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── THE EXECUTION GAP — §20.2 ────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div>
              <p className="ev reveal text-ink-2">The execution gap</p>
              <h2 className="rise mt-6 max-w-[15ch] text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.03]">
                Demand is not the problem. Execution is.
              </h2>
              <div className="reveal reveal-2 mt-10 space-y-5 text-[1.0625rem] leading-relaxed text-ink-2">
                <p>
                  Many platform companies enter a market with a strategy
                  document, a country hire and a partner list. That is not a
                  GTM engine. The gap appears between strategy and execution —
                  positioning is weak, pipeline is inconsistent, partners are
                  inactive, enterprise access is shallow, deals stall, and the
                  organisation becomes dependent on a few individuals.
                </p>
                <p className="text-ink">
                  The numbers beside this are what that costs, measured across
                  240 Indian enterprises. Built–Operate–Sustain exists to close
                  that gap.
                </p>
              </div>
            </div>

            {/* The figures are deliberately off-grid and drifting at
                different rates. A tidy 2×2 of numbers reads as a table;
                staggered and moving, they read as the problem circling
                you — which is what the copy beside them is describing. */}
            <div className="relative self-start">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-6 hidden size-64 rounded-full border border-rule lg:block"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute top-40 -left-10 hidden size-40 rounded-full border border-rule/70 lg:block"
              />

              <div className="relative grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-12">
                <Float amplitude={7} duration={7.5}>
                  <div className="lift">
                    <Cited stat={MARKET.delays} size="md" />
                  </div>
                </Float>

                <Float amplitude={9} duration={9} delay={0.8}>
                  <div className="lift reveal-2 mt-10 sm:mt-16">
                    <Cited stat={MARKET.overrun} size="md" />
                  </div>
                </Float>

                <Float amplitude={8} duration={8.5} delay={1.6}>
                  <div className="lift reveal-3 rule-t pt-10 sm:pt-14">
                    <Cited stat={MARKET.costOverrun} size="md" />
                  </div>
                </Float>

                <Float amplitude={6} duration={10} delay={2.4}>
                  <div className="lift reveal-4 rule-t mt-10 pt-10 sm:mt-16 sm:pt-14">
                    <Cited stat={MARKET.loss} size="md" />
                  </div>
                </Float>
              </div>

              <p className="ev mt-12 border-t border-rule pt-4 text-[0.5625rem] leading-relaxed text-ink-2">
                {EXECUTION_GAP_BASE}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE NEGATION — §1.4 ──────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <p className="ev reveal text-ink-2">What Pivora is not</p>
          <NotAList items={NOT_A} />

          <div className="mt-16 grid gap-10 border-t border-rule pt-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <h2 className="reveal text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.08]">
              Pivora is a <span className="text-blue">specialist</span>.
            </h2>
            <div className="reveal reveal-2 space-y-5 text-[1.0625rem] leading-relaxed text-ink-2">
              <p>
                One category, worked properly: high-value Enterprise B2B
                platform products. Not a broad services catalogue, not a
                strategy deck with a recommendation at the back, and not an
                agency that reports activity metrics without being
                accountable for the commercial result.
              </p>
              <p className="text-ink">
                Selectivity is not modesty. It is the{" "}
                <em className="font-display text-[1.2em] leading-none italic">
                  value proposition
                </em>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — §3.4 ────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 lg:px-10 lg:pt-32">
          <p className="ev reveal text-ink-2">What we do</p>
          <h2 className="rise mt-6 max-w-[18ch] text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.03]">
            Four capabilities. Not twenty{" "}
            <span className="text-blue">offerings</span>.
          </h2>
          <p className="reveal reveal-2 mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
            A narrow service architecture is a deliberate choice. Each of
            these answers the same three questions: what problem it solves,
            what Pivora actually does, and what measurable outcome you should
            expect.
          </p>
        </div>

        <Stagger className="mx-auto mt-14 max-w-wide px-6 lg:px-10">
          {SERVICES.map((s) => (
            <StaggerItem key={s.id} className="border-t border-rule">
              <Link
                href={`/what-we-do#${s.id}`}
                className="group relative grid items-baseline gap-x-8 gap-y-4 py-9 transition-[background-color,padding] duration-500 ease-out md:grid-cols-[6rem_1fr_18rem] lg:py-11 lg:hover:px-6"
              >
                {/* A rule that sweeps the full row on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-blue transition-transform duration-700 ease-out group-hover:scale-x-100"
                />

                {/* /55 is the lowest this can go and still clear 3:1 for
                    large text — the ghosted-to-solid effect survives, the
                    illegibility doesn't. */}
                <span className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none tabular-nums text-blue/70 transition-colors duration-500 group-hover:text-blue">
                  {s.n}
                </span>

                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.9vw,2.125rem)] leading-[1.12] transition-transform duration-500 ease-out lg:group-hover:translate-x-1">
                    {s.name}
                  </h3>
                  <p className="mt-2.5 max-w-[42ch] text-[1.0625rem] leading-snug text-ink-2">
                    {s.line}
                  </p>
                </div>

                <p className="text-[0.9375rem] leading-snug text-ink-2 md:text-right">
                  <span className="ev block text-[0.5rem]">Outcome</span>
                  <span className="mt-2 block">{s.outcome}</span>
                </p>
              </Link>
            </StaggerItem>
          ))}

          <StaggerItem>
            <Link
              href="/what-we-do"
              className="wipe mt-8 inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              The four capabilities in full
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── BUILT–OPERATE–SUSTAIN — §5 ───────────────────────────────────
          The descent into the machine room, and the signature sequence.
          The reader does nothing but keep scrolling. */}
      <div className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 pt-20 pb-4 lg:px-10 lg:pt-28">
          <p className="ev reveal text-bone-2">The operating model</p>
          <h2 className="reveal reveal-2 mt-6 max-w-[19ch] text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.03] text-bone">
            We don&apos;t just design the GTM.{" "}
            <span className="text-gold">We build it and run it.</span>
          </h2>
          <p className="reveal reveal-3 mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
            Built–Operate–Sustain answers the question that decides every
            engagement: can you actually create growth, or will you simply
            give us a strategy deck? Three phases. Our share of the work
            falls at every one, because your capability is rising — and that
            direction is agreed up front rather than argued about later.
          </p>

          <Handover />

          <div className="rule-t mt-12 flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[44ch] font-display text-xl leading-snug text-bone">
              Sustain is not an exit. Your dependence on us falls because your
              capability rises.
            </p>
            <Link
              href="/built-operate-sustain"
              className="ev shrink-0 border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
            >
              The model in full →
            </Link>
          </div>
        </div>

        {/* Why Pivora — §4.4 Section 05, still in the machine room. */}
        <section className="mx-auto max-w-wide px-6 pt-20 pb-24 lg:px-10 lg:pt-24 lg:pb-32">
          <div className="grid gap-12 border-t border-rule-dark pt-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
            <div>
              <p className="ev reveal text-bone-2">Why Pivora</p>
              <h2 className="reveal reveal-2 mt-6 text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05] text-bone">
                Four principles, and each one costs us something.
              </h2>
              <Link
                href="/why-pivora"
                className="ev reveal reveal-3 mt-8 inline-block border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
              >
                What that rules out →
              </Link>
            </div>

            <StaggerList ordered>
              {PRINCIPLES.map((p) => (
                <StaggerRow
                  key={p.n}
                  className="group grid gap-4 border-t border-rule-dark py-7 last:border-b sm:grid-cols-[4rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-[2.25rem] leading-none text-gold/70 transition-colors duration-500 group-hover:text-gold">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-[1.375rem] leading-snug text-bone">
                      {p.head}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-bone-2">
                      {p.body}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </section>
      </div>

      {/* ── THE ECOSYSTEM — §8 ───────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The ecosystem</p>
            <h2 className="mt-6 max-w-[17ch] text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.03]">
              India revenue is not one market. It is{" "}
              <span className="text-blue">three</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              Indian enterprises, Global Capability Centres and Global System
              Integrators buy differently, on different timelines, for
              different reasons. Treating them as one funnel is the most
              common and most expensive mistake in the market — and each one
              opens a second door beyond the first.
            </p>
          </Reveal>

          <EcosystemFlow />

          <StaggerList className="mt-16 grid gap-px bg-rule md:grid-cols-3">
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
                    Track {t.n}
                  </p>
                  <h3 className="mt-4 font-display text-[1.5rem] leading-tight">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-snug text-ink-2">
                    {t.line}
                  </p>
                </Link>
              </StaggerRow>
            ))}
          </StaggerList>

          <Reveal className="mt-10">
            <Link
              href="/gcc-gsi"
              className="wipe inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              How we work each track
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── NICHE AI — §9 ────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="relative mx-auto max-w-wide overflow-hidden px-6 py-16 lg:px-10 lg:py-28">
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

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
            <div>
              <p className="ev reveal text-ink-2">Niche AI value services</p>
              <h2 className="reveal reveal-2 mt-6 text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05]">
                AI should create enterprise value, not{" "}
                <span className="text-blue">another AI project</span>.
              </h2>
              <p className="reveal reveal-3 mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                Pivora carries AI only where it materially strengthens a
                differentiated platform or creates a high-value GTM wedge.
                Five services, deliberately narrow — and a gate in front of
                them that turns most requests down.
              </p>
              <Link
                href="/niche-ai"
                className="wipe reveal reveal-4 mt-8 inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                The five services, and the gate
              </Link>
            </div>

            <StaggerList>
              {AI_SERVICES.map((s) => (
                <StaggerRow
                  key={s.n}
                  className="group flex items-baseline gap-6 border-t border-rule py-5 last:border-b"
                >
                  <span className="ev text-blue">{s.n}</span>
                  <div className="flex-1">
                    <p className="text-[1.125rem] leading-snug text-ink">
                      {s.name}
                    </p>
                    <p className="mt-1.5 text-[0.9375rem] leading-snug text-ink-2">
                      {s.outcome}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── PROOF — §10 ────────────────────────────────────────────────
          What is said here is about how Pivora treats a client's name, not
          about how this page was written. The discipline shows in what the
          site does — sources beside every figure, no logos we were not
          given — rather than in a claim that it has any. */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">Proof</p>
              <h2 className="mt-6 max-w-[16ch] text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05]">
                We won&apos;t put your logo on a{" "}
                <span className="text-blue">slide</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="self-end">
              <p className="text-[1.0625rem] leading-relaxed text-ink-2">
                {CASE_PLACEHOLDER}
              </p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink">
                A client is named only with written permission, and a number
                is published only once that client has approved it. The
                restraint you are looking at is the same restraint you would
                be buying.
              </p>
              <Link
                href="/case-studies"
                className="wipe mt-8 inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                How we handle references
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS — §3.3 ──────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">Insights</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Six pillars we have a position on.
            </h2>
          </Reveal>

          <StaggerList className="mt-12 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHT_PILLARS.map((p) => (
              <StaggerRow key={p.n} className="bg-paper-2 p-7">
                <p className="ev text-blue">{p.n}</p>
                <h3 className="mt-3.5 font-display text-[1.375rem] leading-snug">
                  {p.pillar}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-snug text-ink-2">
                  {p.themes}
                </p>
              </StaggerRow>
            ))}
          </StaggerList>

          <Reveal className="mt-10">
            <Link
              href="/insights"
              className="wipe inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              Where the writing is going
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA — §4.4 Section 08 ────────────────────────────────────── */}
      <section className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-24">
            <h2 className="rise text-[clamp(2.25rem,5vw,4rem)] leading-[1.01] text-bone">
              Have an exceptional Enterprise B2B platform?{" "}
              <span className="text-gold">Let&apos;s build the growth path.</span>
            </h2>
            <div className="reveal reveal-2">
              <p className="text-[1.0625rem] leading-relaxed text-bone-2">
                Tell us what you are building and where you have got to. We
                are deliberately selective, so if we are not the right partner
                you will hear that in the first conversation rather than the
                third.
              </p>
              <Link
                href="/contact"
                className="fill-up mt-8 inline-block bg-bone px-7 py-4 text-[0.9375rem] text-carbon"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
