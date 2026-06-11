import { createFileRoute } from "@tanstack/react-router";
import { MVPPage } from "@/components/cultengine/pages/MVPPage";

export const Route = createFileRoute("/_app/mvp")({
  head: () => ({
    meta: [
      { title: "MVPs — CultEngine" },
      { name: "description", content: "Recognize standout cultural performers across IIT Roorkee clubs based on CSS scoring and event impact." },
      { property: "og:title", content: "Cultural MVPs — CultEngine" },
      { property: "og:description", content: "Top performers across cultural clubs by CSS and event impact." },
      { property: "og:url", content: "/mvp" },
    ],
    links: [{ rel: "canonical", href: "/mvp" }],
  }),
  component: MVPPage,
});
