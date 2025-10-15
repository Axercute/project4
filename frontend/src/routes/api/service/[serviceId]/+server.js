import { startMongo } from "$lib/server/db/mongo"
import {Service} from "$lib/server/model/service.js"
import { json } from "@sveltejs/kit";

export const DELETE=async({params})=>{
  try {
    await startMongo();
    console.log('🔎 Looking for treatment...',params.serviceId);
    const treatment = await Service.findByIdAndDelete(params.serviceId)
    console.log('✅ Treatment ID found, deleting it', treatment);
    return json(treatment, {status:201});
  } catch (err) {
    console.error('DELETE /treatment error:', err);
    return json({error:'Internal Server Error'}, { status: 500 });
  }
}

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Updating treatment...');
    const newTreatment = await Service.findByIdAndUpdate(data._id,{english_name:data.english_name,chinese_name:data.chinese_name,
      description:data.description,category:data.category,starting_price:data.starting_price
    }
    )
    console.log("Treatment updated ✅",newTreatment)//for BE to see
    return json(newTreatment, {status:201});
  } catch (err) {
    console.error('UPDATE /treatment creation error:', err);
    return json ({error:'Internal Server Error'}, { status: 500 });
  }
}


