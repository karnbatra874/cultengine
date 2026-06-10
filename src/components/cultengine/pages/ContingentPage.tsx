import { MEMBERS } from "@/lib/cultengine-data";

export function ContingentPage() {
  const top = MEMBERS.filter((m) => m.css > 0).sort((a, b) => b.css - a.css);
  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 500 }}>Inter IIT contingent 2026</div>
        <span className="pill p-rev">Selection in progress</span>
      </div>
      <div className="metrics">
        <div className="metric"><div className="metric-val">42</div><div className="metric-lbl">Selected so far</div></div>
        <div className="metric"><div className="metric-val">18</div><div className="metric-lbl">Events entered</div></div>
        <div className="metric"><div className="metric-val">14</div><div className="metric-lbl">Days to depart</div></div>
        <div className="metric"><div className="metric-val">86%</div><div className="metric-lbl">Readiness index</div></div>
      </div>
      <div className="card">
        <div className="card-title">Readiness timeline</div>
        <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 8 }}>
          <Phase bg="#eaf3de" fillW="100%" fillC="#639922" />
          <Phase bg="#eaf3de" fillW="100%" fillC="#639922" />
          <Phase bg="#faeeda" fillW="86%" fillC="#ef9f27" />
          <Phase bg="#f1efe8" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-text-secondary)" }}>
          <span>Auditions D-90</span><span>Selection D-60</span><span>Milestone D-14</span><span>Departure D-0</span>
        </div>
      </div>
      <div className="card">
        <div className="card-title">Selected members — top CSS scores</div>
        {top.map((m, i) => (
          <div className="row" key={m.roll}>
            <div style={{ width: 20, fontSize: 12, fontWeight: 500, color: "var(--color-text-secondary)" }}>#{i + 1}</div>
            <div className="av" style={{ background: m.av, color: m.tc }}>{m.init}</div>
            <div className="info">
              <div className="iname">{m.name}</div>
              <div className="imeta">{m.club} · {m.branch}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: "#534AB7" }}>{m.css}</div>
              <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>CSS</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Phase({ bg, fillW, fillC }: { bg: string; fillW?: string; fillC?: string }) {
  return (
    <div style={{ flex: 1, background: bg, borderRadius: 3, height: 8 }}>
      {fillW && fillC && <div style={{ width: fillW, height: 8, background: fillC, borderRadius: 3 }} />}
    </div>
  );
}
