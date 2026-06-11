import { createFileRoute } from "@tanstack/react-router";
import { AssetsPage } from "@/components/cultengine/pages/AssetsPage";

export const Route = createFileRoute("/_app/assets")({
  head: () => ({
    meta: [
      { title: "Assets — CultEngine" },
      { name: "description", content: "Upload, organize and download cultural club assets — PDFs, sheets, archives and media for IIT Roorkee." },
      { property: "og:title", content: "Asset vault — CultEngine" },
      { property: "og:description", content: "Shared file storage for all cultural clubs." },
      { property: "og:url", content: "/assets" },
    ],
    links: [{ rel: "canonical", href: "/assets" }],
  }),
  component: AssetsPage,
});
