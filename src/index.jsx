import React from "react";
import App from "./App";
import "./styles/color.css";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";
import { AuthContextProvider } from "context/AuthContext";


import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));

// Wrap your App component with Provider
root.render(
  <React.StrictMode>
  
    <AuthContextProvider>
      
      <App/>

    </AuthContextProvider>
  </React.StrictMode>,
);
