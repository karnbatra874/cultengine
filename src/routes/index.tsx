import { createFileRoute } from "@tanstack/react-router";
import { CultEngineApp } from "@/components/cultengine/CultEngineApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CultEngine — IIT Roorkee" },
      { name: "description", content: "Unified cultural management platform for IIT Roorkee — auditions, members, clubs, contingent and knowledge vault." },
      { property: "og:title", content: "CultEngine — IIT Roorkee" },
      { property: "og:description", content: "Unified cultural management platform for IIT Roorkee." },
    ],
  }),
  component: CultEngineApp,
});
