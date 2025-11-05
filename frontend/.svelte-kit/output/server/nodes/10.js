import * as universal from '../entries/pages/booking/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/booking/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/booking/+page.js";
export const imports = ["_app/immutable/nodes/10.a1XAerKc.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DGYHhCVK.js","_app/immutable/chunks/Bdp7olBi.js","_app/immutable/chunks/D88P7bS6.js","_app/immutable/chunks/D1Y47qj-.js","_app/immutable/chunks/BaNJaI3l.js","_app/immutable/chunks/jT66NYJA.js","_app/immutable/chunks/C5d16oRV.js","_app/immutable/chunks/p91XhKJe.js","_app/immutable/chunks/Chg5b-Du.js","_app/immutable/chunks/BH3Xntre.js","_app/immutable/chunks/DZA0zNOb.js","_app/immutable/chunks/Bjt-LPLC.js","_app/immutable/chunks/BK7M320b.js","_app/immutable/chunks/C8lKBQ5F.js","_app/immutable/chunks/MM_wp-Kv.js","_app/immutable/chunks/n6HvnmwO.js"];
export const stylesheets = ["_app/immutable/assets/10.i7zvtD3Y.css"];
export const fonts = [];
