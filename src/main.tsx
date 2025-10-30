import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { ContextProvider } from "@/context/context-provider";

import { App } from "@/App";

import "@/styles/main.scss";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
