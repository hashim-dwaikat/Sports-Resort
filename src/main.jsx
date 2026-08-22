import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/index.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/home.css";
import "./styles/facilities.css";
import "./styles/experience.css";
import "./styles/memberships.css";
import "./styles/booking.css";
import "./styles/footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);