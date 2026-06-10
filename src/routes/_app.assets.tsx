import { createFileRoute } from "@tanstack/react-router";
import { AssetsPage } from "@/components/cultengine/pages/AssetsPage";

export const Route = createFileRoute("/_app/assets")({
  component: AssetsPage,
});
