import type { Metadata } from "next";
import { OPEN_ITEMS, MARKET } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pre-launch review",
  robots: { index: false, follow: false },
};

/**
 * Internal pre-launch checklist. Excluded from search indexing and not
 * linked from the site's navigation.
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
          Each item below was flagged as unverified or unresolved. None of them
          appear as settled fact anywhere on the public site. Resolve the item,
          then add the confirmed version to{" "}
          <code className="font-mono text-[0.9375rem]">lib/content.ts</code>.
        </p>

        <ol className="mt-14">
          {OPEN_ITEMS.map((o, i) => (
            <li
              key={o.item}
              className="grid gap-4 border-t border-rule py-8 last:border-b lg:grid-cols-[3rem_1fr_1.2fr] lg:gap-10"
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

        <h2 className="mt-20 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]">
          Figures published on the site
        </h2>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-2">
          Every number below renders with its source visible. If a figure is
          ever added without one, the component will show an empty citation
          rather than hide it.
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
                <td className="py-4 font-display text-xl tabular-nums">
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
      </div>
    </section>
  );
}
