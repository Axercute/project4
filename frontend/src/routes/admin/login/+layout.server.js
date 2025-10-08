import { env } from '$env/dynamic/private';
import { User } from '$lib/server/model/user.js';
import { startMongo } from '$lib/server/db/mongo.js';
import { error } from '@sveltejs/kit';
import jwt from "jsonwebtoken"
const SECRET=env.SECRET
//for jwt check
export const load = async ({cookies,fetch}) => {
try{
    const token = cookies.get('token')
    const jwtDecoded = jwt.verify(token, env.SECRET);
    cookies.set("role", jwtDecoded.role, {
    path: "/",
    httpOnly: false // make it readable by js-cookie
    });
    // if (!token) {
    //   return;
    // }
    await startMongo()
    const userX = await User.findById(jwtDecoded._id).lean();
    console.log(userX)
    const user = {
    ...userX,
    _id: userX._id.toString()//for serialization
};
return { user };
}
    catch(err){
    throw error(501,'not logged in');
}

};


// export const handle=async({ event, resolve })=> {
//     let token = event.request.headers.get("Authorization")
//     if (token) {
//         token = token.replace("Bearer ", "");
//         // console.log("Token received: ", token);
//         try{
//         const user = jwt.verify(token, env.SECRET);
//         // console.log("User from token: ", user);
//         event.locals.user=user
//         }
//         catch(error){
//         console.error("JWT verification failed:", error.message);
//         event.locals.user=null
//         }    
//     }
//     else {
//         event.locals.user = null;
//     }
//   return resolve(event);
// }
