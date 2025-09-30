import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { l as loginStatus } from "../../../chunks/loginStatus.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    loginStatus.set(false);
    let data;
    $$renderer2.push(`<div>Welcome back ${escape_html(data?.user?.email)}</div>`);
  });
}
export {
  _page as default
};
