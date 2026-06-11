import { createFileRoute } from "@tanstack/react-router";
import { CalendarPage } from "@/components/cultengine/pages/CalendarPage";

export const Route = createFileRoute("/_app/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar — CultEngine" },
      { name: "description", content: "Upcoming cultural events, rehearsals and auditions across all IIT Roorkee clubs in one calendar." },
      { property: "og:title", content: "Cultural calendar — CultEngine" },
      { property: "og:description", content: "Events, rehearsals and auditions across all cultural clubs." },
      { property: "og:url", content: "/calendar" },
    ],
    links: [{ rel: "canonical", href: "/calendar" }],
  }),
  component: CalendarPage,
});
