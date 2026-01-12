import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  preview: {
    allowedHosts: ['book-store-6oqh.onrender.com']
  },

  server: {
    cors: true
  }
});
