import { s as startMongo } from "../../../../chunks/mongo.js";
import { A as Appointment } from "../../../../chunks/appointment.js";
import { json } from "@sveltejs/kit";
const GET = async () => {
  try {
    await startMongo();
    console.log("🔎 Looking for appointments...");
    const appointments = await Appointment.find();
    return json(appointments, { status: 201 });
  } catch (err) {
    console.error("GET /appointment error:", err);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    await startMongo();
    const data = await request.json();
    console.log("🔎 Creating appointment...");
    const newAppointment = await Appointment.create({
      name: data.name,
      date: data.appointmentDate,
      time: data.appointmentTime,
      standardTreatment: data.standardTreatmentSelected.english_name,
      wellnessProgramme: data.wellnessProgrammeSelected.english_name,
      packagedTreatment: data.packagedTreatmentSelected.english_name,
      price: data.price,
      extraComments: data.additionalRequest,
      loyaltyPrice: data.loyaltyCheck.starting_price
    });
    console.log("Appointment created ✅", newAppointment);
    return json(newAppointment, { status: 201 });
  } catch (err) {
    console.error("POST /appointment creation error:", err);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
};
export {
  GET,
  POST
};
