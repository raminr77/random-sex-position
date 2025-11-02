const GitHubStarsBadgeURL =
  "https://img.shields.io/github/stars/raminr77/random-sex-position?style=social&link=https%3A%2F%2Fgithub.com%2Framinr77%2Frandom-sex-position";

export function Header() {
  return (
    <header className="w-full flex flex-col items-center gap-4 my-5 z-10">
      <h1 className="text-2xl lato-bold">Random Sex Position</h1>
      <a href="https://github.com/raminr77/random-sex-position" target="_blank">
        <img loading="lazy" alt="GitHub Repo stars" src={GitHubStarsBadgeURL} />
      </a>
    </header>
  );
}
