import { useState } from "react";
import { CLUBS } from "@/lib/cultengine-data";

export function AnalyticsPage() {
  const [p, setP] = useState(0.8);
  const [e, setE] = useState(0.75);
  const [s, setS] = useState(0.72);
  const css = Math.round((0.4 * p + 0.35 * e + 0.25 * s) * 100);
  const label = css >= 75 ? "Recommended for contingent" : css >= 55 ? "Monitor & develop" : "Needs improvement";

  const metrics = ["Talent capture", "Retention rate", "Asset health", "Milestone readiness"];

  const perfClubs = CLUBS.filter((c) => ["music", "choreo", "drama", "audio", "cinesec"].includes(c.id));

  return (
    <div className="page">
      <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 14 }}>Analytics hub</div>
      <div className="css-formula">
        CSS = 0.40 × P<sub>historical</sub> + 0.35 × E<sub>semester</sub> + 0.25 × S<sub>peer</sub>
      </div>
      <div className="grid2" style={{ marginTop: 14 }}>
        <div className="card">
          <div className="card-title">CSS score calculator</div>
          <Slider label="Historical performance (P)" value={p} onChange={setP} />
          <Slider label="Semester engagement (E)" value={e} onChange={setE} />
          <Slider label="Peer score (S)" value={s} onChange={setS} />
          <div style={{ background: "var(--accent-light)", borderRadius: "var(--border-radius-md)", padding: 12, textAlign: "center", marginTop: 8 }}>
            <div style={{ fontSize: 11, color: "#534ab7", marginBottom: 4 }}>Contingent Selection Score</div>
            <div style={{ fontSize: 28, fontWeight: 500, color: "var(--accent)" }}>{css}</div>
            <div style={{ fontSize: 11, color: "#7f77dd" }}>{label}</div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Club performance index</div>
          {perfClubs.map((c) => (
            <div className="bar-row" key={c.id}>
              <div className="bar-label">{c.name.split(" ")[0]}</div>
              <div className="bar-bg"><div className="bar-fill" style={{ width: `${c.health}%`, background: c.tc }} /></div>
              <div className="bar-val">{c.health}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card" style={{ marginTop: 0 }}>
        <div className="card-title">Section health matrix</div>
        <div style={{ overflowX: "auto" }}>
          <table className="tbl" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Club</th>
                {metrics.map((m) => <th key={m}>{m}</th>)}
              </tr>
            </thead>
            <tbody>
              {CLUBS.map((c) => (
                <tr key={c.id}>
                  <td style={{ fontWeight: 500, fontSize: 12 }}>{c.name}</td>
                  {metrics.map((_, i) => {
                    const offsets = [-8, 5, -3, 7, 2, -6, 4, -2];
                    const v = Math.min(100, Math.max(30, Math.round(c.health + offsets[Math.abs(c.id.charCodeAt(0) + i) % 8])));
                    const col = v >= 75 ? "#EAF3DE" : v >= 55 ? "#FAEEDA" : "#FCEBEB";
                    const tc = v >= 75 ? "#3B6D11" : v >= 55 ? "#854F0B" : "#A32D2D";
                    return (
                      <td key={i}>
                        <span style={{ background: col, color: tc, fontSize: 11, padding: "2px 7px", borderRadius: 8, fontWeight: 500 }}>{v}%</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="form-row">
      <label className="form-lbl">{label} — <span>{value.toFixed(2)}</span></label>
      <input type="range" min={0} max={1} step={0.01} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} style={{ width: "100%" }} />
    </div>
  );
}
