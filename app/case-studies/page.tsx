import type { Metadata } from "next";
import Link from "next/link";
import {
  Float,
  Reveal,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import {
  CASE_SLOTS,
  CASE_PLACEHOLDER,
  CASE_TEMPLATE,
  REFERENCE_POLICY,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies & References",
  description:
    "Pivora publishes client outcomes only once they are approved and verifiable. Until then: the framework, the reference policy, and no invented proof.",
};

/**
 * §10. Three reserved slots carrying the standard placeholder copy, and the
 * length of the page spent on the thing that is actually true right now —
 * the reference policy, and what a published case study will contain.
 *
 * Written as a commitment to the reader's own confidentiality rather than
 * as a boast about this page's honesty. A site that tells you it does not
 * fabricate is doing the same work as a stranger telling you they are
 * trustworthy.
 */
export default function CaseStudiesPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Case studies & references
            </p>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Your name is yours to{" "}
              <span className="text-blue">give</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Most firms will put your logo on a slide the week the contract
              is signed. We publish an engagement only once you have approved
              what it says and the numbers in it — so the policy below
              probably matters more to you than the write-ups do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE SLOTS ────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <Reveal kind="mask">
            <p className="ev text-ink-2">Reserved</p>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
              Three engagements, and what each one will show.
            </h2>
          </Reveal>

          <StaggerList className="mt-14 grid gap-px bg-rule lg:grid-cols-3">
            {CASE_SLOTS.map((c) => (
              <StaggerRow
                key={c.n}
                className="relative overflow-hidden bg-paper-2 p-7 lg:p-9"
              >
                <Float
                  amplitude={8}
                  duration={9}
                  className="pointer-events-none absolute -top-8 -right-2 select-none"
                >
                  <span
                    aria-hidden
                    className="font-display text-[7rem] leading-none text-blue/[0.06]"
                  >
                    {c.n}
                  </span>
                </Float>
                <div className="relative">
                  <p className="ev text-blue">Case study {c.n}</p>
                  <h3 className="mt-4 font-display text-[1.5rem] leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-snug text-ink-2">
                    {c.profile}
                  </p>
                  <p className="ev mt-8 inline-block border border-rule px-3 py-2 text-[0.5rem] text-ink-2">
                    {c.status}
                  </p>
                </div>
              </StaggerRow>
            ))}
          </StaggerList>

          <Reveal className="mt-12 border-l-2 border-blue pl-6">
            <p className="max-w-measure font-display text-[clamp(1.25rem,2.2vw,1.625rem)] leading-snug text-ink">
              {CASE_PLACEHOLDER}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE TEMPLATE — §10.1 ─────────────────────────────────────── */}
      <section className="on-carbon border-b border-rule-dark bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
              <p className="ev flex items-center gap-3 text-bone-2">
                <span aria-hidden className="h-px w-8 bg-gold" />
                The template
              </p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                Eight fields, and every published case study fills all of
                them.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                This is what we would send you to approve. Knowing the shape
                of it up front means you are agreeing to something specific
                rather than to the idea of a write-up.
              </p>
            </Reveal>

            <StaggerList ordered>
              {CASE_TEMPLATE.map((f, i) => (
                <StaggerRow
                  key={f.field}
                  className="group grid gap-x-8 gap-y-2 border-t border-rule-dark py-6 last:border-b sm:grid-cols-[3rem_1fr]"
                >
                  <span className="ev text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[1.125rem] leading-snug text-bone">
                      {f.field}
                    </p>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-bone-2">
                      {f.guidance}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ── REFERENCE POLICY — §10.3 ─────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">Reference policy</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05]">
                Four rules, and they apply to your engagement too.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
                The same discipline that protects a future client&apos;s name
                is the one that will protect yours.
              </p>
            </Reveal>

            <StaggerList className="self-start">
              {REFERENCE_POLICY.map((p) => (
                <StaggerRow
                  key={p}
                  className="group flex gap-5 border-t border-rule py-6 last:border-b"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-px w-6 shrink-0 origin-left bg-blue transition-transform duration-500 group-hover:scale-x-150"
                  />
                  <span className="text-[1.0625rem] leading-relaxed text-ink">
                    {p}
                  </span>
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
              <p className="max-w-[44ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                Current work is best discussed directly, under NDA. Ask, and
                we will tell you what we can.
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
