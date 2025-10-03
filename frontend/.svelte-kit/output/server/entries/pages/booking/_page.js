import _w_to_rt_ from "wuchale/runtime";
import { currentCatalog } from "wuchale/load-utils/server";
const key = "js";
const get = (loadID) => currentCatalog(key, loadID);
const load = async ({ fetch }) => {
  const _w_runtime_ = _w_to_rt_(get("js"));
  const res = await fetch("/api/service");
  const treatments = await res.json();
  const consultation = treatments.filter((element) => {
    return element.category === "consultation";
  });
  const standardTreatment = treatments.filter((element) => {
    return element.category === _w_runtime_.t(25);
  });
  const wellnessProgramme = treatments.filter((element) => {
    return element.category === _w_runtime_.t(27);
  });
  const packagedTreatment = treatments.filter((element) => {
    return element.category === _w_runtime_.t(76);
  });
  return { consultation, standardTreatment, wellnessProgramme, packagedTreatment };
};
export {
  load
};
