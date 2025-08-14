import { startMongo } from "$lib/server/db/mongo"
import { User } from "$lib/server/model/user"
import crypto from "crypto-js";
import { createJWT } from "$lib/server/utility/securityUtil.js";
import { Appointment } from "$lib/server/model/appointment.js";

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Loggin in...');
    data.password = crypto.PBKDF2(data.password, "abc", { keySize: 8, iterations: 1000 }).toString(crypto.enc.Base64)
    console.log("user", data);
    //looks for the user using email and pw
    const userFound = await User.findOne({ email: data.email, password: data.password });
    if (!userFound) { // not found
        return {
            status: 1,
        };
    }
    const payload = { email: data.email, name: userFound.name, is_admin: userFound.is_admin };
    // create a token
    const token = createJWT(payload);
    //update the user record with this new jwt for session tracking
    await User.updateOne({ email: data.email }, { jwt: token });
    return new Response(JSON.stringify({status: 0, jwt: token})); //indicates success
  } catch (err) {
    console.error('POST /account login error:', err);
    return new Response('Internal Server Error for login', { status: 500 });
  }
}


