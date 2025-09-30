import { S as SECRET } from "./private.js";
import jwt from "jsonwebtoken";
const handle = async ({ event, resolve }) => {
  let token = event.request.headers.get("Authorization");
  if (token) {
    token = token.replace("Bearer ", "");
    console.log("Token received: ", token);
    try {
      const user = jwt.verify(token, SECRET);
      console.log("User from token: ", user);
      event.locals.user = user;
    } catch (error) {
      console.error("JWT verification failed:", error.message);
      event.locals.user = null;
    }
  } else {
    event.locals.user = null;
  }
  return resolve(event);
};
export {
  handle
};
