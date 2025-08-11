import * as universal from '../entries/pages/dashboard/_page.js';
import * as server from '../entries/pages/dashboard/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/+page.js";
export { server };
export const server_id = "src/routes/dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/9.Bhr9H4fv.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/EsMjB-o5.js","_app/immutable/chunks/DGUbBfuZ.js","_app/immutable/chunks/EtgRPtOJ.js","_app/immutable/chunks/BODkbvgv.js","_app/immutable/chunks/HldVw0Pv.js","_app/immutable/chunks/DFue-NaN.js","_app/immutable/chunks/KOxa7oZM.js","_app/immutable/chunks/B0lz7bPj.js","_app/immutable/chunks/DDNJlhGV.js"];
export const stylesheets = [];
export const fonts = [];
