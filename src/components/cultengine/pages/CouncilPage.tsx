import { STAKEHOLDERS, BUDGETS, OBJECTIVES } from "@/lib/cultengine-data";

export function CouncilPage() {
  return (
    <div className="page">
      <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 14 }}>Cultural council</div>
      <div className="grid2">
        <div className="card">
          <div className="card-title">Stakeholder map</div>
          {STAKEHOLDERS.map((s) => (
            <div className="row" key={s.name}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: s.tc, flexShrink: 0 }}>
                {s.name.slice(0, 2)}
              </div>
              <div className="info">
                <div className="iname">{s.name} <span style={{ fontSize: 11, fontWeight: 400, color: "var(--color-text-secondary)" }}>— {s.role}</span></div>
                <div className="imeta">{s.need}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title">Budget allocation</div>
          {BUDGETS.map((b) => (
            <div className="bar-row" key={b.l}>
              <div className="bar-label">{b.l}</div>
              <div className="bar-bg"><div className="bar-fill" style={{ width: `${b.v * 4}%`, background: b.c }} /></div>
              <div className="bar-val">{b.v}%</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="card-title">North star objectives</div>
        {OBJECTIVES.map((o) => (
          <div key={o.n} style={{ padding: "10px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: o.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: o.tc, flexShrink: 0 }}>{o.n}</div>
              <div style={{ fontSize: 13 }}>{o.text}</div>
            </div>
            <div className="bar-bg"><div className="bar-fill" style={{ width: `${o.prog}%`, background: o.tc }} /></div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 3 }}>{o.prog}% complete</div>
          </div>
        ))}
      </div>
    </div>
  );
}
