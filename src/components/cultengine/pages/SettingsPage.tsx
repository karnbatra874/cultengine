import { NOTIF_ITEMS } from "@/lib/cultengine-data";

export function SettingsPage() {
  return (
    <div className="page">
      <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 14 }}>Settings</div>
      <div className="grid2">
        <div className="card">
          <div className="card-title">Platform preferences</div>
          <div className="form-row">
            <label className="form-lbl">Institution name</label>
            <input className="form-in" defaultValue="IIT Roorkee" />
          </div>
          <div className="form-row">
            <label className="form-lbl">Academic year</label>
            <select className="form-in">
              <option>2025–2026</option>
              <option>2026–2027</option>
            </select>
          </div>
          <div className="form-row">
            <label className="form-lbl">CSS formula weights</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              <input className="form-in" defaultValue="P: 0.40" style={{ textAlign: "center" }} />
              <input className="form-in" defaultValue="E: 0.35" style={{ textAlign: "center" }} />
              <input className="form-in" defaultValue="S: 0.25" style={{ textAlign: "center" }} />
            </div>
          </div>
          <button className="btn btn-p" style={{ width: "100%" }}>Save settings</button>
        </div>
        <div className="card">
          <div className="card-title">Notifications</div>
          {NOTIF_ITEMS.map((item) => (
            <div className="row" key={item}>
              <div className="info" style={{ fontSize: 12 }}>{item}</div>
              <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 12, color: "var(--color-text-secondary)" }}>
                <input type="checkbox" defaultChecked style={{ accentColor: "#534AB7" }} /> On
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
