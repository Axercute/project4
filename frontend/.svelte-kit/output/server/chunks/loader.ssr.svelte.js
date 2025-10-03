import "clsx";
import { k as key } from "./loader.ssr.svelte2.js";
import { currentCatalog } from "wuchale/load-utils/server";
const get = (loadID) => currentCatalog(key, loadID);
export {
  get as g
};
