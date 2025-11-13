export function Footer() {
  return (
    <footer className="w-full text-sm text-slate-400 mb-4 flex items-center justify-center flex-col gap-1 mb-5 animate__animated animate__fadeIn animate__delay-2s">
      <p className="flex items-center gap-2">
        <span>Made with love by</span>
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="text-amber-400"
          href="https://raminrezaei.se"
        >
          Ramin
        </a>
      </p>
      <span className="text-center">No user data is collected or stored.</span>
      <span className="text-center">
        Only anonymous traffic data is processed through Google Analytics.
      </span>
      <span className="text-center">
        This open-source project was made just for fun and now gets over 131K
        uniqe visits per day.
      </span>
    </footer>
  );
}
