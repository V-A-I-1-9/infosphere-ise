import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    jsconfigPaths(),

    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),

    // Brotli compression (better than gzip)
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "query-vendor": ["@tanstack/react-query"],
          "ui-vendor": ["@radix-ui/react-avatar", "@radix-ui/react-slot"],
          icons: ["@tabler/icons-react", "lucide-react"],
          animation: ["motion"],
          "csv-parser": ["papaparse"],
        },
      },
    },
    cssCodeSplit: true,
    minify: "esbuild",
    sourcemap: false,
  },
});
