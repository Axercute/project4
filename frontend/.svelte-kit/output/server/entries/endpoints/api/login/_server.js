import { s as startMongo } from "../../../../chunks/mongo.js";
import { U as User } from "../../../../chunks/user.js";
import "crypto-js";
import jwt from "jsonwebtoken";
import { p as private_env } from "../../../../chunks/shared-server.js";
import "../../../../chunks/appointment.js";
import { json } from "@sveltejs/kit";
const SECRET = private_env.SECRET;
const createJWT = (payload) => {
  return jwt.sign(
    // data payload
    payload,
    SECRET,
    // key (assymetric or symmetric)
    { expiresIn: "24h" }
  );
};
const POST = async ({ request }) => {
  try {
    await startMongo();
    const data = await request.json();
    console.log("🔎 Loggin in...", data);
    const userFound = await User.findOne({ staffName: data.staffName, pin: data.pin });
    if (!userFound) {
      return json("User not found");
    }
    const payload = { staffName: userFound.staffName, _id: userFound._id, role: userFound.role };
    const token = createJWT(payload);
    await User.updateOne({ staffName: data.staffName }, { jwt: token });
    console.log("Login success!", token);
    return json({ login: "login success", jwt: token });
  } catch (err) {
    console.error("POST /account login error:", err);
    return json({ error: "Internal Server Error for login" }, { status: 500 });
  }
};
const GET = async ({ locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  await startMongo();
  const userFound = await User.findById(locals.user._id);
  console.log("User data fetched", userFound);
  return new Response(JSON.stringify({
    message: "You are authorized",
    user: userFound
  }), { status: 200 });
};
export {
  GET,
  POST
};
