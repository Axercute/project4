import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../../chunks/loader.ssr.svelte.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const _w_runtime_ = _w_to_rt_(get("main"));
    let email = "";
    let password = "";
    $$renderer2.push(`<div class="h-screen justify-center items-center flex"><form class="bg-gradient-to-br from-[#7d1b1f] to-red-700 flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2 md:w-1/3"><div class="text-white m-2 font-semibold text-center">${escape_html(_w_runtime_.t(15))}</div> <div><label for="email" class="text-white">${escape_html(_w_runtime_.t(16))}</label> <input id="email" type="email"${attr("value", email)} required/></div> <div><label for="password" class="text-white">${escape_html(_w_runtime_.t(17))}</label> <input id="password" type="password"${attr("value", password)} required/></div> <div><button class="text-black bg-white hover:bg-green-400" type="submit">${escape_html(_w_runtime_.t(18))}</button></div></form></div>`);
  });
}
export {
  _page as default
};
