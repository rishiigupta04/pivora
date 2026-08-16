/**
 * The canonical origin.
 *
 * Open Graph tags must be absolute URLs, so this has to be the real
 * production domain before launch or every social card, canonical link and
 * sitemap entry will point at localhost. Set NEXT_PUBLIC_SITE_URL in the
 * deployment environment.
 *
 * Tracked as an open item on /review.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");
