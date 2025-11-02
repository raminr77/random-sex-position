import { createContext, useState, type ReactNode } from "react";

import { getFavoriteList, updateFavoriteList } from "@/utils";

export const AppContext = createContext<{
  showGrid: boolean;
  showFavorites: boolean;
  favoritePositions: number[];
  setShowFavorites: (value: boolean) => void;
  setShowGrid: (value: boolean) => void;
  setFavoritePositions: (data: number[]) => void;
}>({
  showGrid: true,
  showFavorites: false,
  favoritePositions: [],
  setShowGrid: () => {},
  setShowFavorites: () => {},
  setFavoritePositions: () => {},
});

export function ContextProvider({ children }: { children: ReactNode }) {
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [favoritePositions, setFavoritePositions] = useState<number[]>(() =>
    getFavoriteList()
  );

  const handleUpdateList = (data: number[]) => {
    setFavoritePositions(data);
    updateFavoriteList(data);
  };

  return (
    <AppContext
      value={{
        showGrid,
        setShowGrid,
        showFavorites,
        setShowFavorites,
        favoritePositions,
        setFavoritePositions: handleUpdateList,
      }}
    >
      {children}
    </AppContext>
  );
}
