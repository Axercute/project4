import { startMongo } from "$lib/server/db/mongo"
import { User } from "$lib/server/model/user"
import { json } from "@sveltejs/kit";
import jwt from "jsonwebtoken"
import { env } from '$env/dynamic/private';
const SECRET = env.SECRET;

export const GET=async()=>{
  try {
    await startMongo();
    console.log('🔎 Looking for accounts...');
    const users = await User.find();
    // console.log('✅ Appointments found:', users);
    return json(users, {status:201});
  } catch (err) {
    console.error('GET /account error:', err);
    return json({error:'Internal Server Error'}, { status: 500 });
  }
}

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Creating staff...');
    const newStaff = await User.create({staffName:data.staffName,pin:data.pin})
    console.log("Staff created ✅",newStaff)//for BE to see
    return json(newStaff, {status:201});
  } catch (err) {
    console.error('POST /staff creation error:', err);
    return json ({error:'Internal Server Error'}, { status: 500 });
  }
}
