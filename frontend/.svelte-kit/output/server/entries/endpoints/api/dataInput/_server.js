import { s as startMongo } from "../../../../chunks/mongo.js";
import "../../../../chunks/service.js";
import { A as Appointment } from "../../../../chunks/appointment.js";
const POST = async () => {
  try {
    await startMongo();
    const bunchOfMenu = [
      { english_name: "First", chinese_name: "初诊", description: "first", starting_price: 28, category: "consultation" },
      { english_name: "Follow-up", chinese_name: "复诊", description: "follow-up", starting_price: 18, category: "consultation" }
    ];
    const result = await Appointment.deleteMany(
      {},
      { $set: { balance: 1e3 } },
      { strict: false }
    );
    console.log("Result after insert", result);
    return new Response(JSON.stringify(result));
  } catch (err) {
    console.error("POST /account login error:", err);
    return new Response("Internal Server Error for login", { status: 500 });
  }
};
export {
  POST
};
