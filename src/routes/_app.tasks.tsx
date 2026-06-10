import { createFileRoute } from "@tanstack/react-router";
import { TasksPage } from "@/components/cultengine/pages/TasksPage";

export const Route = createFileRoute("/_app/tasks")({
  component: TasksPage,
});
