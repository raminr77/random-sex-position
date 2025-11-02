import {
  Footer,
  Header,
  Filters,
  Actions,
  FavoriteList,
  SexPositionCard,
} from "@/components";

export function App() {
  return (
    <div
      style={{ width: "90%" }}
      className="flex items-center justify-center w-full flex-col gap-4 p-5 relative mx-auto max-w-2xl"
    >
      <img
        alt=""
        loading="lazy"
        draggable={false}
        src="images/background.png"
        className="fixed top-0 left-0 pointer-events-none opacity-50 blur-sm"
      />

      {/* HEADER */}
      <Header />

      {/* SEX POSITION CARD */}
      <SexPositionCard />

      {/* FILTER */}
      <Filters />

      {/* ACTIONS */}
      <Actions />

      {/* FAVORITE LIST */}
      <FavoriteList />

      <br />

      {/* Footer */}
      <Footer />
    </div>
  );
}
