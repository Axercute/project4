import { a as attr, s as store_get, e as ensure_array_like, b as attr_class, u as unsubscribe_stores } from "../../chunks/index2.js";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../chunks/loader.ssr.svelte.js";
import { R as Runtime } from "../../chunks/runtime.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { l as loginStatus } from "../../chunks/loginStatus.js";
import { e as escape_html } from "../../chunks/context.js";
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const _w_runtime_ = _w_to_rt_(get("main"));
    let { navBarInfo } = $$props;
    function _w_snippet_0($$renderer3) {
      $$renderer3.push(`<img src="/tuipic.jpg"${attr("alt", _w_runtime_.t(10))} class="w-full mr-3 hover:cursor-pointer"/>`);
    }
    $$renderer2.push(`<div class="relative hidden md:flex justify-center items-center bg-gradient-to-br from-[#7d1b1f] to-red-800 sticky top-0 z-10 h-14 px-4"><img src="/mainlogo.png"${attr("alt", _w_runtime_.t(10))} class="h-12 object-contain cursor-pointer align-left absolute top-0 left-0 h-15"/> <div class="hidden md:flex space-x-10 text-white font-semibold text-xl">`);
    if (store_get($$store_subs ??= {}, "$loginStatus", loginStatus) === false) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(navBarInfo);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let { display, path } = each_array[$$index];
        $$renderer2.push(`<div class="cursor-pointer hover:text-amber-300">${escape_html(display)}</div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(navBarInfo);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let { display, path } = each_array_1[$$index_1];
        $$renderer2.push(`<div class="cursor-pointer hover:text-amber-300">${escape_html(display)}</div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex justify-end items-center bg-gradient-to-br from-[#7d1b1f] to-red-800 sticky top-0 z-10 h-12 md:hidden"><img src="/mainlogo.png"${attr("alt", _w_runtime_.t(10))} class="w-[15%] h-12 bg-gradient-to-br from-[#7d1b1f] to-red-800 absolute left-0 top-0 z-10 border-3 border-black text-2xl text-white text-center"/> <div class="m-2 w-10 h-8 flex flex-col justify-between cursor-pointer"><span class="block h-1 bg-white rounded"></span> <span class="block h-1 bg-white rounded"></span> <span class="block h-1 bg-white rounded"></span></div></div> <nav${attr_class(`fixed transition-[right] z-11 duration-500 ease-in-out ${"-right-1/2"} md:hidden`)}><div class="flex flex-row text-left font-semibold"><div class="w-6 h-6 mt-5 relative cursor-pointer -right-40"><span class="absolute inset-0 w-full h-1 bg-amber-400 rotate-45 origin-center"></span> <span class="absolute inset-0 w-full h-1 bg-amber-400 -rotate-45 origin-center"></span></div></div> `);
    if (store_get($$store_subs ??= {}, "$loginStatus", loginStatus) === false) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(navBarInfo);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let { display, path } = each_array_2[$$index_2];
        $$renderer2.push(`<div class="text-right font-semibold mr-2">${escape_html(display)}</div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_3 = ensure_array_like(navBarInfo);
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let { display, path } = each_array_3[$$index_3];
        $$renderer2.push(`<div class="text-right font-semibold mr-2">${escape_html(display)}</div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> <div class="bg-amber-600 m-2 text-white text-right font-semibold">`);
    Runtime($$renderer2, { t: [_w_snippet_0], x: _w_runtime_.cx(14) });
    $$renderer2.push(`<!----></div></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  var $$store_subs;
  let { children } = $$props;
  const navBarInfo = [
    { display: "Home", path: "" },
    { display: "Booking", path: "booking" },
    { display: "Our Pricing", path: "pricing" },
    { display: "Contact Us", path: "contactUs" }
  ];
  const adminBarInfo = [
    { display: "Home", path: "" },
    { display: "Service Management", path: "service-management" },
    { display: "Appointment Management", path: "appointment" }
  ];
  if (store_get($$store_subs ??= {}, "$loginStatus", loginStatus) !== null) {
    $$renderer.push("<!--[-->");
    Navbar($$renderer, {
      navBarInfo: store_get($$store_subs ??= {}, "$loginStatus", loginStatus) ? adminBarInfo : navBarInfo
    });
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  children($$renderer);
  $$renderer.push(`<!---->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _layout as default
};
