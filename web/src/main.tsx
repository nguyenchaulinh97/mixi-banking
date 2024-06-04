import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import App from "./App";
import "./index.css";
import { AppThemeProvider } from "./contexts/theme";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </VisibilityProvider>
  </React.StrictMode>
);

reportWebVitals();
