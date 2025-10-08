import { startMongo } from "$lib/server/db/mongo"
import { Appointment } from "$lib/server/model/appointment"
import { json } from "@sveltejs/kit";

export const GET=async()=>{
  try {
    await startMongo();
    console.log('🔎 Looking for appointments...');
    const appointments = await Appointment.find();
    // console.log('✅ Appointments found:', appointments);
    return json(appointments, {status:201});
  } catch (err) {
    console.error('GET /appointment error:', err);
    return json({error:'Internal Server Error'}, { status: 500 });
  }
}

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Creating appointment...');
    const newAppointment = await Appointment.create({name:data.name,date:data.appointmentDate,time:data.appointmentTime,
    treatments:data.treatments,price:data.price,extraComments:data.additionalRequest,
    loyaltyPrice:data.loyaltyCheck.starting_price
    })
    console.log("Appointment created ✅",newAppointment)//for BE to see
    return json(newAppointment, {status:201});
  } catch (err) {
    console.error('POST /appointment creation error:', err);
    return json ({error:'Internal Server Error'}, { status: 500 });
  }
}
