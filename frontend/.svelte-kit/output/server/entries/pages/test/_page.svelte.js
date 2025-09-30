import { a as attr_class } from "../../../chunks/index3.js";
import { DateTime } from "luxon";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let today = DateTime.now();
    let selectedDate = today;
    let firstDayOfThisMonth = DateTime.now().set({ day: 1 });
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
    $$renderer2.push(`<div class="flex flex-col justify-center items-center min-h-screen"><div class="relative"><div${attr_class(`w-50 px-4 py-2 border rounded text-center cursor-pointer ${"bg-white"}`)}>${escape_html(selectedDate.toFormat("dd MMMM yyyy"))}</div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
