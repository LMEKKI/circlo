import { myenv, type EnvVariables } from "@/server/env";

import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(myenv.DATABASE_URL as EnvVariables["DATABASE_URL"]);
