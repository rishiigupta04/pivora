import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** /review is deliberately absent — it is internal and noindex. */
const ROUTES = ["", "/model", "/doors", "/how-we-sell", "/founder", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
