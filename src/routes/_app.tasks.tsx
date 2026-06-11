import { createFileRoute } from "@tanstack/react-router";
import { TasksPage } from "@/components/cultengine/pages/TasksPage";

export const Route = createFileRoute("/_app/tasks")({
  head: () => ({
    meta: [
      { title: "Tasks — CultEngine" },
      { name: "description", content: "Plan, review and track cultural club tasks across to-do, in-progress, review, done and important columns." },
      { property: "og:title", content: "Task board — CultEngine" },
      { property: "og:description", content: "Kanban-style tracker for cultural club operations." },
      { property: "og:url", content: "/tasks" },
    ],
    links: [{ rel: "canonical", href: "/tasks" }],
  }),
  component: TasksPage,
});
