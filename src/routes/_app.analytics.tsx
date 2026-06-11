import { createFileRoute } from "@tanstack/react-router";
import { AnalyticsPage } from "@/components/cultengine/pages/AnalyticsPage";

export const Route = createFileRoute("/_app/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — CultEngine" },
      { name: "description", content: "Contingent Selection Score calculator and section health matrix for cultural clubs at IIT Roorkee." },
      { property: "og:title", content: "Analytics hub — CultEngine" },
      { property: "og:description", content: "CSS scoring, club performance index and section health matrix in one place." },
      { property: "og:url", content: "/analytics" },
    ],
    links: [{ rel: "canonical", href: "/analytics" }],
  }),
  component: AnalyticsPage,
});
