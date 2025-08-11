import { c as ensure_array_like, e as escape_html, d as attr_class, f as bind_props, p as pop, a as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const menu = [
    { display: "Dashboard", path: "dashboard" },
    {
      display: "Service Management",
      path: "service-management"
    },
    {
      display: "Appointment Management",
      path: "appointment-management"
    },
    { display: "View Site", path: "view-site" }
  ];
  let selectedChoice = menu[0];
  const each_array = ensure_array_like(menu);
  $$payload.out += `<main><div class="flex justify-end items-center mt-3 mr-4"><a href="#" class="text-red-600 hover:text-red-800">Log Out</a></div> <h1>Welcome, ${escape_html(data.user?.name || "User")}!</h1> `;
  if (data.message) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-green-500">${escape_html(data.message)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="flex flex-wrap justify-center mt-3 gap-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<div${attr_class(`px-4 py-2 font-semibold bg-red-400 border border-black text-white
                ${selectedChoice === category ? "bg-red-800" : "text-red-800"}`)}>${escape_html(category.display)}</div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
