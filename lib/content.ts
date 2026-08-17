/**
 * Single source of truth for Pivora site copy.
 *
 * Sourced from: "Pivora Consulting — Website Strategy, Brand System &
 * Development Master Brief v7.0" (August 2026), which supersedes v6.0 and
 * folds in the Brand & Website Guidelines v1.0 and Brand Strategy Addendum
 * v2.0. Section references below point back into that document.
 *
 * CONTENT RULES (Brief §10, §11.1, §20 — do not violate):
 *  1. No invented customers, logos, partnerships, case studies, awards or
 *     numbers. Anonymised, pattern-based proof only until a client has
 *     approved a named reference in writing.
 *  2. Every statistic carries a named source and a date, or it does not
 *     ship. The figures removed during vetting are listed in REMOVED below
 *     so they cannot quietly return.
 *  3. Subrato's career at prior employers is never blurred with Pivora's
 *     own engagement record.
 *  4. Banned phrases (§11.1) never appear in copy: "end-to-end solutions",
 *     "360-degree transformation", "one-stop shop", "digital transformation
 *     partner", "technology solutions provider", "synergy", "game-changing",
 *     "revolutionary".
 *  5. Anything unconfirmed lives in OPEN_ITEMS and is NEVER rendered as
 *     settled fact on a public page. It surfaces only on /review.
 */

/* ------------------------------------------------------------------ *
 * BRAND SPINE — §1.1, §1.2, §1.1a, §14.16
 * ------------------------------------------------------------------ */

export const ESSENCE =
  "Pivora turns exceptional Enterprise B2B platforms into enterprise growth, with India as both a market and a launchpad to the world.";

export const POSITIONING =
  "Pivora Consulting is a specialist GTM and growth firm focused exclusively on high-value Enterprise B2B platform products. We help global platforms enter and scale in India, and help Indian platforms use India as a pathway to global markets, through focused work across enterprises, GCCs and GSIs.";

export const VISION =
  "To become the specialist growth partner of choice for high-value Enterprise B2B platform companies using India as a market, an enterprise ecosystem and a launchpad for global growth.";

export const MISSION =
  "To help high-value Enterprise B2B platform companies build sustainable growth by combining deep India market expertise, enterprise GTM execution, GCC and GSI ecosystems, and a relentless focus on measurable business outcomes.";

/* ------------------------------------------------------------------ *
 * VERIFIED MARKET DATA — §20, §22.
 * Every figure renders with its source visible. If a stat has no source,
 * it does not ship. Row numbers refer to the Verified Source Register.
 * ------------------------------------------------------------------ */
export type Stat = {
  value: string;
  label: string;
  source: string;
};

export const MARKET: Record<string, Stat> = {
  /* row 6 */
  itSpend: {
    value: "$161.5B",
    label: "India IT spending in 2025, up 11.1% year on year",
    source: "Gartner · 2025",
  },
  /* row 7 */
  itSpend2026: {
    value: "$176.3B",
    label: "Projected India IT spending in 2026, up 10.6%",
    source: "Gartner · Nov 2025",
  },
  softwareGrowth: {
    value: "+17.6%",
    label: "Software segment growth in 2026, to US$24.7B",
    source: "Gartner · Nov 2025",
  },
  /* row 8 */
  gccCount: {
    value: "1,700+",
    label: "Global Capability Centres operating in India",
    source: "Nasscom–Zinnov · FY2024",
  },
  gccRevenue: {
    value: "$64.6B",
    label: "GCC revenue in FY24, up around 40% year on year",
    source: "Nasscom–Zinnov · FY2024",
  },
  gccPeople: {
    value: "1.9M",
    label: "Professionals employed by GCCs in India",
    source: "Nasscom–Zinnov · FY2024",
  },
  /* row 9 */
  gcc2030: {
    value: "$99B",
    label: "Lower bound of the projected India GCC market by 2030 (US$99–105B)",
    source: "Nasscom–Zinnov · 2024",
  },
  /* row 10 */
  digitalRevenue: {
    value: "~60%",
    label:
      "Of Indian enterprise revenue expected to be digital-driven within three years",
    source: "IDC · 2024",
  },
  /* row 11 */
  thirdEconomy: {
    value: "3rd",
    label: "Largest economy in the world, projected by 2027",
    source: "IMF · EY · Morgan Stanley · 2023–24",
  },
  /**
   * NOT IN THE VERIFIED REGISTER (§22).
   *
   * Published at the client's instruction as a provisional figure, carried
   * over from earlier Pivora material. §20.4 excluded it because it traces
   * back to no named research house — so the source line says "Industry
   * estimate" rather than borrowing a name that never published it. That
   * label is deliberately weaker than every other citation on the site, and
   * a reader comparing them will see the difference.
   *
   * Replace `source` the moment a real one exists, or drop the entry and
   * TRACKS[2] falls back to its `noProof` line automatically.
   * Tracked in OPEN_ITEMS.
   */
  siMarket: {
    value: "$22B",
    label: "India systems-integration market, growing at 16.8% CAGR",
    source: "Industry estimate · source to be confirmed",
  },

  /* row 12 — the execution gap */
  delays: {
    value: "75%",
    label: "Of enterprise software projects in India are delayed",
    source: "IDC × Zoho · 2024",
  },
  overrun: {
    value: "57%",
    label: "Run over on timeline",
    source: "IDC × Zoho · 2024",
  },
  costOverrun: {
    value: "43%",
    label: "Run over on cost",
    source: "IDC × Zoho · 2024",
  },
  loss: {
    value: "₹5.6 crore",
    label: "Average loss carried per delayed project",
    source: "IDC × Zoho · 2024",
  },
};

/**
 * §20.4 — figures that appeared in earlier source material, could not be
 * verified against a named checkable source, and are excluded. Listed here
 * so they cannot quietly reappear in a future copy pass.
 */
export const REMOVED = [
  "US$864B global GSI market",
  "India-entry barrier percentages of 37% / 36% / 24%",
  "$1.4T+ digital economy opportunity by 2030",
  "1.5B+ digital consumers",
];

/**
 * Excluded by §20.4, then reinstated on the client's instruction as a
 * provisional figure. Listed separately from REMOVED so the distinction
 * between "cut" and "published without a source yet" stays visible on
 * /review rather than blurring into one list.
 */
export const PROVISIONAL = [
  "India system-integration market of US$22B growing at 16.8% CAGR — on the GSI track, labelled “Industry estimate · source to be confirmed”",
];

/**
 * The IDC × Zoho study base, printed wherever those four figures appear.
 * A percentage without its denominator is not evidence.
 */
export const EXECUTION_GAP_BASE =
  "IDC × Zoho, “State of SaaS Adoption in India”, 2024. Base: 240 Indian enterprises with 1,000+ employees.";

/* ------------------------------------------------------------------ *
 * THE TWO-WAY GROWTH CORRIDOR — §1.3
 * One firm, two directions of value. This is the positioning, and the
 * brief requires both directions above the fold and repeated after it.
 * ------------------------------------------------------------------ */
export type Corridor = {
  id: string;
  n: string;
  /** Nav and card label. */
  name: string;
  /** The direction, as a glyph pair. */
  from: string;
  to: string;
  /** One line, for the home page. */
  line: string;
  does: string;
  objective: string;
  /** Who this page is written for. */
  audience: string;
  motion: string[];
};

export const CORRIDORS: Corridor[] = [
  {
    id: "global-to-india",
    n: "01",
    name: "Global Platforms → India",
    from: "Global",
    to: "India",
    line: "Enter and scale a global platform through Indian enterprises, GCCs and GSIs.",
    does: "Enter and scale a global Enterprise B2B platform through Indian Enterprises, GCCs and GSIs.",
    objective:
      "Build India pipeline, lighthouse customers, references, partners and repeatable revenue.",
    audience:
      "A global Enterprise B2B platform that needs a serious India go-to-market and real enterprise traction behind it.",
    motion: [
      "Market and category assessment, then an ICP narrow enough to work",
      "Positioning and a product narrative that survives an Indian evaluation",
      "A named strategic account universe, not a territory to spray",
      "GCC and GSI mapping, with a partner proposition attached to each",
      "Pipeline architecture and the sales assets that feed it",
      "A 90-day operating plan someone is accountable for",
    ],
  },
  {
    id: "india-to-global",
    n: "02",
    name: "Indian Platforms → Global",
    from: "India",
    to: "Global",
    line: "Use India as the foundation for international enterprise expansion.",
    does: "Help an Indian Enterprise B2B platform use India as a foundation for international expansion.",
    objective:
      "Build global ICP, market-entry sequencing, enterprise references and partner-led growth.",
    audience:
      "An Indian Enterprise B2B platform with domestic proof and genuine ambition beyond it.",
    motion: [
      "International market prioritisation, in sequence rather than at once",
      "A global ICP built from what actually bought here",
      "Global account strategy and the references that travel with it",
      "Partner-led expansion, with GSI leverage designed in",
      "Market-entry sequencing tied to capacity, not to ambition",
      "A global GTM operating model your own team can run",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * WHAT PIVORA DELIBERATELY DOES NOT DO — §1.4
 * Selectivity is a brand asset. The distinction has to land fast.
 * ------------------------------------------------------------------ */
export const NOT_A = [
  "a broad IT services company",
  "a generic strategy consultancy",
  "an implementation factory",
  "a staffing or body-shopping business",
  "a catalogue of low-value services",
];

export const SELECTIVITY =
  "Pivora is not an agency that optimises activity metrics without commercial accountability. Turning down the wrong work is what keeps capacity free for the right work — which is why the list above is a description of the firm rather than a disclaimer.";

/* ------------------------------------------------------------------ *
 * CLIENT QUALIFICATION — §1.5
 * ------------------------------------------------------------------ */
export const FIT = [
  "A niche, high-value Enterprise B2B platform with strong technology or IP.",
  "A credible enterprise use case, and a material business problem behind it.",
  "Genuine ambition to build a meaningful growth business in India or globally.",
  "SaaS, enterprise platform, infrastructure software, workflow, AI, data, security, CX or developer platforms.",
];

export const NOT_A_FIT = [
  "Commodity products and low-ACV tools.",
  "Undifferentiated implementation offerings.",
  "Consumer apps.",
  "Staffing propositions.",
  "Companies looking for a generic reseller.",
];

/**
 * §12 — the six dimensions a platform is judged against before Pivora
 * takes it on. This is the qualification standard the contact form is
 * written to serve.
 */
export const QUALIFY = [
  {
    dimension: "Product",
    expectation: "Differentiated Enterprise B2B platform or IP.",
  },
  {
    dimension: "Value",
    expectation: "A material business problem and a measurable outcome.",
  },
  {
    dimension: "Commercial",
    expectation: "Meaningful enterprise economics.",
  },
  {
    dimension: "Leadership",
    expectation: "Executive commitment to market and GTM investment.",
  },
  {
    dimension: "Fit",
    expectation: "Pivora can materially influence growth.",
  },
  {
    dimension: "Strategic relevance",
    expectation: "India entry, India → global, ecosystem or platform growth.",
  },
];

/* ------------------------------------------------------------------ *
 * WHAT WE DO — §3.4, §4.4 (Section 04)
 * Four focused capabilities, not twenty generic offerings. Each answers
 * the three questions the Brand Guidelines require of a service page:
 * what problem, what we actually do, what outcome to expect.
 * ------------------------------------------------------------------ */
export type Service = {
  id: string;
  n: string;
  name: string;
  short: string;
  /** One line, for the home page. */
  line: string;
  problem: string;
  work: string[];
  outcome: string;
};

export const SERVICES: Service[] = [
  {
    id: "market-entry",
    n: "01",
    name: "Market Entry & GTM",
    short: "Market Entry",
    line: "The commercial architecture for entering a market properly.",
    problem:
      "A platform arrives with a country hire, a target and a partner list. There is no positioning that survives contact with an Indian evaluation, no account universe, and no pricing anyone has tested against a real procurement conversation.",
    work: [
      "Market assessment",
      "ICP and segmentation",
      "Positioning and messaging",
      "GTM model",
      "Pricing and commercial architecture",
      "First strategic accounts",
    ],
    outcome:
      "A documented GTM blueprint plus an executable account, partner and pipeline plan — an operating system for commercial execution, not a slide deck.",
  },
  {
    id: "revenue-acceleration",
    n: "02",
    name: "Enterprise Revenue Acceleration",
    short: "Revenue",
    line: "Turning an existing presence into a commercial rhythm.",
    problem:
      "Pipeline is inconsistent, enterprise access is shallow, and deals sit on a forecast because everybody is hopeful. Activity is high and conversion is not.",
    work: [
      "Strategic account planning",
      "Executive engagement",
      "Pipeline architecture",
      "Deal strategy",
      "Land-and-expand",
      "Revenue operating rhythm",
    ],
    outcome:
      "Qualified pipeline, executive relationships that hold, and a weekly cadence the number is actually built from.",
  },
  {
    id: "gcc-gsi",
    n: "03",
    name: "GCC & GSI Growth",
    short: "GCC & GSI",
    line: "Partner motions that produce pipeline, not logos.",
    problem:
      "Partnerships are announced and then nothing happens. A signed agreement with no enabled resources, no named accounts and no joint pipeline is a logo on a slide.",
    work: [
      "GCC opportunity mapping",
      "GCC-to-global motions",
      "GSI partner strategy",
      "Co-sell design",
      "Alliance activation",
      "Reference creation",
    ],
    outcome:
      "Active partners with named accounts, joint pipeline and implementation capability — tracked on a scorecard, quarter by quarter.",
  },
  {
    id: "india-to-global",
    n: "04",
    name: "India → Global",
    short: "India → Global",
    line: "Using India as the foundation for international growth.",
    problem:
      "An Indian platform has domestic proof and no route out of it. International expansion gets attempted in every direction at once, and the references that won India do not travel because nobody built them to.",
    work: [
      "International market prioritisation",
      "Global account strategy",
      "Partner-led expansion",
      "GSI leverage",
      "Market-entry sequencing",
      "Global GTM operating model",
    ],
    outcome:
      "A sequenced international plan, a global ICP drawn from real wins, and enterprise references built to carry across borders.",
  },
];

/**
 * §11.2 — the fixed seven-block order every service page follows.
 * Rendered on the What We Do page as the visible discipline behind it.
 */
export const SERVICE_SKELETON = [
  "The problem",
  "What Pivora does",
  "How the work runs",
  "What you get",
  "The measurable outcome",
  "Where it fits in Built–Operate–Sustain",
  "One focused call to action",
];

/* ------------------------------------------------------------------ *
 * WHY PIVORA — §4.4 (Section 05)
 * ------------------------------------------------------------------ */
export const PRINCIPLES = [
  {
    n: "01",
    head: "Focus over breadth",
    body: "One category, worked properly. Pivora is not a broad IT services company and does not want to be — the specialisation is the value, and a wider catalogue would dilute it rather than extend it.",
  },
  {
    n: "02",
    head: "Quality over volume",
    body: "We would rather run a small number of engagements properly than a large number partly. That caps how quickly the firm can grow, on purpose — it is the constraint that keeps the work worth buying.",
  },
  {
    n: "03",
    head: "Outcomes over activity",
    body: "Meetings and demos are inputs. Pipeline created, opportunities qualified, partners activated, customers won and references built are the measures — and they are the ones we report against.",
  },
  {
    n: "04",
    head: "Partners, not vendors",
    body: "Pivora sits alongside platform leadership rather than delivering into a brief. That is only credible if we are prepared to be accountable for the commercial result, which is what the operating model is for.",
  },
];

/* ------------------------------------------------------------------ *
 * BUILT–OPERATE–SUSTAIN — §5
 *
 * `pivora` / `client` are ownership weights, 0–100. They drive the
 * blue→gold handover bar. They are a design encoding of the model, not a
 * claim about any specific engagement.
 *
 * SUSTAIN never means "leave the client" (§5, positioning rule). It means
 * dependence on Pivora decreases because the client's capability increases.
 * ------------------------------------------------------------------ */
export type Phase = {
  id: string;
  letter: string;
  name: string;
  pivora: number;
  client: number;
  /** One plain line: who is doing the work at this stage. */
  shift: string;
  objective: string;
  premise: string;
  work: string[];
  /** Output / proof of completion. */
  exit: string;
  /** §5.2 — the same phase in client-facing operational language. */
  sees: string;
};

export const PHASES: Phase[] = [
  {
    id: "build",
    letter: "B",
    name: "Build",
    pivora: 85,
    client: 15,
    shift: "We do nearly all of it.",
    objective:
      "Create the commercial architecture to enter or accelerate a platform in a specific market.",
    premise:
      "Many platform companies enter a market with a strategy document, a country hire and a partner list. That is not a GTM engine. Build is where the commercial architecture gets made — positioning, pricing, the account universe, the partner proposition and the pipeline that runs on them.",
    work: [
      "Market and category assessment",
      "ICP and account segmentation",
      "Product-market narrative and GTM strategy",
      "Pricing and commercial review",
      "Strategic account universe, GCC/GSI mapping, partner proposition",
      "Pipeline architecture, sales assets and a 90-day operating plan",
    ],
    exit: "A documented GTM blueprint plus an executable account, partner and pipeline plan — an operating system for commercial execution, not a slide deck.",
    sees: "A solid launchpad, not a slide deck. Named opportunities entering a real funnel. The brand present in the target enterprise ecosystem.",
  },
  {
    id: "operate",
    letter: "O",
    name: "Operate",
    pivora: 60,
    client: 40,
    shift: "We run it. Your team learns it.",
    objective:
      "Work alongside platform leadership to create actual commercial traction.",
    premise:
      "The gap between strategy and execution is where market entries fail. Operate closes it: Pivora is in the deals, in the partner conversations and on the forecast call, working alongside your leadership rather than reporting to it.",
    work: [
      "Strategic account pursuit and executive meetings",
      "Pipeline generation and deal strategy",
      "Partner activation and GSI orchestration",
      "GCC opportunity development",
      "Weekly forecast cadence",
      "Lighthouse customer development and reference creation",
    ],
    exit: "Pipeline, qualified opportunities, executive relationships, active partners, customer wins and a repeatable commercial rhythm.",
    sees: "Pipeline converting into bookings. A repeatable commercial rhythm. Share growing in the segments that matter — BFSI, telecom, manufacturing.",
  },
  {
    id: "sustain",
    letter: "S",
    name: "Sustain",
    pivora: 25,
    client: 75,
    shift: "Your team runs it. We stay strategic.",
    objective: "Make the growth engine independent, measurable and repeatable.",
    premise:
      "Sustain is not an exit. It is the point at which your dependence on Pivora falls because your own capability has risen. The motion moves onto your calendar, into your playbooks and under your governance — and Pivora's role narrows to the strategic end of it.",
    work: [
      "Playbooks, coaching and governance",
      "Partner scorecards and account planning",
      "Campaign motions and dashboards",
      "Knowledge transfer",
      "Expansion motions",
      "Quarterly GTM optimisation",
    ],
    exit: "A client-owned GTM capability that runs without permanent dependence on Pivora.",
    sees: "Stable operations and steady performance. A client-owned capability that keeps improving.",
  },
];

/**
 * §5.1 — the Sustain transition test. Three columns, read left to right:
 * what changes, and how you know it changed.
 */
export const SUSTAIN_TEST = [
  {
    before: "Pivora holds much of the GTM context.",
    during: "Pivora and your team execute together.",
    after: "Your team owns the motion; Pivora becomes strategic.",
  },
  {
    before: "Processes are partly implicit.",
    during: "Playbooks and dashboards are created.",
    after: "Processes are documented and repeatable.",
  },
  {
    before: "Partner relationships may be founder-led.",
    during: "Relationships are mapped and institutionalised.",
    after: "Your team can activate partners independently.",
  },
];

/* ------------------------------------------------------------------ *
 * THE PLATFORM RAMP — §6
 * Five gated stages. Stage 0 is a genuine qualification gate: Pivora
 * should be willing to decline platforms that fail it.
 * ------------------------------------------------------------------ */
export type Stage = {
  key: string;
  name: string;
  question: string;
  focus: string;
  detail: string[];
};

export const RAMP: Stage[] = [
  {
    key: "0",
    name: "Qualify",
    question: "Should Pivora take this platform on?",
    focus:
      "A real gate, not a formality. Pivora should be willing to say no — and does.",
    detail: [
      "Product differentiation and enterprise value",
      "ACV/TCV potential and proof of value",
      "Competitive position",
      "Executive commitment and delivery readiness",
      "India or global appetite, and partner readiness",
      "A realistic view of the investment required",
    ],
  },
  {
    key: "1",
    name: "Find the Wedge",
    question: "Can we create one strategically valuable win?",
    focus:
      "The smallest credible commercial wedge that produces a lighthouse customer.",
    detail: [
      "A tightly named account universe",
      "A few high-value use cases, not a catalogue",
      "Executive relationships built deliberately",
      "A small number of serious ecosystem partners",
    ],
  },
  {
    key: "3",
    name: "Prove Repeatability",
    question: "Can we repeat why customers buy?",
    focus:
      "Documenting the win properly is what turns one deal into a motion.",
    detail: [
      "Why customers bought, and who influenced the decision",
      "Objection patterns, written down",
      "Partner contribution to the deal",
      "The conversion path, ICP refinement, references and playbook",
    ],
  },
  {
    key: "10",
    name: "Scale",
    question: "Can the motion scale without losing quality?",
    focus: "Volume is added last, and only to something that already works.",
    detail: [
      "Increased account coverage",
      "Partner leverage built out",
      "Expansion into GCCs and GSIs",
      "Marketing-to-sales orchestration, and institutionalised forecasting",
    ],
  },
  {
    key: "Global",
    name: "Institutionalise",
    question: "Can India become a route to wider growth?",
    focus:
      "Pivora's role shifts to strategic growth orchestration and executive advisory.",
    detail: [
      "GCC and GSI leverage at global scale",
      "References that replicate across markets",
      "Ecosystem development",
      "Ongoing GTM optimisation",
    ],
  },
];

export const RAMP_RULE =
  "Do not scale a broken GTM motion. First prove the wedge, then prove repeatability, then add volume.";

/* ------------------------------------------------------------------ *
 * PRODUCT-LED PLATFORM GROWTH — §7
 * ------------------------------------------------------------------ */
export const GROWTH_LAYERS = [
  {
    n: "01",
    layer: "Category",
    question: "Why should the market care about this platform now?",
  },
  {
    n: "02",
    layer: "Value",
    question: "What measurable enterprise problem does it solve?",
  },
  {
    n: "03",
    layer: "Wedge",
    question: "What specific use case or account opens the door?",
  },
  {
    n: "04",
    layer: "Ecosystem",
    question: "Which GCCs, GSIs, partners and influencers accelerate adoption?",
  },
  {
    n: "05",
    layer: "Commercial",
    question: "How does a pilot become a material enterprise contract?",
  },
  {
    n: "06",
    layer: "Expansion",
    question:
      "How does one use case or customer become a broader platform footprint?",
  },
];

export const PRODUCT_LED_RULE =
  "Product-led does not mean product-only. Enterprise buyers do not purchase a platform because a user tried it — security, procurement, architecture, business ownership and executive sponsorship all decide. The working model is product-led proof, enterprise-led conversion, ecosystem-led scale.";

export const GROWTH_MOTION = [
  { phase: "Product-led proof", label: "Proof" },
  { phase: "Enterprise-led conversion", label: "Conversion" },
  { phase: "Ecosystem-led scale", label: "Scale" },
];

/** §7.2 — from use case to platform expansion. */
export const WEDGE_PATH = [
  {
    n: "01",
    stage: "Wedge",
    question: "Why this use case?",
    action: "Quantify pain, urgency and business value.",
  },
  {
    n: "02",
    stage: "Pilot",
    question: "What proves value?",
    action: "Define success criteria before deployment, not after.",
  },
  {
    n: "03",
    stage: "Production",
    question: "What creates trust?",
    action: "Operationalise, measure and document the outcome.",
  },
  {
    n: "04",
    stage: "Expansion",
    question: "Where else can the platform apply?",
    action: "Map adjacent workflows, functions and business units.",
  },
  {
    n: "05",
    stage: "Enterprise",
    question: "Can the platform become a strategic layer?",
    action: "Build the executive case for broader adoption.",
  },
  {
    n: "06",
    stage: "Reference",
    question: "Can this customer influence others?",
    action: "Create the reference, the peer story and the ecosystem leverage.",
  },
];

/* ------------------------------------------------------------------ *
 * THE ECOSYSTEM — §8, §19.3
 * Three tracks decide whether an enterprise platform wins in India.
 * ------------------------------------------------------------------ */
export type Track = {
  id: string;
  n: string;
  name: string;
  short: string;
  /** One line, for the home page summary. */
  line: string;
  /** The second thing this track opens — the route beyond the first win. */
  multiplier: string;
  thesis: string;
  motion: string[];
  proof: Stat | null;
  /** Shown in place of a figure where no verified one exists (§20.4). */
  noProof?: string;
};

export const TRACKS: Track[] = [
  {
    id: "enterprise",
    n: "01",
    name: "India Enterprise",
    short: "Enterprise",
    line: "The hardest door to open, and the most durable once it is.",
    multiplier: "A reference that travels across the sector",
    thesis:
      "Indian banks, manufacturers, telecoms, retailers and conglomerates buying software to run their own business. The evaluation is long and the committee is unforgiving — and the accounts last years and earn the references everything else depends on.",
    motion: [
      "A named strategic account universe, not a territory to spray",
      "Real presales depth, for a committee that evaluates hard",
      "Architecture built with the customer, not handed to them",
      "Success measured on live usage, not on signature",
    ],
    proof: MARKET.itSpend,
  },
  {
    id: "gcc",
    n: "02",
    name: "Global Capability Centres",
    short: "GCCs",
    line: "Not a customer segment. A route into what the parent adopts everywhere.",
    multiplier: "Into the parent company's global standard",
    thesis:
      "A GCC can be an innovation centre, a global process owner, a technology decision influencer, a reference creator and a route into the parent enterprise. Treating one as simply another India account is the most expensive misreading in the market.",
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
    name: "Global System Integrators",
    short: "GSIs",
    line: "The biggest multiplier, and the easiest to get wrong.",
    multiplier: "Into deals you were never invited to",
    thesis:
      "GSIs are not resellers. Properly built, an integrator becomes an implementation multiplier, a co-sell channel, a category validator and a global route to market. The objective is not to collect partner logos — it is to create productive partner motions.",
    motion: [
      "Build the practice before signing the partnership",
      "Trained architects inside the partner, not just a signed agreement",
      "Joint deals, named and tracked — not a vague alliance",
      "Watch delivery quality, because their name is on it too",
    ],
    /* Provisional. See the note on MARKET.siMarket — this figure carries a
       weaker citation than the other two tracks by design. `noProof` is the
       fallback if it is ever pulled again. */
    proof: MARKET.siMarket,
    noProof:
      "No credible market size exists for this. The figures in circulation trace back to no named source, so we work the track on named partners and joint pipeline instead.",
  },
];

/** Figure 8-1 — the partner maturity ladder. Track every partner on it. */
export const PARTNER_LADDER = [
  {
    level: "L0",
    name: "Logo relationship",
    body: "An agreement exists. Nothing else does.",
  },
  {
    level: "L1",
    name: "Named sponsor",
    body: "An executive sponsor inside the partner owns the relationship.",
  },
  {
    level: "L2",
    name: "Enabled practice",
    body: "Trained resources and implementation capability, not just interest.",
  },
  {
    level: "L3",
    name: "Joint pipeline",
    body: "Named accounts, opportunities created together, tracked as one number.",
  },
  {
    level: "L4",
    name: "Scaled co-sell",
    body: "Wins, references and replication into other markets.",
  },
];

export const PARTNER_SCORECARD = [
  "Executive sponsor",
  "Enabled resources",
  "Named accounts",
  "Joint pipeline",
  "Opportunities created",
  "Wins",
  "Implementation capability",
  "References",
  "Global replication",
];

/* ------------------------------------------------------------------ *
 * NICHE AI VALUE SERVICES — §9
 * Deliberately narrow. AI is carried only where it materially strengthens
 * a differentiated platform or creates a high-value GTM wedge.
 * ------------------------------------------------------------------ */
export const AI_RULE =
  "AI should create enterprise value, not another AI project.";

export const AI_SERVICES = [
  {
    n: "01",
    name: "AI Opportunity & Value Mapping",
    does: "Map AI and agent opportunities against enterprise pain, value and revenue potential.",
    outcome: "A prioritised value portfolio.",
  },
  {
    n: "02",
    name: "AI Productisation & Packaging",
    does: "Turn AI capability into a buyer-ready proposition, package, price and business case.",
    outcome: "A commercially clear AI offer.",
  },
  {
    n: "03",
    name: "Agentic Workflow & Platform GTM",
    does: "Identify agentic workflows that can open enterprise accounts and prove platform value.",
    outcome: "An AI-led enterprise wedge.",
  },
  {
    n: "04",
    name: "AI Adoption & Expansion Architecture",
    does: "Move AI from pilot to production, adoption and a broader platform footprint.",
    outcome: "Sustainable adoption and expansion.",
  },
  {
    n: "05",
    name: "AI GTM & Ecosystem Strategy",
    does: "Position AI capability for enterprises, GCCs and GSIs, and create ecosystem leverage.",
    outcome: "A repeatable AI growth motion.",
  },
];

/**
 * §9.2 — the AI qualification gate. Six sequential gates, applied before
 * accepting any AI engagement. Any "no" ends the conversation.
 */
export const AI_GATE = [
  "Is there a differentiated platform or capability underneath it?",
  "Is there a material enterprise problem, not a technology demonstration?",
  "Can the value be quantified before the work starts?",
  "Is there an executive sponsor who will carry it?",
  "Does it open an enterprise wedge or strengthen the platform?",
  "Can the outcome be measured after it ships?",
];

/** §9.2 — what Pivora accepts and declines, stated plainly. */
export const AI_DECISIONS = [
  {
    request: "Generic AI developers or staffing",
    yes: false,
    reason: "Commodity.",
  },
  {
    request: "Generic chatbot implementation",
    yes: false,
    reason: "Unless it is a strategic platform wedge with quantified value.",
  },
  {
    request: "AI opportunity mapping for an Enterprise B2B platform",
    yes: true,
    reason: "Strategic and value-led.",
  },
  {
    request: "AI product packaging and enterprise business case",
    yes: true,
    reason: "Commercialisation of differentiated capability.",
  },
  {
    request: "Agentic workflow GTM for a differentiated platform",
    yes: true,
    reason: "Creates an enterprise wedge.",
  },
  {
    request: "AI pilot-to-production adoption architecture",
    yes: true,
    reason: "Drives a measurable enterprise outcome.",
  },
  {
    request: "AI GCC / GSI ecosystem strategy",
    yes: true,
    reason: "Ecosystem-led scale.",
  },
];

export const AI_OUTCOMES = [
  {
    category: "Revenue",
    examples: "New use case, new buyer, premium package, expansion.",
  },
  {
    category: "Product differentiation",
    examples: "Unique AI capability that strengthens platform positioning.",
  },
  {
    category: "Enterprise adoption",
    examples: "Higher usage, faster time-to-value, broader footprint.",
  },
  {
    category: "Operational value",
    examples: "Cycle-time reduction, quality improvement, risk reduction.",
  },
  {
    category: "Ecosystem leverage",
    examples: "GSI/GCC solution motion, referenceability, global replication.",
  },
];

/* ------------------------------------------------------------------ *
 * ENGAGEMENT OFFERS — §11
 * Priced for value and scope, not for hours.
 * ------------------------------------------------------------------ */
export const OFFERS = [
  {
    n: "01",
    name: "GTM Diagnostic",
    forWhom: "A platform entering a new market",
    scope:
      "A 2–4 week assessment: ICP, positioning, account universe, partner map and GTM blueprint.",
  },
  {
    n: "02",
    name: "Build",
    forWhom: "A new India or global launch",
    scope:
      "A 90–120 day GTM build with account, partner, messaging and operating architecture.",
  },
  {
    n: "03",
    name: "Operate",
    forWhom: "A platform that needs traction",
    scope:
      "6–12 months of embedded execution across strategic accounts, pipeline, GCC/GSI and live deals.",
  },
  {
    n: "04",
    name: "Built–Operate–Sustain",
    forWhom: "A serious market build",
    scope:
      "A 12–24 month journey from commercial architecture to execution to capability transfer.",
  },
  {
    n: "05",
    name: "Platform Growth Program",
    forWhom: "An existing platform with expansion ambition",
    scope:
      "Land-and-expand, ecosystem scale, enterprise adoption and global replication.",
  },
];

/** §11.1 — how the work is described, and how it is not. */
export const LANGUAGE_RULES = [
  { say: "Build and operate an India GTM engine.", not: "We provide GTM consulting." },
  { say: "Create a GSI co-sell motion.", not: "We offer partner services." },
  {
    say: "Turn a use case into platform expansion.",
    not: "We provide sales enablement.",
  },
  {
    say: "Commercialise a differentiated AI capability.",
    not: "We provide AI services.",
  },
  { say: "Transfer a repeatable growth engine.", not: "We provide training." },
];

/* ------------------------------------------------------------------ *
 * CASE STUDIES — §10
 * Launch with two to three slots, never six. Zero fabricated proof.
 * ------------------------------------------------------------------ */
export const CASE_PLACEHOLDER =
  "Engagement profile in progress. We publish outcomes once they're client-approved and verifiable — ask us directly about current work.";

export const CASE_SLOTS = [
  {
    n: "01",
    title: "Global Platform → India Entry",
    profile:
      "A global Enterprise B2B platform entering India through the GCC and GSI ecosystem.",
    status: "To be completed",
  },
  {
    n: "02",
    title: "India Platform → Global Expansion",
    profile:
      "An Indian platform using India proof to enter international markets.",
    status: "To be completed",
  },
  {
    n: "03",
    title: "Built–Operate–Sustain, Full Engagement",
    profile:
      "A 12–24 month journey from GTM architecture to a client-owned capability.",
    status: "To be completed",
  },
];

/** §10.1 — the template every published case study will follow. */
export const CASE_TEMPLATE = [
  {
    field: "Client context",
    guidance:
      "Platform category, stage and geography — named only with written permission, otherwise an anonymised descriptor.",
  },
  {
    field: "Direction",
    guidance: "Global → India, India → Global, or ecosystem-led.",
  },
  {
    field: "Challenge",
    guidance: "The specific commercial problem, not a generic “needed growth”.",
  },
  {
    field: "Engagement model",
    guidance:
      "Diagnostic, Build, Operate, Built–Operate–Sustain or Platform Growth Program.",
  },
  {
    field: "What Pivora did",
    guidance:
      "Concrete actions — account strategy, GCC/GSI motion, lighthouse development, capability transfer.",
  },
  {
    field: "Measurable outcome",
    guidance:
      "Pipeline created, wins, ACV/TCV, time-to-value, references created. Real numbers only.",
  },
  {
    field: "What transferred",
    guidance: "Playbooks, dashboards, governance — what the client now owns.",
  },
  {
    field: "Quote or reference",
    guidance:
      "An executive quote, or reference availability (“referenceable on request”).",
  },
];

/** §10.3 */
export const REFERENCE_POLICY = [
  "Named references appear only with written client approval.",
  "Metrics are verified and approved by the client before publication.",
  "A reference call on request is offered as a qualification step, because it filters serious buyers.",
  "Where proof is not yet publishable, we substitute methodology transparency — the operating cadence, deliverables and governance that produce the outcome.",
];

/* ------------------------------------------------------------------ *
 * INSIGHTS — §3.3, §14.11
 * ------------------------------------------------------------------ */
export const INSIGHT_PILLARS = [
  {
    n: "01",
    pillar: "India Platform GTM",
    themes:
      "Why global platforms struggle in India; India entry mistakes; enterprise buying dynamics.",
  },
  {
    n: "02",
    pillar: "GCC",
    themes:
      "How GCCs influence global platform adoption; GCC-to-global GTM motions.",
  },
  {
    n: "03",
    pillar: "GSI",
    themes:
      "How to turn GSIs from logo relationships into pipeline engines.",
  },
  {
    n: "04",
    pillar: "Platform Growth",
    themes: "From wedge use case to enterprise platform standard.",
  },
  {
    n: "05",
    pillar: "Built–Operate–Sustain",
    themes: "Why strategy fails without an operating model.",
  },
  {
    n: "06",
    pillar: "India → Global",
    themes: "How Indian Enterprise B2B platforms can internationalise.",
  },
];

/* ------------------------------------------------------------------ *
 * DELIVERY & EXECUTION MODEL — §21
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
  { role: "Customer Success", note: "Protects adoption after the signature." },
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

export const DELIVERY_STANDARD = ["Consistent", "Successful", "Ethical"];

/** §21.1 — what Pivora asks of the client, stated up front. */
export const CLIENT_ASKS = [
  {
    ask: "India time-zone support",
    means:
      "Client-side key personnel available for collaboration during Indian business hours.",
  },
  {
    ask: "Training content",
    means:
      "Product documentation, sales kits and training materials provided to the pod.",
  },
  {
    ask: "Process training",
    means:
      "Client-specific training on internal sales and presales methodologies, CRM usage and approval workflows.",
  },
  {
    ask: "Sales-operations training",
    means:
      "Training on the client's sales-operations tools and reporting requirements.",
  },
  {
    ask: "Company email and system access",
    means:
      "Official addresses and application access, so pod members operate as part of the client's organisation.",
  },
  {
    ask: "Office equipment",
    means:
      "Laptops and hardware to client standards for dedicated team members, where mandated.",
  },
  {
    ask: "Operating expenses",
    means:
      "Clear handling and reimbursement of pre-approved expenses incurred on the client's behalf.",
  },
];

/** §21.2 — the de-risking equation. Two risks removed, two commitments made. */
export const DERISK = {
  removed: [
    {
      risk: "Fixed cost of an India team",
      body: "A pod scales up or down against the engagement rather than sitting on your headcount through a slow quarter.",
    },
    {
      risk: "Time lost to building a function from scratch",
      body: "Hiring, onboarding and training an India GTM function is nine to twelve months you spend before the first serious conversation happens.",
    },
  ],
  committed: [
    {
      value: "Senior specialist skills on tap",
      body: "The shared bench gives every engagement access to expertise it could not justify carrying full time.",
    },
    {
      value: "One governance layer",
      body: "Quality stays consistent across pods because the governance sits above them, not inside each one.",
    },
  ],
};

/* ------------------------------------------------------------------ *
 * FOUNDER — §19
 * CAREER is Subrato's own history at prior employers. It is NOT Pivora's
 * engagement record. The site must never blur these.
 * ------------------------------------------------------------------ */

export const FOUNDER_BIO = [
  "Subrato Bandhu has spent three decades in Enterprise B2B software, building and scaling the India businesses of global product and platform companies from the ground up. The pattern is consistent: take a global platform with little or no India presence, build the go-to-market from first principles — strategy, first hires, first customers, partner network — and scale it into a durable business.",
  "He was appointed Regional Vice President, India at OutSystems in October 2020, where he led the low-code platform's India expansion and its 2023 alliance with KPMG in India. Before that he was Managing Director, India at Sprinklr and Vice President, India at PowWow Mobile, and was instrumental in setting up the India businesses of Sprinklr, AppDynamics and BMC Software — owning India business strategy, customer success, partner networks, operations and sales execution. His earlier career spans CMS Computers, Mahindra Networks and Openview Technologies.",
  "He subsequently returned to Sprinklr as Vice President, India Market, before founding Pivora Consulting in 2025. Across these roles he has built long-standing relationships with Indian corporates, Global Capability Centres and Global System Integrators — the three tracks that define Pivora's India GTM motion.",
];

export const FOUNDER_TAGS = [
  "Three decades · Enterprise B2B",
  "0 → 1 India GTM builds",
  "India Enterprise track",
  "GCC track",
  "GSI / GSP track",
  "Low-code & CX thought leader",
];

export type CareerEntry = {
  org: string;
  role: string;
  /** Printed only where the date is verified against press coverage. */
  when?: string;
  /** True where the date range is indicative and pending confirmation. */
  indicative?: boolean;
  /** Rendered as an expandable info affordance on the timeline (§19.1). */
  note?: string;
};

export const CAREER: CareerEntry[] = [
  { org: "CMS Computers", role: "Early career" },
  { org: "Mahindra Networks", role: "Early career" },
  { org: "Openview Technologies", role: "Early career" },
  { org: "BMC Software", role: "India business setup" },
  { org: "AppDynamics", role: "India business setup" },
  { org: "PowWow Mobile", role: "Vice President, India" },
  {
    org: "Sprinklr",
    role: "Managing Director, India",
    when: "2017–2020",
    indicative: true,
  },
  {
    org: "OutSystems",
    role: "Regional Vice President, India",
    when: "Oct 2020",
  },
  {
    org: "Sprinklr",
    role: "Vice President, India Market",
    when: "2023–2025",
    note: "A second, separate stint at Sprinklr — three years after the first. Published coverage from this period is market-facing, on customer experience and generative AI, rather than country-management. The two roles are distinct mandates, not one continuous tenure.",
  },
  { org: "Pivora Consulting", role: "Founder", when: "2025" },
];

/**
 * Not rendered publicly. The timeline prints a date only where press
 * coverage supports it and reads "Earlier" everywhere else, so the caveat
 * has nothing to attach to on a visitor-facing page — asking a reader to
 * hold our sourcing caveat for us is a note about our process, not about
 * Subrato. Kept here as the internal record; surfaces on /review.
 */
export const CAREER_FOOTNOTE =
  "Company sequence and roles are verified against the OutSystems appointment announcement (October 2020) and 2023–2024 press appearances. Pre-2020 date ranges are indicative and pending founder confirmation — including the 2017–2020 Sprinklr range, which is why the timeline currently shows it as “Earlier”.";

/** §19.2 — the same five disciplines, rebuilt from scratch at each company. */
export const GROUND_ZERO_DISCIPLINES = [
  "India business strategy",
  "Customer success",
  "Partner network development",
  "Operations",
  "Sales execution",
];

export const GROUND_ZERO_COMPANIES = [
  "BMC Software",
  "AppDynamics",
  "Sprinklr",
  "PowWow Mobile",
  "OutSystems",
];

export type Quote = {
  text: string;
  who: string;
  where: string;
  when: string;
};

export const QUOTES: Quote[] = [
  {
    text: "Subrato and his team were responsible for the overall India business strategy, customer success, partner network development, operations, and sales execution for all three GTM's",
    who: "OutSystems appointment announcement",
    where: "Referring to Sprinklr, AppDynamics and BMC Software",
    when: "October 2020",
  },
  {
    text: "With Subrato's vast expertise, I believe he will be integral in helping to grow OutSystems' presence in India and drive adoption rate of the platform across the market.",
    who: "Mark Weaser, Vice President – APAC, OutSystems",
    where: "On Subrato Bandhu's appointment as Regional Vice President, India",
    when: "October 2020",
  },
  {
    text: "India presently plays a significant role in global application development and digital transformation initiatives, and going forward it will increase multi-fold.",
    who: "Subrato Bandhu",
    where: "On his appointment as Regional Vice President, India, OutSystems",
    when: "October 2020",
  },
];

/** §19.4 — selected coverage and publications. */
export const COVERAGE = [
  {
    year: "2020",
    outlet: "ETHRWorld (Economic Times)",
    piece:
      "“OutSystems appoints Subrato Bandhu as Regional Vice President – India” — appointment coverage with career history",
  },
  {
    year: "2020",
    outlet: "CEO Insights India",
    piece:
      "Appointment coverage citing ground-zero India builds at Sprinklr, AppDynamics and BMC Software",
  },
  {
    year: "2021",
    outlet: "TechCircle",
    piece:
      "“Watch: OutSystems' Subrato Bandhu on low-code growth in India” — video interview",
  },
  {
    year: "2021",
    outlet: "Analytics Insight",
    piece:
      "“Exclusive Interview with Subrato Bandhu, Regional VP at OutSystems”",
  },
  {
    year: "2021",
    outlet: "Financial Express",
    piece: "“Apps on the fly: The magic of low-code platforms”",
  },
  { year: "2021", outlet: "CXOToday", piece: "“The ROI of low code”" },
  {
    year: "2021–22",
    outlet: "Times of India — Voices",
    piece:
      "Authored columns: “Do we really need more software apps?”; SAP ecosystem transformation; software delivery trends",
  },
  {
    year: "2023",
    outlet: "KPMG in India",
    piece:
      "“KPMG in India and OutSystems announce an alliance to offer innovative low-code digital solutions” — press release",
  },
  {
    year: "2024",
    outlet: "Digital Terminal",
    piece:
      "“Generative AI is transforming how businesses interact with customers” — interview, VP, Sprinklr",
  },
  {
    year: "2024",
    outlet: "Voice & Data",
    piece: "“India's Digital Leap: The Rise of Customer Experience Centers”",
  },
  {
    year: "2024",
    outlet: "Express Computer / ETCXPlus",
    piece:
      "Technology Sabha and ETCXPlus video interviews — Vice President, India Market, Sprinklr",
  },
];

export const KPMG_PROOF = {
  year: "2023",
  what: "KPMG in India × OutSystems alliance",
  note: "Announced while Subrato was Regional Vice President at OutSystems. This is a milestone from his career prior to founding Pivora — not a Pivora engagement.",
};

/* ------------------------------------------------------------------ *
 * CAREERS — §13
 * This page qualifies a candidate the way every other page qualifies a
 * buyer. Nothing here is invented: where a real fact is missing (team
 * size, comp, open roles, policy), the page says so rather than filling
 * the gap. Tracked in OPEN_ITEMS.
 * ------------------------------------------------------------------ */
export const CAREERS_HERO = {
  head: "Build the engine, not just the deck.",
  body: "Pivora is a specialist Enterprise B2B growth firm, not a staffing shop or a generic services company. We're building a small, senior technical bench — forward deployment engineers and platform specialists — to sit inside our Built–Operate–Sustain engagements and make the GTM model real for the platforms we work with. If you want your work to touch a live enterprise deal instead of disappearing into a backlog, this is that kind of team.",
};

export const CAREERS_WHY = [
  {
    n: "01",
    head: "Proximity to the deal",
    body: "A forward deployment engineer here works inside a live Built–Operate–Sustain engagement — on the architecture a customer is actually evaluating, in the room where the technical win is decided. It is about as close to revenue as engineering gets.",
  },
  {
    n: "02",
    head: "Small team, real ownership",
    body: "This is a senior bench by design, not a pyramid. Scope is wide because the team is small, and there is no layer between you and the decision.",
  },
  {
    n: "03",
    head: "Selectivity cuts both ways",
    body: "The same qualification discipline Pivora applies to clients applies to hiring. We would rather leave a role open than fill it with someone the work will not suit.",
  },
  {
    n: "04",
    head: "Founder-led, not founder-only",
    body: "You will work directly with Subrato and on client-facing work early. That is a consequence of the size of the team, not a perk written into a job ad.",
  },
];

export const HIRING_PROCESS = [
  {
    n: "01",
    step: "Intro conversation with the team",
    body: "Thirty minutes on fit and mutual interest.",
  },
  {
    n: "02",
    step: "A working session on a real problem",
    body: "A technical discussion tied to something we are actually solving, not a whiteboard puzzle.",
  },
  {
    n: "03",
    step: "A conversation with Subrato",
    body: "About the work, the engagement model and where you would sit in it.",
  },
  { n: "04", step: "Decision and offer", body: "Either way, you hear back." },
];

/** No open roles have been supplied yet (§13.5). The page says so. */
export const OPEN_ROLES: {
  title: string;
  scope: string;
  location: string;
}[] = [];

export const NO_ROLES_COPY =
  "There are no roles open at the moment. Tell us what you would want to build instead — if it lines up with where the bench is going, that conversation is worth having before a role exists.";

/* ------------------------------------------------------------------ *
 * LEGAL & FOOTER — §15
 * ------------------------------------------------------------------ */
export const LEGAL_ENTITY = "Pivora Consulting LLP";

export const LEGAL_PAGES = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    covers:
      "What is collected via the Contact and Careers forms, why, how long it is retained, whether it is shared with any third party, and how to request deletion.",
  },
  {
    slug: "terms",
    title: "Terms of Use",
    covers:
      "Site-use terms, IP ownership of site content, and no-warranty language for published market data.",
  },
  {
    slug: "cookies",
    title: "Cookie Notice",
    covers:
      "What analytics or tracking is in use, and a consent mechanism where the visitor's jurisdiction requires one.",
  },
];

/* ------------------------------------------------------------------ *
 * VERIFIED SOURCE REGISTER — §22
 * The audit trail. Every external fact used on this site that could be
 * checked was checked, and appears here with its source and date.
 * ------------------------------------------------------------------ */
export const SOURCES = [
  {
    n: 1,
    claim:
      "Appointment as Regional VP, India, OutSystems; prior MD India at Sprinklr; VP India at PowWow Mobile; tenures at AppDynamics, BMC Software, CMS Computers, Mahindra Networks, Openview Technologies",
    source: "ETHRWorld (Economic Times) — appointment report",
    when: "Oct 2020",
  },
  {
    n: 2,
    claim:
      "“Instrumental in setting up business” for Sprinklr, AppDynamics and BMC Software; India strategy, customer success, partner network, operations, sales execution; relationships with Indian corporates, GSPs and GCCs",
    source: "CEO Insights India — OutSystems appointment release",
    when: "Oct 2020",
  },
  {
    n: 3,
    claim: "Mark Weaser (VP APAC, OutSystems) quotation on the appointment",
    source: "ETHRWorld / CEO Insights India",
    when: "Oct 2020",
  },
  {
    n: 4,
    claim: "KPMG in India × OutSystems alliance for low-code digital solutions",
    source: "KPMG in India — press release",
    when: "May 2023",
  },
  {
    n: 5,
    claim:
      "Vice President, India Market, Sprinklr — CX and generative-AI commentary and interviews",
    source: "ETCXPlus; Express Computer; Voice & Data; Digital Terminal",
    when: "2024",
  },
  {
    n: 6,
    claim: "India IT spending of US$161.5B in 2025, +11.1% year on year",
    source: "Gartner — IT spending forecast",
    when: "2025",
  },
  {
    n: 7,
    claim:
      "India IT spending projected at US$176.3B in 2026 (+10.6%); software segment +17.6% to US$24.7B",
    source: "Gartner — IT spending forecast update",
    when: "Nov 2025",
  },
  {
    n: 8,
    claim:
      "1,700+ GCCs in India; US$64.6B GCC revenue in FY24 (up ~40% YoY); 1.9M professionals employed",
    source: "Nasscom–Zinnov — GCC landscape report",
    when: "FY2024",
  },
  {
    n: 9,
    claim: "India GCC market projected to reach US$99–105B by 2030",
    source: "Nasscom–Zinnov — GCC projections",
    when: "2024",
  },
  {
    n: 10,
    claim:
      "~60% of Indian enterprise revenue expected to be digital-driven within three years",
    source: "IDC — India digital-economy commentary",
    when: "2024",
  },
  {
    n: 11,
    claim: "India projected to become the world's third-largest economy by 2027",
    source: "IMF (G. Gopinath); EY; Morgan Stanley projections",
    when: "2023–24",
  },
  {
    n: 12,
    claim:
      "75% of enterprise software projects delayed; 57% timeline overruns; 43% cost overruns; ₹5.6 crore average loss",
    source:
      "IDC × Zoho — “State of SaaS Adoption in India” (n=240 enterprises, 1,000+ employees)",
    when: "2024",
  },
];

export const SOURCE_NOTE =
  "Founder-supplied materials — the Built–Operate–Sustain model, the execution model, client commitments and de-risking language — are internal Pivora documents and are labelled as such wherever used.";

/* ------------------------------------------------------------------ *
 * OPEN ITEMS — NOT PUBLISHED. Surfaces on /review only (noindex).
 * These need client confirmation before they can appear anywhere public.
 * Carried forward from the brief's own inline "NEEDS YOUR INPUT" flags
 * and its closing decision list.
 * ------------------------------------------------------------------ */
export const OPEN_ITEMS = [
  {
    item: "Brand palette — Navy/Gold vs the built site",
    status: "Deliberate divergence",
    detail:
      "Brief §14.2 specifies Deep Navy #0B1F3A and Muted Gold #C8A15A on white. This site is built on the existing warm-paper / carbon ground with the blue and gold signals, at the client's instruction to keep the current look and feel. Nothing else in §14 was relaxed: gold still stays an accent, there are no gradients, no glassmorphism, no stock photography and no animated globes. Confirm the palette decision, or say the word and the tokens in app/globals.css swap in one file.",
  },
  {
    item: "Logo lock-up — vector source",
    status: "Raster only",
    detail:
      "The approved lock-up is now live in the header, the favicon and the social card, extracted from the brief itself (§14.1). It is a 1153×262 raster — the white field it shipped on was knocked out to alpha and the artwork trimmed, but nothing was redrawn, recoloured or stretched. That resolution is comfortable at header size and fine on a 2× display, but send the SVG or AI source when you have it: it would sharpen the mark at large sizes and let the favicon render as vector.",
  },
  {
    item: "Reversed lock-up for dark grounds",
    status: "Not supplied",
    detail:
      "The wordmark is Deep Navy, which measures roughly 1.2:1 on the carbon footer — invisible. §14.1 supplies no white or one-colour reversed version and forbids recolouring the mark, so the footer carries the brand in type rather than a lock-up on a paper plate, which read as a sticker on a dark ground. A reversed lock-up from the brand owner would let the mark appear there properly. Wordmark.tsx already accepts tone=\"dark\" and renders the plate if it is ever wanted.",
  },
  {
    item: "Navigation width",
    status: "Resolved with a variation",
    detail:
      "Brief §3.1 specifies an eleven-item top bar and flags it for confirmation. Built as four primary links plus a full-screen Index that carries every page in the map, so no page is orphaned (§18) and the bar stays restrained. Confirm this is acceptable, or the eleven-item bar can be restored.",
  },
  {
    item: "Sprinklr MD → VP transition",
    status: "Draft sentence withheld",
    detail:
      "Brief §19.1 supplies a bridge sentence marked “Draft only — confirm or rewrite before publishing”. The timeline's second Sprinklr entry instead carries a note built only from verified published coverage. Supply the real one-line reason and it replaces the neutral note.",
  },
  {
    item: "Pre-2020 career dates",
    status: "Unconfirmed — currently unpublished",
    detail:
      "Brief §19.1 marks every pre-2020 date range as indicative. Rather than print them with an asterisk and a caveat aimed at the visitor, the timeline shows “Earlier” for anything without press support and prints only Oct 2020, 2023–2025 and 2025. Confirm the real ranges — including the 2017–2020 Sprinklr MD stint — and set `indicative: false` in CAREER to publish them.",
  },
  {
    item: "Case study slot 01",
    status: "Awaiting decision",
    detail:
      "Brief §10.2 asks whether any current engagement — including work through Pivora Consulting LLP for UnifyApps — can appear, even anonymised. Until confirmed, all three slots render as placeholders with the standard copy.",
  },
  {
    item: "Careers — team size, policy, comp, open roles",
    status: "Missing",
    detail:
      "Brief §13 flags all four. The page ships with the structure and the hero draft, no invented roles, and an interest form instead of a role list. Supply the first real role(s) and they drop into OPEN_ROLES.",
  },
  {
    item: "Hiring process accuracy",
    status: "Unconfirmed",
    detail:
      "The four steps on /careers are the brief's draft (§13.6). Publishing a process Pivora does not follow undercuts the credibility the site is built to protect — confirm or correct before launch.",
  },
  {
    item: "Legal pages",
    status: "Template only — needs a lawyer",
    detail:
      "Brief §15 requires Privacy, Terms and Cookie Notice live before any form goes live. The three pages exist with the required structure and are honestly labelled as pending legal review. The site will process personal data under India's DPDP Act and potentially GDPR.",
  },
  {
    item: "Footer registration block",
    status: "Awaiting disclosure preference",
    detail:
      "Brief §15.1 lists legal entity name, registered address, LLPIN/CIN and GST number. Only the entity name (Pivora Consulting LLP) is published; the rest are omitted pending your call on what should be public.",
  },
  {
    item: "Contact routing",
    status: "Not connected",
    detail:
      "Brief §16 asks whether Contact and Careers submissions route to HubSpot or to email. Neither form has a destination configured, so both validate and then say honestly that they could not be delivered rather than returning a false success.",
  },
  {
    item: "Branded email address",
    status: "Missing",
    detail:
      "No branded address has been supplied, so no email is published anywhere on the site. Needed before launch.",
  },
  {
    item: "Production domain (NEXT_PUBLIC_SITE_URL)",
    status: "Not set",
    detail:
      "Open Graph tags, canonical links and sitemap entries must be absolute URLs. Until NEXT_PUBLIC_SITE_URL is set to the real domain they resolve against localhost, so social cards will not render when the site is shared.",
  },
  {
    item: "Analytics tool",
    status: "Not chosen",
    detail:
      "Brief §16 — pick GA4, Plausible or similar. Whatever is chosen has to be disclosed in the Cookie Notice, which is why the notice currently states that no analytics is running.",
  },
  {
    item: "GSI market figure — $22B / 16.8% CAGR",
    status: "Published without a source",
    detail:
      "Excluded by §20.4 as untraceable, then reinstated on your instruction as a provisional number. It ships on the GSI track only — not on /market, and not in the Sources appendix — and its citation reads “Industry estimate · source to be confirmed”, which is visibly weaker than every other figure on the site. Find a named research house and date and it becomes an ordinary citation; find nothing and it should come back out before launch, because this is the one number a sceptical CIO can push on.",
  },
  {
    item: "Figures shown in the reference visuals",
    status: "Excluded pending a source",
    detail:
      "The homepage composition references in §14.12 show “$1.4T+ digital economy by 2030” and “1.5B+ digital consumers”, neither of which appears in the verified register. Both are excluded under §20.4. Supply a checkable source and they can be added with citation.",
  },
];
