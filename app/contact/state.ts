/**
 * Form state shared by the server action and the client form.
 *
 * This deliberately lives outside actions.ts: a "use server" module may
 * only export async functions, so exporting EMPTY_STATE from there made it
 * arrive as `undefined` on the client and crashed the prerender.
 */

export type FormState = {
  status: "idle" | "invalid" | "undeliverable" | "sent";
  message: string;
  errors: Record<string, string>;
  values: Record<string, string>;
};

export const EMPTY_STATE: FormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};
