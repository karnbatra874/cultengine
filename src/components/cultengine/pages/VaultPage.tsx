import { useState } from "react";
import { VAULT_ARCHIVE, VAULT_LIBRARY, VAULT_RECENT } from "@/lib/cultengine-data";

const FILTERS = ["All", "Scripts", "Scores", "Strategy", "Post-mortems", "Design"];

export function VaultPage() {
  const [active, setActive] = useState("All");
  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>Knowledge vault</div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 2 }}>
            Institutional IP — scripts, scores, strategies, post-mortems
          </div>
        </div>
        <button className="btn btn-p"><i className="ti ti-upload" style={{ fontSize: 14 }} />Upload asset</button>
      </div>
      <div className="sbar">
        {FILTERS.map((f) => (
          <button key={f} className={`fb ${active === f ? "on" : ""}`} onClick={() => setActive(f)}>{f}</button>
        ))}
      </div>
      <div className="grid2">
        <div className="card">
          <div className="card-title">Inter IIT archives</div>
          {VAULT_ARCHIVE.map((v) => (
            <div className="vault-item" key={v.name}>
              <div className="file-icon" style={{ background: v.ic }}>
                <i className={`ti ${v.icon}`} style={{ color: v.tc, fontSize: 16 }} />
              </div>
              <div className="info">
                <div className="iname">{v.name}</div>
                <div className="imeta">{v.date}</div>
              </div>
              <span className="pill p-act" style={{ fontSize: 10 }}>{v.tag}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title">Club asset library</div>
          {VAULT_LIBRARY.map((l) => (
            <div className="vault-item" key={l.name}>
              <div className="file-icon" style={{ background: l.ic }}>
                <i className={`ti ${l.icon}`} style={{ color: l.tc, fontSize: 16 }} />
              </div>
              <div className="info">
                <div className="iname">{l.name}</div>
              </div>
              <button className="btn" style={{ fontSize: 11, padding: "3px 8px" }}>Open</button>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="card-title">Recent uploads</div>
        {VAULT_RECENT.map((r) => (
          <div className="vault-item" key={r.name}>
            <div className="file-icon" style={{ background: r.ic }}>
              <i className={`ti ${r.icon}`} style={{ color: r.tc, fontSize: 16 }} />
            </div>
            <div className="info">
              <div className="iname">{r.name}</div>
              <div className="imeta">Uploaded by {r.by} · {r.time}</div>
            </div>
            <button className="btn" style={{ fontSize: 11, padding: "3px 8px" }}>
              <i className="ti ti-download" style={{ fontSize: 12 }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
