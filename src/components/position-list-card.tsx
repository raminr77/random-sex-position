import { Level } from "@/components/level";
import { LikeButton } from "@/components/like-button";

import type { DataItem } from "../../data";

export function PositionListCard({
  position,
  order,
}: {
  position: DataItem;
  order: number;
}) {
  const { id, title, imageAlt, level, fileName } = position;
  return (
    <li
      key={`position-${id}`}
      className="bg-white rounded-md p-4 flex flex-col gap-4 relative"
    >
      <div className="flex items-center justify-between gap-2">
        <LikeButton id={id} />
        <Level level={level} isAbsolute={false} />
      </div>
      <img
        alt={imageAlt}
        loading="lazy"
        className="rounded-md w-full"
        src={`https://ramiiin.ir/random-sex-position/images/positions/${fileName}`}
      />
      <h3 className="flex items-center gap-2 text-slate-950">
        <span>{order}</span>
        <span>{"-"}</span>
        <span>{title}</span>
      </h3>
    </li>
  );
}
