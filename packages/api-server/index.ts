import express from "express";
import { publicProcedure, router } from "./trpc";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";

const appRouter = router({
  test: publicProcedure.query(() => {
    return "hello world";
  }),
  foo: publicProcedure.query(() => {
    return "test test test";
  }),
});

export type AppRouter = typeof appRouter; // export the router type for use in the client

const app = express();
app.use(cors());
const port = 8080;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`);
});
