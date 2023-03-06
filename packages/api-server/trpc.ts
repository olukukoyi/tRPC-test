import { initTRPC } from "@trpc/server";

const t = initTRPC.create(); // initialize trpc only once

export const router = t.router; // allows us to store and point to procedures
export const middleware = t.middleware;
export const publicProcedure = t.procedure; // functions / methods to use in our backend
