import type { Metadata } from "next";
import Link from "next/link";
import Cited from "@/components/Cited";
import DoorsMap from "@/components/DoorsMap";
import {
  CountUp,
  Float,
  Reveal,
  Stagger,
  StaggerItem,
  StaggerList,
  StaggerRow,
} from "@/components/motion";
import { DOORS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Three Doors",
  description:
    "India domestic enterprises, GCCs and systems integrators — three routes from India revenue to global scale.",
};

/**
 * Each door gets its own ground rather than its own tab.
 *
 * The previous version hid two thirds of this page behind a selector, which
 * meant a reader had to work out that there was more to see. Giving each
 * route a full section — and alternating the ground under it — makes the
 * three feel genuinely distinct while leaving nothing gated.
 */
const TONE = [
  {
    section: "bg-paper",
    ghost: "text-blue/[0.07]",
    accent: "text-blue",
    bullet: "bg-blue",
    rule: "border-rule",
    body: "text-ink-2",
    head: "text-ink",
  },
  {
    section: "on-carbon bg-carbon",
    ghost: "text-bone/[0.06]",
    accent: "text-gold",
    bullet: "bg-gold",
    rule: "border-rule-dark",
    body: "text-bone-2",
    head: "text-bone",
  },
  {
    section: "bg-paper-2",
    ghost: "text-blue/[0.08]",
    accent: "text-blue",
    bullet: "bg-blue",
    rule: "border-rule",
    body: "text-ink-2",
    head: "text-ink",
  },
] as const;

export default function DoorsPage() {
  return (
    <>
      {/* ── OPENING ──────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-14 lg:px-10 lg:pt-24 lg:pb-16">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              Three doors
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              India revenue is not one market. It is{" "}
              <span className="text-blue">three</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12} mode="mount">
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
              Domestic enterprises, Global Capability Centres and systems
              integrators buy differently, on different timelines, for
              different reasons. Treating them as one funnel is the most
              common and most expensive mistake we see.
            </p>
          </Reveal>
        </div>

        {/* the route map — the whole argument in one picture */}
        <div className="mx-auto max-w-wide px-6 pb-16 lg:px-10 lg:pb-20">
          <DoorsMap />
        </div>

        {/* index — the three routes at a glance before the deep dive */}
        <Stagger className="mx-auto grid max-w-wide gap-px bg-rule px-0 sm:grid-cols-3">
          {DOORS.map((d, i) => (
            <StaggerItem key={d.id} className="bg-paper">
              <a
                href={`#${d.id}`}
                className="group flex h-full items-baseline gap-4 px-6 py-7 transition-colors duration-500 hover:bg-paper-2 lg:px-10"
              >
                <span className="font-display text-[2.25rem] leading-none text-blue/45 transition-colors duration-500 group-hover:text-blue">
                  {d.n}
                </span>
                <span className="flex-1">
                  <span className="block text-[1.0625rem] leading-snug text-ink">
                    {d.name}
                  </span>
                  <span className="ev mt-1.5 block text-[0.5rem] text-ink-2">
                    {["Domestic", "GCCs", "Integrators"][i]}
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── ONE SECTION PER DOOR ─────────────────────────────────────── */}
      {DOORS.map((d, i) => {
        const t = TONE[i];
        const flip = i === 1;
        return (
          <section
            key={d.id}
            id={d.id}
            className={`relative scroll-mt-20 overflow-hidden border-b ${t.rule} ${t.section}`}
          >
            {/* the numeral, floating, oversized */}
            <Float
              amplitude={10}
              duration={9 + i}
              delay={i * 0.6}
              className="pointer-events-none absolute -top-10 right-2 select-none lg:right-10"
            >
              <span
                aria-hidden
                className={`font-display text-[13rem] leading-none lg:text-[20rem] ${t.ghost}`}
              >
                {d.n}
              </span>
            </Float>

            <div className="relative mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
              <div
                // md, not lg: a 900px laptop window was falling back to a
                // single stacked column and losing the whole two-up rhythm.
                className={`grid gap-10 md:gap-12 lg:gap-20 ${
                  flip
                    ? "md:grid-cols-[1fr_1.15fr]"
                    : "md:grid-cols-[1.15fr_1fr]"
                }`}
              >
                <Reveal
                  kind="mask"
                  className={flip ? "md:order-2" : undefined}
                >
                  <p className={`ev flex items-center gap-3 ${t.accent}`}>
                    <span
                      aria-hidden
                      className={`h-px w-8 ${t.bullet}`}
                    />
                    Route {d.n}
                  </p>
                  <h2
                    className={`mt-6 max-w-[14ch] text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.02] ${t.head}`}
                  >
                    {d.name}
                  </h2>
                  <p
                    className={`mt-7 max-w-measure text-[1.0625rem] leading-relaxed ${t.body}`}
                  >
                    {d.thesis}
                  </p>

                  {d.proof && (
                    <div className={`mt-10 border-t pt-7 ${t.rule}`}>
                      <p
                        className={`font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none tabular-nums ${t.head}`}
                      >
                        <CountUp value={d.proof.value} />
                      </p>
                      <p className={`mt-3 max-w-[30ch] text-sm leading-snug ${t.body}`}>
                        {d.proof.label}
                      </p>
                      <p className={`ev mt-2 text-[0.5rem] ${t.body}`}>
                        Source — {d.proof.source}
                      </p>
                    </div>
                  )}
                </Reveal>

                <div className={flip ? "md:order-1" : undefined}>
                  <p className={`ev border-b pb-4 ${t.rule} ${t.body}`}>
                    How we work this route
                  </p>
                  <StaggerList>
                    {d.motion.map((m) => (
                      <StaggerRow
                        key={m}
                        className={`group flex gap-5 border-b py-5 ${t.rule}`}
                      >
                        <span
                          aria-hidden
                          className={`mt-2.5 h-px w-6 shrink-0 origin-left transition-transform duration-500 group-hover:scale-x-150 ${t.bullet}`}
                        />
                        <span
                          className={`text-[1.0625rem] leading-snug ${t.head}`}
                        >
                          {m}
                        </span>
                      </StaggerRow>
                    ))}
                  </StaggerList>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── THE MULTIPLIER ───────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14 lg:gap-24">
            <Reveal kind="mask">
              <p className="ev text-ink-2">The multiplier</p>
              <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02]">
                Every door opens <span className="text-blue">twice</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-2">
              <p>
                A domestic enterprise win produces a reference that travels
                across a sector. A GCC win puts your product in front of the
                parent company&apos;s global architecture function. An SI
                partnership, properly built, carries you into deals you were
                never invited to.
              </p>
              <p className="text-ink">
                This is why India is an operating investment rather than a
                territory. The revenue is worth having. The route to global
                scale that comes with it is worth more.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[40ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
                Picking the right door is a qualification decision, not a
                marketing one.
              </p>
              <Link
                href="/how-we-sell"
                className="wipe shrink-0 border-b border-rule py-1 text-[0.9375rem] transition-colors duration-300 hover:text-blue"
              >
                How we qualify
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
