import {
  Footer,
  Header,
  Filters,
  Actions,
  SexPositionCard,
} from "@/components";

export function App() {
  return (
    <div className="w-11/12 max-w-xl flex items-center justify-center w-full flex-col gap-4 p-5">
      {/* HEADER */}
      <Header />

      {/* SEX POSITION CARD */}
      <SexPositionCard />

      {/* FILTER */}
      <Filters />

      {/* ACTIONS */}
      <Actions />

      {/* Footer */}
      <Footer />
    </div>
  );
}
