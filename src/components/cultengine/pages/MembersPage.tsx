import { useState } from "react";
import { MEMBERS, MEMBER_FILTERS, MEMBER_FILTER_MAP, PILL_MAP } from "@/lib/cultengine-data";

export function MembersPage() {
  const [filter, setFilter] = useState("All");
  const targetClub = MEMBER_FILTER_MAP[filter];
  const rows = targetClub ? MEMBERS.filter((m) => m.club === targetClub) : MEMBERS;

  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>Members registry</div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 2 }}>
            847 students across 13 clubs · IIT Roorkee
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn"><i className="ti ti-download" style={{ fontSize: 14 }} />Export</button>
          <button className="btn btn-p"><i className="ti ti-plus" style={{ fontSize: 14 }} />Add member</button>
        </div>
      </div>
      <div className="sbar">
        {MEMBER_FILTERS.map((f) => (
          <button key={f} className={`fb ${f === filter ? "on" : ""}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="card" style={{ padding: 0 }}>
        <table className="tbl" style={{ tableLayout: "fixed", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: 36, paddingLeft: 14 }}></th>
              <th style={{ width: 140 }}>Name</th>
              <th style={{ width: 80 }}>Roll no.</th>
              <th style={{ width: 120 }}>Branch</th>
              <th style={{ width: 80 }}>Club</th>
              <th style={{ width: 50 }}>Year</th>
              <th style={{ width: 60 }}>CSS</th>
              <th style={{ width: 80 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => (
              <tr key={m.roll}>
                <td style={{ paddingLeft: 14 }}>
                  <div className="av" style={{ background: m.av, color: m.tc, width: 26, height: 26, fontSize: 10 }}>{m.init}</div>
                </td>
                <td style={{ fontWeight: 500 }}>{m.name}</td>
                <td style={{ color: "var(--color-text-secondary)" }}>{m.roll}</td>
                <td style={{ color: "var(--color-text-secondary)", fontSize: 11 }}>{m.branch}</td>
                <td style={{ fontSize: 11 }}>{m.club}</td>
                <td style={{ color: "var(--color-text-secondary)" }}>{m.year}</td>
                <td>
                  {m.css > 0 ? (
                    <>
                      <div className="bar-bg" style={{ marginTop: 3 }}>
                        <div className="bar-fill" style={{ width: `${m.css}%`, background: "#534AB7" }} />
                      </div>
                      <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{m.css}</span>
                    </>
                  ) : "-"}
                </td>
                <td><span className={`pill ${PILL_MAP[m.status]}`}>{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
