import Link from "next/link";
import Wordmark from "./Wordmark";

const COLS = [
  {
    head: "The work",
    links: [
      { href: "/model", label: "The BOS(T) Model" },
      { href: "/model#engine", label: "Execution Engine" },
      { href: "/doors", label: "Three Doors" },
      { href: "/how-we-sell", label: "How We Sell" },
    ],
  },
  {
    head: "The firm",
    links: [
      { href: "/founder", label: "Founder" },
      { href: "/founder#fit", label: "Who's a fit" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="on-carbon bg-carbon text-bone">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark tone="dark" />
            <p className="mt-6 max-w-[26rem] font-display text-[1.375rem] leading-[1.35] text-bone">
              Don&apos;t just enter India.
              <br />
              Build an India business.
            </p>
            <p className="mt-5 max-w-[24rem] text-sm leading-relaxed text-bone-2">
              An operating partner for global B2B software companies — inside
              the GTM motion, accountable for the number, and built to be
              handed over.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.head}>
              <h2 className="ev text-bone-2">{col.head}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      // Footer links measured 19px tall on a phone. Block
                      // padding lifts the hit area to a usable size; removed
                      // at md so the desktop footer rhythm is unchanged.
                      className="block py-2 text-[0.9375rem] text-bone transition-colors hover:text-gold md:py-0"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule-t mt-14 flex flex-col gap-3 pt-6 text-xs text-bone-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pivora Consulting.</p>
          <p className="ev text-[0.5625rem]">
            Operating partner — not an advisor
          </p>
        </div>
      </div>
    </footer>
  );
}
