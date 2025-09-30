import { a as attr } from "../../../chunks/attributes.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let email = "";
    let password = "";
    $$renderer2.push(`<div class="h-screen justify-center items-center flex"><form class="bg-gradient-to-br from-[#7d1b1f] to-red-700 flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2 md:w-1/3"><div class="text-white m-2 font-semibold text-center">Pleae enter your admin login details below</div> <div><label for="email" class="text-white">Email:</label> <input id="email" type="email"${attr("value", email)} required/></div> <div><label for="password" class="text-white">Password:</label> <input id="password" type="password"${attr("value", password)} required/></div> <div><button class="text-black bg-white hover:bg-green-400" type="submit">Sign In</button></div></form></div>`);
  });
}
export {
  _page as default
};
