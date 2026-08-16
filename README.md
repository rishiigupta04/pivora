# Pivora Consulting

Marketing site for Pivora Consulting — an operating partner that builds, runs
and eventually transfers the India business of global B2B software companies.

Built with Next.js 16 (App Router), Tailwind CSS v4, and Motion.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Design system

Tokens and the reasoning behind them live in `app/globals.css`.

- **Ground** — warm paper for argument, warm carbon for the operating detail.
- **Signals** — blue `#0022EE` is Pivora, gold `#FFD700` is the client. The
  palette encodes the business model: in the BOS(T) handover, blue drains
  into gold and reaches zero at Transfer.
- **Type** — Newsreader for the argument, Schibsted Grotesk for the
  interface, Martian Mono for evidence.

Gold is only ever used on carbon: it measures 1.4:1 on white and cannot carry
text on a light ground.

## Content rules

All copy lives in `lib/content.ts`, deliberately, so every claim is auditable
in one place.

- No invented customers, logos, partnerships, case studies or numbers.
- Every published figure renders with its source visible, via `Cited`.
- Subrato's career history and Pivora's own engagements are kept structurally
  apart on the founder page. Nothing achieved at a former employer is
  presented as Pivora's work.

## Before launch

`/review` is an internal, noindex checklist of everything still unresolved —
open items, plus a table of every figure on the site and its source. It is not
linked from the navigation.

Two environment variables matter:

| Variable | Why |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute URLs for Open Graph, canonicals and the sitemap. Without it they resolve to localhost and social cards will not render. |
| `PIVORA_ENQUIRY_WEBHOOK` | Destination for the contact form. Until it is set the form validates, then tells the visitor honestly that it could not be sent, rather than faking success. |

## Accessibility notes

- Motion is a finish, never a precondition for reading: a `<noscript>` guard
  reveals anything Motion would otherwise leave at `opacity: 0`.
- `prefers-reduced-motion` disables smooth scroll, the cursor and all
  entrance animation.
- Contrast is verified against the rendered page including the paper grain.
