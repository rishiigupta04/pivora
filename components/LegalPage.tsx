import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { LEGAL_ENTITY } from "@/lib/content";

/**
 * Shared shell for the three legal pages (§15).
 *
 * These are set at reading width on plain paper, with no ornament. A legal
 * page that performs is a legal page nobody trusts.
 *
 * The pending-review banner is not a disclaimer for its own sake: §15 flags
 * that these need an actual lawyer's pass, and the site processes personal
 * data under India's DPDP Act and potentially GDPR. Saying so is more
 * honest than dressing template language up as counsel.
 */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              {eyebrow}
            </p>
            <h1 className="mt-7 max-w-[18ch] text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.02]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              {intro}
            </p>
            <p className="ev mt-8 text-ink-2">Last updated — {updated}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-measure space-y-12">{children}</div>

          <div className="mt-16 max-w-measure border-l-2 border-blue pl-6">
            <p className="ev text-blue">Pending legal review</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
              This page describes accurately how the site behaves today, but
              it has not yet been through a solicitor&apos;s review. Pivora
              processes personal data under India&apos;s Digital Personal Data
              Protection Act, and under the GDPR where a visitor is in the
              EU or UK. If you need a definitive position before submitting
              anything, ask us first.
            </p>
          </div>

          <p className="mt-12 text-[0.9375rem] leading-relaxed text-ink-2">
            Questions about this page go to {LEGAL_ENTITY} via the{" "}
            <Link href="/contact" className="text-blue underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

/** A titled block within a legal page. */
export function Clause({
  n,
  head,
  children,
}: {
  n: string;
  head: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="flex items-baseline gap-4 text-[clamp(1.25rem,2.2vw,1.625rem)] leading-snug">
        <span className="ev shrink-0 text-blue">{n}</span>
        {head}
      </h2>
      <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed text-ink-2">
        {children}
      </div>
    </section>
  );
}
