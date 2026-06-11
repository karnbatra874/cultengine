import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/members", changefreq: "weekly", priority: "0.8" },
  { path: "/clubs", changefreq: "weekly", priority: "0.8" },
  { path: "/council", changefreq: "monthly", priority: "0.6" },
  { path: "/auditions", changefreq: "weekly", priority: "0.8" },
  { path: "/contingent", changefreq: "weekly", priority: "0.7" },
  { path: "/analytics", changefreq: "weekly", priority: "0.7" },
  { path: "/mvp", changefreq: "monthly", priority: "0.6" },
  { path: "/calendar", changefreq: "weekly", priority: "0.7" },
  { path: "/announcements", changefreq: "weekly", priority: "0.6" },
  { path: "/assets", changefreq: "weekly", priority: "0.5" },
  { path: "/tasks", changefreq: "weekly", priority: "0.5" },
  { path: "/vault", changefreq: "monthly", priority: "0.4" },
  { path: "/settings", changefreq: "monthly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
