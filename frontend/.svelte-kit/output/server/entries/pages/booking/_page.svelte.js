import { a as attr_class, b as bind_props, e as ensure_array_like } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import { a as attr } from "../../../chunks/attributes.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { DateTime } from "luxon";
function SelectionBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, selected, options } = $$props;
    $$renderer2.push(`<div class="w-50 mx-auto relative"><div${attr_class(`w-full px-4 py-2 border rounded text-center hover:cursor-pointer ${`bg-white`}`)}>${escape_html(selected)}</div> <div class="relative">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { value });
  });
}
function Calendar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let today = DateTime.now();
    let selectedDate = today;
    let firstDayOfThisMonth = DateTime.now().set({ day: 1 });
    let { value = void 0 } = $$props;
    const getDays = () => {
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const startWeekday = firstDayOfThisMonth.weekday % 7;
      const daysInMonth = firstDayOfThisMonth.daysInMonth;
      const days = [];
      for (let i = 0; i < startWeekday; i++) days.push("");
      for (let d = 1; d <= daysInMonth; d++) days.push(d);
      return { days, weekdays };
    };
    getDays();
    $$renderer2.push(`<div class="relative"><div${attr_class(`w-50 px-4 py-2 border rounded text-center cursor-pointer ${"bg-white"}`)}>${escape_html(selectedDate.toFormat("dd MMMM yyyy"))}</div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { value });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let formSubmission = {
      loyaltyCheck: "",
      name: "",
      appointmentDate: DateTime.now(),
      appointmentTime: DateTime.now().plus({ hours: 1 }).toFormat("h a"),
      standardTreatmentSelected: { starting_price: 0, english_name: "" },
      wellnessProgrammeSelected: { starting_price: 0, english_name: "" },
      packagedTreatmentSelected: { starting_price: 0, english_name: "" },
      additionalRequest: ""
    };
    formSubmission.loyaltyCheck = data.consultation.find((el) => el.english_name === "First");
    let price = Number(formSubmission.loyaltyCheck.starting_price + formSubmission.standardTreatmentSelected.starting_price + formSubmission.wellnessProgrammeSelected.starting_price + formSubmission.packagedTreatmentSelected.starting_price);
    const openTime = 10;
    const closeTime = 21;
    DateTime.now();
    let appointmentDate = formSubmission.appointmentDate;
    let timeRange = [];
    for (let hour = appointmentDate.hour + 1; hour <= closeTime; hour++) {
      timeRange.push(appointmentDate.set({ hour, minute: 0 }).toFormat("h a"));
    }
    let resetTimeRange = [];
    for (let hour = openTime; hour <= closeTime; hour++) {
      resetTimeRange.push(appointmentDate.set({ hour, minute: 0 }));
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="h-screen justify-center items-center flex"><form method="POST" class="bg-gradient-to-br from-[#7d1b1f] to-red-700 flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2 md:w-1/3"><div class="text-xl font-semibold text-[#E8C6A0]">Consultation</div> `);
      if (!data.consultation) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="lds-dual-ring"></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="flex flex-row space-x-10"><!--[-->`);
        const each_array = ensure_array_like(data.consultation);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let element = each_array[$$index];
          $$renderer3.push(`<label class="- hover:cursor-pointer"><input type="radio"${attr("checked", formSubmission.loyaltyCheck === element, true)}${attr("value", element)} class="mt-2"/> ${escape_html(element.english_name)}</label>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
      $$renderer3.push(`<!--]--> <div><label for="first_name" class="mb-2">Your name</label> <input type="text" id="first_name" placeholder="John" class="text-center"${attr("value", formSubmission.name)} required/></div> `);
      Calendar($$renderer3, {
        get value() {
          return formSubmission.appointmentDate;
        },
        set value($$value) {
          formSubmission.appointmentDate = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      SelectionBar($$renderer3, {
        options: resetTimeRange.map((e) => e.toFormat("h a")),
        selected: formSubmission.appointmentTime,
        get value() {
          return formSubmission.appointmentTime;
        },
        set value($$value) {
          formSubmission.appointmentTime = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="text-[#E8C6A0] font-semibold text-xl">Standard Treatment</div> `);
      SelectionBar($$renderer3, {
        options: data.standardTreatment,
        selected: "Select only if required",
        get value() {
          return formSubmission.standardTreatmentSelected;
        },
        set value($$value) {
          formSubmission.standardTreatmentSelected = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="text-[#E8C6A0] font-semibold text-xl">TCM Wellness Program</div> `);
      SelectionBar($$renderer3, {
        options: data.wellnessProgramme,
        selected: "Select only if required",
        get value() {
          return formSubmission.wellnessProgrammeSelected;
        },
        set value($$value) {
          formSubmission.wellnessProgrammeSelected = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="text-[#E8C6A0] font-semibold text-xl">Packaged Treatment</div> `);
      SelectionBar($$renderer3, {
        options: data.packagedTreatment,
        selected: "Select only if required",
        get value() {
          return formSubmission.packagedTreatmentSelected;
        },
        set value($$value) {
          formSubmission.packagedTreatmentSelected = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="text-[#E8C6A0] font-semibold text-xl text-outline">Cost Estimated: $${escape_html(price.toFixed(2))}</div> <label for="additional">Additional request</label> <textarea id="additional" placeholder="I would like a female masseur" class="bg-white rounded flex mb-2 border-2 border-transparent focus:border-emerald-900 focus:outline-none focus:border-2 focus-within:bg-amber-400 font-semibold h-20 w-50">`);
      const $$body = escape_html(formSubmission.additionalRequest);
      if ($$body) {
        $$renderer3.push(`${$$body}`);
      }
      $$renderer3.push(`</textarea> <button type="submit" class="bg-white hover:bg-green-400 px-10">Submit</button></form></div> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
