export function Topbar({ title }: { title: string }) {
  return (
    <div className="topbar">
      <h1 className="topbar-title">{title}</h1>
      <div className="topbar-search">
        <i className="ti ti-search" style={{ fontSize: 14, color: "var(--color-text-tertiary)" }} aria-hidden="true" />
        <label htmlFor="topbar-search-input" className="sr-only">Search members and assets</label>
        <input id="topbar-search-input" type="text" placeholder="Search members, assets..." aria-label="Search members and assets" />
      </div>
      <div className="av-sm" style={{ background: "#eeedfe", color: "#534ab7" }} aria-hidden="true">SG</div>
      <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Sec-Gen</div>
    </div>
  );
}
