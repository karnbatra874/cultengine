import { createFileRoute } from "@tanstack/react-router";
import { AuditionsPage } from "@/components/cultengine/pages/AuditionsPage";

export const Route = createFileRoute("/_app/auditions")({
  head: () => ({
    meta: [
      { title: "Auditions — CultEngine" },
      { name: "description", content: "Submit and review cultural club auditions, track applicants through the A2P funnel for IIT Roorkee clubs." },
      { property: "og:title", content: "Auditions portal — CultEngine" },
      { property: "og:description", content: "Apply to club auditions and track applicants from registration to selection." },
      { property: "og:url", content: "/auditions" },
    ],
    links: [{ rel: "canonical", href: "/auditions" }],
  }),
  component: AuditionsPage,
});
