import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ALL_ROUTES } from "@/lib/nav";

/**
 * Generated from the shared site map, so a page cannot be added to the
 * navigation and left out of the sitemap.
 *
 * /review is deliberately absent — it is internal and noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/privacy") ? 0.3 : 0.7,
  }));
}
