import { d as attr_class, e as escape_html, f as bind_props, h as copy_payload, i as assign_payload, p as pop, a as push, c as ensure_array_like, b as attr } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { f as fallback } from "../../../chunks/equality.js";
import dayjs from "dayjs";
const service = {
  consultation: [
    { english_name: "First", chinese_name: "初诊", description: "first", price: 28 },
    { english_name: "Follow-up", chinese_name: "复诊", description: "followup", price: 18 }
  ]
};
function SelectionBar($$payload, $$props) {
  let value = $$props["value"];
  let selected = $$props["selected"];
  let options = fallback($$props["options"], () => [], true);
  $$payload.out += `<div class="w-50 mx-auto relative"><div${attr_class(`w-full px-4 py-2 border rounded text-center hover:cursor-pointer ${`bg-white`}`)}>${escape_html(selected)}</div> <div class="relative">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { value, selected, options });
}
function SelectionBarTreatment($$payload, $$props) {
  let value = $$props["value"];
  let selected = $$props["selected"];
  let options = fallback($$props["options"], () => [], true);
  $$payload.out += `<div class="w-50 mx-auto relative"><div${attr_class(`w-full px-4 py-2 border rounded text-center hover:cursor-pointer ${`bg-white`}`)}>${escape_html(selected)}</div> <div class="relative">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { value, selected, options });
}
let today = dayjs();
let days = 14;
let endHour = 21;
let openHour = 10;
let dateStart = today.hour() >= endHour ? today.add(1, "day") : today;
let dateRange = [];
for (let i = 0; i <= days; i++) {
  dateRange.push(dateStart.add(i, "day").format("D MMMM YYYY"));
}
let start;
if (today.hour() >= endHour) {
  start = today.add(1, "day").hour(openHour).minute(0).second(0);
} else {
  start = today.minute() === 0 && today.second() === 0 ? today : today.add(1, "hour").startOf("hour");
  if (start.hour() < openHour) {
    start = start.hour(openHour).minute(0).second(0);
  }
}
let timeRange = [];
while (start.hour() <= endHour) {
  timeRange.push(start.format("h A"));
  start = start.add(1, "hour");
}
let dateTitle = "Date of visit";
let timeTitle = "Time of visit";
function _page($$payload, $$props) {
  push();
  let name = "";
  let loyaltyCheck = service.consultation[0];
  let appointmentDate = "";
  let appointmentTime = "";
  let standardTreatment = [];
  let standardTreatmentSelected = { english_name: "", starting_price: "0" };
  let wellnessProgramme = [];
  let wellnessProgrammeSelected = { english_name: "", starting_price: "0" };
  let packagedTreatment = [];
  let packagedTreatmentSelected = { english_name: "", starting_price: "0" };
  let standardTreatmentEnglishName = standardTreatmentSelected.english_name;
  let standardTreatmentPrice = Number(standardTreatmentSelected.starting_price);
  let wellnessProgrammeEnglishName = wellnessProgrammeSelected.english_name;
  let wellnessProgrammePrice = Number(wellnessProgrammeSelected.starting_price);
  let packagedTreatmentEnglishName = packagedTreatmentSelected.english_name;
  let packagedTreatmentPrice = Number(packagedTreatmentSelected.starting_price);
  let price = loyaltyCheck.price + standardTreatmentPrice + wellnessProgrammePrice + packagedTreatmentPrice;
  let additionalRequest = "";
  `This is ${name}, I would like to book a treatment at around $${price.toFixed(2)} on ${appointmentDate} at ${appointmentTime}.
 The treatment I am looking for is / are ${standardTreatmentEnglishName ? standardTreatmentEnglishName : ""}, ${wellnessProgrammeEnglishName ? wellnessProgrammeEnglishName : ""},${packagedTreatmentEnglishName ? packagedTreatmentEnglishName : ""},${""}
 `;
  let submissionLogic = {
    loyaltyPrice: Number(loyaltyCheck.price),
    name,
    date: appointmentDate,
    time: appointmentTime,
    treatments: [
      { english_name: standardTreatmentEnglishName },
      { english_name: wellnessProgrammeEnglishName },
      { english_name: packagedTreatmentEnglishName }
    ],
    extraComments: additionalRequest,
    price: Number(price)
  };
  JSON.stringify(submissionLogic);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(service.consultation);
    $$payload2.out += `<div class="h-screen justify-center items-center flex"><form method="POST" class="bg-gradient-to-br from-[#7d1b1f] to-red-700 flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2 md:w-1/3"><div class="text-xl font-semibold text-[#E8C6A0]">Consultation</div> <div class="flex flex-row space-x-10"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let element = each_array[$$index];
      $$payload2.out += `<label class="- hover:cursor-pointer"><input type="radio"${attr("checked", loyaltyCheck === element, true)}${attr("value", element)} class="mt-2"/> ${escape_html(element.english_name)}</label>`;
    }
    $$payload2.out += `<!--]--></div> <div><label for="first_name" class="mb-2">Your name</label> <input type="text" id="first_name" placeholder="John" class="text-center"${attr("value", name)} required/></div> `;
    SelectionBar($$payload2, {
      options: dateRange,
      selected: dateTitle,
      get value() {
        return appointmentDate;
      },
      set value($$value) {
        appointmentDate = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    SelectionBar($$payload2, {
      options: timeRange,
      selected: timeTitle,
      get value() {
        return appointmentTime;
      },
      set value($$value) {
        appointmentTime = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="text-[#E8C6A0] font-semibold text-xl">Standard Treatment</div> `;
    SelectionBarTreatment($$payload2, {
      options: standardTreatment,
      selected: "Select only if required",
      get value() {
        return standardTreatmentSelected;
      },
      set value($$value) {
        standardTreatmentSelected = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="text-[#E8C6A0] font-semibold text-xl">TCM Wellness Program</div> `;
    SelectionBarTreatment($$payload2, {
      options: wellnessProgramme,
      selected: "Select only if required",
      get value() {
        return wellnessProgrammeSelected;
      },
      set value($$value) {
        wellnessProgrammeSelected = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="text-[#E8C6A0] font-semibold text-xl">Packaged Treatment</div> `;
    SelectionBarTreatment($$payload2, {
      options: packagedTreatment,
      selected: "Select only if required",
      get value() {
        return packagedTreatmentSelected;
      },
      set value($$value) {
        packagedTreatmentSelected = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="text-[#E8C6A0] font-semibold text-xl text-outline">Cost Estimated: $${escape_html(price.toFixed(2))}</div> <label for="additional">Additional request</label> <textarea id="additional" placeholder="I would like a tui na with the massage together please" class="bg-white rounded flex mb-2 border-2 border-transparent focus:border-emerald-900 focus:outline-none focus:border-2 focus-within:bg-amber-400 font-semibold h-20 w-50">`;
    const $$body = escape_html(additionalRequest);
    if ($$body) {
      $$payload2.out += `${$$body}`;
    }
    $$payload2.out += `</textarea> <button type="submit" class="bg-white hover:bg-green-400 px-10">Submit</button></form></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
