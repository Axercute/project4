import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
   english_name: { type: String, required: true },
   chinese_name: { type: String},
   starting_price: { type: Number, required: true },
   description: { type: String },
   category: {type: String, required: true}
});

// By convention, the name of the Model is singular and UpperCamelCased
export const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);


