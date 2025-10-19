import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Disable React Compiler (React 19 feature)
      jsxRuntime: "automatic",
      babel: {
        plugins: [],
      },
    }),
  ],
  server: {
    port: 5173,
    open: true,
  },
});
