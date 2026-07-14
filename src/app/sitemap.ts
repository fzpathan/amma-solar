import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const paths = [
  "",
  "/subsidy",
  "/calculator",
  "/gallery",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    entries.push({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/subsidy" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/subsidy" ? 0.9 : 0.7,
      alternates: {
        languages: {
          mr: `${siteConfig.url}${path}`,
          en: `${siteConfig.url}/en${path}`,
        },
      },
    });
  }

  return entries;
}
