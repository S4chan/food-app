import mongoose from "mongoose";
import { MONGO_URI } from "../Config";

export default async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB 連線成功");
  } catch (err) {
    console.log("❌ MongoDB 連線失敗", err);
    process.exit(1);
  }
};
