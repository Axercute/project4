import { startMongo } from "$lib/server/db/mongo"
import {Service} from "$lib/server/model/service"
import { json } from "@sveltejs/kit";

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

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Creating treatment...');
    const newTreatment = await Service.create({english_name:data.english_name,chinese_name:data.chinese_name,
      description:data.description,category:data.category,starting_price:data.starting_price
    })
    console.log("Treatment created ✅",newTreatment)//for BE to see
    return json(newTreatment, {status:201});
  } catch (err) {
    console.error('POST /treatment creation error:', err);
    return json ({error:'Internal Server Error'}, { status: 500 });
  }
}
