import { startMongo } from "$lib/server/db/mongo"
import { User } from "$lib/server/model/user"
import crypto from "crypto-js";
import { createJWT } from "$lib/server/utility/securityUtil.js";
import { Appointment } from "$lib/server/model/appointment.js";
import { json } from "@sveltejs/kit";

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Loggin in...',data);
    //looking for user
    const userFound = await User.findOne({ staffName: data.staffName, pin: data.pin });
    if (!userFound) { // not found
        return json("User not found")
    }
    const payload = { staffName: userFound.staffName,role: userFound.role };
    // create a token
    const token = createJWT(payload);
    //update the user record with this new jwt for session tracking
    await User.updateOne({ staffName: data.staffName}, { jwt: token})
    console.log("Login success!",token)
    return json({login:"login success",jwt: token })
  } catch (err) {
    console.error('POST /account login error:', err);
    return json({error:'Internal Server Error for login'}, { status: 500 });
  }
}


export const GET = async ({ locals }) => {
    // locals.user was set in hooks.server.js after JWT verification
    if (!locals.user) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    await startMongo()
    const userFound = await User.findById(locals.user._id)
    console.log("User data fetched",userFound)
    return new Response(JSON.stringify({
        message: "You are authorized",
        user: userFound
    }), { status: 200 });
};