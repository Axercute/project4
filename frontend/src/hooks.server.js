// import { SECRET } from '$env/static/private';
import { env } from '$env/dynamic/private';
const SECRET=env.SECRET
import jwt from "jsonwebtoken"
import { loadCatalog, loadIDs, key } from './locales/loader.ssr.svelte.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server'
import { locales } from 'virtual:wuchale/locales'
import { sequence } from '@sveltejs/kit/hooks';

loadLocales(key, loadIDs, loadCatalog, locales)

// export const middleware=async({ event, resolve })=> {
//     let token = event.request.headers.get("Authorization")
//     if (token) {
//         token = token.replace("Bearer ", "");
//         console.log("Token received: ", token);
//         try{
//         const user = jwt.verify(token, SECRET);
//         console.log("User from token: ", user);
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

export const wuchale = async ({ event, resolve }) => {
    const locale = event.url.searchParams.get('locale') ?? 'en'
    return await runWithLocale(locale, () => resolve(event))
}

export const handle=wuchale