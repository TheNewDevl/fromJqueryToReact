import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EmployeesProvider } from "./context/EmployeesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EmployeesProvider>
      <App />
    </EmployeesProvider>
  </React.StrictMode>
);
