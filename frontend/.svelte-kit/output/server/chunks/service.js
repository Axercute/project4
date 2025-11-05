import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema({
  english_name: { type: String, required: true },
  chinese_name: { type: String },
  starting_price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true }
});
const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);
export {
  Service as S
};
