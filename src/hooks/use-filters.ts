import { parse } from "qs";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

import { QUERY_PARAMS_KEYS } from "@/constants";

import { data, DataItem } from "../../data";

export function useActions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const positionId = Number(
    searchParams.get(QUERY_PARAMS_KEYS.POSITION_ID) || 0
  );

  const filters = Object.keys(
    parse(searchParams.get(QUERY_PARAMS_KEYS.FILTERS) || "", {
      delimiter: ",",
    })
  );

  const filteredData: DataItem[] = useMemo(() => {
    if (filters.length === 0) {
      return data;
    }

    return data.filter((item) =>
      filters.includes(item.level.toUpperCase().replace(" ", "_"))
    );
  }, [filters]);

  const setPositionId = (id: number) => {
    searchParams.set(QUERY_PARAMS_KEYS.POSITION_ID, id.toString());
    setSearchParams(searchParams);
  };

  const setFilter = useCallback(
    (level: string, isActive: boolean) => {
      const newFilters = isActive
        ? [...filters, level]
        : filters.filter((filterItem) => filterItem !== level);

      if (newFilters.length > 0) {
        searchParams.set(QUERY_PARAMS_KEYS.FILTERS, newFilters.join(","));
      } else {
        searchParams.delete(QUERY_PARAMS_KEYS.FILTERS);
      }

      setSearchParams(searchParams);
    },
    [filters]
  );

  const resetFilters = () => {
    searchParams.delete(QUERY_PARAMS_KEYS.FILTERS);
    searchParams.delete(QUERY_PARAMS_KEYS.POSITION_ID);
    setSearchParams(searchParams);
  };

  const activePosition = useMemo(() => {
    return filteredData[positionId] ?? filteredData[0];
  }, [filters, positionId, filteredData]);

  return {
    // Actions
    setFilter,
    resetFilters,
    setPositionId,
    // Data
    filters,
    positionId,
    filteredData,
    activePosition,
  };
}
