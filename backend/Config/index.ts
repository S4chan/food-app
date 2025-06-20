// backend/Config/index.ts

import dotenv from "dotenv";

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI!;
export const PORT = Number(process.env.PORT) || 8084;
