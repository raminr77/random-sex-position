import { useCallback } from "react";
import { Link } from "react-router";

import { useActions } from "@/hooks";
import { getRandomNumber } from "@/utils";

export function Actions() {
  const { filteredData, positionId, filters, setPositionId, resetFilters } =
    useActions();

  const handleRandomButton = useCallback(() => {
    const nextIndex = getRandomNumber(0, filteredData.length - 1);
    setPositionId(filteredData[nextIndex].id);
  }, [filteredData]);

  const disabledResetButton = positionId === 0 && filters.length === 0;
  return (
    <div className="w-full flex items-center justify-center gap-3 flex-wrap">
      <Link
        to="position-list/"
        className="cursor-pointer text-white text-center leading-8 px-4 py-1 border rounded-md border-slate-800/50 bg-slate-100/10 hover:bg-slate-800 duration-300"
      >
        All Positions
      </Link>

      <button
        onClick={resetFilters}
        disabled={disabledResetButton}
        style={
          disabledResetButton
            ? { opacity: 0.3, pointerEvents: "none", cursor: "not-allowed" }
            : {}
        }
        className="bg-slate-400 cursor-pointer hover:bg-slate-500 duration-300 text-white rounded-md shadow-md hover:shadow-lg leading-8 px-4 py-1"
      >
        Reset
      </button>

      <button
        onClick={handleRandomButton}
        className="bg-pink-600 cursor-pointer hover:bg-pink-800 duration-300 text-white rounded-md shadow-md hover:shadow-lg leading-8 px-4 py-1"
      >
        New Position
      </button>
    </div>
  );
}
