import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema({
  loyaltyPrice:{type: Number, required: true},
  name: {type: String},
  date: {type: String, required: true },        
  time: {type: String, required: true },  
  standardTreatment:{type:String},
  wellnessProgramme: {type:String},
  packagedTreatment: {type:String},
  price:{type:Number},
  extraComments: { type: String },
});
export const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);

