import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppointmentProvider } from "./context/AppointmentContext";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </BrowserRouter>
  </StrictMode>,
);
