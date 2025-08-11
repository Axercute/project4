import { c as ensure_array_like, d as attr_class, e as escape_html, b as attr, p as pop, a as push } from "../../../chunks/index.js";
import { c as contactUsInfo } from "../../../chunks/navBarInfo.js";
function _page($$payload, $$props) {
  push();
  let choices = [
    ...new Set(contactUsInfo.map((element) => {
      return element.branch;
    }))
  ];
  let selectedChoice = choices[0];
  let displayMenu = [];
  const filterMenu = (branch) => {
    selectedChoice = branch;
    displayMenu = contactUsInfo.filter((element) => element.branch === selectedChoice);
  };
  filterMenu(selectedChoice);
  const each_array = ensure_array_like(choices);
  const each_array_1 = ensure_array_like(displayMenu);
  $$payload.out += `<div class="flex flex-wrap justify-center mt-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let element = each_array[$$index];
    $$payload.out += `<div${attr_class(`px-4 py-2 font-semibold bg-red-400 border border-black text-white
                ${selectedChoice === element ? "bg-red-800" : "text-red-800"} hover:cursor-pointer hover:bg-red-500`)}>${escape_html(element)}</div>`;
  }
  $$payload.out += `<!--]--></div> <div class="bg-gradient-to-br from-[#7d1b1f] to-red-700 p-2 flex-center flex-col w-[75%] mx-auto mt-50 rounded-2xl outline-2 outline-black shadow-2xl shadow-cyan-800 md:w-1/3"><section>Our Clinics</section> <section>Opening Hours：10am-10pm everyday</section> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let element = each_array_1[$$index_1];
    $$payload.out += `<section>${escape_html(element.address)}</section> <a${attr("href", `https://wa.me/${element.phone}?text=I would like to ask if you have...`)} target="_blank" class="bg-amber-200 p-2 rounded-xl hover:bg-amber-600">Click here to chat with us</a> <a${attr("href", element.googleMap)} target="_blank" class="bg-amber-200 p-2 mt-1 rounded-xl hover:bg-amber-600">Click to our branch</a>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
