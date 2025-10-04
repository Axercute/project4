import { b as attr_class } from "../../../chunks/index2.js";
import _w_to_rt_ from "wuchale/runtime";
import { g as get } from "../../../chunks/loader.ssr.svelte.js";
import { DateTime } from "luxon";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const _w_runtime_ = _w_to_rt_(get("main"));
    let today = DateTime.now();
    let selectedDate = today;
    let firstDayOfThisMonth = DateTime.now().set({ day: 1 });
    const getDays = () => {
      const weekdays = [
        _w_runtime_.t(0),
        _w_runtime_.t(1),
        _w_runtime_.t(2),
        _w_runtime_.t(3),
        _w_runtime_.t(4),
        _w_runtime_.t(5),
        _w_runtime_.t(6)
      ];
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
