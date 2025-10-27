import Switch from "react-switch";

import { useActions } from "@/hooks";
import { SEX_LEVELS } from "@/constants";

export function Filters() {
  const { filters, setFilter } = useActions();

  return (
    <div className="w-full flex flex-col gap-3 text-slate-700 rounded-md bg-slate-100/10 backdrop-blur-sm dark:text-white py-3 px-5 shadow-md">
      <h5 className="text-sm text-center">
        Filter your result with sex levels
      </h5>

      <div className="flex items-center justify-center gap-5">
        {Object.entries(SEX_LEVELS).map(([key, value]) => (
          <label
            key={key}
            htmlFor={key}
            className="cursor-pointer flex items-center"
          >
            <Switch
              id={key}
              name={key}
              className="mr-2"
              onColor="#e60076"
              offColor="#101828"
              checkedIcon={false}
              handleDiameter={20}
              uncheckedIcon={false}
              checked={filters.includes(key)}
              onChange={(checked) => setFilter(key, checked)}
            />
            {value.toUpperCase()}
          </label>
        ))}
      </div>
    </div>
  );
}
