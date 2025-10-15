import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  images: {
    remotePatterns: [{hostname: "https://vectorlogo.zone"}, {hostname: "https://cdn.worldvectorlogo.com"}]
   },
  plugins: [react()],
});
