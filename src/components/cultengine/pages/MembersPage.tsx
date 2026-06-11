import { useMemo, useState } from "react";
import { MEMBERS, MEMBER_FILTERS, MEMBER_FILTER_MAP, PILL_MAP, CLUBS, BRANCHES } from "@/lib/cultengine-data";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";

type Member = (typeof MEMBERS)[number];

const PALETTE = [
  { av: "#EEEDFE", tc: "#534AB7" },
  { av: "#E1F5EE", tc: "#0F6E56" },
  { av: "#FAECE7", tc: "#993C1D" },
  { av: "#E6F1FB", tc: "#185FA5" },
  { av: "#FBEAF0", tc: "#993556" },
  { av: "#FAEEDA", tc: "#854F0B" },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "?";
}

export function MembersPage() {
  const [filter, setFilter] = useState("All");
  const [members, setMembers] = useState<Member[]>(MEMBERS);
  const [open, setOpen] = useState(false);

  const targetClub = MEMBER_FILTER_MAP[filter];
  const rows = useMemo(
    () => (targetClub ? members.filter((m) => m.club === targetClub) : members),
    [members, targetClub]
  );

  const [form, setForm] = useState({
    name: "", roll: "", branch: BRANCHES[0], club: CLUBS[0].name,
    year: "1st", css: "", status: "new" as Member["status"],
  });

  const reset = () => setForm({
    name: "", roll: "", branch: BRANCHES[0], club: CLUBS[0].name,
    year: "1st", css: "", status: "new",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.roll.trim()) return;
    const p = PALETTE[members.length % PALETTE.length];
    const newMember: Member = {
      init: initials(form.name),
      av: p.av, tc: p.tc,
      name: form.name.trim(),
      roll: form.roll.trim(),
      branch: form.branch,
      club: form.club,
      year: form.year,
      css: Number(form.css) || 0,
      status: form.status,
    };
    setMembers((prev) => [newMember, ...prev]);
    reset();
    setOpen(false);
  };

  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>Members registry</div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 2 }}>
            {members.length} students across 13 clubs · IIT Roorkee
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => {
            const header = ["Name", "Roll no.", "Branch", "Club", "Year", "CSS", "Status"];
            const csv = [header.join(","), ...rows.map(m => [
              `"${m.name}"`, m.roll, `"${m.branch}"`, `"${m.club}"`, m.year, m.css, m.status
            ].join(","))].join("\n");
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "members.csv";
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
          }}><i className="ti ti-download" style={{ fontSize: 14 }} />Export</button>
          <button className="btn btn-p" onClick={() => setOpen(true)}>
            <i className="ti ti-plus" style={{ fontSize: 14 }} />Add member
          </button>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle>Add member</DialogTitle>
            <DialogDescription>Register a new student into the cultural roster.</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit}>
            <div className="form-row">
              <label className="form-lbl">Full name</label>
              <input className="form-in" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Karan Batra" required />
            </div>
            <div className="form-row">
              <label className="form-lbl">Roll number</label>
              <input className="form-in" value={form.roll}
                onChange={(e) => setForm({ ...form, roll: e.target.value })}
                placeholder="e.g. 24116044" required />
            </div>
            <div className="form-row">
              <label className="form-lbl">Branch</label>
              <select className="form-in" value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}>
                {BRANCHES.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div className="form-row">
              <label className="form-lbl">Club</label>
              <select className="form-in" value={form.club}
                onChange={(e) => setForm({ ...form, club: e.target.value })}>
                {CLUBS.map((c) => <option key={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              <div className="form-row">
                <label className="form-lbl">Year</label>
                <select className="form-in" value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}>
                  <option>1st</option><option>2nd</option><option>3rd</option><option>4th</option>
                </select>
              </div>
              <div className="form-row">
                <label className="form-lbl">CSS</label>
                <input className="form-in" type="number" min={0} max={100} value={form.css}
                  onChange={(e) => setForm({ ...form, css: e.target.value })} placeholder="0" />
              </div>
              <div className="form-row">
                <label className="form-lbl">Status</label>
                <select className="form-in" value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value as Member["status"] })}>
                  <option value="new">new</option>
                  <option value="review">review</option>
                  <option value="selected">selected</option>
                  <option value="pending">pending</option>
                </select>
              </div>
            </div>
            <DialogFooter style={{ marginTop: 8 }}>
              <button type="button" className="btn" onClick={() => setOpen(false)}>Cancel</button>
              <button type="submit" className="btn btn-p">
                <i className="ti ti-plus" style={{ fontSize: 14 }} />Add member
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
