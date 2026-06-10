import { createFileRoute } from "@tanstack/react-router";
import { VaultPage } from "@/components/cultengine/pages/VaultPage";

export const Route = createFileRoute("/_app/vault")({
  component: VaultPage,
});
