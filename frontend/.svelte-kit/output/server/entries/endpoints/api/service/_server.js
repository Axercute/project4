import { s as startMongo } from "../../../../chunks/mongo.js";
import { S as Service } from "../../../../chunks/service.js";
import { json } from "@sveltejs/kit";
const GET = async () => {
  try {
    await startMongo();
    const services = await Service.find();
    return new Response(JSON.stringify(services), { status: 201 });
  } catch (err) {
    console.error("GET /service error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    await startMongo();
    const data = await request.json();
    console.log("🔎 Creating treatment...");
    const newTreatment = await Service.create({
      english_name: data.english_name,
      chinese_name: data.chinese_name,
      description: data.description,
      category: data.category,
      starting_price: data.starting_price
    });
    console.log("Treatment created ✅", newTreatment);
    return json(newTreatment, { status: 201 });
  } catch (err) {
    console.error("POST /treatment creation error:", err);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
};
export {
  GET,
  POST
};
