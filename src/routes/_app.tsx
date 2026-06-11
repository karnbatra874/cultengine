import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { Sidebar } from "@/components/cultengine/Sidebar";
import { Topbar } from "@/components/cultengine/Topbar";
import { PAGE_TITLES } from "@/lib/cultengine-data";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function pathToId(pathname: string): string {
  if (pathname === "/" || pathname === "") return "dashboard";
  const seg = pathname.split("/").filter(Boolean)[0] ?? "dashboard";
  return seg;
}

function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const activeId = pathToId(pathname);
  return (
    <div className="app">
      <Sidebar activePage={activeId} />
      <div className="main">
        <Topbar title={PAGE_TITLES[activeId] ?? activeId} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
