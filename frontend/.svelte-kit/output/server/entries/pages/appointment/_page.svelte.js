import { c as ensure_array_like, d as attr_class, e as escape_html, p as pop, a as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let choices = [];
  let selectedChoice;
  let dateMenu = [];
  const each_array = ensure_array_like(choices);
  const each_array_1 = ensure_array_like(dateMenu);
  $$payload.out += `<div class="flex flex-wrap justify-center mt-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let element = each_array[$$index];
    $$payload.out += `<div${attr_class(`px-4 py-2 font-semibold bg-red-400 border border-black text-white
                ${selectedChoice === element ? "bg-red-800" : "text-red-800"}`)}>${escape_html(element)}</div>`;
  }
  $$payload.out += `<!--]--></div> <div class="w-full flex justify-center px-4"><div class="w-full max-w-4xl flex flex-col gap-4 mt-5"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let element = each_array_1[$$index_1];
    $$payload.out += `<div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow"><div class="mb-1 text-lg font-bold">${escape_html(element.name)}</div> <div class="mb-2 text-sm">${escape_html(element.time)}</div> <div class="text-right text-md font-bold">Total price roughly: $${escape_html(element.price.toFixed(2))}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
