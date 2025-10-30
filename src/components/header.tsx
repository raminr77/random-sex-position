const GitHubStarsBadgeURL =
  "https://img.shields.io/github/stars/raminr77/random-sex-position?style=social&link=https%3A%2F%2Fgithub.com%2Framinr77%2Frandom-sex-position";

export function Header() {
  return (
    <header className="w-full flex flex-col items-center gap-4 my-5 z-10">
      <h3 className="text-2xl lato-bold">Random Sex Position</h3>
      <img alt="GitHub Repo stars" src={GitHubStarsBadgeURL} />
    </header>
  );
}
