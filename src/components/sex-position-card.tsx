import { SEX_LEVELS } from "@/constants";

import { useActions } from "@/hooks";

const BADGE_COLORS: Record<string, string> = {
  [SEX_LEVELS.SAFE]: "bg-green-500",
  [SEX_LEVELS.BE_CAREFUL]: "bg-red-500",
  [SEX_LEVELS.DANGEROUS]: "bg-orange-500",
};

const DEFAULT_POSITION = {
  id: 0,
  title: "",
  level: "",
  fileName: "0-preview.png",
  imageAlt: "Random Sex Position",
};

export function SexPositionCard() {
  const { activePosition, positionId } = useActions();

  const { id, level, title, imageAlt, fileName } =
    positionId === 0 || !activePosition ? DEFAULT_POSITION : activePosition;

  return (
    <div
      title={title}
      className="w-full relative bg-white overflow-hidden border-dashed border dark:border-none rounded-lg p-5 flex flex-col items-center justify-center gap-2 text-slate-500 mb-4 animate__animated animate__fadeIn shadow-sm"
    >
      {level && (
        <span
          className={`${"rounded-md shadow-sm leading-7 px-3 absolute top-5 right-5 text-white text-xs"} ${
            BADGE_COLORS[level] ?? "bg-slate-200"
          }`}
        >
          {level.toUpperCase()}
        </span>
      )}

      <img alt={imageAlt} src={`images/positions/${fileName}`} />

      <h3 className="mt-4">
        {id ? `Position No: ${id}` : "More Than 500 Sex Positions"}
      </h3>
      <p>
        {title
          ? `Position Name: ${title}`
          : "Get Your Random Position And Try It Tonight!"}
      </p>
    </div>
  );
}
