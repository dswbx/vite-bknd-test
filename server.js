import { serve } from "bknd/adapter/node";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "fs/promises";

export const initialConfig = {
   media: {
      enabled: true,
      adapter: {
         type: "local",
         config: {
            path: "./uploads",
         },
      },
   },
};

serve({
   initialConfig,
   onBuilt: async (app) => {
      const html = await readFile("./dist/index.html", "utf-8");

      app.server.get("/*", serveStatic({ root: "./dist" }), (c) =>
         c.html(html)
      );
   },
});
