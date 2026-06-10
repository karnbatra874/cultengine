import { createFileRoute } from "@tanstack/react-router";
import { ContingentPage } from "@/components/cultengine/pages/ContingentPage";

export const Route = createFileRoute("/_app/contingent")({
  component: ContingentPage,
});
