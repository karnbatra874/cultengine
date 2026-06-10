import { ASSET_FOLDERS, RECENT_FILES } from "@/lib/cultengine-data";

export function AssetsPage() {
  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 500 }}>Shared assets</div>
        <button className="btn btn-p"><i className="ti ti-upload" style={{ fontSize: 14 }} />Upload file</button>
      </div>
      <div className="grid3">
        {ASSET_FOLDERS.map((f) => (
          <div className="club-card" key={f.name}>
            <div className="club-icon" style={{ background: f.ic }}>
              <i className={`ti ${f.icon}`} style={{ color: f.tc, fontSize: 18 }} />
            </div>
            <div className="club-name">{f.name}</div>
            <div className="club-meta">{f.files} files</div>
          </div>
        ))}
      </div>
      <div className="card" style={{ marginTop: 0 }}>
        <div className="card-title">Recent files</div>
        {RECENT_FILES.map((f) => (
          <div className="vault-item" key={f.name}>
            <div className="file-icon" style={{ background: f.ic }}>
              <i className={`ti ${f.icon}`} style={{ color: f.tc, fontSize: 16 }} />
            </div>
            <div className="info">
              <div className="iname">{f.name}</div>
              <div className="imeta">{f.size} · {f.date}</div>
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
