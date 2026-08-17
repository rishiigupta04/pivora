import type { Metadata } from "next";
import {
  OPEN_ITEMS,
  MARKET,
  REMOVED,
  PROVISIONAL,
  SOURCES,
  SOURCE_NOTE,
  CAREER_FOOTNOTE,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Pre-launch review",
  robots: { index: false, follow: false },
};

/**
 * Internal pre-launch checklist. Excluded from search indexing, absent from
 * the sitemap, and not linked from the site's navigation.
 *
 * This page exists so that unverified claims cannot quietly ship: anything
 * the brief flagged as unconfirmed lives here instead of on a public page,
 * and stays visible until someone resolves it.
 */
export default function ReviewPage() {
  return (
    <section>
      <div className="mx-auto max-w-wide px-6 pt-16 pb-24 lg:px-10 lg:pt-24">
        <p className="ev text-blue">Internal — not indexed, not linked</p>
        <h1 className="mt-8 max-w-[20ch] text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.05]">
          Open items before this site can launch.
        </h1>
        <p className="mt-8 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          Every item below was flagged in Master Brief v7.0 as unverified,
          unresolved or needing a decision. None of them appear as settled
          fact anywhere on the public site. Resolve the item, then add the
          confirmed version to{" "}
          <code className="font-mono text-[0.9375rem]">lib/content.ts</code>.
        </p>

        <ol className="mt-14">
          {OPEN_ITEMS.map((o, i) => (
            <li
              key={o.item}
              className="grid gap-4 border-t border-rule py-8 last:border-b lg:grid-cols-[3rem_1fr_1.4fr] lg:gap-10"
            >
              <span className="ev pt-1.5 text-ink-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-[1.25rem] leading-snug">{o.item}</h2>
                <span className="ev mt-3 inline-block border border-blue px-2 py-1 text-[0.5rem] text-blue">
                  {o.status}
                </span>
              </div>
              <p className="text-[1.0625rem] leading-relaxed text-ink-2">
                {o.detail}
              </p>
            </li>
          ))}
        </ol>

        {/* ── figures that ship ──────────────────────────────────── */}
        <h2 className="mt-20 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]">
          Figures published on the site
        </h2>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          Every number below renders with its source visible. If a figure is
          ever added without one, the Cited component shows an empty citation
          rather than hiding it.
        </p>
        <table className="mt-8 w-full text-left">
          <thead>
            <tr className="border-b border-rule">
              <th scope="col" className="ev py-3 text-ink-2">
                Figure
              </th>
              <th scope="col" className="ev py-3 text-ink-2">
                Claim
              </th>
              <th scope="col" className="ev py-3 text-ink-2">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(MARKET).map(([key, s]) => (
              <tr key={key} className="border-b border-rule align-top">
                <td className="py-4 pr-6 font-display text-xl tabular-nums whitespace-nowrap">
                  {s.value}
                </td>
                <td className="py-4 pr-6 text-[0.9375rem] text-ink-2">
                  {s.label}
                </td>
                <td className="ev py-4 text-[0.5625rem] text-ink-2">
                  {s.source}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── the one figure shipping without a source ───────────── */}
        <h2 className="mt-20 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]">
          Published without a verified source
        </h2>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          Excluded by §20.4, then reinstated on instruction as provisional.
          It carries a visibly weaker citation than anything else on the
          site and appears on the GSI track only — not on /market, and not
          in that page&apos;s Sources appendix. Either find it a named
          research house and a date, or pull it before launch.
        </p>
        <ul className="mt-8">
          {PROVISIONAL.map((p) => (
            <li
              key={p}
              className="flex gap-4 border-t border-blue py-4 last:border-b text-[1.0625rem] text-ink"
            >
              <span aria-hidden className="shrink-0 font-mono text-blue">
                !
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* ── figures that do not ship at all ────────────────────── */}
        <h2 className="mt-20 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]">
          Figures excluded during vetting
        </h2>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          Brief §20.4. These appeared in earlier Pivora material and could
          not be traced to a named, checkable source. They are absent from
          every page, and listed here so they cannot reappear in a future
          copy pass. Kept off the public site deliberately: telling visitors
          which numbers were cut is a note about our editing process, not
          about India.
        </p>
        <ul className="mt-8">
          {REMOVED.map((r) => (
            <li
              key={r}
              className="flex gap-4 border-t border-rule py-4 last:border-b text-[1.0625rem] text-ink-2"
            >
              <span aria-hidden className="shrink-0 font-mono">
                ✕
              </span>
              {r}
            </li>
          ))}
        </ul>

        {/* ── the register ───────────────────────────────────────── */}
        <h2 className="mt-20 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]">
          Verified source register
        </h2>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          Brief §22. {SOURCES.length} rows — every external fact used on this
          site that could be checked. The list is published as a plain
          sources appendix at the foot of /market; the vetting commentary
          around it stays here, because it is about how the site was built
          rather than about India.
        </p>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          {SOURCE_NOTE}
        </p>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          {CAREER_FOOTNOTE}
        </p>
        <ol className="mt-8">
          {SOURCES.map((s) => (
            <li
              key={s.n}
              className="grid gap-x-8 gap-y-1 border-t border-rule py-4 last:border-b lg:grid-cols-[3rem_1.6fr_1fr_6rem]"
            >
              <span className="ev text-ink-2">
                {String(s.n).padStart(2, "0")}
              </span>
              <p className="text-[0.9375rem] leading-snug text-ink">
                {s.claim}
              </p>
              <p className="text-[0.9375rem] leading-snug text-ink-2">
                {s.source}
              </p>
              <p className="ev text-[0.5625rem] text-ink-2">{s.when}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
