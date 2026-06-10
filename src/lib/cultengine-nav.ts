// Maps page id <-> URL path. Dashboard lives at "/", everything else at "/{id}".
export const idToPath = (id: string) => (id === "dashboard" ? "/" : `/${id}`);

export const PAGE_IDS = [
  "dashboard","members","clubs","auditions","tasks","analytics","vault",
  "contingent","assets","announcements","calendar","council","settings","mvp",
] as const;
export type PageId = (typeof PAGE_IDS)[number];
