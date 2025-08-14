import { startMongo } from "$lib/server/db/mongo"
import { Appointment } from "$lib/server/model/appointment"

export const GET=async({params})=>{
  try {
    await startMongo();
    const id = params.appointmentId
    console.log('🔎 Looking for appointment ID...');
    const appointments = await Appointment.findById(id).populate('treatments', 'english_name starting_price').exec();
    console.log('✅ Appointment ID found', appointments);
    return new Response(JSON.stringify(appointments), {status:201});
  } catch (err) {
    console.error('GET /appointment error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}