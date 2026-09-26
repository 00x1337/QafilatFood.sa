import type { MetadataRoute } from "next";
import { serviceDetails, siteUrl } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/contact", "/privacy", ...serviceDetails.map(s => `/services/${s.slug}`)].map(path => ({ url: `${siteUrl}${path}` }));
}
