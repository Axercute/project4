import { a as attr, e as ensure_array_like } from "../../../chunks/index2.js";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../../chunks/loader.ssr.svelte.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const _w_runtime_ = _w_to_rt_(get("main"));
    let formSubmission = { staffName: "", pin: ["", "", "", "", "", ""] };
    $$renderer2.push(`<div class="h-screen justify-center items-center flex"><form class="bg-gradient-to-br from-[#7d1b1f] to-red-700 flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2 md:w-1/3"><div class="text-white m-2 font-semibold text-center">${escape_html(_w_runtime_.t(77))}</div> <div><label for="staffName" class="text-white">${escape_html(_w_runtime_.t(78))}</label> <input id="staffName" type="name"${attr("value", formSubmission.staffName)} required/></div> <label for="pin" class="text-white">${escape_html(_w_runtime_.t(82))}</label> <div class="flex gap-2"><!--[-->`);
    const each_array = ensure_array_like(formSubmission.pin);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<input type="password" maxlength="1" inputmode="numeric" placeholder="•"${attr("value", formSubmission.pin[i])} class="w-7 h-7 text-3xl text-center rounded-lg border" required/>`);
    }
    $$renderer2.push(`<!--]--></div> <div><button class="text-black bg-white hover:bg-green-400" type="submit">${escape_html(_w_runtime_.t(18))}</button></div></form></div>`);
  });
}
export {
  _page as default
};
