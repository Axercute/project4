import "clsx";
import { p as pop, a as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  page.params.appointmentId;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex justify-center items-center min-h-screen bg-gray-50"><p class="text-gray-500 text-lg animate-pulse">Loading your appointment...</p></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
