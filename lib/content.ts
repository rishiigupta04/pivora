/**
 * Single source of truth for Pivora site copy.
 *
 * CONTENT RULES (from brief — do not violate):
 *  1. No invented customers, logos, partnerships, case studies, awards, or numbers.
 *  2. Always separate Subrato's career experience from Pivora's own engagements.
 *  3. Anything unverified lives in OPEN_ITEMS below and is NEVER rendered as
 *     settled fact on a public page. It surfaces only on /review.
 */

/* ------------------------------------------------------------------ *
 * VERIFIED MARKET DATA — every figure renders with its source visible.
 * If a stat has no source, it does not ship.
 * ------------------------------------------------------------------ */
export type Stat = {
  value: string;
  label: string;
  source: string;
};

export const MARKET: Record<string, Stat> = {
  itSpend: {
    value: "$161.5B",
    label: "India IT spend by 2025",
    source: "Gartner",
  },
  gccCount: {
    value: "1,700+",
    label: "Global Capability Centres operating in India",
    source: "2024",
  },
  gccRevenue: {
    value: "$64.6B",
    label: "GCC export revenue",
    source: "2024",
  },
  siMarket: {
    value: "$22B",
    label: "India systems-integrator market, growing 16.8% CAGR",
    source: "Industry estimate",
  },
  delays: {
    value: "75%",
    label: "of India SaaS rollouts face delays",
    source: "IDC / Zoho",
  },
  overrun: {
    value: "57%",
    label: "average overrun on those rollouts",
    source: "IDC / Zoho",
  },
};

/* ------------------------------------------------------------------ *
 * WHAT PIVORA IS NOT — the distinction has to land fast.
 * ------------------------------------------------------------------ */
export const NOT_A = [
  "a generic management consultancy",
  "a lead-generation agency",
  "a recruitment firm",
  "a reseller or channel partner",
  "a traditional market-entry advisor",
];

/* ------------------------------------------------------------------ *
 * THE THREE DOORS
 * ------------------------------------------------------------------ */
export type Door = {
  id: string;
  n: string;
  name: string;
  short: string;
  /** One line, for the home page summary. */
  line: string;
  /** The second thing this door opens — the global route beyond India. */
  multiplier: string;
  thesis: string;
  motion: string[];
  proof: Stat | null;
};

export const DOORS: Door[] = [
  {
    id: "domestic",
    n: "01",
    name: "India Domestic Enterprises",
    short: "Domestic",
    line: "The hardest door to open, and the most durable once it is.",
    multiplier: "A reference that travels across the sector",
    thesis:
      "Indian banks, manufacturers, retailers and conglomerates buying software to run their own business. The hardest door to open and the most durable once open — these accounts last years and earn you the references everything else depends on.",
    motion: [
      "A named list of accounts, not a territory to spray",
      "Real presales depth, for a committee that evaluates hard",
      "Architecture built with the customer, not handed to them",
      "Success measured on live usage, not on signature",
    ],
    proof: MARKET.itSpend,
  },
  {
    id: "gcc",
    n: "02",
    name: "India GCCs",
    short: "GCCs",
    line: "Rarely just an India win — it is a way into what the parent adopts everywhere.",
    multiplier: "Into the parent company's global standard",
    thesis:
      "The India arm of a global company, and increasingly the one holding the budget and the technical say. A GCC win is rarely just an India win — it is a way into what the parent company adopts everywhere.",
    motion: [
      "Work out what the GCC actually controls before pitching",
      "Start on something they own end to end",
      "Make the India team your advocate to head office",
      "Grow along the parent's map, not India's",
    ],
    proof: MARKET.gccRevenue,
  },
  {
    id: "gsi",
    n: "03",
    name: "Indian & Global SIs",
    short: "GSIs",
    line: "The biggest multiplier, and the easiest to get wrong.",
    multiplier: "Into deals you were never invited to",
    thesis:
      "Integrators who carry your software into their own clients. The biggest multiplier and the easiest to get wrong — an unsupported partnership produces a logo on a slide and no revenue.",
    motion: [
      "Build the practice before signing the partnership",
      "Trained architects inside the SI, not just a signed agreement",
      "Joint deals, named and tracked — not a vague alliance",
      "We watch delivery quality, because their name is on it too",
    ],
    proof: MARKET.siMarket,
  },
];

/* ------------------------------------------------------------------ *
 * BOS(T) — Build, Operate, Sustain, (Transfer)
 * `pivora` / `client` are ownership weights, 0–100. They drive the
 * blue→gold handover bar. They are a design encoding of the model,
 * not a claim about any specific engagement.
 * ------------------------------------------------------------------ */
export type Phase = {
  id: string;
  letter: string;
  name: string;
  optional?: boolean;
  pivora: number;
  client: number;
  /** One plain line: who is doing the work at this stage. */
  shift: string;
  premise: string;
  work: string[];
  exit: string;
};

export const PHASES: Phase[] = [
  {
    id: "build",
    letter: "B",
    name: "Build",
    pivora: 90,
    client: 10,
    shift: "We do nearly all of it.",
    premise:
      "Your product works elsewhere. Here you have nothing yet. We set the whole thing up — how it's positioned, priced, who we go after first, and who we hire.",
    work: [
      "Positioning and pricing for India",
      "The first target accounts, and the bar for taking one on",
      "First hires: sales, presales, architecture",
      "A partner map tied to real deals, not logos",
    ],
    exit: "A pipeline that survives scrutiny, and a team that can run it.",
  },
  {
    id: "operate",
    letter: "O",
    name: "Operate",
    pivora: 65,
    client: 35,
    shift: "We run it. Your team learns it.",
    premise:
      "We run the India business day to day — carrying a number, sitting in the deals, owning the forecast. Most advisors don't offer this, because it means being accountable for the result.",
    work: [
      "Selling, end to end, against the eight gates",
      "Presales and architecture on live deals",
      "Overseeing rollout, and keeping customers live",
      "The forecast, and the weekly rhythm behind it",
    ],
    exit: "Something repeatable, with real revenue behind it.",
  },
  {
    id: "sustain",
    letter: "S",
    name: "Sustain",
    pivora: 35,
    client: 65,
    shift: "Your team runs it. We advise.",
    premise:
      "It works. The question changes from can it run to can it run without us. We shrink our own footprint on purpose while your team takes it over.",
    work: [
      "Your hires shadow, then lead, then own",
      "How it works gets written down, not kept in our heads",
      "Reviews move to your calendar",
      "We step back from the deal room",
    ],
    exit: "An India business your own people are running.",
  },
  {
    id: "transfer",
    letter: "T",
    name: "Transfer",
    optional: true,
    pivora: 0,
    client: 100,
    shift: "We're gone. It's yours.",
    premise:
      "Optional, and the reason there's a fourth letter. The whole thing becomes yours — people, accounts, relationships. We are built to be removable.",
    work: [
      "The team moves onto your books",
      "Accounts and partner relationships handed across",
      "Everything documented, nothing held back",
      "An exit agreed at the start, not negotiated at the end",
    ],
    exit: "Pivora is gone. The India business is not.",
  },
];

/* ------------------------------------------------------------------ *
 * MEDDPICC — rendered as qualification gates that visibly reject.
 * ------------------------------------------------------------------ */
export type Gate = {
  k: string;
  name: string;
  ask: string;
  fail: string;
};

export const GATES: Gate[] = [
  {
    k: "M",
    name: "Metrics",
    ask: "Can they name the number this changes?",
    fail: "A business case we wrote for them.",
  },
  {
    k: "E",
    name: "Economic Buyer",
    ask: "Have we met the person who signs?",
    fail: "Hearing about them second-hand.",
  },
  {
    k: "D",
    name: "Decision Criteria",
    ask: "Do we know what they'll judge it on?",
    fail: "Criteria that happen to match our strengths.",
  },
  {
    k: "D",
    name: "Decision Process",
    ask: "Do we know every step to signature?",
    fail: "A close date with no procurement in it.",
  },
  {
    k: "P",
    name: "Paper Process",
    ask: "Legal, security, procurement — who, and how long?",
    fail: "A deal that slips on a step nobody scheduled.",
  },
  {
    k: "I",
    name: "Pain",
    ask: "Is this urgent enough to survive a budget cut?",
    fail: "Interest. Interest is not pain.",
  },
  {
    k: "C",
    name: "Champion",
    ask: "Do they sell for us when we're not there?",
    fail: "A friendly contact with no pull.",
  },
  {
    k: "C",
    name: "Competition",
    ask: "Have we counted the incumbent, and doing nothing?",
    fail: "A picture that leaves out the status quo.",
  },
];

/* ------------------------------------------------------------------ *
 * AI POINT OF VIEW
 * This is Pivora's read of the market, labelled as such on the page.
 * It contains no statistics, because we have none we can source. If a
 * figure is ever added here it must carry a citation like MARKET does.
 * ------------------------------------------------------------------ */
export const AI_POV = [
  {
    n: "01",
    head: "The committee grew, and it grew sideways",
    body: "A developer tool used to be sold to the person who would use it. An agentic product is evaluated by a group that now includes risk, legal, and a CISO who has been asked to hold a position on AI. The technical champion is still necessary and is no longer sufficient.",
  },
  {
    n: "02",
    head: "The POC bar moved",
    body: "Indian enterprises have already run AI pilots. A demo that would have won the room two years ago now opens it. The first question is rarely can it do this — it is what happened to the last one we tried, and why will this be different.",
  },
  {
    n: "03",
    head: "Governance arrives first, not last",
    body: "In regulated sectors especially, data residency, model provenance and auditability show up at the start of the evaluation rather than in the security review at the end. Teams that treat governance as a late-stage hurdle discover it was the actual decision criterion.",
  },
];

/* ------------------------------------------------------------------ *
 * THE BUYING COMMITTEE (AI)
 * Drawn strictly from AI_POV above — champion, risk, legal, CISO. No
 * additional seats invented; this sits inside a section already labelled
 * as our read of the market rather than sourced data.
 * ------------------------------------------------------------------ */
export const COMMITTEE = {
  expected: {
    label: "The buyer your deck was written for",
    seat: "Technical champion",
    note: "The person who would actually use it.",
  },
  actual: {
    label: "The room you are in",
    seats: [
      { role: "Technical champion", note: "Still necessary. No longer enough." },
      { role: "Risk", note: "Wants to know what happens when it is wrong." },
      { role: "Legal", note: "Data residency, and who is liable." },
      { role: "CISO", note: "Asked to hold a position on AI." },
    ],
  },
};

/* ------------------------------------------------------------------ *
 * THE EXECUTION ENGINE
 * DEDICATED sits inside the client's business. SHARED is drawn on as
 * needed. The distinction is the whole point of the section.
 * ------------------------------------------------------------------ */
export const DEDICATED = [
  { role: "Sales", note: "Carries the number on named accounts." },
  { role: "Presales", note: "Owns the technical win, not the demo." },
  {
    role: "Solution Architecture",
    note: "Designs what actually gets deployed here.",
  },
  {
    role: "Customer Success",
    note: "Protects adoption after the signature.",
  },
  {
    role: "Delivery",
    note: "Keeps implementation from becoming the reference problem.",
  },
];

export const SHARED = [
  "Enterprise Architecture",
  "Product Evangelism",
  "Sales Operations",
  "Marketing",
  "Inside Sales Development",
  "Governance",
];

/* ------------------------------------------------------------------ *
 * FOUNDER
 * CAREER is Subrato's own history at prior employers.
 * It is NOT Pivora's engagement record. The site must never blur these.
 * ------------------------------------------------------------------ */
export const CAREER = [
  { org: "BMC Software", role: "Enterprise GTM" },
  { org: "AppDynamics", role: "Enterprise GTM" },
  { org: "PowWow Mobile", role: "Enterprise GTM" },
  { org: "Sprinklr", role: "Managing Director" },
  { org: "OutSystems", role: "Regional Vice President" },
];

export const KPMG_PROOF = {
  year: "2023",
  what: "KPMG in India × OutSystems partnership",
  note: "Announced while Subrato was RVP at OutSystems, where he is directly quoted. This is a milestone from his career prior to founding Pivora — not a Pivora engagement.",
};

/* ------------------------------------------------------------------ *
 * WHO'S A FIT
 * ------------------------------------------------------------------ */
export const FIT = [
  "You sell enterprise B2B software — SaaS, AI/agentic, low-code, automation, cybersecurity, developer tools.",
  "You have product-market fit somewhere else and want it here.",
  "You are prepared to treat India as an operating investment, not a pilot.",
  "You want someone accountable for the number, not for the deck.",
];

export const NOT_A_FIT = [
  "You want a market study before you commit.",
  "You want leads without an operating motion behind them.",
  "You want a reseller to carry the risk.",
  "You want India cheap rather than India properly.",
];

/* ------------------------------------------------------------------ *
 * OPEN ITEMS — NOT PUBLISHED. Surfaces on /review only (noindex).
 * These need client confirmation before they can appear anywhere public.
 * ------------------------------------------------------------------ */
export const OPEN_ITEMS = [
  {
    item: "Years of enterprise GTM experience",
    status: "Conflicting",
    detail:
      "Brief says 20+. An older deck says 24+. Site currently says 20+. Confirm the correct figure.",
  },
  {
    item: "12× President's Club",
    status: "Uncorroborated",
    detail:
      "Appears in the deck only, with no corroboration. Omitted from the site entirely until confirmed.",
  },
  {
    item: "100+ accounts / Big 4 partnerships",
    status: "Deck-only",
    detail:
      "Unverified claim from the old deck. Omitted from the site entirely until confirmed.",
  },
  {
    item: "Branded email address",
    status: "Missing",
    detail:
      "Deck lists a personal Gmail address. The contact page needs a real branded address before launch — no email is published on the site right now.",
  },
  {
    item: "Production domain (NEXT_PUBLIC_SITE_URL)",
    status: "Not set",
    detail:
      "Open Graph tags, canonical links and sitemap entries must be absolute URLs. Until NEXT_PUBLIC_SITE_URL is set to the real domain they all resolve against localhost, which means social cards will not render when the site is shared.",
  },
  {
    item: "BOS vs BOS(T)",
    status: "Source conflict",
    detail:
      "Pivora Consulting BOS Model.docx explicitly states it is 'modified to exclude Transfer'. The brief treats Transfer as the strongest differentiator. Site is built to the brief. Confirm which is current.",
  },
];
