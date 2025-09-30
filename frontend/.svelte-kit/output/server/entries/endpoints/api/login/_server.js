import { s as startMongo } from "../../../../chunks/mongo.js";
import mongoose from "mongoose";
import crypto from "crypto-js";
import jwt from "jsonwebtoken";
import { S as SECRET } from "../../../../chunks/private.js";
import "../../../../chunks/appointment.js";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  jwt: { type: String },
  is_admin: { type: Boolean, default: false },
  name: { type: String }
});
const User = mongoose.model("User", userSchema);
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
    console.log("🔎 Loggin in...");
    data.password = crypto.PBKDF2(data.password, "abc", { keySize: 8, iterations: 1e3 }).toString(crypto.enc.Base64);
    console.log("user", data);
    const userFound = await User.findOne({ email: data.email, password: data.password });
    if (!userFound) {
      return {
        status: 1
      };
    }
    const payload = { email: data.email, name: userFound.name, is_admin: userFound.is_admin };
    const token = createJWT(payload);
    await User.updateOne({ email: data.email }, { jwt: token });
    return new Response(JSON.stringify({ status: 0, jwt: token }));
  } catch (err) {
    console.error("POST /account login error:", err);
    return new Response("Internal Server Error for login", { status: 500 });
  }
};
export {
  POST
};
