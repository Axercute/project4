import { p as private_env } from "./shared-server.js";
import "jsonwebtoken";
import "clsx";
import { k as key, l as loadIDs, a as loadCatalog } from "./loader.ssr.svelte2.js";
import { runWithLocale, loadLocales } from "wuchale/load-utils/server";
import "@sveltejs/kit/hooks";
const locales = ["en", "zh", "th"];
private_env.SECRET;
loadLocales(key, loadIDs, loadCatalog, locales);
const wuchale = async ({ event, resolve }) => {
  const locale = event.url.searchParams.get("locale") ?? "en";
  return await runWithLocale(locale, () => resolve(event));
};
const handle = wuchale;
export {
  handle,
  wuchale
};
