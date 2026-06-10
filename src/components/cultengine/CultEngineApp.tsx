import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { PAGE_TITLES } from "@/lib/cultengine-data";
import { DashboardPage } from "./pages/DashboardPage";
import { MembersPage } from "./pages/MembersPage";
import { ClubsPage } from "./pages/ClubsPage";
import { AuditionsPage } from "./pages/AuditionsPage";
import { TasksPage } from "./pages/TasksPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { VaultPage } from "./pages/VaultPage";
import { ContingentPage } from "./pages/ContingentPage";
import { AssetsPage } from "./pages/AssetsPage";
import { AnnouncementsPage } from "./pages/AnnouncementsPage";
import { CalendarPage } from "./pages/CalendarPage";
import { CouncilPage } from "./pages/CouncilPage";
import { SettingsPage } from "./pages/SettingsPage";
import { MVPPage } from "./pages/MVPPage";

const PAGES: Record<string, () => JSX.Element> = {
  dashboard: DashboardPage,
  members: MembersPage,
  clubs: ClubsPage,
  auditions: AuditionsPage,
  tasks: TasksPage,
  analytics: AnalyticsPage,
  vault: VaultPage,
  contingent: ContingentPage,
  assets: AssetsPage,
  announcements: AnnouncementsPage,
  calendar: CalendarPage,
  council: CouncilPage,
  settings: SettingsPage,
  mvp: MVPPage,
};

export function CultEngineApp() {
  const [active, setActive] = useState("dashboard");
  const Page = PAGES[active] ?? DashboardPage;
  return (
    <>
      <h2 className="sr-only">CultEngine — IIT Roorkee unified cultural management platform</h2>
      <div className="app">
        <Sidebar activePage={active} onNav={setActive} />
        <div className="main">
          <Topbar title={PAGE_TITLES[active] ?? active} />
          <Page />
        </div>
      </div>
    </>
  );
}
