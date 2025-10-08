import { e as ensure_array_like, a as attr_class } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const contactUsInfo = [
      {
        address: "Maxwell Branch Address: 272, South Bridge Road, S058821 (Next to Buddha Tooth Relic Temple)",
        phone: "6582881687",
        branch: "Main Branch",
        googleMap: "https://www.google.com/maps/place/Edward+TCM+%E7%88%B1%E5%BE%B7%E4%B8%AD%E5%8C%BB/@1.2817537,103.8423045,17z/data=!3m1!4b1!4m6!3m5!1s0x31da19a1c11ca0b7:0x4e45a799b9824a76!8m2!3d1.2817537!4d103.8448794!16s%2Fg%2F11khmn1jy8?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        address: "Tanjong Pagar Branch Address: 73 Tras St, #01-01, S079012 (Next to Tanjong Pagar MRT)",
        phone: "6563203959",
        branch: "Sub Branch",
        googleMap: "https://www.google.com/maps/place/Edward+TCM+%E7%88%B1%E5%BE%B7%E4%B8%AD%E5%8C%BB/@1.2775362,103.8417694,17z/data=!3m1!4b1!4m6!3m5!1s0x31da19a0f2d0f4f5:0xff2340e8034b23ee!8m2!3d1.2775362!4d103.8443443!16s%2Fg%2F11xkphhlq6?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
      }
    ];
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
    filterMenu(choices[0]);
    $$renderer2.push(`<div class="flex flex-wrap justify-center mt-3"><!--[-->`);
    const each_array = ensure_array_like(choices);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let element = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`px-4 py-2 font-semibold bg-red-400 border border-black text-white
  ${selectedChoice === element ? "bg-red-800" : "text-red-800"} hover:cursor-pointer hover:bg-red-500`)}>${escape_html(element)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="bg-gradient-to-br from-[#7d1b1f] to-red-700 p-2 flex-center flex-col w-[75%] mx-auto mt-50 rounded-2xl outline-2 outline-black shadow-2xl shadow-cyan-800 md:w-2/3 xl:w-1/2"><div class="flex font-semibold text-white text-2xl text-center m-2">Our Clinic</div> <div class="flex font-semibold text-white text-center md:text-md m-2">Opening Hours：10am-10pm everyday</div> <!--[-->`);
    const each_array_1 = ensure_array_like(displayMenu);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let element = each_array_1[$$index_1];
      $$renderer2.push(`<div class="flex font-semibold text-white text-center m-2">${escape_html(element.address)}</div> <a${attr("href", `https://wa.me/${element.phone}?text=I would like to ask if you have...`)} target="_blank" class="bg-white rounded-md hover:bg-green-400 p-2 m-2">Click here to chat with us</a> <a${attr("href", element.googleMap)} target="_blank" class="bg-white mt-1 rounded-md hover:bg-green-400 p-2 m-2">Click to our branch</a>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
