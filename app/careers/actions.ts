"use server";

/**
 * Candidate interest submission.
 *
 * §12 is explicit that the Careers form must stay separate from the client
 * Contact form — different destination, different fields, different reader.
 * So this is its own action with its own webhook, rather than a shared
 * endpoint with a "type" flag.
 *
 * IMPORTANT — pre-launch state.
 * There is no delivery destination configured. Rather than returning a
 * false success and silently dropping a candidate, this validates and then
 * reports honestly that it cannot be delivered yet.
 *
 * To switch it on, set PIVORA_CAREERS_WEBHOOK to an endpoint that accepts a
 * JSON POST. Tracked in lib/content.ts → OPEN_ITEMS and surfaced on /review.
 */

import type { FormState } from "../contact/state";

const REQUIRED: Record<string, string> = {
  name: "Tell us your name.",
  email: "We need an email to reply to.",
  building: "A few lines on what you'd want to build is the whole point.",
};

export async function submitInterest(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const values: Record<string, string> = {};
  for (const key of ["name", "email", "links", "building"]) {
    values[key] = String(formData.get(key) ?? "").trim();
  }

  const errors: Record<string, string> = {};
  for (const [field, msg] of Object.entries(REQUIRED)) {
    if (!values[field]) errors[field] = msg;
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "That doesn't look like a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "invalid",
      message: "There are a few things to fix before this can be sent.",
      errors,
      values,
    };
  }

  const destination = process.env.PIVORA_CAREERS_WEBHOOK;

  if (!destination) {
    return {
      status: "undeliverable",
      message:
        "This form is not yet connected to a destination, so your message has not been sent. Please reach out to Pivora directly instead — we would rather tell you that than pretend it arrived.",
      errors: {},
      values,
    };
  }

  try {
    const res = await fetch(destination, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Destination responded ${res.status}`);
  } catch {
    return {
      status: "undeliverable",
      message:
        "We could not deliver that message. Please try again shortly, or reach out to Pivora directly.",
      errors: {},
      values,
    };
  }

  return {
    status: "sent",
    message:
      "Thank you — that has reached us. If there's a fit we'll come back to you directly.",
    errors: {},
    values: {},
  };
}
