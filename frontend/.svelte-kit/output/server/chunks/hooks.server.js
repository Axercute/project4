import { p as private_env } from "./shared-server.js";
import jwt from "jsonwebtoken";
import "clsx";
import { k as key, l as loadIDs, a as loadCatalog } from "./loader.ssr.svelte2.js";
import { loadLocales } from "wuchale/load-utils/server";
import "@sveltejs/kit/hooks";
const locales = ["en", "zh", "th"];
const SECRET = private_env.SECRET;
loadLocales(key, loadIDs, loadCatalog, locales);
const middleware = async ({ event, resolve }) => {
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
const handle = middleware;
export {
  handle,
  middleware
};
