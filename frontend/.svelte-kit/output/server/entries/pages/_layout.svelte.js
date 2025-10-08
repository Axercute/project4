import { e as ensure_array_like, a as attr_class, s as store_get, u as unsubscribe_stores } from "../../chunks/index2.js";
import { r as role } from "../../chunks/globalView.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import "js-cookie";
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { navBarInfo } = $$props;
    $$renderer2.push(`<div class="hidden md:flex justify-center items-center bg-gradient-to-br from-[#7d1b1f] to-red-800 sticky top-0 z-10 h-14 px-4"><img src="/mainlogo.png" alt="Tui na" class="h-12 object-contain cursor-pointer align-left absolute top-0 left-0 h-15"/> <div class="hidden md:flex space-x-10 text-white font-semibold text-xl"><!--[-->`);
    const each_array = ensure_array_like(navBarInfo);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { display, path } = each_array[$$index];
      $$renderer2.push(`<div class="cursor-pointer hover:text-amber-300">${escape_html(display)}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div>  <div class="flex justify-end items-center bg-gradient-to-br from-[#7d1b1f] to-red-800 sticky top-0 z-10 h-12 md:hidden"><img src="/mainlogo.png" alt="Tui na" class="w-[15%] h-12 bg-gradient-to-br from-[#7d1b1f] to-red-800 absolute left-0 top-0 z-10 border-3 border-black text-2xl text-white text-center"/> <div class="m-2 w-10 h-8 flex flex-col justify-between cursor-pointer"><span class="block h-1 bg-white rounded"></span> <span class="block h-1 bg-white rounded"></span> <span class="block h-1 bg-white rounded"></span></div></div> <nav${attr_class(`fixed transition-[right] z-11 duration-500 ease-in-out ${"-right-1/2"} md:hidden`)}><div class="flex flex-row text-left font-semibold"><div class="w-6 h-6 mt-5 relative cursor-pointer -right-40"><span class="absolute inset-0 w-full h-1 bg-amber-400 rotate-45 origin-center"></span> <span class="absolute inset-0 w-full h-1 bg-amber-400 -rotate-45 origin-center"></span></div></div> <!--[-->`);
    const each_array_1 = ensure_array_like(navBarInfo);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let { display, path } = each_array_1[$$index_1];
      $$renderer2.push(`<div class="text-right font-semibold mr-2">${escape_html(display)}</div>`);
    }
    $$renderer2.push(`<!--]--> <div class="bg-amber-600 m-2 text-white text-right font-semibold">Grand Opening Sale! Consultation + TuiNa + Cupping / Scraping for only $42 <img src="/tuipic.jpg" alt="Tui na" class="w-full mr-3 hover:cursor-pointer"/></div></nav>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    const navBarInfo = [
      { display: "Home", path: "" },
      { display: "Booking", path: "booking" },
      { display: "Our Pricing", path: "pricing" },
      { display: "Contact Us", path: "contactUs" }
    ];
    const adminBarInfo = [
      { display: "Profile", path: "admin/login" },
      { display: "Booking", path: "booking" },
      { display: "Services", path: "admin/login/services" },
      { display: "Customers", path: "customers" },
      { display: "Staff", path: "Staff" }
    ];
    Navbar($$renderer2, {
      navBarInfo: store_get($$store_subs ??= {}, "$role", role) === "boss" ? adminBarInfo : navBarInfo
    });
    $$renderer2.push(`<!----> `);
    children($$renderer2);
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
