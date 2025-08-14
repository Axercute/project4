import jwt from "jsonwebtoken"
import { SECRET } from "$env/static/private";

//signs a new JWT with the payload. use a secret key in the env file. it is called when user logs in, to generate a token 
const createJWT=(payload)=> {
    return jwt.sign(
        // data payload
        payload ,
        SECRET, // key (assymetric or symmetric)
        { expiresIn: "24h" }
      );
}
//decode the token, extract the expiry time. returns the expiry timestamp
const getExpiry=(token)=> {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
    const decoded = JSON.parse(decodedJson)
    const exp = decoded.exp;
    return exp
}
//verifies the token using secret key
//returns the decoded payload if valid
//returns null if verification fails (e.g., invalid or expired token).


export {createJWT,getExpiry}