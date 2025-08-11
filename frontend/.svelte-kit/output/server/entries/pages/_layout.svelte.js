import "clsx";
import { c as ensure_array_like, e as escape_html, d as attr_class, p as pop, a as push } from "../../chunks/index.js";
import "../../chunks/client.js";
import { n as navBarInfo } from "../../chunks/navBarInfo.js";
function Navbar($$payload, $$props) {
  push();
  const each_array = ensure_array_like(navBarInfo);
  const each_array_1 = ensure_array_like(navBarInfo);
  $$payload.out += `<div class="relative hidden md:flex justify-center items-center bg-gradient-to-br from-[#7d1b1f] to-red-800 sticky top-0 z-10 h-14 px-4"><img src="/mainlogo.png" alt="Tui na" class="h-12 object-contain cursor-pointer align-left absolute top-0 left-0 h-15"/> <div class="hidden md:flex space-x-10 text-white font-semibold text-xl"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { display, path } = each_array[$$index];
    $$payload.out += `<div class="cursor-pointer hover:text-amber-300">${escape_html(display)}</div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="flex justify-end items-center bg-gradient-to-br from-[#7d1b1f] to-red-800 sticky top-0 z-10 h-12 md:hidden"><img src="/mainlogo.png" alt="Tui na" class="w-[15%] h-12 bg-gradient-to-br from-[#7d1b1f] to-red-800 absolute left-0 top-0 z-10 border-3 border-black text-2xl text-white text-center"/> <div class="m-2 w-10 h-8 flex flex-col justify-between cursor-pointer"><span class="block h-1 bg-white rounded"></span> <span class="block h-1 bg-white rounded"></span> <span class="block h-1 bg-white rounded"></span></div></div> <nav${attr_class(`fixed transition-[right] z-11 duration-500 ease-in-out ${"right-0"} md:hidden`)}><div class="flex flex-row text-left font-semibold"><div class="w-6 h-6 mt-5 relative cursor-pointer -right-40"><span class="absolute inset-0 w-full h-1 bg-amber-400 rotate-45 origin-center"></span> <span class="absolute inset-0 w-full h-1 bg-amber-400 -rotate-45 origin-center"></span></div></div> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let { display, path } = each_array_1[$$index_1];
    $$payload.out += `<div class="text-right font-semibold mr-2">${escape_html(display)}</div>`;
  }
  $$payload.out += `<!--]--> <div class="bg-amber-600 m-2 text-white text-right font-semibold">Grand Opening Sale! Consultation + TuiNa + Cupping / Scraping for only $42 <img src="/tuipic.jpg" alt="Tui na" class="w-full mr-3 hover:cursor-pointer"/></div></nav>`;
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  Navbar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
