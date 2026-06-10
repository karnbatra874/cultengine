import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementsPage } from "@/components/cultengine/pages/AnnouncementsPage";

export const Route = createFileRoute("/_app/announcements")({
  component: AnnouncementsPage,
});
