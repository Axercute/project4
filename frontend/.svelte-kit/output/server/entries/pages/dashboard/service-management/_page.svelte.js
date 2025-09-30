import { e as ensure_array_like } from "../../../../chunks/index3.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import { a as attr } from "../../../../chunks/attributes.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredServices;
    let services = [];
    let searchTitle = "";
    let searchCategory = "";
    filteredServices = services.filter((service) => service.english_name.toLowerCase().includes(searchTitle.toLowerCase()) && service.category.toLowerCase().includes(searchCategory.toLowerCase()));
    $$renderer2.push(`<div class="flex justify-end items-center mt-3 mr-4"><a href="#" class="text-red-600 hover:text-red-800">Log Out</a></div> <div class="flex justify-center my-4"><div class="flex flex-col space-y-2 w-full max-w-xs"><input type="text" placeholder="Search by English name"${attr("value", searchTitle)} class="border p-2 rounded svelte-vbl3d1"/> <input type="text" placeholder="Search by category"${attr("value", searchCategory)} class="border p-2 rounded svelte-vbl3d1"/></div></div> <div class="flex justify-center my-3"><button class="px-4 py-2 text-white svelte-vbl3d1">Add New Service</button></div> <div class="container mx-auto py-4 overflow-x-auto"><table class="min-w-full border-collapse border-l border-r border-black"><thead><tr class="bg-gray-100 border-t border-black"><th class="border-b px-4 py-2">Action</th><th class="border-b px-4 py-2">English Name</th><th class="border-b px-4 py-2">Chinese Name</th><th class="border-b px-4 py-2">Category</th><th class="border-b px-4 py-2">Description</th><th class="border-b px-4 py-2">Starting Price</th></tr></thead><tbody><!--[-->`);
    const each_array = ensure_array_like(filteredServices);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let service = each_array[$$index];
      $$renderer2.push(`<tr class="bg-white hover:bg-gray-50"><td class="text-center space-y-2 border-b px-4 py-2"><button class="svelte-vbl3d1">Update</button> <button class="svelte-vbl3d1">Delete</button></td><td class="border-b px-4 py-2 text-center">${escape_html(service.english_name)}</td><td class="border-b px-4 py-2 text-center">${escape_html(service.chinese_name)}</td><td class="border-b px-4 py-2 text-center">${escape_html(service.category)}</td><td class="border-b px-4 py-2 text-center">${escape_html(service.description)}</td><td class="border-b px-4 py-2 text-center">$${escape_html(service.starting_price)}</td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
