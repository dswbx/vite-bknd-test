import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { devServer } from "bknd/adapter/vite";

// https://vite.dev/config/
export default defineConfig((options) => {
   if (options.mode === "client") {
      return {
         plugins: [
            react(),
            devServer({
               entry: "vite.dev.ts",
            }),
         ],
         clearScreen: false,
      };
   }

   return {
      plugins: [react()],
      clearScreen: false,
      ssr: true,
      rollupOptions: {
         input: {
            server: "server.ts",
         },
      },
   };
});
