import { startMongo } from "$lib/server/db/mongo"
import { Appointment } from "$lib/server/model/appointment"

export const GET=async()=>{
  try {
    await startMongo();
    console.log('🔎 Looking for appointments...');
    const appointments = await Appointment.find();
    console.log('✅ Appointments found:', appointments);
    return new Response(JSON.stringify(appointments), {status:201});
  } catch (err) {
    console.error('GET /appointment error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Creating appointment...');
    const newAppointment = await Appointment.create(data)
    console.log("Appointment created ✅",newAppointment)//for BE to see
    return new Response(JSON.stringify(newAppointment), {status:201});
  } catch (err) {
    console.error('POST /appointment creation error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}