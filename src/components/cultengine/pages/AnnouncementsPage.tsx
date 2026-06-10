import { ANN } from "@/lib/cultengine-data";

export function AnnouncementsPage() {
  return (
    <div className="page">
      <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 14 }}>Announcements</div>
      {ANN.map((a) => {
        const label = a.tag === "p-act" ? "new" : a.tag === "p-sel" ? "done" : "pending";
        return (
          <div className="card" key={a.title}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{a.title}</div>
                  <span className={`pill ${a.tag}`} style={{ fontSize: 10 }}>{label}</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{a.body}</div>
                <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 6 }}>{a.time}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
