import { createFileRoute } from "@tanstack/react-router";
import { CouncilPage } from "@/components/cultengine/pages/CouncilPage";

export const Route = createFileRoute("/_app/council")({
  component: CouncilPage,
});
