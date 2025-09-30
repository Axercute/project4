import mongoose from "mongoose";
import { D as DATABASE_URL } from "./private.js";
let isConnected = false;
const startMongo = async () => {
  if (isConnected) {
    console.log("✅ Mongo already connected");
    return;
  }
  try {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(DATABASE_URL);
    isConnected = true;
    console.log("✅ Connected to MongoDB via Mongoose");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};
export {
  startMongo as s
};
