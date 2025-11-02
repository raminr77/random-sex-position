import { clsx } from "clsx";

import { SEX_LEVELS } from "@/constants";

const BADGE_COLORS: Record<string, string> = {
  [SEX_LEVELS.SAFE]: "bg-green-500",
  [SEX_LEVELS.BE_CAREFUL]: "bg-red-500",
  [SEX_LEVELS.DANGEROUS]: "bg-orange-500",
};

interface LevelProps {
  level: string;
  isAbsolute?: boolean;
  isDotStyle?: boolean;
}

export function Level({
  level,
  isAbsolute = true,
  isDotStyle = false,
}: LevelProps) {
  if (isDotStyle) {
    return (
      <span
        className={clsx(
          "w-3 h-3 rounded-full",
          BADGE_COLORS[level] ?? "bg-slate-200"
        )}
      />
    );
  }
  return (
    <span
      className={clsx(
        "rounded-md shadow-sm leading-7 px-3 top-5 right-5 text-white text-xs",
        BADGE_COLORS[level] ?? "bg-slate-200",
        { absolute: isAbsolute }
      )}
    >
      {level.toUpperCase()}
    </span>
  );
}
