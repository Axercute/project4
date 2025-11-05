import { e as ensure_array_like, a as attr_class } from "../../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import { e as escape_html } from "../../../../../chunks/escaping.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import { DateTime } from "luxon";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let choices = data.customers.sort((a, b) => new Date(a.date) - new Date(b.date));
    let uniqueDates = [
      ...new Set(choices.map((element) => DateTime.fromISO(element.date).toFormat("dd MMMM yyyy")))
    ];
    let selectedChoice = uniqueDates[0];
    let filteredMenu = choices.filter((element) => DateTime.fromISO(element.date).toFormat("dd MMMM yyyy") === selectedChoice);
    $$renderer2.push(`<div class="flex flex-wrap justify-center mt-3"><!--[-->`);
    const each_array = ensure_array_like(uniqueDates);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let element = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`px-4 py-2 font-semibold bg-red-400 border border-black text-white hover:cursor-pointer
      ${selectedChoice == element ? "bg-red-800" : "text-red-800"} hover:cursor-pointer hover:bg-red-500`)}>${escape_html(element)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="w-full flex justify-center px-4"><div class="w-full max-w-4xl flex flex-col gap-4 mt-5"><!--[-->`);
    const each_array_1 = ensure_array_like(filteredMenu);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let element = each_array_1[$$index_2];
      $$renderer2.push(`<div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow hover:bg-red-500 hover:cursor-pointer"><div class="mb-1 text-lg font-bold">${escape_html(element.name)}</div> <div class="mb-2 text-sm">${escape_html(element.time)}</div> <ol class="list-decimal list-inside text-green-400"><!--[-->`);
      const each_array_2 = ensure_array_like(element.treatments);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let miniElement = each_array_2[$$index_1];
        $$renderer2.push(`<li>${escape_html(miniElement.english_name)}</li>`);
      }
      $$renderer2.push(`<!--]--></ol> <div class="flex-1 break-words">Comment: ${escape_html(element.extraComments)}</div> <div class="text-right text-md font-bold">Total price roughly: $${escape_html(element.price.toFixed(2))}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
