"use server";

/**
 * Enquiry submission.
 *
 * IMPORTANT — pre-launch state.
 * There is currently no delivery destination configured. Rather than
 * returning a false success and silently dropping a lead, this action
 * validates the enquiry and then reports honestly that it cannot be
 * delivered yet.
 *
 * To switch it on, set PIVORA_ENQUIRY_WEBHOOK to an endpoint that accepts
 * a JSON POST (a form service, a CRM intake, or an internal handler) and
 * remove the pre-launch notice from app/contact/page.tsx.
 *
 * Tracked in lib/content.ts → OPEN_ITEMS and surfaced on /review.
 */

import type { FormState } from "./state";

const REQUIRED: Record<string, string> = {
  name: "Tell us your name.",
  company: "Tell us which company you're with.",
  email: "We need a work email to reply to.",
  role: "Your role helps us prepare for the conversation.",
  building: "A sentence on what you're building in India is enough.",
};

export async function submitEnquiry(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const values: Record<string, string> = {};
  for (const key of ["name", "company", "email", "role", "building", "message"]) {
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

  const destination = process.env.PIVORA_ENQUIRY_WEBHOOK;

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
      "Thank you — that has reached us. You will hear back from Subrato directly.",
    errors: {},
    values: {},
  };
}
