import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { AppProvider } from "./context/context.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const theme = {
  colors: {
    bg: "#f8fafc",
    border: "#e2e8f0",
    borderDark: "#94a3b8",
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    text: "#1e293b",
    textLight: "#64748b",
    error: "#f43f5e",
    success: "#22c55e",
  },
  sizes: {
    xs: "320px",
    sm: "384px",
    md: "448px",
    lg: "512px",
    xl: "576px",
  },
  width: "1280px",
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48px",
  },
  text: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  borderRadius: "4px",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
