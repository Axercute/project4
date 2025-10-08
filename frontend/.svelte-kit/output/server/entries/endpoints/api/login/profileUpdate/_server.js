import { s as startMongo } from "../../../../../chunks/mongo.js";
import { U as User } from "../../../../../chunks/user.js";
import { json } from "@sveltejs/kit";
const POST = async ({ request }) => {
  try {
    await startMongo();
    const data = await request.json();
    console.log("Updating profile picture...");
    const result = await User.findOneAndUpdate(
      { staffName: data.staffName },
      { $set: { profilePicture: data.prompt } },
      { strict: false }
    );
    console.log("updated profile picture", result);
    return json({ message: "update success:", result });
  } catch (err) {
    console.error("POST /account picture update error:", err);
    return new Response("Internal Server Error for picture update", { status: 500 });
  }
};
export {
  POST
};
