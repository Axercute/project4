import { e as ensure_array_like } from "../../../chunks/index2.js";
import "js-cookie";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import { a as attr } from "../../../chunks/attributes.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import "jwt-decode";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let formSubmission = { staffName: "", pin: ["", "", "", "", "", ""] };
    $$renderer2.push(`<div class="h-screen justify-center items-center flex"><form class="bg-gradient-to-br from-[#7d1b1f] to-red-700 flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2 md:w-1/3"><div class="text-white m-2 font-semibold text-center">Enter your staff name and pin</div> <div><label for="staffName" class="text-white">Staff Name:</label> <input id="staffName" type="name"${attr("value", formSubmission.staffName)} required/></div> <label for="pin" class="text-white">Pin:</label> <div class="flex gap-1"><!--[-->`);
    const each_array = ensure_array_like(formSubmission.pin);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      each_array[index];
      $$renderer2.push(`<input type="password" maxlength="1" inputmode="numeric" placeholder="•"${attr("value", formSubmission.pin[index])} class="w-7 h-7 text-3xl text-center rounded-lg border" required/>`);
    }
    $$renderer2.push(`<!--]--></div> <div><button class="text-black bg-white hover:bg-green-400" type="submit">Sign In</button></div></form></div>`);
  });
}
export {
  _page as default
};
