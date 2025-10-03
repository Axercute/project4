import { registerLoaders, defaultCollection } from "wuchale/load-utils";
import "clsx";
const locales = ["en", "zh", "th"];
const catalogs$1 = { main: { en: () => import("../../chunks/loader.svelte.js"), zh: () => import("../../chunks/loader.svelte2.js"), th: () => import("../../chunks/loader.svelte3.js") } };
const loadCatalog = (loadID, locale) => catalogs$1[loadID][locale]();
const loadIDs = ["main"];
const key = "main";
const catalogs = {};
registerLoaders(key, loadCatalog, loadIDs, defaultCollection(catalogs));
const load = async ({ url }) => {
  const locale = url.searchParams.get("locale") ?? "en";
  if (!locales.includes(locale)) {
    return;
  }
  return { locale };
};
export {
  load
};
