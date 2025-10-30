import { useContext } from "react";

import { AppContext } from "@/context/context-provider";

export function useAppContext() {
  return useContext(AppContext);
}
