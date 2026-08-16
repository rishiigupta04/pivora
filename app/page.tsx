import Link from "next/link";
import Image from "next/image";
import Cited from "@/components/Cited";
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
  NOT_A,
  DOORS,
  GATES,
  AI_POV,
  DEDICATED,
  SHARED,
  CAREER,
  FIT,
} from "@/lib/content";

/**
 * Home carries the entire argument.
 *
 * The reader should be able to understand what Pivora is, how it works and
 * whether it is for them without making a single navigation decision. Every
 * deeper page exists for depth, not for comprehension — nothing essential
 * is gated behind a click.
 */
const PAGES = [
  {
    href: "/model",
    label: "The Model",
    note: "Build, Operate, Sustain — and, if you want it, Transfer.",
  },
  {
    href: "/doors",
    label: "Three Doors",
    note: "Domestic enterprises, GCCs and integrators, route by route.",
  },
  {
    href: "/how-we-sell",
    label: "How We Sell",
    note: "The eight checks, and what each one throws out.",
  },
  {
    href: "/founder",
    label: "Founder",
    note: "Subrato Bandhu, and who Pivora is a poor fit for.",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center border-b border-rule">
        <div className="mx-auto grid w-full max-w-wide items-center gap-12 px-6 py-14 md:grid-cols-[1.6fr_1fr] md:gap-14 lg:gap-20 lg:px-10">
          <div>
            {/* Not an eyebrow label. The site's own gesture — a struck
                negation — stating the positioning in the first second,
                before the headline has to. */}
            <Reveal kind="mask" mode="mount">
              <p className="flex flex-wrap items-baseline gap-x-5 gap-y-1 font-display text-[clamp(1.25rem,2.1vw,1.75rem)] leading-tight tracking-[-0.02em]">
                <span className="text-ink">Operating partner.</span>
                <span className="strike-lines strike-draw [--strike-color:var(--color-blue)] text-ink-2/65">
                  Not an advisor.
                </span>
              </p>
              <h1 className="mt-6 text-[clamp(2.375rem,4.9vw,4.25rem)] leading-[0.98] text-balance">
                <span className="block text-ink">
                  Don&apos;t just enter India.
                </span>
                <span className="block text-blue">
                  Build an India business.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              We build the India business for global software companies, then
              run it with our own people carrying the number. Not advice —{" "}
              <em className="font-display text-[1.15em] leading-none italic text-ink">
                the actual work
              </em>
              . And when it stands up on its own, we hand it over.
            </p>
            </Reveal>
            <Reveal delay={0.2} mode="mount">
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="fill-up bg-blue px-7 py-4 text-[0.9375rem] text-white"
              >
                Start a conversation
              </Link>
              <span className="ev flex items-center gap-2.5 text-ink-2">
                <span aria-hidden className="block h-6 w-px bg-rule">
                  <span className="cue-line block h-full w-full bg-blue" />
                </span>
                Everything is on this page
              </span>
            </div>
            </Reveal>
          </div>

          {/* The founder, immediately. This is a founder-led firm and the
              portrait is the only thing on the site that isn't type — it
              carries the whole right column and stops the page opening on
              a wall of words. */}
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

      {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div>
              <p className="ev reveal text-ink-2">The problem</p>
              <h2 className="rise mt-6 max-w-[15ch] text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.03]">
                India punishes the pilot.
              </h2>
              <div className="reveal reveal-2 mt-10 space-y-5 text-[1.0625rem] leading-relaxed text-ink-2">
                <p>
                  The market is big enough to deserve a real investment and
                  unforgiving enough to expose a half-one. Most companies
                  arrive with a country manager, a target, and nothing
                  underneath it.
                </p>
                <p>
                  Then the same things happen. Evaluations run months longer
                  than anyone planned. The buying group looks nothing like the
                  one back home. Deals stay on the forecast because everyone
                  is hopeful. And the first rollout lands late enough to spoil
                  the reference you needed.
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

                <Float
                  amplitude={6}
                  duration={8.5}
                  delay={1.6}
                  className="col-span-2"
                >
                  <div className="lift reveal-3 rule-t pt-10 sm:ml-10 sm:pt-14">
                    <Cited stat={MARKET.itSpend} size="md" />
                  </div>
                </Float>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE NEGATION ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <p className="ev reveal text-ink-2">What Pivora is not</p>
          <NotAList items={NOT_A} />

          <div className="mt-16 grid gap-10 border-t border-rule pt-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <h2 className="reveal text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.08]">
              Pivora is an <span className="text-blue">operating partner</span>.
            </h2>
            <div className="reveal reveal-2 space-y-5 text-[1.0625rem] leading-relaxed text-ink-2">
              <p>
                Not a strategy deck with a recommendation at the back. We build
                the India function, run it with our own people carrying quota,
                and then reduce our own footprint on purpose until your team
                owns it outright.
              </p>
              <p className="text-ink">
                Most firms are built to become indispensable. We are built to
                become{" "}
                <em className="font-display text-[1.2em] leading-none italic">
                  removable
                </em>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE DOORS ──────────────────────────────────────────────────
          Presented in sequence rather than behind a selector: the reader
          scrolls past all three without choosing which one to open. */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 lg:px-10 lg:pt-32">
          <p className="ev reveal text-ink-2">Three doors</p>
          <h2 className="rise mt-6 max-w-[16ch] text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.03]">
            India revenue is not one market. It is{" "}
            <span className="text-blue">three</span>.
          </h2>
          <p className="reveal reveal-2 mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
            Domestic enterprises, Global Capability Centres and systems
            integrators buy differently, on different timelines, for different
            reasons. Treating them as one funnel is the most common and most
            expensive mistake we see.
          </p>
        </div>

        {/* Summary only. How each route is actually worked is depth, and
            depth lives on /doors — putting all twelve tactics here made
            the page long without making the point any clearer. */}
        <Stagger className="mx-auto mt-14 max-w-wide px-6 lg:px-10">
          {DOORS.map((d) => (
            <StaggerItem key={d.id} className="border-t border-rule">
              <Link
                href={`/doors#${d.id}`}
                className="group relative grid items-baseline gap-x-8 gap-y-4 py-9 transition-[background-color,padding] duration-500 ease-out md:grid-cols-[6rem_1fr_15rem] lg:py-11 lg:hover:px-6"
              >
                {/* A rule that sweeps the full row on hover — the route
                    opening, rather than a generic highlight. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-blue transition-transform duration-700 ease-out group-hover:scale-x-100"
                />

                {/* /55 is the lowest this can go and still clear 3:1 for
                    large text — the ghosted-to-solid effect survives, the
                    illegibility doesn't. */}
                <span className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none tabular-nums text-blue/55 transition-colors duration-500 group-hover:text-blue">
                  {d.n}
                </span>

                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.9vw,2.125rem)] leading-[1.12] transition-transform duration-500 ease-out lg:group-hover:translate-x-1">
                    {d.name}
                  </h3>
                  <p className="mt-2.5 max-w-[42ch] text-[1.0625rem] leading-snug text-ink-2">
                    {d.line}
                  </p>
                </div>

                {d.proof && (
                  <p className="flex items-baseline gap-3 md:justify-end md:text-right">
                    <span className="font-display text-[1.75rem] leading-none tabular-nums">
                      {d.proof.value}
                    </span>
                    <span className="max-w-[13rem] text-sm leading-snug text-ink-2">
                      {d.proof.label}
                      <span className="ev mt-1 block text-[0.5rem]">
                        Source — {d.proof.source}
                      </span>
                    </span>
                  </p>
                )}
              </Link>
            </StaggerItem>
          ))}

          <StaggerItem>
            <Link
              href="/doors"
              className="wipe mt-8 inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              How we work each one
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── THE MULTIPLIER + BOS(T) ──────────────────────────────────────
          The descent into the machine room, and the signature sequence.
          The reader does nothing but keep scrolling. */}
      <div className="on-carbon bg-carbon text-bone">
        <section className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <p className="ev reveal text-bone-2">The multiplier</p>
              <h2 className="reveal reveal-2 mt-6 text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05] text-bone">
                Every door opens twice.
              </h2>
            </div>
            <div className="reveal reveal-3 space-y-5 text-[1.0625rem] leading-relaxed text-bone-2">
              <p>
                A domestic enterprise win produces a reference that travels
                across a sector. A GCC win puts your product in front of the
                parent company&apos;s global architecture function. An SI
                partnership, properly built, carries you into deals you were
                never invited to.
              </p>
              <p className="text-bone">
                This is why India is an operating investment rather than a
                territory. The revenue is worth having. The route to global
                scale that comes with it is worth more.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-wide px-6 pb-4 lg:px-10">
          <div className="border-t border-rule-dark pt-20 lg:pt-24">
            <p className="ev reveal text-bone-2">How it works</p>
            <h2 className="reveal reveal-2 mt-6 max-w-[19ch] text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.03] text-bone">
              Most firms are built to stay.{" "}
              <span className="text-gold">We are built to leave.</span>
            </h2>
            <p className="reveal reveal-3 mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
              Four stages. Our share of the work falls at every one, and by the
              last it is nothing. That direction is the whole deal, and it is
              agreed up front rather than argued about later.
            </p>
          </div>

          <Handover />
        </div>

        {/* Execution engine, still in the machine room. */}
        <section className="mx-auto max-w-wide px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="grid gap-12 border-t border-rule-dark pt-20 lg:grid-cols-[1fr_1.5fr] lg:gap-24 lg:pt-24">
            <div>
              <p className="ev reveal text-bone-2">The execution engine</p>
              <h2 className="reveal reveal-2 mt-6 text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05] text-bone">
                A team inside your business, backed by a bench outside it.
              </h2>
              <p className="reveal reveal-3 mt-6 text-[1.0625rem] leading-relaxed text-bone-2">
                The dedicated team is yours — named people, in your deals, on
                your forecast. The shared bench is not headcount you pay for;
                it is expertise you reach for when a pursuit needs it.
              </p>
            </div>

            <div className="reveal reveal-2">
              <p className="ev pb-4 text-blue-lift">Dedicated to you</p>
              <ul className="border-l-2 border-blue-lift">
                {DEDICATED.map((d) => (
                  <li key={d.role} className="relative py-4 pl-8">
                    <span
                      aria-hidden
                      className="absolute top-[1.6rem] left-0 h-px w-5 bg-blue-lift"
                    />
                    <p className="text-[1.125rem] leading-none text-bone">
                      {d.role}
                    </p>
                    <p className="mt-2 text-sm text-bone-2">{d.note}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <p className="ev flex items-center gap-3 text-bone-2">
                  <span aria-hidden className="h-px w-8 bg-rule-dark" />
                  Drawn on as needed
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {SHARED.map((s) => (
                    <li
                      key={s}
                      className="border border-rule-dark px-3 py-2 text-sm text-bone-2 transition-colors duration-300 hover:border-gold hover:text-bone"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── MEDDPICC ─────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The forecast</p>
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.03]">
                A pipeline you can take to{" "}
                <span className="text-blue">your board</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="self-end">
              <p className="text-[1.0625rem] leading-relaxed text-ink-2">
                India forecasts are usually built by someone who won&apos;t be
                there when they miss. Ours is built by the people carrying the
                number, and it is deliberately smaller —{" "}
                <em className="font-display text-[1.15em] leading-none italic text-ink">
                  because it has to hold
                </em>
                .
              </p>
            </Reveal>
          </div>

          {/* Two columns: what earns a place on the forecast, and what
              removes it. Setting the rejection beside the question is the
              whole point — a list of questions is a framework, a list of
              rejections is a standard. */}
          {/* Eight plates rather than eight table rows. Each carries its
              own letter as a watermark, so the acronym does the visual work
              instead of a column of tiny capitals, and the disqualifier is
              struck through — the same gesture the "what we are not" list
              uses, because it means the same thing: this is rejected. */}
          <StaggerList className="mt-16 grid gap-px bg-rule sm:grid-cols-2">
            {GATES.map((g) => (
              <StaggerRow
                key={`${g.k}-${g.name}`}
                className="group relative overflow-hidden bg-paper-2 p-7 transition-colors duration-500 hover:bg-paper lg:p-9"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 -right-1 font-display text-[7.5rem] leading-none text-blue/[0.08] transition-colors duration-500 select-none group-hover:text-blue/[0.16] lg:text-[9rem]"
                >
                  {g.k}
                </span>

                <div className="relative">
                  <p className="ev flex items-center gap-2.5 text-blue">
                    <span
                      aria-hidden
                      className="h-px w-5 origin-left bg-blue transition-transform duration-500 group-hover:scale-x-[1.8]"
                    />
                    {g.name}
                  </p>

                  <p className="mt-4 max-w-[26ch] text-[clamp(1.125rem,1.7vw,1.4375rem)] leading-[1.28] text-ink">
                    {g.ask}
                  </p>

                  <div className="mt-6 border-t border-rule pt-4">
                    <p className="ev text-[0.5rem] text-ink-2">
                      Takes it off the forecast
                    </p>
                    <p className="mt-2 max-w-[30ch] text-[0.9375rem] leading-snug text-ink-2">
                      {/* struck on hover — the deal being removed */}
                      <span className="strike-lines [--strike-color:var(--color-blue)]">
                        {g.fail}
                      </span>
                    </p>
                  </div>
                </div>
              </StaggerRow>
            ))}
          </StaggerList>

          <Reveal className="mt-12">
            <p className="max-w-[48ch] font-display text-[clamp(1.375rem,2.6vw,1.875rem)] leading-snug">
              Eight checks, and a deal clears all of them or it is not counted.
              That is the whole difference between a number and a hope.
            </p>
            <Link
              href="/how-we-sell"
              className="wipe mt-8 inline-block border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
            >
              How we run a deal
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── AI POV ───────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="ev reveal text-ink-2">Pivora&apos;s position — AI</p>
              <h2 className="reveal reveal-2 mt-6 text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05]">
                Selling AI in India is a{" "}
                <span className="text-blue">governance conversation</span> in a
                capability costume.
              </h2>
              <p className="ev reveal reveal-3 mt-8 border-t border-rule pt-4 text-ink-2">
                Our read of the market — not sourced data
              </p>
            </div>

            <ol>
              {AI_POV.map((p, i) => (
                <li
                  key={p.n}
                  className={`reveal ${
                    ["", "reveal-2", "reveal-3"][i]
                  } border-t border-rule py-8 last:border-b`}
                >
                  <div className="flex gap-6">
                    <span className="ev pt-1.5 text-blue">{p.n}</span>
                    <div>
                      <h3 className="text-[1.375rem] leading-snug">{p.head}</h3>
                      <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-2">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <div>
              <p className="ev reveal text-ink-2">Founder</p>
              <h2 className="reveal reveal-2 mt-6 text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05]">
                Subrato Bandhu
              </h2>
              <p className="reveal reveal-3 mt-6 text-[1.0625rem] leading-relaxed text-ink-2">
                Twenty-plus years selling enterprise software into India — as an
                individual contributor, a country leader and a regional
                vice-president. Pivora exists because he kept being asked to
                rebuild the same function from scratch.
              </p>
              <Link
                href="/founder"
                className="reveal reveal-4 mt-8 inline-block wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                Read the full background
              </Link>
            </div>

            <div className="reveal reveal-2 self-start">
              <p className="ev border-b border-rule pb-3 text-ink-2">
                Career — prior to founding Pivora
              </p>
              <ul className="grid grid-cols-2 gap-x-8">
                {CAREER.map((c) => (
                  <li key={c.org} className="border-b border-rule py-4">
                    <p className="text-[1.0625rem] text-ink">{c.org}</p>
                    <p className="mt-1 text-sm text-ink-2">{c.role}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-ink-2">
                This is Subrato&apos;s employment history. It is not a record of
                Pivora client engagements, and nothing achieved at these
                companies is claimed as Pivora&apos;s work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO'S A FIT ──────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-28">
          <h2 className="reveal max-w-[22ch] text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.05]">
            We are a good fit for some companies and a poor one for others.
          </h2>
          <StaggerList className="mt-12 grid gap-x-16 gap-y-0 md:grid-cols-2">
            {FIT.map((f) => (
              <StaggerRow
                key={f}
                className="flex gap-4 border-b border-rule py-5 text-[1.0625rem] leading-snug"
              >
                <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-blue" />
                {f}
              </StaggerRow>
            ))}
          </StaggerList>
          <Link
            href="/founder#fit"
            className="reveal mt-10 inline-block wipe border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
          >
            And who we&apos;re not for
          </Link>
        </div>
      </section>

      {/* ── GO DEEPER ────────────────────────────────────────────────
          A visible index of the whole site.

          On a phone the navigation lives behind a hamburger most people
          never open, so the routes to depth cannot only exist up there.
          Home already carries the full argument; this is how a reader
          gets from it to the detail without hunting for a menu. */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The rest of it</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Everything above, at full length.
            </h2>
          </Reveal>

          <StaggerList className="mt-12 border-t border-rule">
            {PAGES.map((p, i) => (
              <StaggerRow key={p.href} className="border-b border-rule">
                <Link
                  href={p.href}
                  className="group relative grid items-baseline gap-x-6 gap-y-1.5 py-6 md:grid-cols-[3.5rem_1fr_1.1fr] md:py-8"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-blue transition-transform duration-700 ease-out group-hover:scale-x-100"
                  />
                  <span className="ev text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(1.375rem,2.6vw,1.875rem)] leading-tight transition-transform duration-500 ease-out md:group-hover:translate-x-1">
                    {p.label}
                  </span>
                  <span className="text-[0.9375rem] leading-snug text-ink-2">
                    {p.note}
                  </span>
                </Link>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-24">
            <h2 className="rise text-[clamp(2.25rem,5vw,4rem)] leading-[1.01]">
              If India is worth doing, it is worth{" "}
              <span className="text-blue">operating</span>.
            </h2>
            <div className="reveal reveal-2">
              <p className="text-[1.0625rem] leading-relaxed text-ink-2">
                Tell us what you are building and where you have got to. If
                we&apos;re not the right partner, we will say so in the first
                conversation.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block fill-up bg-blue px-7 py-4 text-[0.9375rem] text-white"
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
