/**
 * The site map, in one place.
 *
 * Brief §3.2 defines every page and §18 requires that each one has at least
 * one working inbound nav link — no orphan pages. Keeping the map here means
 * the header index, the footer and sitemap.xml are generated from the same
 * list, so a page cannot be added to the routing and quietly left unlinked.
 */

export type NavLink = { href: string; label: string; note: string };

export const INDEX: { head: string; links: NavLink[] }[] = [
  {
    head: "The work",
    links: [
      {
        href: "/what-we-do",
        label: "What We Do",
        note: "Four focused capabilities, each tied to an outcome.",
      },
      {
        href: "/global-to-india",
        label: "Global → India",
        note: "Enter and scale through enterprises, GCCs and GSIs.",
      },
      {
        href: "/india-to-global",
        label: "India → Global",
        note: "India as the foundation for international growth.",
      },
      {
        href: "/built-operate-sustain",
        label: "Built–Operate–Sustain",
        note: "Build the engine, operate it, make it yours.",
      },
      {
        href: "/gcc-gsi",
        label: "GCC & GSI",
        note: "Growth multipliers, not a logo wall.",
      },
      {
        href: "/platform-growth",
        label: "Platform Growth",
        note: "Wedge, repeatability, scale, global replication.",
      },
      {
        href: "/niche-ai",
        label: "Niche AI",
        note: "AI carried only where it creates enterprise value.",
      },
    ],
  },
  {
    head: "Proof & perspective",
    links: [
      {
        href: "/case-studies",
        label: "Case Studies",
        note: "Evidence of outcomes, published only when approved.",
      },
      {
        href: "/insights",
        label: "Insights",
        note: "Platform GTM, India, GCCs and GSIs.",
      },
      {
        href: "/market",
        label: "India Market Evidence",
        note: "Every figure the site uses, with its source.",
      },
      {
        href: "/why-pivora",
        label: "Why Pivora",
        note: "Why the specialist model is different.",
      },
      {
        href: "/delivery-model",
        label: "Delivery Model",
        note: "Dedicated pods, one governance layer, a shared bench.",
      },
    ],
  },
  {
    head: "The firm",
    links: [
      {
        href: "/about",
        label: "About",
        note: "Subrato Bandhu, and three decades of India GTM builds.",
      },
      {
        href: "/careers",
        label: "Careers",
        note: "Building the technical bench behind the model.",
      },
      {
        href: "/engagements",
        label: "How We Engage",
        note: "Five ways to start, and what each one covers.",
      },
      {
        href: "/contact",
        label: "Contact",
        note: "An executive conversation, not a lead form.",
      },
    ],
  },
];

/** Every public route, derived from the map above plus home and legal. */
export const ALL_ROUTES: string[] = [
  "/",
  ...INDEX.flatMap((g) => g.links.map((l) => l.href)),
  "/privacy",
  "/terms",
  "/cookies",
];
