import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true }, 
  password: {type: String, required: true},
  jwt: {type: String},
  is_admin: {type: Boolean, default: false},
  name: {type:String},
});

export const User = mongoose.model("User", userSchema);