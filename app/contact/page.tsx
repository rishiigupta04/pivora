import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Float, Reveal, StaggerList, StaggerRow } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Pivora what you're building in India. If we're not the right partner, we'll say so in the first conversation.",
};

const NEXT = [
  {
    n: "01",
    head: "Subrato reads it",
    body: "Not a form queue and not an SDR. The person who would run the engagement is the person who replies.",
  },
  {
    n: "02",
    head: "A short call, under NDA",
    body: "Thirty minutes. We'll ask what you've tried in India already and what went wrong with it, because that's the useful part.",
  },
  {
    n: "03",
    head: "A straight answer",
    body: "Either a view on how we'd build it, or that we're not the right partner. You'll get the second one in the first conversation, not the third.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-rule">
        <Float
          amplitude={12}
          duration={12}
          className="pointer-events-none absolute -top-20 right-0 select-none"
        >
          <span
            aria-hidden
            className="font-display text-[14rem] leading-none text-blue/[0.05] lg:text-[22rem]"
          >
            Hi
          </span>
        </Float>

        <div className="relative mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Start a conversation
            </p>
            <h1 className="mt-7 max-w-[15ch] text-[clamp(2.5rem,6.2vw,5rem)] leading-[0.96]">
              Tell us what you&apos;re{" "}
              <span className="text-blue">building</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              You&apos;ll speak to Subrato, not to a qualification layer. If
              Pivora isn&apos;t the right partner for what you&apos;re trying
              to do, you&apos;ll hear that in the first conversation rather
              than the third.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE FORM ─────────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ────────────────────────────────────────── */}
      <section className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask" className="md:sticky md:top-28 md:self-start">
              <p className="ev text-bone-2">After you send it</p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                Three steps, and none of them is a{" "}
                <span className="text-gold">nurture sequence</span>.
              </h2>
            </Reveal>

            <StaggerList ordered>
              {NEXT.map((s) => (
                <StaggerRow
                  key={s.n}
                  className="group grid gap-4 border-t border-rule-dark py-8 last:border-b sm:grid-cols-[4.5rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-[2.5rem] leading-none text-gold/45 transition-colors duration-500 group-hover:text-gold">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] leading-snug text-bone">
                      {s.head}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-bone-2">
                      {s.body}
                    </p>
                  </div>
                </StaggerRow>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>
    </>
  );
}
