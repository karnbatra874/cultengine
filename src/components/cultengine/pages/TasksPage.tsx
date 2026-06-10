import { TASKS } from "@/lib/cultengine-data";

export function TasksPage() {
  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 500 }}>Task board</div>
        <button className="btn btn-p"><i className="ti ti-plus" style={{ fontSize: 14 }} />New task</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
        {TASKS.map((col) => (
          <div key={col.col}>
            <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 8, padding: "4px 8px", background: col.color, borderRadius: 6, color: col.tc }}>
              {col.col} <span style={{ marginLeft: 4, opacity: 0.7 }}>{col.items.length}</span>
            </div>
            {col.items.map((item, i) => (
              <div key={i} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-md)", padding: "9px 10px", marginBottom: 6, cursor: "pointer" }}>
                <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{item.club}</div>
                <div style={{ fontSize: 10, color: "var(--color-text-tertiary)", marginTop: 3 }}>
                  <i className="ti ti-calendar" style={{ fontSize: 10 }} /> {item.due}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
