import Link from "next/link";
import { INDEX } from "@/lib/nav";
import { LEGAL_ENTITY } from "@/lib/content";

/**
 * The footer carries the full map, so nothing defined in §3.2 depends on a
 * visitor opening the header index to find it.
 *
 * NO LEGAL LINKS HERE, ON INSTRUCTION.
 *
 * The registration block — entity name plus Privacy, Terms and Cookie
 * Notice — was removed at the client's request. The three pages are still
 * live and still in the sitemap, but nothing on the site links to them, so
 * §15's requirement that they be reachable from the footer before any form
 * goes live is currently unmet. Flagged in OPEN_ITEMS rather than quietly
 * dropped, because the site collects personal data through two forms.
 */
export default function Footer() {
  return (
    <footer className="on-carbon bg-carbon text-bone">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          {/* No lock-up here on purpose. §14.1 places the full lock-up on
              the header and supplies no reversed version, and the navy
              wordmark is unreadable on carbon — so the alternative was a
              paper plate floating in a dark footer, which read as a sticker
              stuck onto the design. The brand statement carries it in type
              instead, and the entity is named in the legal block below. */}
          <div>
            <p className="max-w-[24rem] font-display text-[1.75rem] leading-[1.3] text-bone">
              Enterprise B2B platforms.
              <br />
              India to global.
            </p>
            <p className="mt-5 max-w-[24rem] text-sm leading-relaxed text-bone-2">
              A specialist GTM and growth firm for high-value Enterprise B2B
              platforms — one firm, two directions of value, and an operating
              model built to be handed over.
            </p>
          </div>

          {INDEX.map((col) => (
            <div key={col.head}>
              <h2 className="ev text-bone-2">{col.head}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
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

        <div className="rule-t mt-14 pt-8 text-xs text-bone-2">
          <p>© {new Date().getFullYear()} {LEGAL_ENTITY}.</p>
        </div>
      </div>
    </footer>
  );
}
