import { CLUBS, ACTIVITY_FEED, FUNNEL, UPCOMING_EVENTS } from "@/lib/cultengine-data";

export function DashboardPage() {
  const top = [...CLUBS].sort((a, b) => b.health - a.health).slice(0, 6);

  return (
    <div className="page">
      <div className="metrics">
        <Metric val="847" lbl="Total members" badge={<span className="mbadge mu"><i className="ti ti-arrow-up" style={{ fontSize: 10 }} /> +12%</span>} />
        <Metric val="13" lbl="Active clubs" badge={<span className="mbadge mu">All active</span>} />
        <Metric val="214" lbl="Auditions Y26" badge={<span className="mbadge mu">67% Y1</span>} />
        <Metric val="7th" lbl="Current rank" badge={<span className="mbadge md">Target: top 3</span>} />
        <Metric val="78%" lbl="Retention" badge={<span className="mbadge mu">Target: 75%</span>} />
        <Metric val="42" lbl="Contingent size" badge={<span className="mbadge mw">Finalizing</span>} />
      </div>

      <div className="grid2">
        <div className="card">
          <div className="card-title">Club health overview</div>
          {top.map((c) => (
            <div className="bar-row" key={c.id}>
              <div className="bar-label">{c.name.split(" ")[0]}</div>
              <div className="bar-bg"><div className="bar-fill" style={{ width: `${c.health}%`, background: c.tc }} /></div>
              <div className="bar-val">{c.health}</div>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title">Recent activity</div>
          {ACTIVITY_FEED.map((f, i) => (
            <div className="timeline-item" key={i}>
              <div className="tl-dot" style={{ background: f.dot }} />
              <div className="tl-content">
                <div className="tl-title">{f.text}</div>
                <div className="tl-meta">{f.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid2">
        <div className="card">
          <div className="card-title">A2P funnel — 2026</div>
          {FUNNEL.map((d) => (
            <div className="bar-row" key={d.l}>
              <div className="bar-label">{d.l}</div>
              <div className="bar-bg"><div className="bar-fill" style={{ width: `${d.w}%`, background: d.c }} /></div>
              <div className="bar-val">{d.n}</div>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title">Upcoming events</div>
          {UPCOMING_EVENTS.map((e) => {
            const [m, d] = e.date.split(" ");
            return (
              <div className="row" key={e.name}>
                <div style={{ width: 36, height: 36, borderRadius: 6, background: e.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: e.tc, textAlign: "center", lineHeight: 1.2, flexShrink: 0 }}>
                  {m}<br />{d || ""}
                </div>
                <div className="info">
                  <div className="iname">{e.name}</div>
                  <div className="imeta">{e.club}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Metric({ val, lbl, badge }: { val: string; lbl: string; badge: React.ReactNode }) {
  return (
    <div className="metric">
      <div className="metric-val">{val}</div>
      <div className="metric-lbl">{lbl}</div>
      {badge}
    </div>
  );
}
