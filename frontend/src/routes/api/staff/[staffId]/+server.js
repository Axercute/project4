import { startMongo } from "$lib/server/db/mongo"
import { User } from "$lib/server/model/user"
import { treatment } from "$lib/treatmentDummy.js";
import { json } from "@sveltejs/kit";

// export const GET=async({params})=>{
//   try {
//     await startMongo();
//     console.log('🔎 Looking for appointment ID...');
//     const user = await User.findById(params.staffId)
//     console.log('✅ staff ID found', user);
//     return json(appointment, {status:201});
//   } catch (err) {
//     console.error('GET /appointment error:', err);
//     return json({error:'Internal Server Error'}, { status: 500 });
//   }
// }

export const DELETE=async({params})=>{
  try {
    await startMongo();
    console.log('🔎 Looking for user ID...',params.staffId);
    const user = await User.findByIdAndDelete(params.staffId)
    console.log('✅ User ID found, deleting it', user);
    return json(user, {status:201});
  } catch (err) {
    console.error('DELETE /User error:', err);
    return json({error:'Internal Server Error'}, { status: 500 });
  }
}

export const POST=async({request})=>{
  try {
    await startMongo();
    const data= await request.json();
    console.log('🔎 Updating staff...');
    const newStaff = await User.findByIdAndUpdate(data._id,{name:data.name,time:data.time,
      staffName:data.staffName,pin:data.pin}
    )
    console.log("staff updated ✅",newStaff)//for BE to see
    return json(newStaff, {status:201});
  } catch (err) {
    console.error('UPDATE /Staff creation error:', err);
    return json ({error:'Internal Server Error'}, { status: 500 });
  }
}
