import type { Metadata } from "next";
import Link from "next/link";
import Handover from "@/components/Handover";
import EngineMap from "@/components/EngineMap";
import { Reveal } from "@/components/motion";
import { DEDICATED, SHARED } from "@/lib/content";

export const metadata: Metadata = {
  title: "The BOS(T) Model",
  description:
    "Build, Operate, Sustain and — optionally — Transfer. Pivora's phased operating model for a global software company's India business.",
};

export default function ModelPage() {
  return (
    <>
      {/* Light: the argument for the model. */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-wide px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-24">
          <Reveal kind="mask" mode="mount">
            <p className="ev flex items-center gap-3 text-ink-2">
              <span aria-hidden className="h-px w-8 bg-blue" />
              The model
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[0.99]">
              Most firms are built to stay.{" "}
              <span className="text-blue">We are built to leave.</span>
            </h1>
          </Reveal>
          <div className="mt-8 grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-14 lg:gap-24">
            <div />
            <Reveal
              delay={0.12}
              mode="mount"
              className="space-y-5 self-end text-[1.0625rem] leading-relaxed text-ink-2"
            >
              <p>
                BOS(T) is four phases — Build, Operate, Sustain and, if you want
                it, Transfer. The first three are how the India business gets
                made. The fourth is how it stops being ours.
              </p>
              <p className="text-ink">
                The exit is agreed at the start, not negotiated at the end.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dark: the mechanism. The page descends here and stays down. */}
      <section className="on-carbon bg-carbon text-bone">
        <div className="mx-auto max-w-wide px-6 pt-20 lg:px-10 lg:pt-28">
          <h2 className="reveal max-w-[20ch] text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.08] text-bone">
            Watch who is carrying the weight.
          </h2>
          <p className="reveal reveal-2 mt-5 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
            Blue is us. Gold is you. Read down the four rows and the whole
            deal is visible in one look.
          </p>

          <Handover />
        </div>

        {/* The Execution Engine — a structure, not a card grid.
            Dedicated roles hang off a blue spine; shared expertise runs
            underneath as a band that is drawn on rather than owned. */}
        <div
          id="engine"
          className="scroll-mt-24 border-t border-rule-dark"
        >
          <div className="mx-auto max-w-wide px-6 py-20 lg:px-10 lg:py-28">
            <Reveal kind="mask" className="max-w-[46rem]">
              <p className="ev flex items-center gap-3 text-bone-2">
                <span aria-hidden className="h-px w-8 bg-blue-lift" />
                The execution engine
              </p>
              <h2 className="mt-6 text-[clamp(1.875rem,3.8vw,2.875rem)] leading-[1.05] text-bone">
                A team inside your business, backed by a bench outside it.
              </h2>
              <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-bone-2">
                The dedicated team is yours — named people, in your deals, on
                your forecast. The bench is not headcount you pay for; it is
                expertise you reach for when a pursuit needs it.
              </p>
            </Reveal>

            <EngineMap />

            <div className="rule-t mt-16 flex flex-col gap-5 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[40ch] font-display text-xl leading-snug text-bone">
                The engine only matters if the pipeline is real.
              </p>
              <Link
                href="/how-we-sell"
                className="ev shrink-0 border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70"
              >
                How we qualify →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
