import { getFavoriteList, updateFavoriteList } from "@/utils";
import { createContext, useState, type ReactNode } from "react";

export const AppContext = createContext<{
  favoritePositions: number[];
  setFavoritePositions: (data: number[]) => void;
}>({
  favoritePositions: [],
  setFavoritePositions: () => {},
});

export function ContextProvider({ children }: { children: ReactNode }) {
  const [favoritePositions, setFavoritePositions] = useState<number[]>(() =>
    getFavoriteList()
  );

  const handleUpdateList = (data: number[]) => {
    setFavoritePositions(data);
    updateFavoriteList(data);
  };

  return (
    <AppContext
      value={{ favoritePositions, setFavoritePositions: handleUpdateList }}
    >
      {children}
    </AppContext>
  );
}
