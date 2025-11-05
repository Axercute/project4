import { p as private_env } from "../../../../chunks/shared-server.js";
import { U as User } from "../../../../chunks/user.js";
import { s as startMongo } from "../../../../chunks/mongo.js";
import { error } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
private_env.SECRET;
const load = async ({ cookies, fetch }) => {
  try {
    const token = cookies.get("token");
    const jwtDecoded = jwt.verify(token, private_env.SECRET);
    cookies.set("role", jwtDecoded.role, {
      path: "/",
      httpOnly: false
      // make it readable by js-cookie
    });
    await startMongo();
    const userX = await User.findById(jwtDecoded._id).lean();
    console.log(userX);
    const user = {
      ...userX,
      _id: userX._id.toString()
      //for serialization
    };
    return { user };
  } catch (err) {
    throw error(501, "not logged in");
  }
};
export {
  load
};
