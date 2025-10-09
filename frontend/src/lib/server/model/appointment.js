import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema({
  loyaltyPrice:{type: Number, required: true},
  name: {type: String},
  date: {type: String, required: true },        
  time: {type: String, required: true },  
  treatments: {type: Array, required:true},
  price:{type:Number},
  extraComments: { type: String },
  status: {type:String, default:"incomplete"}
});
export const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);

