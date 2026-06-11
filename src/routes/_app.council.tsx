import { createFileRoute } from "@tanstack/react-router";
import { CouncilPage } from "@/components/cultengine/pages/CouncilPage";

export const Route = createFileRoute("/_app/council")({
  head: () => ({
    meta: [
      { title: "Cultural Council — CultEngine" },
      { name: "description", content: "Meet the Cultural Council leadership coordinating all 13 cultural clubs at IIT Roorkee." },
      { property: "og:title", content: "Cultural Council — CultEngine" },
      { property: "og:description", content: "Cultural Council leadership and coordination for IIT Roorkee." },
      { property: "og:url", content: "/council" },
    ],
    links: [{ rel: "canonical", href: "/council" }],
  }),
  component: CouncilPage,
});
