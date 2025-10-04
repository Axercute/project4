import { s as startMongo } from "../../../../chunks/mongo.js";
import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema({
  english_name: { type: String, required: true },
  chinese_name: { type: String },
  starting_price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true }
});
const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);
const GET = async () => {
  try {
    await startMongo();
    const services = await Service.find();
    return new Response(JSON.stringify(services), { status: 201 });
  } catch (err) {
    console.error("GET /service error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
export {
  GET
};
