import { createFileRoute } from "@tanstack/react-router";
import { AnalyticsPage } from "@/components/cultengine/pages/AnalyticsPage";

export const Route = createFileRoute("/_app/analytics")({
  component: AnalyticsPage,
});
