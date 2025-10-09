import { startMongo } from "$lib/server/db/mongo"
import { Appointment } from "$lib/server/model/appointment"
import { treatment } from "$lib/treatmentDummy.js";
import { json } from "@sveltejs/kit";

export const GET=async({params})=>{
  try {
    await startMongo();
    console.log('🔎 Looking for appointment ID...');
    const appointment = await Appointment.findById(params.appointmentId)
    console.log('✅ Appointment ID found', appointment);
    return json(appointment, {status:201});
  } catch (err) {
    console.error('GET /appointment error:', err);
    return json({error:'Internal Server Error'}, { status: 500 });
  }
}

export const DELETE=async({params})=>{
  try {
    await startMongo();
    console.log('🔎 Looking for appointment ID...',params.appointmentId);
    const appointment = await Appointment.findByIdAndDelete(params.appointmentId)
    console.log('✅ Appointment ID found, deleting it', appointment);
    return json(appointment, {status:201});
  } catch (err) {
    console.error('DELETE /appointment error:', err);
    return json({error:'Internal Server Error'}, { status: 500 });
  }
}

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Updating appointment...');
    const newAppointment = await Appointment.findByIdAndUpdate(data._id,{name:data.name,time:data.time,
      treatments:data.treatments,extraComments:data.extraComments,price:data.price
    }
    )
    console.log("Appointment updated ✅",newAppointment)//for BE to see
    return json(newAppointment, {status:201});
  } catch (err) {
    console.error('UPDATE /appointment creation error:', err);
    return json ({error:'Internal Server Error'}, { status: 500 });
  }
}
