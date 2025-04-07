import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TypeProvider } from "./context/useType.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TypeProvider>
      <App />
    </TypeProvider>
  </StrictMode>,
);
