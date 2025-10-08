import { e as ensure_array_like } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import "../../../../chunks/client.js";
import { DateTime } from "luxon";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
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
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-center items-center min-h-screen"><div class="bg-[#7d1b1f] p-6 shadow-lg rounded-2xl space-y-5"><div class="text-2xl font-semibold text-white">Hi ${escape_html(data.appointment.name)},</div> <div class="text-xl text-white font-semibold">You have an upcoming appointment on <span class="font-semibold text-green-400">${escape_html(DateTime.fromISO(data.appointment.date).toFormat("dd MMMM yyyy"))}</span> at <span class="font-semibold text-green-400">${escape_html(data.appointment.time)}</span>.</div> <div><h3 class="text-xl font-semibold text-white mb-2">Treatments booked:</h3> <ol class="list-decimal list-inside text-green-400"><!--[-->`);
      const each_array = ensure_array_like(arrayOfTreatments);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let element = each_array[$$index];
        $$renderer2.push(`<li>${escape_html(element)}</li>`);
      }
      $$renderer2.push(`<!--]--></ol></div> `);
      if (data.appointment.extraComments) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="font-semibold text-xl text-white">You have also requested...</div> <div class="font-semibold text-white">${escape_html(data.appointment.extraComments)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <button class="text-black flex-center bg-green-400 hover:bg-green-800">Return to main site</button></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex justify-center items-center min-h-screen bg-gray-50"><p class="text-gray-500 text-lg animate-pulse">Loading your appointment...</p></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
