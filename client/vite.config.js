import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api/users": "http://localhost:3001"
    },
  },
});
