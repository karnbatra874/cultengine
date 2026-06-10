import { createFileRoute } from "@tanstack/react-router";
import { AuditionsPage } from "@/components/cultengine/pages/AuditionsPage";

export const Route = createFileRoute("/_app/auditions")({
  component: AuditionsPage,
});
