import { createFileRoute } from "@tanstack/react-router";
import { VaultPage } from "@/components/cultengine/pages/VaultPage";

export const Route = createFileRoute("/_app/vault")({
  head: () => ({
    meta: [
      { title: "Vault — CultEngine" },
      { name: "description", content: "Secure archive of cultural club records, contracts and institutional memory for IIT Roorkee." },
      { property: "og:title", content: "Knowledge vault — CultEngine" },
      { property: "og:description", content: "Institutional memory and records for cultural clubs." },
      { property: "og:url", content: "/vault" },
    ],
    links: [{ rel: "canonical", href: "/vault" }],
  }),
  component: VaultPage,
});
