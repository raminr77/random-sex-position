import APP_DATA from "./data.json";

export interface DataItem {
  id: number;
  title: string;
  level: string;
  fileName: string;
  imageAlt: string;
}

export const { data } = APP_DATA;
