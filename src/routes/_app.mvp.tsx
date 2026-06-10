import { createFileRoute } from "@tanstack/react-router";
import { MVPPage } from "@/components/cultengine/pages/MVPPage";

export const Route = createFileRoute("/_app/mvp")({
  component: MVPPage,
});
