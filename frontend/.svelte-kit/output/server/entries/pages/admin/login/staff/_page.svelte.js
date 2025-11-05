import { e as ensure_array_like } from "../../../../../chunks/index2.js";
import { e as escape_html } from "../../../../../chunks/escaping.js";
function _page($$renderer) {
  let workers = [{ name: "john" }, { name: "Jackson" }];
  $$renderer.push(`<div class="flex-center"><div class="rounded-2xl flex flex-col m-2 font-semibold bg-webpink border border-white text-white justify-center overflow-hidden w-full md:w-150 xl:w-250 bg-[#7d1b1f]"><div class="flex flex-col justify-center p-2"><div class="font-bold text-2xl">Worker Management</div> <div class="w-full flex justify-center px-4"><div class="w-full max-w-4xl flex flex-col gap-4 mt-5"><!--[-->`);
  const each_array = ensure_array_like(workers);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let element = each_array[$$index];
    $$renderer.push(`<div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow hover:bg-red-500 hover:cursor-pointer"><div class="mb-1 text-lg font-bold">${escape_html(element.name)}</div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></div>`);
}
export {
  _page as default
};
