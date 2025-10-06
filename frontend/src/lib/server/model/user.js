import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  staffName: {type: String, required: true, unique: true }, 
  pin: {type: String, required: true},
  jwt: {type: String},
  role: {type:String, default: "regular"}
});

export const User = mongoose.model("User", userSchema)|| mongoose.model("User", userSchema);