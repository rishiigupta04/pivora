import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TimelineNote from "@/components/TimelineNote";
import {
  Float,
  Parallax,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import {
  FOUNDER_BIO,
  FOUNDER_TAGS,
  CAREER,
  GROUND_ZERO_COMPANIES,
  GROUND_ZERO_DISCIPLINES,
  QUOTES,
  COVERAGE,
  KPMG_PROOF,
  TRACKS,
  FIT,
  NOT_A_FIT,
  VISION,
  MISSION,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Subrato Bandhu — three decades building the India businesses of global Enterprise B2B platforms from the ground up, and why Pivora exists.",
};

const [outsystemsQuote, weaserQuote] = QUOTES;

export default function AboutPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="mx-auto grid max-w-wide items-end gap-12 px-6 pt-16 pb-14 md:grid-cols-[1.35fr_1fr] md:gap-14 lg:gap-20 lg:px-10 lg:pt-24 lg:pb-16">
          <div>
            <Reveal kind="mask" mode="mount">
              <p className="ev flex items-center gap-3 text-ink-2">
                <span aria-hidden className="h-px w-8 bg-blue" />
                Founder & leadership
              </p>
              <h1 className="mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.94]">
                Subrato
                <br />
                <span className="text-blue">Bandhu</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12} mode="mount">
              <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
                Pivora&apos;s credibility does not come from adjectives on a
                homepage. It comes from a founder who has repeatedly done
                exactly what Pivora sells: taking global Enterprise B2B
                platforms from zero to a working, revenue-generating India
                business.
              </p>
            </Reveal>
            <Reveal delay={0.2} mode="mount">
              <ul className="mt-8 flex flex-wrap gap-2">
                {FOUNDER_TAGS.map((t) => (
                  <li
                    key={t}
                    className="ev border border-rule px-3 py-2 text-[0.5rem] text-ink-2 transition-colors duration-300 hover:border-blue hover:text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

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
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── THE BIOGRAPHY ────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.35fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <h2 className="max-w-[16ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Three decades of the same problem, in different packaging.
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-2"
            >
              {FOUNDER_BIO.map((p, i) => (
                <p key={i} className={i === 0 ? "text-ink" : undefined}>
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE CAREER TIMELINE — §19.1 ──────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev flex items-center gap-3 text-bone-2">
              <span aria-hidden className="h-px w-8 bg-gold" />
              The timeline
            </p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,4vw,3rem)] leading-[1.04] text-bone">
              Three decades of{" "}
              <span className="text-gold">ground-zero India builds</span>.
            </h2>
          </Reveal>

          <StaggerList ordered className="mt-14">
            {CAREER.map((c, i) => {
              const last = i === CAREER.length - 1;
              return (
                <StaggerRow
                  key={`${c.org}-${i}`}
                  className="group relative grid items-baseline gap-x-8 gap-y-2 border-t border-rule-dark py-6 last:border-b md:grid-cols-[8rem_1fr_1fr]"
                >
                  {/* Only press-verified dates are printed. Roles whose
                      dates are still unconfirmed read "Earlier" rather than
                      carrying a marker that asks the visitor to hold an
                      internal caveat for us. Tracked in OPEN_ITEMS. */}
                  <p className="ev text-gold">
                    {/* bone-2 at full strength, not /70. Faded to 70% it
                        blended down to 4.18:1 on carbon, under AA for
                        11px — and it is already the muted tone against the
                        gold the dated rows carry, so it needs no help
                        reading as secondary. */}
                    {c.when && !c.indicative ? (
                      c.when
                    ) : (
                      <span className="text-bone-2">Earlier</span>
                    )}
                  </p>
                  <p
                    className={`font-display text-[clamp(1.375rem,2.4vw,1.75rem)] leading-tight transition-transform duration-500 group-hover:translate-x-1 ${
                      last ? "text-gold" : "text-bone"
                    }`}
                  >
                    {c.org}
                  </p>
                  <div>
                    <p className="text-[1.0625rem] leading-snug text-bone-2">
                      {c.role}
                    </p>
                    {/* §19.1 engineering note — the MD → VP distinction is
                        available on demand rather than cluttering the row. */}
                    {c.note && <TimelineNote note={c.note} tone="dark" />}
                  </div>
                </StaggerRow>
              );
            })}
          </StaggerList>

        </div>
      </section>

      {/* ── THE GROUND-ZERO BUILDS — §19.2 ───────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The repeat pattern</p>
              <h2 className="mt-6 max-w-[18ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Five platforms. The same five{" "}
                <span className="text-blue">disciplines</span>, rebuilt from
                scratch each time.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                That is not advisory work — it is company-building, and it is
                the operating experience behind Built–Operate–Sustain.
              </p>
            </Reveal>

            <div>
              <p className="ev border-b border-rule pb-3 text-ink-2">
                Built in India from zero
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {GROUND_ZERO_COMPANIES.map((c) => (
                  <li
                    key={c}
                    className="border border-rule px-4 py-2.5 text-[1.0625rem] text-ink transition-colors duration-300 hover:border-blue"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <p className="ev mt-12 border-b border-rule pb-3 text-ink-2">
                The five disciplines, every time
              </p>
              <StaggerList ordered>
                {GROUND_ZERO_DISCIPLINES.map((d, i) => (
                  <StaggerRow
                    key={d}
                    className="flex items-baseline gap-6 border-b border-rule py-4"
                  >
                    <span className="ev text-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.0625rem] text-ink">{d}</span>
                  </StaggerRow>
                ))}
              </StaggerList>
            </div>
          </div>

          <Reveal className="mt-16 border-t border-rule pt-12">
            <blockquote className="max-w-[52ch] border-l-2 border-blue pl-6">
              <p className="font-display text-[clamp(1.375rem,2.8vw,2rem)] leading-snug text-ink">
                &ldquo;{outsystemsQuote.text}&rdquo;
              </p>
              <footer className="mt-5 text-[0.9375rem] leading-snug text-ink-2">
                <span className="text-ink">{outsystemsQuote.who}</span> —{" "}
                {outsystemsQuote.where}
                <span className="ev mt-2 block text-[0.5rem]">
                  {outsystemsQuote.when}
                </span>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── THE RELATIONSHIP ECOSYSTEM — §19.3 ───────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">The relationship ecosystem</p>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              One asset money cannot buy quickly.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              Thirty years of ground-zero builds compound into trusted
              relationships across the three tracks that decide whether an
              enterprise platform wins in India.
            </p>
          </Reveal>

          <StaggerList className="mt-12 grid gap-px bg-rule md:grid-cols-3">
            {TRACKS.map((t) => (
              <StaggerRow key={t.id} className="bg-paper-2">
                <Link
                  href={`/gcc-gsi#${t.id}`}
                  className="group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-paper lg:p-8"
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

          <Reveal className="mt-14 border-t border-rule pt-10">
            <blockquote className="max-w-[52ch] border-l-2 border-blue pl-6">
              <p className="font-display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-snug text-ink">
                &ldquo;{weaserQuote.text}&rdquo;
              </p>
              <footer className="mt-5 text-[0.9375rem] leading-snug text-ink-2">
                <span className="text-ink">{weaserQuote.who}</span> —{" "}
                {weaserQuote.where}
                <span className="ev mt-2 block text-[0.5rem]">
                  {weaserQuote.when}
                </span>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── THE SEPARATION ───────────────────────────────────────────────
          The content rule ("never imply Pivora achieved a former employer's
          result") is enforced by the layout. Two grounds, a hard seam down
          the middle, and neither side borrowing the other's credibility. */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-20 lg:px-10 lg:pt-28">
          <Reveal kind="mask">
            <p className="ev text-blue">The record</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Two records. Kept apart on purpose.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-wide gap-px bg-rule md:grid-cols-2">
          {/* career */}
          <Reveal className="relative overflow-hidden bg-paper px-6 py-12 lg:px-10 lg:py-14">
            <Float
              amplitude={9}
              duration={10}
              className="pointer-events-none absolute -top-10 -right-4 select-none"
            >
              <span
                aria-hidden
                className="font-display text-[5rem] leading-none text-blue/[0.06] md:text-[9rem]"
              >
                01
              </span>
            </Float>
            <div className="relative">
              <p className="ev flex items-center gap-3 text-blue">
                <span aria-hidden className="h-px w-6 bg-blue" />
                Subrato&apos;s career — before Pivora
              </p>
              <p className="mt-8 max-w-[36ch] text-[clamp(1.125rem,1.9vw,1.375rem)] leading-snug text-ink">
                Everything on the timeline above belongs to the companies he
                worked for. The outcomes are theirs.
              </p>

              <div className="mt-9 border-l-2 border-blue pl-6">
                <p className="ev text-ink-2">Milestone — {KPMG_PROOF.year}</p>
                <p className="mt-2 text-[1.125rem] leading-snug text-ink">
                  {KPMG_PROOF.what}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  {KPMG_PROOF.note}
                </p>
              </div>
            </div>
          </Reveal>

          {/* pivora */}
          <Reveal
            delay={0.12}
            className="relative overflow-hidden bg-paper-2 px-6 py-12 lg:px-10 lg:py-14"
          >
            <Float
              amplitude={7}
              duration={12}
              delay={1}
              className="pointer-events-none absolute -top-10 -right-4 select-none"
            >
              <span
                aria-hidden
                className="font-display text-[5rem] leading-none text-ink/[0.05] md:text-[9rem]"
              >
                02
              </span>
            </Float>
            <div className="relative">
              <p className="ev flex items-center gap-3 text-ink-2">
                <span aria-hidden className="h-px w-6 bg-ink-2" />
                Pivora&apos;s own engagements
              </p>
              <p className="mt-8 max-w-[34ch] text-[clamp(1.125rem,1.9vw,1.375rem)] leading-snug text-ink">
                Client work is covered by confidentiality and is published
                only once it is approved and verifiable. We&apos;ll talk about
                it directly, under NDA, in the first conversation.
              </p>
              <p className="mt-6 max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-2">
                Nothing in the column to the left is a Pivora result. Those
                outcomes belong to the companies Subrato held those roles at,
                and they stay there.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SELECTED COVERAGE — §19.4 ────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">Selected coverage</p>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Published, dated and checkable.
            </h2>
          </Reveal>

          <StaggerList className="mt-14">
            {COVERAGE.map((c, i) => (
              <StaggerRow
                key={`${c.outlet}-${i}`}
                className="group grid items-baseline gap-x-10 gap-y-2 border-t border-rule py-5 last:border-b lg:grid-cols-[5rem_14rem_1fr]"
              >
                <span className="ev text-blue">{c.year}</span>
                <span className="text-[1.0625rem] leading-snug text-ink">
                  {c.outlet}
                </span>
                <span className="text-[0.9375rem] leading-snug text-ink-2">
                  {c.piece}
                </span>
              </StaggerRow>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-24">
            <Reveal>
              <p className="ev text-ink-2">Vision</p>
              <p className="mt-6 max-w-measure font-display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-snug text-ink">
                {VISION}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="ev text-ink-2">Mission</p>
              <p className="mt-6 max-w-measure font-display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-snug text-ink">
                {MISSION}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO'S A FIT — §1.5 ───────────────────────────────────────── */}
      <section id="fit" className="on-carbon scroll-mt-20 bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <h2 className="max-w-[22ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
              We are a good fit for some platforms and a{" "}
              <span className="text-gold">poor one</span> for others.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="ev border-b border-gold pb-3 text-gold">
                The ideal client
              </p>
              <StaggerList>
                {FIT.map((f) => (
                  <StaggerRow
                    key={f}
                    className="group flex gap-4 border-b border-rule-dark py-5 text-[1.0625rem] leading-snug text-bone"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-6 shrink-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-150"
                    />
                    {f}
                  </StaggerRow>
                ))}
              </StaggerList>
            </div>

            <div>
              <p className="ev border-b border-rule-dark pb-3 text-bone-2">
                Not the ideal client
              </p>
              <StaggerList>
                {NOT_A_FIT.map((f) => (
                  <StaggerRow
                    key={f}
                    className="group relative flex gap-4 border-b border-rule-dark py-5 text-[1.0625rem] leading-snug text-bone-2"
                  >
                    <span aria-hidden className="mt-px shrink-0 font-mono">
                      ✕
                    </span>
                    <span className="strike-lines [--strike-color:var(--color-bone-2)]">
                      {f}
                    </span>
                  </StaggerRow>
                ))}
              </StaggerList>
            </div>
          </div>

          <Reveal className="rule-t mt-16 pt-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[42ch] font-display text-[clamp(1.375rem,2.6vw,1.875rem)] leading-snug text-bone">
                If you recognise yourself on the left, the next step is a
                conversation.
              </p>
              <Link
                href="/contact"
                className="ev shrink-0 border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
              >
                Start one →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
