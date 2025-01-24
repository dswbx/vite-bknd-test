import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { devServer } from "bknd/adapter/vite";

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      devServer({
         entry: "vite.dev.ts",
      }) as any,
   ],
   clearScreen: false,
});
