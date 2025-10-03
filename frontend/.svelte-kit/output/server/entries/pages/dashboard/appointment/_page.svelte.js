import { e as ensure_array_like, a as attr_class } from "../../../../chunks/index2.js";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../../../chunks/loader.ssr.svelte.js";
import { R as Runtime } from "../../../../chunks/runtime.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const _w_runtime_ = _w_to_rt_(get("main"));
    let choices = [];
    let selectedChoice;
    let dateMenu = [];
    $$renderer2.push(`<div class="flex flex-wrap justify-center mt-3"><!--[-->`);
    const each_array = ensure_array_like(choices);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let element = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`px-4 py-2 font-semibold bg-red-400 border border-black text-white hover:cursor-pointer
                ${selectedChoice === element ? "bg-red-800" : "text-red-800"} hover:cursor-pointer hover:bg-red-500`)}>${escape_html(element)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="w-full flex justify-center px-4"><div class="w-full max-w-4xl flex flex-col gap-4 mt-5"><!--[-->`);
    const each_array_1 = ensure_array_like(dateMenu);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let element = each_array_1[$$index_1];
      $$renderer2.push(`<div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow hover:bg-red-500 hover:cursor-pointer"><div class="mb-1 text-lg font-bold">${escape_html(element.name)}</div> <div class="mb-2 text-sm">${escape_html(element.time)}</div> <div class="text-right text-md font-bold">`);
      Runtime($$renderer2, { x: _w_runtime_.cx(46), a: [element.price.toFixed(2)] });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
