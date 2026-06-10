import { useRef, useState } from "react";
import { CLUBS, BRANCHES, REVIEW_QUEUE } from "@/lib/cultengine-data";

export function AuditionsPage() {
  const [dragOver, setDragOver] = useState(false);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

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
    setTimeout(() => setUploaded(null), 3000);
  };

  const sortedClubs = [...CLUBS].sort((a, b) => b.members - a.members).slice(0, 8);

  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 500 }}>Audition portal</div>
        <span className="pill p-act">Orientation week open</span>
      </div>
      <div className="metrics">
        <div className="metric"><div className="metric-val">214</div><div className="metric-lbl">Submissions</div></div>
        <div className="metric"><div className="metric-val">41</div><div className="metric-lbl">Pending review</div></div>
        <div className="metric"><div className="metric-val">28</div><div className="metric-lbl">Shortlisted</div></div>
        <div className="metric"><div className="metric-val">67%</div><div className="metric-lbl">Y1 capture</div></div>
      </div>
      <div className="grid2">
        <div className="card">
          <div className="card-title">Submit audition</div>
          <div className="form-row">
            <label className="form-lbl">Select club / section</label>
            <select className="form-in">
              {CLUBS.map((c) => <option key={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="form-row">
            <label className="form-lbl">Full name</label>
            <input className="form-in" type="text" placeholder="e.g. Karan Batra" />
          </div>
          <div className="form-row">
            <label className="form-lbl">Branch</label>
            <select className="form-in">
              {BRANCHES.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="form-row">
            <label className="form-lbl">Year</label>
            <select className="form-in">
              <option>1st year</option><option>2nd year</option><option>3rd year</option><option>4th year</option>
            </select>
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
                <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 4 }}>Ready to submit</div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 20, color: "var(--color-text-tertiary)", marginBottom: 6 }}>
                  <i className="ti ti-cloud-upload" />
                </div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Upload 60-sec clip · MP4, MP3, PDF portfolio</div>
                <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 3 }}>Blind reviewed — name hidden from evaluators</div>
              </>
            )}
          </div>
          <button className="btn btn-p" style={{ width: "100%" }}>
            <i className="ti ti-send" style={{ fontSize: 14 }} />Submit audition
          </button>
        </div>
        <div className="card">
          <div className="card-title">Review queue — blind mode</div>
          {REVIEW_QUEUE.map((i) => (
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
    </div>
  );
}
