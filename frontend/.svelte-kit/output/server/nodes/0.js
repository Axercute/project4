import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BRMe8rGL.js","_app/immutable/chunks/C_W8caPY.js","_app/immutable/chunks/DwOnz62-.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B4_ZOPMU.js","_app/immutable/chunks/BkdSfoMf.js","_app/immutable/chunks/CAz6Opqs.js","_app/immutable/chunks/7a01X8Nl.js","_app/immutable/chunks/CB5iPa1V.js","_app/immutable/chunks/PXTDS45s.js","_app/immutable/chunks/99NWh6zo.js","_app/immutable/chunks/C5785z_Q.js","_app/immutable/chunks/BDAyPlZR.js","_app/immutable/chunks/DCI-deeZ.js","_app/immutable/chunks/-biBc14d.js"];
export const stylesheets = ["_app/immutable/assets/0.BSjSwKPH.css"];
export const fonts = [];
