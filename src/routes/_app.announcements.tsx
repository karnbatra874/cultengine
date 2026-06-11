import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementsPage } from "@/components/cultengine/pages/AnnouncementsPage";

export const Route = createFileRoute("/_app/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — CultEngine" },
      { name: "description", content: "Broadcast and view announcements across cultural clubs at IIT Roorkee." },
      { property: "og:title", content: "Announcements — CultEngine" },
      { property: "og:description", content: "Updates and notices across cultural clubs." },
      { property: "og:url", content: "/announcements" },
    ],
    links: [{ rel: "canonical", href: "/announcements" }],
  }),
  component: AnnouncementsPage,
});
