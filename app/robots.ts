import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal pre-launch checklist. Also noindex via its own metadata;
      // this is the belt to that page's braces.
      disallow: ["/review"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
