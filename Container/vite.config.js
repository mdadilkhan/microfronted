import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        todo_components: "http://localhost:4173/assets/remoteEntry1.js",
        app_two: "http://localhost:4174/assets/remoteEntry2.js",
        app_three: "http://localhost:4175/assets/remoteEntry3.js"
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});