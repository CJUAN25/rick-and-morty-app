import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 1. HashRouter para que git pages pueda manejar las rutas sin problemas
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2. Envuelves la App en el HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
