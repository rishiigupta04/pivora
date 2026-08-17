"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry } from "./actions";
import { EMPTY_STATE } from "./state";

/**
 * The enquiry as a sentence, then a short qualification block.
 *
 * The opening reads as a statement the sender would actually say out loud,
 * which suits a firm whose whole pitch is "have a real conversation". The
 * block underneath is §12's lead qualification framework — direction,
 * objective, GTM stage, commercial range, Built–Operate–Sustain interest.
 *
 * It is a longer form than a marketing site would ship, and deliberately:
 * the brief's instruction is to optimise for qualified platform
 * conversations rather than for maximum submissions. Only the fields Pivora
 * genuinely cannot start without are required; the rest are optional and
 * marked as such.
 *
 * Every blank is a properly labelled input — labels are visually hidden in
 * the sentence, not absent — so screen readers get an ordinary form and the
 * error summary still links to each field.
 */

const blank =
  "mx-1 inline-block min-w-[6ch] [field-sizing:content] border-b-2 bg-transparent px-1 pb-0.5 text-ink outline-none transition-colors placeholder:text-ink-2/70 focus:border-blue";

/**
 * `appearance-none` strips the native chevron, and without one a select is
 * indistinguishable from a text input. Drawn back in as a style rather than
 * a Tailwind arbitrary value — an inline SVG data URI carries quotes and
 * angle brackets that do not survive the class-name parser.
 */
const CHEVRON = {
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1.5 6 6.5l5-5' fill='none' stroke='%234a463e' stroke-width='1.25'/></svg>\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
  backgroundSize: "12px 8px",
} as const;

/* §12 — the qualification fields, with the options Pivora actually sorts on. */
const DIRECTION = [
  "Global platform entering India",
  "Indian platform going global",
  "Both directions",
];

const OBJECTIVE = [
  "Market entry",
  "Scale an existing presence",
  "Ecosystem — GCC and GSI",
  "Global expansion",
  "GTM transformation",
];

const STAGE = [
  "Pre-entry",
  "Early traction",
  "Proving repeatability",
  "Scaling",
];

const COMMERCIAL = [
  "Under $50k average contract value",
  "$50k – $150k",
  "$150k – $500k",
  "$500k+",
  "Not yet defined",
];

const BOS = [
  "Yes — that is what we are looking for",
  "Exploring it",
  "No — something narrower",
];

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, EMPTY_STATE);
  const summary = useRef<HTMLDivElement>(null);
  const errorCount = Object.keys(state.errors).length;

  useEffect(() => {
    if (state.status === "invalid" && errorCount > 0) summary.current?.focus();
  }, [state, errorCount]);

  if (state.status === "sent") {
    return (
      <div role="status" className="border-l-2 border-blue bg-paper-2 p-8 lg:p-10">
        <p className="ev text-blue">Received</p>
        <p className="mt-4 max-w-measure text-[1.25rem] leading-relaxed">
          {state.message}
        </p>
      </div>
    );
  }

  const line = (name: string) =>
    `${blank} ${state.errors[name] ? "border-blue" : "border-rule hover:border-ink-2"}`;

  const field = (name: string) =>
    `mt-3 w-full appearance-none border bg-transparent py-3.5 pr-11 pl-4 text-[1.0625rem] text-ink outline-none transition-colors focus:border-blue ${
      state.errors[name] ? "border-blue" : "border-rule hover:border-ink-2"
    }`;

  return (
    <form action={action} noValidate>
      {state.status === "invalid" && errorCount > 0 && (
        <div
          ref={summary}
          tabIndex={-1}
          role="alert"
          className="mb-10 border-l-2 border-blue bg-paper-2 p-5"
        >
          <p className="text-[0.9375rem] font-medium">{state.message}</p>
          <ul className="mt-3 space-y-1">
            {Object.entries(state.errors).map(([f, msg]) => (
              <li key={f} className="text-[0.9375rem] text-ink-2">
                <a href={`#${f}`} className="text-blue underline">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {state.status === "undeliverable" && (
        <div
          role="alert"
          className="mb-10 border-l-2 border-blue bg-paper-2 p-5 text-[0.9375rem] leading-relaxed"
        >
          {state.message}
        </div>
      )}

      {/* ── the sentence ─────────────────────────────────────────── */}
      <div className="font-display text-[clamp(1.375rem,3vw,2.25rem)] leading-[1.75] tracking-[-0.015em]">
        <label htmlFor="name" className="sr-only">
          Your name
        </label>
        My name is
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="your name"
          defaultValue={state.values.name ?? ""}
          aria-invalid={state.errors.name ? true : undefined}
          className={line("name")}
        />
        and I&apos;m
        <label htmlFor="role" className="sr-only">
          Your role
        </label>
        <input
          id="role"
          name="role"
          type="text"
          required
          autoComplete="organization-title"
          placeholder="your role"
          defaultValue={state.values.role ?? ""}
          aria-invalid={state.errors.role ? true : undefined}
          className={line("role")}
        />
        at
        <label htmlFor="company" className="sr-only">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="company"
          defaultValue={state.values.company ?? ""}
          aria-invalid={state.errors.company ? true : undefined}
          className={line("company")}
        />
        .
      </div>

      <div className="mt-8 font-display text-[clamp(1.375rem,3vw,2.25rem)] leading-[1.75] tracking-[-0.015em]">
        <label htmlFor="email" className="sr-only">
          Work email
        </label>
        You can reach me at
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="work email"
          defaultValue={state.values.email ?? ""}
          aria-invalid={state.errors.email ? true : undefined}
          className={line("email")}
        />
        , and the platform is at
        <label htmlFor="website" className="sr-only">
          Company website
        </label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="url"
          placeholder="website"
          defaultValue={state.values.website ?? ""}
          className={line("website")}
        />
        .
      </div>

      {/* ── the qualification block — §12 ────────────────────────── */}
      <fieldset className="mt-14 border-t border-rule pt-10">
        <legend className="sr-only">About the platform and the objective</legend>
        <p className="ev text-ink-2">
          So the first conversation starts in the right place
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <label htmlFor="direction" className="ev block text-ink-2">
              Direction
              <span aria-hidden className="ml-1 text-blue">
                *
              </span>
            </label>
            <select
              id="direction"
              name="direction"
              required
              defaultValue={state.values.direction ?? ""}
              aria-invalid={state.errors.direction ? true : undefined}
              style={CHEVRON}
              className={field("direction")}
            >
              <option value="">Choose one</option>
              {DIRECTION.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="objective" className="ev block text-ink-2">
              Primary objective
              <span aria-hidden className="ml-1 text-blue">
                *
              </span>
            </label>
            <select
              id="objective"
              name="objective"
              required
              defaultValue={state.values.objective ?? ""}
              aria-invalid={state.errors.objective ? true : undefined}
              style={CHEVRON}
              className={field("objective")}
            >
              <option value="">Choose one</option>
              {OBJECTIVE.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="stage" className="ev block text-ink-2">
              Current GTM stage{" "}
              <span className="normal-case">(optional)</span>
            </label>
            <select
              id="stage"
              name="stage"
              defaultValue={state.values.stage ?? ""}
              style={CHEVRON}
              className={field("stage")}
            >
              <option value="">Prefer not to say</option>
              {STAGE.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="commercial" className="ev block text-ink-2">
              Commercial range <span className="normal-case">(optional)</span>
            </label>
            <select
              id="commercial"
              name="commercial"
              defaultValue={state.values.commercial ?? ""}
              style={CHEVRON}
              className={field("commercial")}
            >
              <option value="">Prefer not to say</option>
              {COMMERCIAL.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="bos" className="ev block text-ink-2">
              Interested in Built–Operate–Sustain?{" "}
              <span className="normal-case">(optional)</span>
            </label>
            <select
              id="bos"
              name="bos"
              defaultValue={state.values.bos ?? ""}
              style={CHEVRON}
              className={field("bos")}
            >
              <option value="">Not sure yet</option>
              {BOS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <div className="mt-12">
        <label htmlFor="building" className="ev block text-ink-2">
          The platform, and how far you&apos;ve got
          <span aria-hidden className="ml-1 text-blue">
            *
          </span>
        </label>
        <textarea
          id="building"
          name="building"
          rows={3}
          required
          placeholder="what it does, who buys it, and what has already been tried in this market"
          defaultValue={state.values.building ?? ""}
          aria-invalid={state.errors.building ? true : undefined}
          className={`mt-3 w-full resize-y border-b-2 bg-transparent px-1 py-2 font-display text-[clamp(1.125rem,2.2vw,1.625rem)] leading-relaxed outline-none transition-colors placeholder:text-ink-2/70 focus:border-blue ${
            state.errors.building ? "border-blue" : "border-rule hover:border-ink-2"
          }`}
        />
      </div>

      <div className="mt-10">
        <label htmlFor="message" className="ev block text-ink-2">
          Anything else <span className="normal-case">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          defaultValue={state.values.message ?? ""}
          className="mt-3 w-full resize-y border-b border-rule bg-transparent px-1 py-2 text-[1.0625rem] leading-relaxed outline-none transition-colors hover:border-ink-2 focus:border-blue"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="fill-up mt-12 bg-blue px-9 py-4 text-[0.9375rem] text-white disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send this"}
      </button>
    </form>
  );
}
