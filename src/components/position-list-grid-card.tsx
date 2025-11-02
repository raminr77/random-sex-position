import { Level } from "@/components/level";
import { LikeButton } from "@/components/like-button";

import type { DataItem } from "../../data";

export function PositionListGridCard({ position }: { position: DataItem }) {
  const { id, title, imageAlt, level, fileName } = position;
  return (
    <li
      title={title}
      key={`position-${id}`}
      className="flex items-center justify-center relative flex-col gap-2 bg-white rounded-md overflow-hidden"
    >
      <img
        alt={imageAlt}
        loading="lazy"
        className="w-30 h-25"
        src={`https://ramiiin.ir/random-sex-position/images/positions/${fileName}`}
      />
      <div className="flex items-center justify-between w-full px-2 pb-1">
        <Level isDotStyle level={level} />
        <LikeButton id={id} size={18} />
      </div>
    </li>
  );
}
