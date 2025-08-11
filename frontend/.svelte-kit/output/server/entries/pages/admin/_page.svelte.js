import { b as attr, p as pop, a as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  $$payload.out += `<main><form><div><label for="email">Email:</label> <input id="email" type="email"${attr("value", email)} required/></div> <div><label for="password">Password:</label> <input id="password" type="password"${attr("value", password)} required/></div> <div><button type="submit">Sign In</button></div></form> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
