import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NewApp from "./NewApp.jsx";

import "@fontsource-variable/figtree";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/new2">
      <NewApp />
    </BrowserRouter>
  </React.StrictMode>,
);
