"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitInterest } from "./actions";
import { EMPTY_STATE } from "../contact/state";

/**
 * The candidate interest form — deliberately separate from the client
 * enquiry form (§12), and deliberately shorter. A senior engineer will not
 * fill in eight fields to find out whether a conversation is worth having.
 *
 * Same sentence-shaped construction the enquiry form uses, so the two feel
 * like they came from the same firm. Every blank is a properly labelled
 * input — the labels are visually hidden, not absent.
 */

const blank =
  "mx-1 inline-block min-w-[6ch] [field-sizing:content] border-b-2 bg-transparent px-1 pb-0.5 text-ink outline-none transition-colors placeholder:text-ink-2/70 focus:border-blue";

export default function InterestForm() {
  const [state, action, pending] = useActionState(submitInterest, EMPTY_STATE);
  const summary = useRef<HTMLDivElement>(null);
  const errorCount = Object.keys(state.errors).length;

  useEffect(() => {
    if (state.status === "invalid" && errorCount > 0) summary.current?.focus();
  }, [state, errorCount]);

  if (state.status === "sent") {
    return (
      <div role="status" className="border-l-2 border-blue bg-paper p-8 lg:p-10">
        <p className="ev text-blue">Received</p>
        <p className="mt-4 max-w-measure text-[1.25rem] leading-relaxed">
          {state.message}
        </p>
      </div>
    );
  }

  const line = (name: string) =>
    `${blank} ${state.errors[name] ? "border-blue" : "border-rule hover:border-ink-2"}`;

  return (
    <form action={action} noValidate>
      {state.status === "invalid" && errorCount > 0 && (
        <div
          ref={summary}
          tabIndex={-1}
          role="alert"
          className="mb-10 border-l-2 border-blue bg-paper p-5"
        >
          <p className="text-[0.9375rem] font-medium">{state.message}</p>
          <ul className="mt-3 space-y-1">
            {Object.entries(state.errors).map(([field, msg]) => (
              <li key={field} className="text-[0.9375rem] text-ink-2">
                <a href={`#${field}`} className="text-blue underline">
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
          className="mb-10 border-l-2 border-blue bg-paper p-5 text-[0.9375rem] leading-relaxed"
        >
          {state.message}
        </div>
      )}

      <div className="font-display text-[clamp(1.375rem,3vw,2.25rem)] leading-[1.75] tracking-[-0.015em]">
        <label htmlFor="name" className="sr-only">
          Your name
        </label>
        I&apos;m
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
        , and you can reach me at
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="email"
          defaultValue={state.values.email ?? ""}
          aria-invalid={state.errors.email ? true : undefined}
          className={line("email")}
        />
        .
      </div>

      <div className="mt-10">
        <label htmlFor="links" className="ev block text-ink-2">
          Where your work lives <span className="normal-case">(optional)</span>
        </label>
        <input
          id="links"
          name="links"
          type="text"
          placeholder="GitHub, LinkedIn, a repo, a write-up — whatever is most useful"
          defaultValue={state.values.links ?? ""}
          className="mt-3 w-full border-b border-rule bg-transparent px-1 py-2 text-[1.0625rem] leading-relaxed outline-none transition-colors hover:border-ink-2 focus:border-blue"
        />
      </div>

      <div className="mt-10">
        <label htmlFor="building" className="ev block text-ink-2">
          What you&apos;d want to build here
          <span aria-hidden className="ml-1 text-blue">
            *
          </span>
        </label>
        <textarea
          id="building"
          name="building"
          rows={4}
          required
          placeholder="the kind of problem you want to be close to, and what you've done that's nearest to it"
          defaultValue={state.values.building ?? ""}
          aria-invalid={state.errors.building ? true : undefined}
          className={`mt-3 w-full resize-y border-b-2 bg-transparent px-1 py-2 font-display text-[clamp(1.125rem,2.2vw,1.625rem)] leading-relaxed outline-none transition-colors placeholder:text-ink-2/70 focus:border-blue ${
            state.errors.building
              ? "border-blue"
              : "border-rule hover:border-ink-2"
          }`}
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
