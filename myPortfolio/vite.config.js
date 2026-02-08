import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /**
   * 🔥 IMPORTANT FOR GITHUB PAGES
   * Repo name = portfolio
   * Final URL → https://<username>.github.io/portfolio/
   */
  base: "/portfolio/",

  /**
   * BUILD CONFIG
   */
  build: {
    outDir: "dist",        // output folder (do NOT change for gh-pages)
    assetsDir: "assets",   // where JS/CSS/images go
    sourcemap: false,      // set true only if debugging prod
    emptyOutDir: true
  },

  /**
   * DEV SERVER
   */
  server: {
    port: 5173,            // default Vite port
    open: true             // auto-open browser
  },

  /**
   * PREVIEW SERVER (after build)
   */
  preview: {
    port: 4173
  }
});
