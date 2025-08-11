import { c as ensure_array_like, e as escape_html, p as pop, a as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let services = [];
  const each_array = ensure_array_like(services);
  $$payload.out += `<table><thead><tr><th>English Name</th><th>Chinese Name</th><th>Category</th><th>Description</th><th>Starting Price</th><th>Action</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$payload.out += `<tr><td>${escape_html(service.english_name)}</td><td>${escape_html(service.chinese_name)}</td><td>${escape_html(service.category)}</td><td>${escape_html(service.description)}</td><td>$${escape_html(service.starting_price)}</td><td><button>Delete</button></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table>`;
  pop();
}
export {
  _page as default
};
