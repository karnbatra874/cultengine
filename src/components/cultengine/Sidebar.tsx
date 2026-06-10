import { Link } from "@tanstack/react-router";
import { NAV_SECTIONS } from "@/lib/cultengine-data";
import { idToPath } from "@/lib/cultengine-nav";

interface Props {
  activePage: string;
}

export function Sidebar({ activePage }: Props) {
  return (
    <div className="sidebar">
      <div className="sb-brand">
        <div className="sb-logo">CE</div>
        <div>
          <div className="sb-name">CultEngine</div>
          <div className="sb-sub">IIT Roorkee</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 8 }}>
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            <div className="sb-section">{section.label}</div>
            {section.items.map((item) => (
              <Link
                key={item.id}
                to={idToPath(item.id)}
                className={`sb-item ${activePage === item.id ? "active" : ""}`}
              >
                <i className={`ti ${item.icon}`} aria-hidden="true" />
                {item.label}
                {"badge" in item && item.badge && (
                  <span
                    className="sb-badge"
                    style={"badgeColor" in item && item.badgeColor ? { background: item.badgeColor as string } : undefined}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
