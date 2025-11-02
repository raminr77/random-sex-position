import { useActions } from "@/hooks";

import { LikeButton } from "./like-button";
import { Level } from "./level";

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
      className="w-full relative bg-white overflow-hidden border-dashed border dark:border-none rounded-lg p-5 flex flex-col items-center justify-center gap-2 text-slate-500 animate__animated animate__fadeIn shadow-sm"
    >
      {level && <Level level={level} />}

      {!!id && (
        <div className="left-5 top-5 absolute">
          <LikeButton id={id} />
        </div>
      )}

      <img loading="lazy" alt={imageAlt} src={`images/positions/${fileName}`} />

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
