// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router/Router.jsx";
import { AuthProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
