import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.c_VWIufI.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/p91XhKJe.js","_app/immutable/chunks/DGYHhCVK.js","_app/immutable/chunks/Bdp7olBi.js","_app/immutable/chunks/Chg5b-Du.js","_app/immutable/chunks/MM_wp-Kv.js","_app/immutable/chunks/DZA0zNOb.js","_app/immutable/chunks/WVneRSOm.js","_app/immutable/chunks/D1Y47qj-.js","_app/immutable/chunks/Bjt-LPLC.js","_app/immutable/chunks/C5d16oRV.js","_app/immutable/chunks/BH3Xntre.js","_app/immutable/chunks/Cz0CWeBA.js"];
export const stylesheets = ["_app/immutable/assets/0.C5R1nbHW.css"];
export const fonts = [];
