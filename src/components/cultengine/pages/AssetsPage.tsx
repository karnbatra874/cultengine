import { useRef, useState } from "react";
import { ASSET_FOLDERS, RECENT_FILES, CLUBS } from "@/lib/cultengine-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type RecentFile = {
  icon: string;
  ic: string;
  tc: string;
  name: string;
  size: string;
  date: string;
};

const EXT_ICON: Record<string, { icon: string; ic: string; tc: string }> = {
  pdf: { icon: "ti-file-text", ic: "#FAECE7", tc: "#993C1D" },
  xlsx: { icon: "ti-file-spreadsheet", ic: "#EAF3DE", tc: "#3B6D11" },
  xls: { icon: "ti-file-spreadsheet", ic: "#EAF3DE", tc: "#3B6D11" },
  csv: { icon: "ti-file-spreadsheet", ic: "#EAF3DE", tc: "#3B6D11" },
  zip: { icon: "ti-file-zip", ic: "#FAEEDA", tc: "#854F0B" },
  rar: { icon: "ti-file-zip", ic: "#FAEEDA", tc: "#854F0B" },
  doc: { icon: "ti-file-description", ic: "#E6F1FB", tc: "#185FA5" },
  docx: { icon: "ti-file-description", ic: "#E6F1FB", tc: "#185FA5" },
  ppt: { icon: "ti-file-description", ic: "#FBEAF0", tc: "#993556" },
  pptx: { icon: "ti-file-description", ic: "#FBEAF0", tc: "#993556" },
  jpg: { icon: "ti-photo", ic: "#EEEDFE", tc: "#534AB7" },
  jpeg: { icon: "ti-photo", ic: "#EEEDFE", tc: "#534AB7" },
  png: { icon: "ti-photo", ic: "#EEEDFE", tc: "#534AB7" },
};

function fmtSize(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`;
  return `${(b / 1024 / 1024).toFixed(1)} MB`;
}

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function AssetsPage() {
  const [files, setFiles] = useState<RecentFile[]>(RECENT_FILES);
  const [open, setOpen] = useState(false);
  const [club, setClub] = useState(CLUBS[0].name);
  const [heading, setHeading] = useState("");
  const [picked, setPicked] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!picked || !heading.trim()) return;
    const ext = (picked.name.split(".").pop() || "").toLowerCase();
    const meta = EXT_ICON[ext] || { icon: "ti-file", ic: "#F1EFE8", tc: "#5F5E5A" };
    const displayName = heading.includes(".") ? heading : `${heading}.${ext}`;
    setFiles((prev) => [
      {
        icon: meta.icon,
        ic: meta.ic,
        tc: meta.tc,
        name: displayName,
        size: fmtSize(picked.size),
        date: fmtDate(new Date()),
      },
      ...prev,
    ]);
    setOpen(false);
    setHeading("");
    setPicked(null);
    setClub(CLUBS[0].name);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 500 }}>Shared assets</div>
        <button className="btn btn-p" onClick={() => setOpen(true)}>
          <i className="ti ti-upload" style={{ fontSize: 14 }} />Upload file
        </button>
      </div>
      <div className="grid3">
        {ASSET_FOLDERS.map((f) => (
          <div className="club-card" key={f.name}>
            <div className="club-icon" style={{ background: f.ic }}>
              <i className={`ti ${f.icon}`} style={{ color: f.tc, fontSize: 18 }} />
            </div>
            <div className="club-name">{f.name}</div>
            <div className="club-meta">{f.files} files</div>
          </div>
        ))}
      </div>
      <div className="card" style={{ marginTop: 0 }}>
        <div className="card-title">Recent files</div>
        {files.map((f, i) => (
          <div className="vault-item" key={`${f.name}-${i}`}>
            <div className="file-icon" style={{ background: f.ic }}>
              <i className={`ti ${f.icon}`} style={{ color: f.tc, fontSize: 16 }} />
            </div>
            <div className="info">
              <div className="iname">{f.name}</div>
              <div className="imeta">{f.size} · {f.date}</div>
            </div>
            <button className="btn" style={{ fontSize: 11, padding: "3px 8px" }}>
              <i className="ti ti-download" style={{ fontSize: 12 }} />
            </button>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle>Upload file</DialogTitle>
          </DialogHeader>
          <form onSubmit={submit} className="form-in">
            <div className="form-row">
              <label className="form-lbl">File</label>
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.xlsx,.xls,.csv,.zip,.rar,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                onChange={(e) => setPicked(e.target.files?.[0] ?? null)}
                required
              />
            </div>
            <div className="form-row">
              <label className="form-lbl">Club</label>
              <select value={club} onChange={(e) => setClub(e.target.value)}>
                {CLUBS.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label className="form-lbl">Heading</label>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="e.g. Choreo camp schedule"
                required
              />
            </div>
            <DialogFooter>
              <button type="button" className="btn" onClick={() => setOpen(false)}>Cancel</button>
              <button type="submit" className="btn btn-p">Upload</button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
