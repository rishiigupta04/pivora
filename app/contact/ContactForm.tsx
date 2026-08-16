"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry } from "./actions";
import { EMPTY_STATE } from "./state";

/**
 * The enquiry as a sentence rather than a stack of boxes.
 *
 * The reader fills in blanks in a statement they'd actually say out loud,
 * which suits a firm whose whole pitch is "have a real conversation". Every
 * blank is still a proper labelled input — the labels are visually hidden,
 * not absent — so screen readers get an ordinary form and the error
 * summary still links to each field.
 */

const blank =
  "mx-1 inline-block min-w-[6ch] [field-sizing:content] border-b-2 bg-transparent px-1 pb-0.5 text-ink outline-none transition-colors placeholder:text-ink-2/45 focus:border-blue";

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
          className="mb-10 border-l-2 border-blue bg-paper-2 p-5 text-[0.9375rem] leading-relaxed"
        >
          {state.message}
        </div>
      )}

      {/* the sentence */}
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
        .
      </div>

      <div className="mt-10">
        <label
          htmlFor="building"
          className="ev block text-ink-2"
        >
          In India, we&apos;re building
          <span aria-hidden className="ml-1 text-blue">
            *
          </span>
        </label>
        <textarea
          id="building"
          name="building"
          rows={3}
          required
          placeholder="the product, and how far you've got"
          defaultValue={state.values.building ?? ""}
          aria-invalid={state.errors.building ? true : undefined}
          className={`mt-3 w-full resize-y border-b-2 bg-transparent px-1 py-2 font-display text-[clamp(1.125rem,2.2vw,1.625rem)] leading-relaxed outline-none transition-colors placeholder:text-ink-2/45 focus:border-blue ${
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
