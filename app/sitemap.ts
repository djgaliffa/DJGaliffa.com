import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://djgaliffa.com",
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
