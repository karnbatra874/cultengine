import { createFileRoute } from "@tanstack/react-router";
import { ClubsPage } from "@/components/cultengine/pages/ClubsPage";

export const Route = createFileRoute("/_app/clubs")({
  component: ClubsPage,
});
