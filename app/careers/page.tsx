import type { Metadata } from "next";
import Link from "next/link";
import InterestForm from "./InterestForm";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import {
  CAREERS_HERO,
  CAREERS_WHY,
  HIRING_PROCESS,
  OPEN_ROLES,
  NO_ROLES_COPY,
  DEDICATED,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Pivora is building a small, senior technical bench — forward deployment engineers and platform specialists who sit inside live Built–Operate–Sustain engagements.",
};

/**
 * Part IV. Where every other page qualifies a buyer, this one qualifies a
 * candidate — and it should tell a good engineer within ten seconds whether
 * Pivora is worth a conversation.
 *
 * Nothing here is invented. §13 flags team size, remote policy, comp
 * philosophy and the open roles as missing, so the page carries the
 * structure and says plainly that there are no roles open rather than
 * listing placeholders. Tracked in OPEN_ITEMS.
 */
export default function CareersPage() {
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
            FDE
          </span>
        </Float>

        <div className="relative mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Join Pivora
            </p>
            <h1 className="mt-7 max-w-[15ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Build the engine, not just the{" "}
              <span className="strike-lines strike-draw [--strike-color:var(--color-blue)] text-ink-2/75">
                deck
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              {CAREERS_HERO.body}
            </p>
          </Reveal>
          <Reveal delay={0.2} mode="mount">
            <a
              href="#interest"
              className="fill-up mt-9 inline-block bg-primary px-7 py-4 text-[0.9375rem] text-white"
            >
              Tell us what you&apos;d build
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── A DIFFERENT KIND OF BUILD ────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
              <p className="ev text-ink-2">Why engineers join</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                This is not an India GCC job, and it is not services.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                The work is not a ticket queue behind three layers of account
                management. It is a live enterprise deal, with the technical
                decision still open.
              </p>
            </Reveal>

            <StaggerList ordered>
              {CAREERS_WHY.map((w) => (
                <StaggerRow
                  key={w.n}
                  className="group grid gap-4 border-t border-rule py-8 last:border-b sm:grid-cols-[4.5rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-[2.5rem] leading-none text-blue/70 transition-colors duration-500 group-hover:text-blue">
                    {w.n}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] leading-snug">
                      {w.head}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-2">
                      {w.body}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── WHERE THE WORK SITS ──────────────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.35fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev flex items-center gap-3 text-bone-2">
                <span aria-hidden className="h-px w-8 bg-gold" />
                Where you sit
              </p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                Inside the client&apos;s business, on the client&apos;s
                forecast.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                A Pivora pod is a small, named team operating as part of the
                client&apos;s organisation. Technical roles sit alongside the
                commercial ones rather than behind them — which is why the
                work touches revenue directly.
              </p>
              <Link
                href="/delivery-model"
                className="ev mt-8 inline-block border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
              >
                How a pod is staffed →
              </Link>
            </Reveal>

            <StaggerList>
              {DEDICATED.map((d) => (
                <StaggerRow
                  key={d.role}
                  className="group flex items-baseline gap-6 border-t border-rule-dark py-5 last:border-b"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-px w-6 shrink-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-150"
                  />
                  <div>
                    <p className="text-[1.125rem] leading-snug text-bone">
                      {d.role}
                    </p>
                    <p className="mt-1.5 text-sm text-bone-2">{d.note}</p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ──────────────────────────────────────────────────
          §13.5 asks for a CMS-driven list. None have been supplied, so the
          page says so rather than shipping invented listings. */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">Open roles</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              {OPEN_ROLES.length > 0
                ? "What we are hiring for right now."
                : "Nothing open today."}
            </h2>
          </Reveal>

          {OPEN_ROLES.length > 0 ? (
            <StaggerList className="mt-12">
              {OPEN_ROLES.map((r) => (
                <StaggerRow
                  key={r.title}
                  className="grid items-baseline gap-x-10 gap-y-2 border-t border-rule py-7 last:border-b md:grid-cols-[1fr_1.2fr_10rem]"
                >
                  <h3 className="font-display text-[1.5rem] leading-tight">
                    {r.title}
                  </h3>
                  <p className="text-[1.0625rem] leading-snug text-ink-2">
                    {r.scope}
                  </p>
                  <p className="ev text-ink-2 md:text-right">{r.location}</p>
                </StaggerRow>
              ))}
            </StaggerList>
          ) : (
            <Reveal delay={0.1} className="mt-8">
              <p className="max-w-measure border-l-2 border-blue pl-6 text-[1.0625rem] leading-relaxed text-ink">
                {NO_ROLES_COPY}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── THE HIRING PROCESS ───────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The process</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Four steps, so you know what you are agreeing to.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                No take-home that takes a weekend, and no panel of six.
              </p>
            </Reveal>

            <StaggerList ordered className="self-start">
              {HIRING_PROCESS.map((s) => (
                <StaggerRow
                  key={s.n}
                  className="group grid gap-x-8 gap-y-2 border-t border-rule py-6 last:border-b sm:grid-cols-[3rem_1fr]"
                >
                  <span className="ev text-blue">{s.n}</span>
                  <div>
                    <p className="text-[1.125rem] leading-snug text-ink">
                      {s.step}
                    </p>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                      {s.body}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── THE INTEREST FORM ────────────────────────────────────────────
          Separate from the client enquiry form by design (§12). */}
      <section id="interest" className="scroll-mt-20 border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">
              Don&apos;t see the right role?
            </p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Tell us what you&apos;d want to{" "}
              <span className="text-blue">build</span>.
            </h2>
            <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
              This goes to the team, not to an applicant tracking system. If
              what you describe lines up with where the bench is going, that
              conversation is worth having before a role exists.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <InterestForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
