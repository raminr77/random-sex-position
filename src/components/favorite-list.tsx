import { Activity } from "react";
import { useActions, useAppContext } from "@/hooks";

import { data, type DataItem } from "../../data";

export function FavoriteList() {
  const { favoritePositions } = useAppContext();
  const { positionId, setPositionId } = useActions();

  return (
    <Activity mode={favoritePositions.length === 0 ? "hidden" : "visible"}>
      <div className="animate__animated animate__fadeIn flex items-center gap-4 mb-4 flex-wrap">
        {favoritePositions.map((itemId) => {
          const position = data.find((item: DataItem) => item.id === itemId);

          return (
            <button
              key={`fav-list-${itemId}`}
              onClick={() => setPositionId(position?.id ?? 0)}
              className={`cursor-pointer transform duration-300 animate__animated animate__bounceIn ${
                positionId === itemId ? "" : "scale-95 opacity-40"
              }`}
            >
              <img
                width={72}
                height={72}
                alt={position?.imageAlt}
                className="w-18 h-18 rounded-md"
                src={`images/positions/${
                  position?.fileName ?? "0-preview.png"
                }`}
              />
            </button>
          );
        })}
      </div>
    </Activity>
  );
}
