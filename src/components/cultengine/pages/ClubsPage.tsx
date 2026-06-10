import { useState } from "react";
import { CLUBS } from "@/lib/cultengine-data";

const CATS = [
  { id: "all", label: "All" },
  { id: "performing", label: "Performing" },
  { id: "visual", label: "Visual" },
  { id: "literary", label: "Literary" },
  { id: "technical", label: "Technical" },
];

export function ClubsPage() {
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? CLUBS : CLUBS.filter((c) => c.cat === cat);

  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 500 }}>All clubs & sections</div>
        <div className="sbar" style={{ margin: 0 }}>
          {CATS.map((c) => (
            <button key={c.id} className={`fb ${cat === c.id ? "on" : ""}`} onClick={() => setCat(c.id)}>{c.label}</button>
          ))}
        </div>
      </div>
      <div className="grid3">
        {list.map((c) => (
          <div className="club-card" key={c.id}>
            <div className="club-icon" style={{ background: c.color }}>
              <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: c.tc }} aria-hidden="true" />
            </div>
            <div className="club-name">{c.name}</div>
            <div className="club-meta">{c.members} members</div>
            <div className="bar-bg" style={{ marginTop: 6 }}>
              <div className="bar-fill" style={{ width: `${c.health}%`, background: c.tc }} />
            </div>
            <div style={{ fontSize: 10, color: "var(--color-text-tertiary)", marginTop: 3 }}>
              Health: {c.health}/100
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
