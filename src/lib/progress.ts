const KEY = "openbook:progress";

type ProgressMap = Record<string, boolean>; // sectionId → done

function load(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function getSectionsDone(): ProgressMap {
  return load();
}

export function markDone(sectionId: string) {
  const map = load();
  map[sectionId] = true;
  localStorage.setItem(KEY, JSON.stringify(map));
}

export function getLastRead(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(`${KEY}:last`) ?? null;
}

export function setLastRead(sectionId: string) {
  localStorage.setItem(`${KEY}:last`, sectionId);
}
