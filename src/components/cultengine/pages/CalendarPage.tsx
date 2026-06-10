import { CAL_EVENTS, CAL_DEADLINES } from "@/lib/cultengine-data";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function CalendarPage() {
  return (
    <div className="page">
      <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 14 }}>Cultural calendar — 2026</div>
      <div className="card">
        <div className="card-title">June 2026</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 8 }}>
          {DAYS.map((d) => (
            <div key={d} style={{ textAlign: "center", fontSize: 11, color: "var(--color-text-secondary)", padding: "4px 0" }}>{d}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
          {Array.from({ length: 30 }, (_, idx) => {
            const i = idx + 1;
            const isToday = i === 9;
            const hasEv = CAL_EVENTS[i];
            return (
              <div key={i} style={{
                padding: "5px 4px",
                borderRadius: 4,
                border: `0.5px solid ${hasEv ? "#AFA9EC" : "var(--color-border-tertiary)"}`,
                background: isToday ? "#534AB7" : hasEv ? "#EEEDFE" : "var(--color-background-primary)",
              }}>
                <div style={{ fontSize: 11, fontWeight: isToday ? 500 : 400, color: isToday ? "#EEEDFE" : hasEv ? "#534AB7" : "var(--color-text-secondary)" }}>{i}</div>
                {hasEv && <div style={{ fontSize: 9, color: "#534AB7", marginTop: 2, lineHeight: 1.2 }}>{hasEv}</div>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="card">
        <div className="card-title">Upcoming deadlines</div>
        {CAL_DEADLINES.map((e) => (
          <div className="row" key={e.name}>
            <div style={{ width: 40, fontSize: 11, fontWeight: 500, color: e.tc, background: e.color, borderRadius: 4, padding: "3px 4px", textAlign: "center", flexShrink: 0 }}>
              {e.date.split(" ")[1]}
            </div>
            <div className="info">
              <div className="iname">{e.name}</div>
              <div className="imeta">{e.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
