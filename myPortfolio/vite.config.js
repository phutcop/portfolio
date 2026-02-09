import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite configuration
 * --------------------------------------------------
 * ✔ GitHub Pages deployment
 * ✔ React support
 * ✔ Mobile-safe
 * ✔ Clean build output
 *
 * Repo name: portfolio
 * Live URL: https://phutcop.github.io/portfolio/
 */
export default defineConfig({
  /* ----------------------------
     PLUGINS
  ----------------------------- */
  plugins: [react()],

  /* ----------------------------
     BASE PATH (🔥 REQUIRED)
     Must match GitHub repo name
  ----------------------------- */
  base: "/portfolio/",

  /* ----------------------------
     BUILD CONFIGURATION
  ----------------------------- */
  build: {
    outDir: "dist",        // required for gh-pages
    assetsDir: "assets",   // JS / CSS / images
    sourcemap: false,      // enable only for debugging
    emptyOutDir: true
  },

  /* ----------------------------
     DEV SERVER
  ----------------------------- */
  server: {
    port: 5173,
    open: true
  },

  /* ----------------------------
     PREVIEW SERVER
     (npm run preview)
  ----------------------------- */
  preview: {
    port: 4173
  }
});
