import { LOCAL_STORAGE_KEYS } from "@/constants";

export function getFavoriteList(): number[] {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITE_POSITIONS_KEY) || "[]"
  );
}

export function updateFavoriteList(data: number[]): void {
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.FAVORITE_POSITIONS_KEY,
    JSON.stringify(data)
  );
}

export function toggleFavoritesSection(state: boolean): void {
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.HIDE_FAVORITES_SECTION_KEY,
    state.toString()
  );
}

export function getFavoritesSectionState(): boolean {
  return (
    localStorage.getItem(LOCAL_STORAGE_KEYS.HIDE_FAVORITES_SECTION_KEY) ===
    "true"
  );
}
