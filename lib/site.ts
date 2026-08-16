/**
 * The canonical origin.
 *
 * Open Graph tags, canonical links and sitemap entries must be absolute
 * URLs. Get this wrong and the failure is quiet but total: the site works
 * perfectly while every social card points somewhere that isn't the site.
 *
 * Resolution order, most specific first:
 *
 *  1. NEXT_PUBLIC_SITE_URL      — set this once there is a custom domain.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — Vercel supplies this automatically
 *     and it stays fixed to the production domain, so previews still
 *     advertise the real site rather than their own throwaway URL.
 *  3. VERCEL_URL                — the per-deployment URL, as a last resort.
 *  4. localhost                 — development.
 *
 * Only used from server code (metadata, sitemap, robots), so the
 * unprefixed Vercel variables are readable here.
 */
function resolve(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolve().replace(/\/$/, "");
