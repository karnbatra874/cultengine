import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/cultengine/pages/DashboardPage";

export const Route = createFileRoute("/_app/")({
  head: () => ({
    meta: [
      { title: "Dashboard — CultEngine" },
      { name: "description", content: "Overview of club health, recent activity, audition funnel and upcoming cultural events for IIT Roorkee." },
      { property: "og:title", content: "Dashboard — CultEngine" },
      { property: "og:description", content: "Club health, audition funnel and upcoming events at a glance." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: DashboardPage,
});
