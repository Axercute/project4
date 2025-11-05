import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { r as role } from "../../../../chunks/globalView.js";
import "js-cookie";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    role.set(data.user.role);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-center"><div class="rounded-2xl flex flex-col m-2 font-semibold bg-webpink border border-white text-white justify-center overflow-hidden w-full md:w-150 xl:w-250 bg-[#7d1b1f]"><div class="flex flex-row w-full"><div class="flex flex-col w-1/2"><img${attr("src", data.user.profilePicture)} alt="StaffPicture" class="h-50 cursor-pointer border-2 xl:h-120 border-black"/></div> <div class="flex flex-col w-1/2 justify-center p-2"><div class="font-bold">Staff Name: ${escape_html(data.user.staffName)}</div> <div class="font-bold">Role: ${escape_html(data.user.role)}</div> <div class="font-bold">Last Checked In:</div> <div class="font-bold">Last Checked Out:</div> <button class="bg-red-400 hover:bg-green-400">Log Out</button></div></div> <button class="bg-red-400 hover:bg-green-400">Check In</button> <button class="bg-red-400 hover:bg-green-400">Check Out</button></div></div>`);
  });
}
export {
  _page as default
};
