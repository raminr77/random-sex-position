import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { ContextProvider } from "@/context/context-provider";
import { APP_URL } from "@/constants/routes";

import { App } from "@/App";
import { PositionList } from "@/position-list";

import "@/styles/main.scss";

const ROUTES = [
  {
    id: 1,
    element: <App />,
    path: APP_URL.index,
  },
  {
    id: 2,
    element: <PositionList />,
    path: APP_URL.positionList,
  },
];

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
