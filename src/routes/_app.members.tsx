import { createFileRoute } from "@tanstack/react-router";
import { MembersPage } from "@/components/cultengine/pages/MembersPage";

export const Route = createFileRoute("/_app/members")({
  head: () => ({
    meta: [
      { title: "Members — CultEngine" },
      { name: "description", content: "Browse and manage the cultural members registry across 13 IIT Roorkee clubs with branch, year and CSS scoring." },
      { property: "og:title", content: "Members registry — CultEngine" },
      { property: "og:description", content: "Search, filter and export the cultural members roster across all clubs." },
      { property: "og:url", content: "/members" },
    ],
    links: [{ rel: "canonical", href: "/members" }],
  }),
  component: MembersPage,
});
