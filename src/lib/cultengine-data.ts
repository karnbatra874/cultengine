export const CLUBS = [
  { id: "audio", name: "Audio Section", cat: "performing", icon: "ti-microphone", color: "#EEEDFE", tc: "#534AB7", members: 68, health: 82 },
  { id: "choreo", name: "Choreography", cat: "performing", icon: "ti-user-star", color: "#E1F5EE", tc: "#0F6E56", members: 74, health: 88 },
  { id: "cinesec", name: "CineSec", cat: "visual", icon: "ti-video", color: "#E6F1FB", tc: "#185FA5", members: 52, health: 75 },
  { id: "debsoc", name: "Debating Society", cat: "literary", icon: "ti-message-2", color: "#FAEEDA", tc: "#854F0B", members: 61, health: 79 },
  { id: "drama", name: "Dramatics Section", cat: "performing", icon: "ti-masks-theater", color: "#FAECE7", tc: "#993C1D", members: 55, health: 71 },
  { id: "finearts", name: "Fine Arts Section", cat: "visual", icon: "ti-palette", color: "#FBEAF0", tc: "#993556", members: 48, health: 85 },
  { id: "flora", name: "Gardening / Flora Club", cat: "technical", icon: "ti-plant-2", color: "#EAF3DE", tc: "#3B6D11", members: 32, health: 62 },
  { id: "light", name: "Light Section", cat: "technical", icon: "ti-bulb", color: "#FAEEDA", tc: "#854F0B", members: 38, health: 68 },
  { id: "literary", name: "Literary Section", cat: "literary", icon: "ti-book", color: "#EEEDFE", tc: "#534AB7", members: 57, health: 77 },
  { id: "model", name: "Model Section", cat: "technical", icon: "ti-3d-cube-sphere", color: "#E1F5EE", tc: "#0F6E56", members: 44, health: 72 },
  { id: "music", name: "Music Section", cat: "performing", icon: "ti-music", color: "#EEEDFE", tc: "#534AB7", members: 82, health: 91 },
  { id: "photo", name: "Photography Club", cat: "visual", icon: "ti-camera", color: "#E6F1FB", tc: "#185FA5", members: 63, health: 83 },
  { id: "philately", name: "Philately Club", cat: "technical", icon: "ti-mail-opened", color: "#FAEEDA", tc: "#854F0B", members: 23, health: 55 },
];

export const BRANCHES = [
  "Architecture & Planning","Chemical Engineering","Civil Engineering","Computer Science & Engg.",
  "Electrical Engineering","Electronics & Comm. Engg.","Mechanical Engineering","Metallurgical & Materials Engg.",
  "Applied Chemistry","Applied Physics","Mathematics","Earth Sciences","Biosciences & Bioengineering",
  "Paper Technology","Polymer & Process Engg.","Earthquake Engineering","Hydrology","Hydro & Renewable Energy",
  "Water Resources Development","Humanities & Social Sciences","Management Studies",
];

export const MEMBERS = [
  { init: "KB", av: "#EEEDFE", tc: "#534AB7", name: "Karan Batra", roll: "23116044", branch: "Civil Engineering", club: "Music Section", year: "2nd", css: 82, status: "selected" },
  { init: "PM", av: "#E1F5EE", tc: "#0F6E56", name: "Priya Mehra", roll: "24105022", branch: "Computer Science & Engg.", club: "Choreography", year: "1st", css: 67, status: "new" },
  { init: "RK", av: "#FAECE7", tc: "#993C1D", name: "Rohan Kapoor", roll: "23109031", branch: "Electrical Engineering", club: "Dramatics Section", year: "2nd", css: 74, status: "review" },
  { init: "SB", av: "#E6F1FB", tc: "#185FA5", name: "Sneha Banerjee", roll: "24108017", branch: "Architecture & Planning", club: "CineSec", year: "1st", css: 0, status: "pending" },
  { init: "AJ", av: "#EEEDFE", tc: "#534AB7", name: "Arjun Joshi", roll: "23110045", branch: "Mechanical Engineering", club: "Music Section", year: "2nd", css: 88, status: "selected" },
  { init: "DV", av: "#FBEAF0", tc: "#993556", name: "Divya Varma", roll: "24112008", branch: "Applied Chemistry", club: "Fine Arts Section", year: "1st", css: 0, status: "new" },
  { init: "KR", av: "#E1F5EE", tc: "#0F6E56", name: "Karan Rao", roll: "23114019", branch: "Civil Engineering", club: "Literary Section", year: "3rd", css: 79, status: "selected" },
  { init: "NP", av: "#FAEEDA", tc: "#854F0B", name: "Neha Pandey", roll: "24107034", branch: "Mathematics", club: "Debating Society", year: "1st", css: 71, status: "review" },
  { init: "VS", av: "#EAF3DE", tc: "#3B6D11", name: "Vikram Singh", roll: "22118012", branch: "Metallurgical & Materials Engg.", club: "Audio Section", year: "4th", css: 85, status: "selected" },
  { init: "MA", av: "#E6F1FB", tc: "#185FA5", name: "Meera Agarwal", roll: "24119008", branch: "Electronics & Comm. Engg.", club: "Photography Club", year: "1st", css: 63, status: "new" },
];

export const TASKS = [
  { col: "To do", color: "#F1EFE8", tc: "#5F5E5A", items: [
    { title: "Rehearsal schedule — drama", club: "Dramatics Section", due: "Jun 15" },
    { title: "Thomso 2026 entries", club: "Music Section", due: "Jun 20" },
    { title: "Flora exhibition plan", club: "Gardening / Flora", due: "Jun 25" },
  ]},
  { col: "In progress", color: "#E6F1FB", tc: "#185FA5", items: [
    { title: "Blind audition reviews", club: "All clubs", due: "Jun 12" },
    { title: "Knowledge vault migration", club: "Cultural Council", due: "Jun 18" },
  ]},
  { col: "Review", color: "#FAEEDA", tc: "#854F0B", items: [
    { title: "Contingent CSS scores", club: "Cultural Council", due: "Jun 10" },
    { title: "Choreo camp schedule", club: "Choreography", due: "Jun 14" },
  ]},
  { col: "Done", color: "#EAF3DE", tc: "#3B6D11", items: [
    { title: "Audition portal launched", club: "Cultural Council", due: "Done" },
    { title: "Y1 recruitment drive", club: "All clubs", due: "Done" },
  ]},
];

export const VAULT_ARCHIVE = [
  { icon: "ti-file-text", ic: "#EEEDFE", tc: "#534AB7", name: "Inter IIT 2025 — post-mortem report", tag: "Strategy", date: "Mar 2025" },
  { icon: "ti-file-music", ic: "#E1F5EE", tc: "#0F6E56", name: "Music arrangements — light vocal 2024", tag: "Score", date: "Feb 2024" },
  { icon: "ti-file-description", ic: "#FAECE7", tc: "#993C1D", name: "Dramatics script bank — 2022–2025", tag: "Script", date: "Apr 2025" },
  { icon: "ti-file-analytics", ic: "#E6F1FB", tc: "#185FA5", name: "Judging criteria analysis — 2023", tag: "Analysis", date: "Jan 2024" },
];

export const STAKEHOLDERS = [
  { name: "Students", role: "General body", color: "#EEEDFE", tc: "#534AB7", need: "Accessible pathways, transparent recruitment" },
  { name: "Sec-Sec", role: "Section secretaries", color: "#E1F5EE", tc: "#0F6E56", need: "Admin tools, asset management" },
  { name: "Council", role: "Cultural council", color: "#E6F1FB", tc: "#185FA5", need: "Unified dashboard, ROI visibility" },
  { name: "Contingent", role: "Competing members", color: "#FAEEDA", tc: "#854F0B", need: "Training, logistics, academic relief" },
  { name: "Alumni", role: "Alumni network", color: "#EAF3DE", tc: "#3B6D11", need: "Mentorship portal, remote feedback" },
];

export const ANN = [
  { title: "Audition portal now live for Y1 students", body: "All first-year students can submit 60-second clips through the portal until June 20.", time: "2 hours ago", tag: "p-act" },
  { title: "Knowledge vault migration complete", body: "3 years of Inter IIT assets have been moved from scattered drives into the vault.", time: "Yesterday", tag: "p-sel" },
  { title: "Academic buffer policy — DoSW approval pending", body: "Senate review scheduled for June 15. Attendance waivers framework submitted.", time: "2 days ago", tag: "p-rev" },
];

export const ACTIVITY_FEED = [
  { dot: "#534AB7", text: "Music Section uploaded 3 new arrangement scores", time: "1h ago" },
  { dot: "#0F6E56", text: "Choreo Section finalized camp schedule", time: "3h ago" },
  { dot: "#185FA5", text: "CineSec submitted 8 new audition reviews", time: "5h ago" },
  { dot: "#854F0B", text: "Light Section joined asset vault migration", time: "Yesterday" },
  { dot: "#993C1D", text: "Dramatics posted rehearsal timetable", time: "Yesterday" },
];

export const FUNNEL = [
  { l: "Discovery", n: 214, w: 100, c: "#534AB7" },
  { l: "Nurturing", n: 162, w: 76, c: "#7F77DD" },
  { l: "Retention", n: 118, w: 55, c: "#9FE1CB" },
  { l: "Scaling", n: 68, w: 32, c: "#1D9E75" },
  { l: "Contingent", n: 42, w: 20, c: "#0F6E56" },
];

export const UPCOMING_EVENTS = [
  { name: "Blind review deadline", club: "All clubs", date: "Jun 12", color: "#FCEBEB", tc: "#A32D2D" },
  { name: "Contingent finalization", club: "Cultural Council", date: "Jun 20", color: "#FAEEDA", tc: "#854F0B" },
  { name: "Thomso 2026 — entries close", club: "All", date: "Jul 5", color: "#E6F1FB", tc: "#185FA5" },
  { name: "Inter IIT prep camp starts", club: "Contingent", date: "Aug 1", color: "#EAF3DE", tc: "#3B6D11" },
];

export const REVIEW_QUEUE = [
  { id: "#AUD-2026-0089", club: "Choreography", dur: "58s", av: "#E1F5EE", tc: "#0F6E56" },
  { id: "#AUD-2026-0103", club: "CineSec", dur: "60s", av: "#E6F1FB", tc: "#185FA5" },
  { id: "#AUD-2026-0121", club: "Fine Arts", dur: "45s", av: "#FBEAF0", tc: "#993556" },
  { id: "#AUD-2026-0134", club: "Debating Society", dur: "55s", av: "#FAEEDA", tc: "#854F0B" },
];

export const ASSET_FOLDERS = [
  { icon: "ti-folder", ic: "#EEEDFE", tc: "#534AB7", name: "Music Section", files: 34 },
  { icon: "ti-folder", ic: "#E1F5EE", tc: "#0F6E56", name: "Choreography", files: 21 },
  { icon: "ti-folder", ic: "#E6F1FB", tc: "#185FA5", name: "CineSec", files: 47 },
  { icon: "ti-folder", ic: "#FAECE7", tc: "#993C1D", name: "Dramatics", files: 29 },
  { icon: "ti-folder", ic: "#FBEAF0", tc: "#993556", name: "Fine Arts", files: 38 },
  { icon: "ti-folder", ic: "#FAEEDA", tc: "#854F0B", name: "Debating Society", files: 15 },
  { icon: "ti-folder", ic: "#EAF3DE", tc: "#3B6D11", name: "Flora Club", files: 8 },
  { icon: "ti-folder", ic: "#FAEEDA", tc: "#854F0B", name: "Light Section", files: 12 },
  { icon: "ti-folder", ic: "#EEEDFE", tc: "#534AB7", name: "Literary Section", files: 22 },
  { icon: "ti-folder", ic: "#E1F5EE", tc: "#0F6E56", name: "Model Section", files: 17 },
  { icon: "ti-folder", ic: "#E6F1FB", tc: "#185FA5", name: "Photography Club", files: 63 },
  { icon: "ti-folder", ic: "#FAEEDA", tc: "#854F0B", name: "Audio Section", files: 29 },
  { icon: "ti-folder", ic: "#FAEEDA", tc: "#854F0B", name: "Philately Club", files: 6 },
];

export const RECENT_FILES = [
  { icon: "ti-file-text", ic: "#EEEDFE", tc: "#534AB7", name: "Inter IIT 2025 strategy.pdf", size: "2.1 MB", date: "Jun 9" },
  { icon: "ti-file-music", ic: "#E1F5EE", tc: "#0F6E56", name: "Choreo camp schedule.xlsx", size: "340 KB", date: "Jun 8" },
  { icon: "ti-photo", ic: "#E6F1FB", tc: "#185FA5", name: "Photo portfolio 2025.zip", size: "84 MB", date: "Jun 7" },
];

export const VAULT_LIBRARY = [
  { icon: "ti-file-music", ic: "#EEEDFE", tc: "#534AB7", name: "Music Section — arrangement archive" },
  { icon: "ti-video", ic: "#E6F1FB", tc: "#185FA5", name: "CineSec — film shorts 2022–25" },
  { icon: "ti-camera", ic: "#E6F1FB", tc: "#185FA5", name: "Photography — competition portfolio" },
  { icon: "ti-file-description", ic: "#FAECE7", tc: "#993C1D", name: "Dramatics — script drafts folder" },
];

export const VAULT_RECENT = [
  { icon: "ti-file-description", ic: "#FAECE7", tc: "#993C1D", name: "Dramatics — Thomso 2026 script v3", by: "Rohan K.", time: "1h ago" },
  { icon: "ti-file-music", ic: "#EEEDFE", tc: "#534AB7", name: "Music — semi-classical arrangement", by: "Arjun J.", time: "3h ago" },
  { icon: "ti-photo", ic: "#E6F1FB", tc: "#185FA5", name: "CineSec — storyboard draft", by: "Sneha B.", time: "Yesterday" },
];

export const BUDGETS = [
  { l: "Music", v: 22, c: "#534AB7" },
  { l: "Choreo", v: 18, c: "#0F6E56" },
  { l: "Dramatics", v: 15, c: "#993C1D" },
  { l: "CineSec", v: 12, c: "#185FA5" },
  { l: "Fine Arts", v: 10, c: "#993556" },
  { l: "Others", v: 23, c: "#888780" },
];

export const OBJECTIVES = [
  { n: 1, text: "Reclaim top-3 at Inter IIT Cultural Meet within 24 months", prog: 0, color: "#FAEEDA", tc: "#854F0B" },
  { n: 2, text: "Increase Y1 talent discovery by 40% in Year 1", prog: 67, color: "#EAF3DE", tc: "#3B6D11" },
  { n: 3, text: "Reduce year-over-year knowledge loss to zero", prog: 45, color: "#E6F1FB", tc: "#185FA5" },
];

export const NOTIF_ITEMS = [
  "New audition submissions",
  "Contingent CSS updates",
  "Knowledge vault uploads",
  "Calendar event reminders",
  "Club health alerts",
];

export const MEMBER_FILTERS = ["All","Music","Choreo","Drama","CineSec","Fine Arts","Debsoc","Audio","Literary","Photo"];

export const MEMBER_FILTER_MAP: Record<string, string | null> = {
  All: null, Music: "Music Section", Choreo: "Choreography", Drama: "Dramatics Section",
  CineSec: "CineSec", "Fine Arts": "Fine Arts Section", Debsoc: "Debating Society",
  Audio: "Audio Section", Literary: "Literary Section", Photo: "Photography Club",
};

export const PILL_MAP: Record<string,string> = {
  selected: "p-sel", review: "p-rev", new: "p-new", pending: "p-pen",
};

export const MVP_MATRIX = [
  { feature: "Centralized Audition Portal", impact: "High", complexity: "Low", rationale: "Fixes the immediate top-of-funnel leak with minimal technical overhead.", priority: "P0 (Critical)", pc: "#FCEBEB", ptc: "#A32D2D" },
  { feature: "Knowledge Vault (IP Archive)", impact: "High", complexity: "Low", rationale: "Simple file-hosting that instantly stops year-over-year asset loss.", priority: "P0 (Critical)", pc: "#FCEBEB", ptc: "#A32D2D" },
  { feature: "Academic Buffer Policy", impact: "High", complexity: "Medium", rationale: "Requires admin approval, but directly addresses the primary driver of student burnout.", priority: "P1 (High)", pc: "#FAEEDA", ptc: "#854F0B" },
  { feature: "Predictive Performance Analytics", impact: "Medium", complexity: "High", rationale: "Requires multiple semesters of clean data. Not essential for immediate turnaround.", priority: "P3 (Defer)", pc: "#F1EFE8", ptc: "#5F5E5A" },
];

export const COMP1 = [
  { icon: "ti-video", title: "Unified Audition Portal", desc: "A single system where any student can upload a 60-second video/audio snippet or portfolio link during orientation week.", tc: "#534AB7", ic: "#EEEDFE" },
  { icon: "ti-eye-off", title: "Blind Review Interface", desc: "Allows Section Secretaries to evaluate submissions based purely on raw merit, minimizing initial cognitive and social biases.", tc: "#185FA5", ic: "#E6F1FB" },
  { icon: "ti-user-circle", title: "Dynamic Talent Profiles", desc: "A central repository tracking student participation, performance reviews, and skill progression across semesters.", tc: "#0F6E56", ic: "#E1F5EE" },
];
export const COMP2 = [
  { icon: "ti-file-analytics", title: "Rulebook & Strategy Archive", desc: "A secure repository containing annotated rulebooks from past Inter IIT meets, judging criteria analyses, and detailed point-distribution breakdowns.", tc: "#993C1D", ic: "#FAECE7" },
  { icon: "ti-database", title: 'The "IP Repository"', desc: "A structured library for script drafts, musical arrangements, choreography videos, and post-mortem reports from previous competitions. Access is tiered based on a student's current role within the contingent.", tc: "#534AB7", ic: "#EEEDFE" },
];
export const COMP3 = [
  { icon: "ti-school", title: "Academic Buffer Policy", desc: "In collaboration with the Dean of Students' Welfare (DoSW), this framework formalizes mid-semester exam deferrals and automated attendance waivers for students representing the institute.", tc: "#854F0B", ic: "#FAEEDA" },
  { icon: "ti-award", title: "Inter IIT Performance Credits", desc: "Introduces a formal co-curricular credit system recognized on student transcripts for contingent members who maintain high engagement logs within CultEngine.", tc: "#3B6D11", ic: "#EAF3DE" },
];
export const MVP_EXCLUSIONS = [
  "No Automated Grading — submissions evaluated by human judges only; no AI-based talent screening in Phase 1.",
  "No Real-time Budgeting — financial ledger integrations and automated budget reallocations deferred to Phase 2.",
  "Predictive Analytics (P3) — requires multiple semesters of clean baseline data before deployment.",
];
export const MVP_IMPACTS = [
  { metric: "Y1 talent discovery rate", target: "+40%", color: "#EAF3DE", tc: "#3B6D11" },
  { metric: "Knowledge loss (YoY)", target: "→ 0%", color: "#E6F1FB", tc: "#185FA5" },
  { metric: "Contingent readiness index", target: ">90%", color: "#EEEDFE", tc: "#534AB7" },
  { metric: "Student burnout / dropout", target: "−25%", color: "#FAEEDA", tc: "#854F0B" },
  { metric: "IIT rank target (24 months)", target: "Top 3", color: "#EAF3DE", tc: "#3B6D11" },
];

export const CAL_EVENTS: Record<number,string> = {
  9: "Review", 12: "Auditions close", 15: "DoSW meeting", 20: "Contingent", 25: "Thomso prep",
};

export const CAL_DEADLINES = [
  { name: "Blind review deadline", date: "Jun 12", color: "#FCEBEB", tc: "#A32D2D" },
  { name: "DoSW policy meeting", date: "Jun 15", color: "#FAEEDA", tc: "#854F0B" },
  { name: "Contingent finalization", date: "Jun 20", color: "#EEEDFE", tc: "#534AB7" },
  { name: "Thomso 2026 prep begins", date: "Jun 25", color: "#EAF3DE", tc: "#3B6D11" },
];

export const PAGE_TITLES: Record<string,string> = {
  dashboard: "Dashboard", members: "Members registry", clubs: "All clubs",
  auditions: "Audition portal", tasks: "Task board", analytics: "Analytics hub",
  vault: "Knowledge vault", mvp: "MVP / MVI", contingent: "Inter IIT contingent",
  assets: "Shared assets", announcements: "Announcements", calendar: "Calendar",
  council: "Cultural council", settings: "Settings",
};

export const NAV_SECTIONS = [
  { label: "Overview", items: [
    { id: "dashboard", icon: "ti-layout-dashboard", label: "Dashboard" },
    { id: "announcements", icon: "ti-bell", label: "Announcements", badge: "3" },
    { id: "calendar", icon: "ti-calendar", label: "Calendar" },
  ]},
  { label: "Talent", items: [
    { id: "auditions", icon: "ti-upload", label: "Audition portal" },
    { id: "members", icon: "ti-users", label: "Members" },
    { id: "contingent", icon: "ti-trophy", label: "Contingent" },
  ]},
  { label: "Clubs", items: [
    { id: "clubs", icon: "ti-apps", label: "All clubs" },
    { id: "tasks", icon: "ti-checklist", label: "Task board" },
    { id: "assets", icon: "ti-folders", label: "Shared assets" },
  ]},
  { label: "Analytics", items: [
    { id: "analytics", icon: "ti-chart-bar", label: "Analytics hub" },
    { id: "vault", icon: "ti-lock", label: "Knowledge vault" },
    { id: "mvp", icon: "ti-rocket", label: "MVP tracker", badge: "New", badgeColor: "#0f6e56" },
  ]},
  { label: "Admin", items: [
    { id: "council", icon: "ti-building", label: "Cultural council" },
    { id: "settings", icon: "ti-settings", label: "Settings" },
  ]},
];
