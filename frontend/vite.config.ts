import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "pages" ? "/dantist/" : "/",
  plugins: [react()],
  server: {
    proxy: { "/api": "http://localhost:8000" },
  },
}));

