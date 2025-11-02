import { Link } from "react-router";

import { useAppContext } from "@/hooks";
import { APP_URL } from "@/constants/routes";

export function PositionListHeader() {
  const { showGrid, setShowGrid, showFavorites, setShowFavorites } =
    useAppContext();

  return (
    <div className="sticky flex-wrap gap-4 top-0 dark:bg-gray-900 bg-white w-full flex items-center justify-between py-4 z-10 border-b border-slate-500/50 shadow-md">
      <Link
        to={APP_URL.index}
        className="cursor-pointer text-white text-center leading-8 px-4 py-1 rounded-md bg-slate-100/10 hover:bg-slate-800 duration-300 flex items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"
          />
        </svg>
        <span>Back To Random Position</span>
      </Link>

      <div className="flex gap-4">
        <button
          title="Favorites"
          onClick={() => setShowGrid(!showGrid)}
          className="flex items-center justify-center leading-7 text-white cursor-pointer bg-slate-100/10 hover:bg-slate-800 duration-300 rounded-md p-2"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showGrid ? (
              <path
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 5h16M4 12h16M4 19h16"
                className="animate__animated animate__fadeIn"
              />
            ) : (
              <g
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </g>
            )}
          </svg>
        </button>
        <button
          title="Favorites"
          onClick={() => setShowFavorites(!showFavorites)}
          className="flex items-center justify-center leading-7 text-white cursor-pointer bg-slate-100/10 hover:bg-slate-800 duration-300 rounded-md p-2"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              className="animate__animated animate__fadeIn"
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3m-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05"
            />
            {showFavorites && (
              <path
                opacity=".3"
                fill="currentColor"
                className="animate__animated animate__fadeIn"
                d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1l.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
