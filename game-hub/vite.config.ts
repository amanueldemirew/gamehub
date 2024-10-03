import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/gamehub/", // Must match the GitHub repo name
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
