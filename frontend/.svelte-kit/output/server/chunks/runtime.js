import { e as ensure_array_like } from "./index2.js";
import { e as escape_html } from "./context.js";
function Runtime($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { n = false, x, t, a } = $$props;
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(x);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let fragment = each_array[i];
      if (typeof fragment === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(fragment)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (typeof fragment === "number") {
          $$renderer2.push("<!--[-->");
          if (!n || i > 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`${escape_html(a[fragment])}`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[!-->");
          const tag = t[fragment[0]];
          if (tag == null) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`[i18n-404:tag]`);
          } else {
            $$renderer2.push("<!--[!-->");
            tag($$renderer2, fragment);
            $$renderer2.push(`<!---->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  Runtime as R
};
