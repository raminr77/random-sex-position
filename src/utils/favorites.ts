import { FAVORITE_POSITIONS_KEY } from "@/constants";

export function getFavoriteList(): number[] {
  return JSON.parse(localStorage.getItem(FAVORITE_POSITIONS_KEY) || "[]");
}

export function updateFavoriteList(data: number[]): void {
  localStorage.setItem(FAVORITE_POSITIONS_KEY, JSON.stringify(data));
}
