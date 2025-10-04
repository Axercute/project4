import { e as ensure_array_like } from "../../../../chunks/index2.js";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../../../chunks/loader.ssr.svelte.js";
import { R as Runtime } from "../../../../chunks/runtime.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import { e as escape_html } from "../../../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import "../../../../chunks/client.js";
import { DateTime } from "luxon";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const _w_runtime_ = _w_to_rt_(get("main"));
    let arrayOfTreatments = [];
    let { data } = $$props;
    if (data.appointment.standardTreatment) {
      arrayOfTreatments.push(data.appointment.standardTreatment);
    }
    if (data.appointment.packagedTreatment) {
      arrayOfTreatments.push(data.appointment.packagedTreatment);
    }
    if (data.appointment.wellnessProgramme) {
      arrayOfTreatments.push(data.appointment.wellnessProgramme);
    }
    if (data) {
      let _w_snippet_0 = function($$renderer3) {
        $$renderer3.push(`<span class="font-semibold text-green-400">${escape_html(DateTime.fromISO(data.appointment.date).toFormat("dd MMMM yyyy"))}</span>`);
      }, _w_snippet_1 = function($$renderer3) {
        $$renderer3.push(`<span class="font-semibold text-green-400">${escape_html(data.appointment.time)}</span>`);
      };
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-center items-center min-h-screen"><div class="bg-[#7d1b1f] p-6 shadow-lg rounded-2xl space-y-5"><div class="text-2xl font-semibold text-white">`);
      Runtime($$renderer2, { x: _w_runtime_.cx(39), a: [data.appointment.name] });
      $$renderer2.push(`<!----></div> <div class="text-xl text-white font-semibold">`);
      Runtime($$renderer2, { t: [_w_snippet_0, _w_snippet_1], x: _w_runtime_.cx(40) });
      $$renderer2.push(`<!----></div> <div><h3 class="text-xl font-semibold text-white mb-2">${escape_html(_w_runtime_.t(41))}</h3> <ol class="list-decimal list-inside text-green-400"><!--[-->`);
      const each_array = ensure_array_like(arrayOfTreatments);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let element = each_array[$$index];
        $$renderer2.push(`<li>${escape_html(element)}</li>`);
      }
      $$renderer2.push(`<!--]--></ol></div> `);
      if (data.appointment.extraComments) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="font-semibold text-xl text-white">${escape_html(_w_runtime_.t(42))}</div> <div class="font-semibold text-white">${escape_html(data.appointment.extraComments)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <button class="text-black flex-center bg-green-400 hover:bg-green-800">${escape_html(_w_runtime_.t(43))}</button></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex justify-center items-center min-h-screen bg-gray-50"><p class="text-gray-500 text-lg animate-pulse">${escape_html(_w_runtime_.t(44))}</p></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
