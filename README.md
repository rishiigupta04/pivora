# Pivora Consulting

Marketing site for Pivora Consulting — a specialist GTM and growth firm for
high-value Enterprise B2B platform products. One firm, two directions of
value: global platforms into India, and Indian platforms out to the world.

Built with Next.js 16 (App Router), Tailwind CSS v4, and Motion.

## Source of truth

All content is drawn from **Pivora Consulting — Website Strategy, Brand System
& Development Master Brief v7.0** (August 2026), which supersedes v6.0 and
folds in the Brand & Website Guidelines v1.0 and Brand Strategy Addendum v2.0.
Section references appear in comments throughout `lib/content.ts` and the page
files, so any line of copy can be traced back to the brief.

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

## Structure

| Path | What lives there |
| --- | --- |
| `lib/content.ts` | Every piece of copy, every figure, every model. One file, deliberately, so claims are auditable in one place. |
| `lib/nav.ts` | The site map. The header index, the footer and `sitemap.xml` are all generated from it, so a route cannot be added and left unlinked. |
| `app/globals.css` | Design tokens and the reasoning behind them. |
| `components/` | The diagrams — `CorridorMap`, `EcosystemFlow`, `Handover`, `RampStairs`, `PartnerLadder`, `EngineMap` — plus the motion primitives. |
| `public/pivora-logo.png` | The approved lock-up (§14.1), extracted from the brief. |
| `public/pivora-mark.png` | The P-in-circle alone, for the favicon and small applications. |

## Brand assets

Both files were extracted from the master brief's own embedded artwork and
**prepared, not redrawn** — the solid white field was knocked out to alpha
and the artwork trimmed to its bounding box, so clear space is controlled in
CSS rather than baked into the file. Glyphs, colours and proportions are
untouched, and `Wordmark` derives width from height at the artwork's own
ratio so nothing ever stretches.

The lock-up appears in the header, the social card and nowhere else. It is
Deep Navy, which is unreadable on the carbon footer, and §14.1 supplies no
reversed version and forbids recolouring — so the footer carries the brand
in type instead. Send a reversed lock-up and `Wordmark tone="dark"` will
place it properly.

Both are rasters at 1153×262 and 302×302. Ample for every current use; a
vector source would still be better and is tracked in `OPEN_ITEMS`.

Brief §14.13 asks for every numbered figure to be a native, responsive web
component rather than an embedded image. All of them are: real DOM text,
decorative divs for connectors, no viewBox to fight, and every label
selectable.

## Design system

- **Ground** — warm paper for the argument, warm carbon for the machinery.
- **Signals** — blue `#0022EE` is Pivora, gold `#FFD700` is the client. In the
  Built–Operate–Sustain handover, blue retreats and gold advances. It does not
  reach zero, because Sustain is not an exit (§5).
- **Type** — Newsreader for the argument, Schibsted Grotesk for the interface,
  Martian Mono for evidence.

Gold is only ever used on carbon: it measures 1.4:1 on white and cannot carry
text on a light ground.

> **Palette note.** Brief §14.2 specifies Deep Navy `#0B1F3A` and Muted Gold
> `#C8A15A` on white. This site keeps the existing warm-paper palette at the
> client's instruction to preserve the current look and feel. Every other §14
> rule holds: gold stays an accent, no gradients, no glassmorphism, no stock
> photography, no animated globes. Swapping to the brief's palette is a
> one-file change in `app/globals.css`. Tracked in `OPEN_ITEMS`.

## Content rules

- No invented customers, logos, partnerships, case studies, testimonials or
  numbers (§10).
- Every published figure renders with its source visible, via `Cited`.
  Figures that failed verification live in `REMOVED` and ship nowhere; the
  one exception is `MARKET.siMarket` (`PROVISIONAL`), published on the GSI
  track at the client's instruction with a deliberately weaker citation
  until a real source is found. Both lists surface on `/review`.
- **Nothing on a public page talks about how the site was built.** No "every
  figure carries a source" badges, no "we don't invent case studies"
  reassurance, no internal document names, no caveats aimed at the visitor.
  The discipline shows in what the pages do — sources printed beside
  figures — not in claims that it exists. Vetting notes belong on `/review`.
- Subrato's career history and Pivora's own engagements are kept structurally
  apart on `/about`. Nothing achieved at a former employer is presented as
  Pivora's work (§19).
- Banned phrases never appear in copy (§11.1): "end-to-end solutions",
  "360-degree transformation", "one-stop shop", "digital transformation
  partner", "technology solutions provider", "synergy", "game-changing",
  "revolutionary".

## Before launch

`/review` is an internal, noindex checklist of everything still unresolved —
open items, the figures that ship, the figures that were cut, and the full
verified source register. It is absent from the sitemap and the navigation.

| Variable | Why |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute URLs for Open Graph, canonicals and the sitemap. Without it they resolve to localhost and social cards will not render. |
| `PIVORA_ENQUIRY_WEBHOOK` | Destination for the client contact form. Until it is set the form validates, then tells the visitor honestly that it could not be sent, rather than faking success. |
| `PIVORA_CAREERS_WEBHOOK` | Destination for the candidate interest form. Kept separate from the enquiry webhook — §12 requires the two never be merged. |

Legal pages (`/privacy`, `/terms`, `/cookies`) exist and describe the site's
actual behaviour accurately, but need a solicitor's pass before either form
goes live (§15).

## Accessibility notes

- Motion is a finish, never a precondition for reading: a `<noscript>` guard
  reveals anything Motion would otherwise leave at `opacity: 0`.
- `prefers-reduced-motion` disables smooth scroll, the cursor and all
  entrance animation.
- The founder timeline's info affordance is a `<details>` element — click,
  tap, or keyboard, with no JavaScript and a readable fallback.
- `CountUp` seeds its motion value at the **target**, so the real figure is
  what ships in the server HTML and what a crawler or a no-JS reader sees.
  The count-up is armed after mount and only for figures still off-screen.
  Seeding at zero — the obvious implementation — served `$0.0B` next to a
  Gartner citation to anything that did not run JavaScript.
- Contrast is verified against the rendered page including the paper grain.
