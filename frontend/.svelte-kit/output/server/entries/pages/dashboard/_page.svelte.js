import "clsx";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../../chunks/loader.ssr.svelte.js";
import { R as Runtime } from "../../../chunks/runtime.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { l as loginStatus } from "../../../chunks/loginStatus.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const _w_runtime_ = _w_to_rt_(get("main"));
    loginStatus.set(false);
    let data;
    $$renderer2.push(`<div>`);
    Runtime($$renderer2, { x: _w_runtime_.cx(38), a: [data?.user?.email] });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
