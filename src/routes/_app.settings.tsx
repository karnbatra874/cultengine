import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/cultengine/pages/SettingsPage";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [
      { title: "Settings — CultEngine" },
      { name: "description", content: "Configure CultEngine workspace preferences, roles and notifications for cultural club operations." },
      { property: "og:title", content: "Settings — CultEngine" },
      { property: "og:description", content: "Workspace preferences and role configuration." },
      { property: "og:url", content: "/settings" },
    ],
    links: [{ rel: "canonical", href: "/settings" }],
  }),
  component: SettingsPage,
});
