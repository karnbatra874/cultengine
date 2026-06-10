import { useState } from "react";
import { TASKS, CLUBS } from "@/lib/cultengine-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

type TaskItem = { title: string; club: string; due: string };
type TaskCol = { col: string; color: string; tc: string; items: TaskItem[] };

const ALL_CLUBS = [
  "All clubs",
  "Cultural Council",
  ...CLUBS.map((c) => c.name),
];

const COL_DEFS: Record<string, { color: string; tc: string }> = {
  "To do": { color: "#F1EFE8", tc: "#5F5E5A" },
  "In progress": { color: "#E6F1FB", tc: "#185FA5" },
  Review: { color: "#FAEEDA", tc: "#854F0B" },
  Done: { color: "#EAF3DE", tc: "#3B6D11" },
  Important: { color: "#FCEBEB", tc: "#A32D2D" },
};

const TASK_TYPES = Object.keys(COL_DEFS);

export function TasksPage() {
  const [cols, setCols] = useState<TaskCol[]>(() => {
    const base = TASKS.map((t) => ({ ...t, items: [...t.items] }));
    if (!base.find((c) => c.col === "Important")) {
      base.push({
        col: "Important",
        color: COL_DEFS["Important"].color,
        tc: COL_DEFS["Important"].tc,
        items: [],
      });
    }
    return base;
  });

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    type: "To do",
    date: "",
    club: ALL_CLUBS[0],
    heading: "",
  });

  const reset = () =>
    setForm({ type: "To do", date: "", club: ALL_CLUBS[0], heading: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.heading.trim() || !form.date.trim()) return;

    const newItem: TaskItem = {
      title: form.heading.trim(),
      club: form.club,
      due: form.date.trim(),
    };

    setCols((prev) =>
      prev.map((c) =>
        c.col === form.type ? { ...c, items: [...c.items, newItem] } : c
      )
    );
    reset();
    setOpen(false);
  };

  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <div style={{ fontSize: 15, fontWeight: 500 }}>Task board</div>
        <button className="btn btn-p" onClick={() => setOpen(true)}>
          <i className="ti ti-plus" style={{ fontSize: 14 }} />
          New task
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 10,
        }}
      >
        {cols.map((col) => (
          <div key={col.col}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                marginBottom: 8,
                padding: "4px 8px",
                background: col.color,
                borderRadius: 6,
                color: col.tc,
              }}
            >
              {col.col}{" "}
              <span style={{ marginLeft: 4, opacity: 0.7 }}>
                {col.items.length}
              </span>
            </div>
            {col.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--color-background-primary)",
                  border: "0.5px solid var(--color-border-tertiary)",
                  borderRadius: "var(--border-radius-md)",
                  padding: "9px 10px",
                  marginBottom: 6,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.club}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "var(--color-text-tertiary)",
                    marginTop: 3,
                  }}
                >
                  <i
                    className="ti ti-calendar"
                    style={{ fontSize: 10 }}
                  />{" "}
                  {item.due}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle>New task</DialogTitle>
            <DialogDescription>
              Add a new task to the board.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submit}>
            <div className="form-row">
              <label className="form-lbl">Task type</label>
              <select
                className="form-in"
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
              >
                {TASK_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label className="form-lbl">Due date</label>
              <input
                className="form-in"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                placeholder="e.g. Jun 15"
                required
              />
            </div>
            <div className="form-row">
              <label className="form-lbl">Club</label>
              <select
                className="form-in"
                value={form.club}
                onChange={(e) =>
                  setForm({ ...form, club: e.target.value })
                }
              >
                {ALL_CLUBS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label className="form-lbl">Heading</label>
              <input
                className="form-in"
                value={form.heading}
                onChange={(e) =>
                  setForm({ ...form, heading: e.target.value })
                }
                placeholder="e.g. Rehearsal schedule"
                required
              />
            </div>
            <DialogFooter style={{ marginTop: 8 }}>
              <button
                type="button"
                className="btn"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-p">
                <i className="ti ti-plus" style={{ fontSize: 14 }} />
                Add task
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
