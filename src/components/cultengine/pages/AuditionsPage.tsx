import { useRef, useState } from "react";
import { CLUBS, BRANCHES, REVIEW_QUEUE } from "@/lib/cultengine-data";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";

type Audition = {
  id: string;
  club: string;
  dur: string;
  av: string;
  tc: string;
};

const PALETTE = [
  { av: "#EEEDFE", tc: "#534AB7" },
  { av: "#E1F5EE", tc: "#0F6E56" },
  { av: "#E6F1FB", tc: "#185FA5" },
  { av: "#FBEAF0", tc: "#993556" },
  { av: "#FAEEDA", tc: "#854F0B" },
];

export function AuditionsPage() {
  const [dragOver, setDragOver] = useState(false);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [queue, setQueue] = useState<Audition[]>(REVIEW_QUEUE);

  const [form, setForm] = useState({
    name: "", club: CLUBS[0].name, branch: BRANCHES[0], year: "1st year", duration: "60",
  });

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const validTypes = ["video/mp4", "audio/mpeg", "audio/mp3", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      alert("Invalid file type. Please upload MP4, MP3, or PDF.");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      alert("File too large. Maximum size is 50MB.");
      return;
    }
    setUploaded(file.name);
  };

  const reset = () => {
    setForm({ name: "", club: CLUBS[0].name, branch: BRANCHES[0], year: "1st year", duration: "60" });
    setUploaded(null);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const p = PALETTE[queue.length % PALETTE.length];
    const nextNum = String(140 + queue.length).padStart(4, "0");
    const audition: Audition = {
      id: `#AUD-2026-${nextNum}`,
      club: form.club,
      dur: `${form.duration}s`,
      av: p.av,
      tc: p.tc,
    };
    setQueue((prev) => [audition, ...prev]);
    reset();
    setOpen(false);
  };

  const sortedClubs = [...CLUBS].sort((a, b) => b.members - a.members).slice(0, 8);

  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 500 }}>Audition portal</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="pill p-act">Orientation week open</span>
          <button className="btn btn-p" onClick={() => setOpen(true)}>
            <i className="ti ti-send" style={{ fontSize: 14 }} />Submit audition
          </button>
        </div>
      </div>
      <div className="metrics">
        <div className="metric"><div className="metric-val">{214 + (queue.length - REVIEW_QUEUE.length)}</div><div className="metric-lbl">Submissions</div></div>
        <div className="metric"><div className="metric-val">{41 + (queue.length - REVIEW_QUEUE.length)}</div><div className="metric-lbl">Pending review</div></div>
        <div className="metric"><div className="metric-val">28</div><div className="metric-lbl">Shortlisted</div></div>
        <div className="metric"><div className="metric-val">67%</div><div className="metric-lbl">Y1 capture</div></div>
      </div>
      <div className="card">
        <div className="card-title">Review queue — blind mode</div>
        {queue.map((i) => (
          <div className="row" key={i.id}>
            <div className="av" style={{ background: i.av, color: i.tc, fontSize: 10 }}>?</div>
            <div className="info">
              <div className="iname">{i.id}</div>
              <div className="imeta">{i.club} · {i.dur}</div>
            </div>
            <button className="btn" style={{ fontSize: 11, padding: "4px 8px" }}>Review</button>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-title">Submissions by club</div>
        {sortedClubs.map((c) => {
          const n = Math.round(c.members * 0.55);
          return (
            <div className="bar-row" key={c.id}>
              <div className="bar-label">{c.name.length > 12 ? c.name.slice(0, 11) + "…" : c.name}</div>
              <div className="bar-bg"><div className="bar-fill" style={{ width: `${Math.round((n / 82) * 100)}%`, background: c.tc }} /></div>
              <div className="bar-val">{n}</div>
            </div>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle>Submit audition</DialogTitle>
            <DialogDescription>Blind reviewed — your name is hidden from evaluators.</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit}>
            <div className="form-row">
              <label className="form-lbl">Full name</label>
              <input className="form-in" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Karan Batra" required />
            </div>
            <div className="form-row">
              <label className="form-lbl">Club / section</label>
              <select className="form-in" value={form.club}
                onChange={(e) => setForm({ ...form, club: e.target.value })}>
                {CLUBS.map((c) => <option key={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="form-row">
              <label className="form-lbl">Branch</label>
              <select className="form-in" value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}>
                {BRANCHES.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div className="form-row">
                <label className="form-lbl">Year</label>
                <select className="form-in" value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}>
                  <option>1st year</option><option>2nd year</option><option>3rd year</option><option>4th year</option>
                </select>
              </div>
              <div className="form-row">
                <label className="form-lbl">Duration (s)</label>
                <input className="form-in" type="number" min={10} max={120}
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })} />
              </div>
            </div>
            <div
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
              style={{
                border: "1.5px dashed var(--color-border-secondary)",
                borderRadius: "var(--border-radius-lg)",
                padding: 18, textAlign: "center", marginBottom: 12, cursor: "pointer",
                transition: "all 0.2s ease",
                borderColor: uploaded ? "#3B6D11" : dragOver ? "#534AB7" : "var(--color-border-secondary)",
                background: uploaded ? "#EAF3DE" : dragOver ? "#EEEDFE" : "transparent",
              }}
            >
              <input ref={fileRef} type="file" style={{ display: "none" }} accept=".mp4,.mp3,.pdf" onChange={(e) => handleFiles(e.target.files)} />
              {uploaded ? (
                <>
                  <div style={{ fontSize: 18, color: "#3B6D11", marginBottom: 6 }}>
                    <i className="ti ti-circle-check" />
                  </div>
                  <div style={{ fontSize: 13, color: "#3B6D11", fontWeight: 500 }}>File uploaded: {uploaded}</div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: 20, color: "var(--color-text-tertiary)", marginBottom: 6 }}>
                    <i className="ti ti-cloud-upload" />
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Upload 60-sec clip · MP4, MP3, PDF portfolio</div>
                </>
              )}
            </div>
            <DialogFooter>
              <button type="button" className="btn" onClick={() => setOpen(false)}>Cancel</button>
              <button type="submit" className="btn btn-p">
                <i className="ti ti-send" style={{ fontSize: 14 }} />Submit audition
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
