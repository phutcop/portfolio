import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* FONTS — self-hosted via @fontsource (npm i, see README-CHANGES.md)
   rozha one  → display / titles      eczar   → story text, taglines
   hind       → body & UI             kalam   → handwriting (postcard, notes)
   rajdhani   → small labels & nav                                          */
import "@fontsource/rozha-one/400.css";
import "@fontsource/eczar/400.css";
import "@fontsource/eczar/600.css";
import "@fontsource/hind/400.css";
import "@fontsource/hind/500.css";
import "@fontsource/hind/600.css";
import "@fontsource/kalam/400.css";
import "@fontsource/kalam/700.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";

import App from "./App";
import "./index.css";
import "./styles/experience.css";
import "./styles/retro.css";
import "./styles/indian.css"; /* LAST: the Indian theme layer overrides the older files */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
