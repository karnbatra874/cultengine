import { createFileRoute } from "@tanstack/react-router";
import { ContingentPage } from "@/components/cultengine/pages/ContingentPage";

export const Route = createFileRoute("/_app/contingent")({
  head: () => ({
    meta: [
      { title: "Contingent — CultEngine" },
      { name: "description", content: "Build and finalize the IIT Roorkee inter-college contingent with CSS-based selections across all cultural clubs." },
      { property: "og:title", content: "Contingent builder — CultEngine" },
      { property: "og:description", content: "Finalize the inter-college cultural contingent using CSS scoring." },
      { property: "og:url", content: "/contingent" },
    ],
    links: [{ rel: "canonical", href: "/contingent" }],
  }),
  component: ContingentPage,
});
