import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // dockerの場合はこのセッティングが必要。
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
});
