import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import YApp from "./YApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <YApp />
  </StrictMode>
);
