// import { startMongo } from "$lib/server/db/mongo"
// import { Service } from "$lib/server/model/service";
// import { Appointment } from "$lib/server/model/appointment";
// export const POST=async()=>{
//   try {
// await startMongo();
// const bunchOfMenu = [
// { english_name: "First", chinese_name: "初诊", description: "first", starting_price: 28,category:"consultation" },
// { english_name: "Follow-up", chinese_name: "复诊", description: "follow-up", starting_price: 18,category:"consultation" }
// ];
//     const result = await Appointment.deleteMany(
//   {},
//     { $set: { balance:1000} },
//     { strict: false } 
// );

//     console.log("Result after insert", result);
//     return new Response(JSON.stringify(result))
//   } catch (err) {
//     console.error('POST /account login error:', err);
//     return new Response('Internal Server Error for login', { status: 500 });
//   }
// }



// //data scrap



// //     const result = await Order.deleteMany(
// //   {},
// //     { $set: { balance:1000} },
// //     { strict: false } 
// // );

// //     console.log("Test JWT update result:", result);

// //   } catch (err) {
// //     console.error('POST /account login error:', err);
// //     return new Response('Internal Server Error for login', { status: 500 });
// //   }
// // }
