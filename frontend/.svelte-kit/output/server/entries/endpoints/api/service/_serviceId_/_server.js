import { s as startMongo } from "../../../../../chunks/mongo.js";
import { S as Service } from "../../../../../chunks/service.js";
import { json } from "@sveltejs/kit";
const DELETE = async ({ params }) => {
  try {
    await startMongo();
    console.log("🔎 Looking for treatment...", params.serviceId);
    const treatment = await Service.findByIdAndDelete(params.serviceId);
    console.log("✅ Treatment ID found, deleting it", treatment);
    return json(treatment, { status: 201 });
  } catch (err) {
    console.error("DELETE /treatment error:", err);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    await startMongo();
    const data = await request.json();
    console.log("🔎 Updating treatment...");
    const newTreatment = await Service.findByIdAndUpdate(
      data._id,
      {
        english_name: data.english_name,
        chinese_name: data.chinese_name,
        description: data.description,
        category: data.category,
        starting_price: data.starting_price
      }
    );
    console.log("Treatment updated ✅", newTreatment);
    return json(newTreatment, { status: 201 });
  } catch (err) {
    console.error("UPDATE /treatment creation error:", err);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
};
export {
  DELETE,
  POST
};
