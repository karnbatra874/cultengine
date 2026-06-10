export function Topbar({ title }: { title: string }) {
  return (
    <div className="topbar">
      <div className="topbar-title">{title}</div>
      <div className="topbar-search">
        <i className="ti ti-search" style={{ fontSize: 14, color: "var(--color-text-tertiary)" }} aria-hidden="true" />
        <input type="text" placeholder="Search members, assets..." />
      </div>
      <div className="av-sm" style={{ background: "#eeedfe", color: "#534ab7" }}>SG</div>
      <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Sec-Gen</div>
    </div>
  );
}
