import { MVP_MATRIX, COMP1, COMP2, COMP3, MVP_EXCLUSIONS, MVP_IMPACTS } from "@/lib/cultengine-data";

type Feat = { icon: string; title: string; desc: string; tc: string; ic: string };

function FeatureRow({ f }: { f: Feat }) {
  return (
    <div className="row">
      <div style={{ width: 32, height: 32, borderRadius: 6, background: f.ic, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <i className={`ti ${f.icon}`} style={{ fontSize: 15, color: f.tc }} />
      </div>
      <div className="info">
        <div className="iname">{f.title}</div>
        <div className="imeta" style={{ whiteSpace: "normal", lineHeight: 1.5 }}>{f.desc}</div>
      </div>
    </div>
  );
}

function ComponentCard({ borderColor, ic, tc, icon, title, subtitle, priority, priorityBg, priorityTc, features }: {
  borderColor: string; ic: string; tc: string; icon: string; title: string; subtitle?: string;
  priority: string; priorityBg: string; priorityTc: string; features: Feat[];
}) {
  return (
    <div className="card" style={{ borderLeft: `3px solid ${borderColor}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: ic, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <i className={`ti ${icon}`} style={{ fontSize: 16, color: tc }} />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500 }}>
            {title}
            {subtitle && <span style={{ fontSize: 10, color: "var(--color-text-tertiary)" }}> {subtitle}</span>}
          </div>
          <span className="pill" style={{ background: priorityBg, color: priorityTc, fontSize: 10, marginTop: 2 }}>{priority}</span>
        </div>
      </div>
      {features.map((f) => <FeatureRow key={f.title} f={f} />)}
    </div>
  );
}

const colorFor = (key: string, type: "impact" | "complexity") => {
  if (type === "impact") {
    if (key === "High") return { bg: "#EAF3DE", tc: "#3B6D11" };
    if (key === "Medium") return { bg: "#FAEEDA", tc: "#854F0B" };
    return { bg: "#F1EFE8", tc: "#5F5E5A" };
  }
  if (key === "Low") return { bg: "#EAF3DE", tc: "#3B6D11" };
  if (key === "Medium") return { bg: "#FAEEDA", tc: "#854F0B" };
  return { bg: "#FCEBEB", tc: "#A32D2D" };
};

export function MVPPage() {
  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>MVP / MVI — Minimum Viable Product</div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 2 }}>
            Targeting two critical failure points: top-of-funnel talent discovery &amp; end-of-funnel knowledge loss
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span className="pill p-act" style={{ fontSize: 11 }}>Phase 1 active</span>
          <span className="pill" style={{ background: "#e1f5ee", color: "#0f6e56", fontSize: 11 }}>2 P0 components</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 12 }}>
        <div className="card-title">Prioritization matrix — data-driven</div>
        <div style={{ overflowX: "auto" }}>
          <table className="tbl" style={{ width: "100%" }}>
            <thead>
              <tr><th>Feature / Component</th><th>Impact</th><th>Complexity</th><th>Rationale</th><th>Priority</th></tr>
            </thead>
            <tbody>
              {MVP_MATRIX.map((r) => {
                const i = colorFor(r.impact, "impact");
                const c = colorFor(r.complexity, "complexity");
                return (
                  <tr key={r.feature}>
                    <td style={{ fontWeight: 500 }}>{r.feature}</td>
                    <td><span style={{ background: i.bg, color: i.tc, fontSize: 11, padding: "2px 7px", borderRadius: 8, fontWeight: 500 }}>{r.impact}</span></td>
                    <td><span style={{ background: c.bg, color: c.tc, fontSize: 11, padding: "2px 7px", borderRadius: 8, fontWeight: 500 }}>{r.complexity}</span></td>
                    <td style={{ fontSize: 11, color: "var(--color-text-secondary)", maxWidth: 220 }}>{r.rationale}</td>
                    <td><span style={{ background: r.pc, color: r.ptc, fontSize: 11, padding: "2px 7px", borderRadius: 8, fontWeight: 500 }}>{r.priority}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>Core Components &amp; Features</div>

      <ComponentCard borderColor="var(--accent)" ic="var(--accent-light)" tc="var(--accent)" icon="ti-upload"
        title="1. Centralized Audition & Talent Registry" subtitle="(Software Modules)"
        priority="P0 — Critical" priorityBg="#fcebeb" priorityTc="#a32d2d" features={COMP1} />

      <ComponentCard borderColor="#0f6e56" ic="#e1f5ee" tc="#0f6e56" icon="ti-lock"
        title="2. The Institutional Knowledge Vault"
        priority="P0 — Critical" priorityBg="#fcebeb" priorityTc="#a32d2d" features={COMP2} />

      <ComponentCard borderColor="#854f0b" ic="#faeeda" tc="#854f0b" icon="ti-certificate"
        title={'3. The "Artistic Credit" Policy Framework'} subtitle="(Non-Tech Process Initiative)"
        priority="P1 — High" priorityBg="#faeeda" priorityTc="#854f0b" features={COMP3} />

      <div className="grid2">
        <div className="card">
          <div className="card-title" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <i className="ti ti-circle-x" style={{ fontSize: 14, color: "#a32d2d" }} />Scope exclusions (MVP)
          </div>
          {MVP_EXCLUSIONS.map((e) => (
            <div className="timeline-item" key={e}>
              <div className="tl-dot" style={{ background: "#A32D2D" }} />
              <div className="tl-content">
                <div className="tl-title" style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{e}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <i className="ti ti-target" style={{ fontSize: 14, color: "#3b6d11" }} />Expected impact
          </div>
          {MVP_IMPACTS.map((i) => (
            <div className="row" key={i.metric}>
              <div className="info"><div className="iname" style={{ fontSize: 12 }}>{i.metric}</div></div>
              <span style={{ background: i.color, color: i.tc, fontSize: 12, padding: "3px 9px", borderRadius: 10, fontWeight: 500, flexShrink: 0 }}>{i.target}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
