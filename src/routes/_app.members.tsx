import { createFileRoute } from "@tanstack/react-router";
import { MembersPage } from "@/components/cultengine/pages/MembersPage";

export const Route = createFileRoute("/_app/members")({
  component: MembersPage,
});
