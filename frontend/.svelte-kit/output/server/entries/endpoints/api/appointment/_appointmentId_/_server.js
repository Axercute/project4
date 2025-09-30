import { s as startMongo } from "../../../../../chunks/mongo.js";
import { A as Appointment } from "../../../../../chunks/appointment.js";
import { json } from "@sveltejs/kit";
const GET = async ({ params }) => {
  try {
    await startMongo();
    const id = params.appointmentId;
    console.log("🔎 Looking for appointment ID...");
    const appointments = await Appointment.findById(id);
    console.log("✅ Appointment ID found", appointments);
    return json(appointments, { status: 201 });
  } catch (err) {
    console.error("GET /appointment error:", err);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
};
export {
  GET
};
