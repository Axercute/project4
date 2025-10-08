import { startMongo } from "$lib/server/db/mongo"
import { Appointment } from "$lib/server/model/appointment"
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