import { e as escape_html } from "../../../../../chunks/context.js";
import "clsx";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../../../../chunks/loader.ssr.svelte.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import { p as page } from "../../../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const _w_runtime_ = _w_to_rt_(get("main"));
    page.params.appointmentId;
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex justify-center items-center min-h-screen bg-gray-50"><p class="text-gray-500 text-lg animate-pulse">${escape_html(_w_runtime_.t(44))}</p></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
