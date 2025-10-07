import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  staffName: {type: String, required: true, unique: true }, 
  pin: {type: String, required: true},
  jwt: {type: String},
  role: {type:String, default: "regular"},
  profilePicture:{type:String,default:"https://image2url.com/images/1759835176608-e603c99f-276e-464f-bb2d-cdeafda18923.jpg"},
});

export const User = mongoose.model("User", userSchema)|| mongoose.model("User", userSchema);

