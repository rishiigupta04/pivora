import Link from "next/link";
import { INDEX } from "@/lib/nav";

/**
 * 404. Required in build scope by §16.
 *
 * Rather than an apology and a home link, it hands over the full map — a
 * visitor who landed on a dead URL knows what they were looking for, and
 * the fastest route back is the list of everything that does exist.
 */
export default function NotFound() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-wide px-6 pt-16 pb-24 lg:px-10 lg:pt-24">
        <p className="ev flex items-center gap-3 text-ink-2">
          <span aria-hidden className="h-px w-8 bg-blue" />
          404
        </p>
        <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
          That page isn&apos;t <span className="text-blue">here</span>.
        </h1>
        <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
          Either it moved or it never existed. Everything that does exist is
          below.
        </p>

        <div className="mt-16 grid gap-x-14 gap-y-10 lg:grid-cols-3">
          {INDEX.map((group) => (
            <div key={group.head}>
              <p className="ev border-b border-rule pb-3 text-ink-2">
                {group.head}
              </p>
              <ul>
                {group.links.map((l) => (
                  <li key={l.href} className="border-b border-rule">
                    <Link
                      href={l.href}
                      className="group flex items-baseline gap-4 py-4"
                    >
                      <span className="flex-1">
                        <span className="block font-display text-[1.375rem] leading-tight tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-1">
                          {l.label}
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-ink-2">
                          {l.note}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
