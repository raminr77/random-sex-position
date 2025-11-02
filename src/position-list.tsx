import { clsx } from "clsx";
import { useMemo } from "react";

import { useAppContext } from "@/hooks";
import { PositionListCard } from "@/components/position-list-card";
import { PositionListHeader } from "@/components/position-list-header";
import { PositionListGridCard } from "@/components/position-list-grid-card";

import { data, type DataItem } from "../data";

export function PositionList() {
  const { showGrid, showFavorites, favoritePositions } = useAppContext();
  const positions = useMemo(
    () =>
      showFavorites
        ? data.filter((dataItem: DataItem) =>
            favoritePositions.includes(dataItem.id)
          )
        : data,
    [showFavorites, favoritePositions]
  );

  return (
    <div
      style={{ width: "90%" }}
      className="flex items-center justify-center w-full flex-col gap-4 p-5 relative mx-auto max-w-2xl"
    >
      <PositionListHeader />

      <ul
        className={clsx("w-full gap-2 pb-10", {
          "grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2": showGrid,
          "flex flex-col": !showGrid,
        })}
      >
        {positions.map((item: DataItem, index: number) =>
          showGrid ? (
            <PositionListGridCard position={item} />
          ) : (
            <PositionListCard position={item} order={index + 1} />
          )
        )}
      </ul>
    </div>
  );
}
