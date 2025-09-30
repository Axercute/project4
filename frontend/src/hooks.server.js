// import { SECRET } from '$env/static/private';
import { env } from '$env/dynamic/private';
const SECRET=env.SECRET
import jwt from "jsonwebtoken"
export const handle=async({ event, resolve })=> {
    let token = event.request.headers.get("Authorization")
    if (token) {
        token = token.replace("Bearer ", "");
        console.log("Token received: ", token);
        try{
        const user = jwt.verify(token, SECRET);
        console.log("User from token: ", user);
        event.locals.user=user
        }
        catch(error){
        console.error("JWT verification failed:", error.message);
        event.locals.user=null
        }    
    }
    else {
        event.locals.user = null;
    }
  return resolve(event);
}

