import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // server: {
    
  //   proxy: {
  //     "/api": "http://localhost:3002"
      
  //   },
  // },
  plugins:[react()]
});
