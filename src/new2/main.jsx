import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NewApp from "./NewApp.jsx";

import "@fontsource-variable/figtree";

// Links to the previous site pointed at its two areas with a hash (/#tech, /#re).
const LEGACY_HASH = { "#tech": "/tech", "#re": "/real-estate" };
if (window.location.pathname === "/" && LEGACY_HASH[window.location.hash]) {
  window.history.replaceState(null, "", LEGACY_HASH[window.location.hash]);
}

// The site is served from the domain root; BASE_URL keeps a sub-path build possible.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <NewApp />
    </BrowserRouter>
  </React.StrictMode>,
);
