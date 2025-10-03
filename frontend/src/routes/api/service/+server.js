import { startMongo } from "$lib/server/db/mongo"
import {Service} from "$lib/server/model/service"

export const GET=async()=>{
  try {
    await startMongo();
    // console.log('🔎 Finding service...');
    const services = await Service.find();
    // console.log('✅ Services found:', services);
    return new Response(JSON.stringify(services), {status:201});
  } catch (err) {
    console.error('GET /service error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}