import { createFileRoute } from "@tanstack/react-router";
import { ClubsPage } from "@/components/cultengine/pages/ClubsPage";

export const Route = createFileRoute("/_app/clubs")({
  head: () => ({
    meta: [
      { title: "Clubs — CultEngine" },
      { name: "description", content: "Explore the 13 cultural clubs at IIT Roorkee with health scores, leads and member counts." },
      { property: "og:title", content: "Clubs directory — CultEngine" },
      { property: "og:description", content: "All 13 cultural clubs at IIT Roorkee with leadership, members and performance." },
      { property: "og:url", content: "/clubs" },
    ],
    links: [{ rel: "canonical", href: "/clubs" }],
  }),
  component: ClubsPage,
});
