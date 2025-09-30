import { startMongo } from "$lib/server/db/mongo"
import { Appointment } from "$lib/server/model/appointment"
import { json } from "@sveltejs/kit";

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
    const newAppointment = await Appointment.create({name:data.name,date:data.appointmentDate,time:data.appointmentTime,
    standardTreatment:data.standardTreatmentSelected.english_name,wellnessProgramme:data.wellnessProgrammeSelected.english_name,
    packagedTreatment:data.packagedTreatmentSelected.english_name,price:data.price,extraComments:data.additionalRequests
    })
    console.log("Appointment created ✅",newAppointment)//for BE to see
    return json({newappointment: newAppointment}, {status:201});
  } catch (err) {
    console.error('POST /appointment creation error:', err);
    return json ({error:'Internal Server Error'}, { status: 500 });
  }
}
