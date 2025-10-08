import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B-hQx4Cw.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BJDSiOLn.js","_app/immutable/chunks/CJVsommG.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Bvs2wB4v.js","_app/immutable/chunks/BfhPO6Kz.js","_app/immutable/chunks/Cw8APr94.js","_app/immutable/chunks/DYXsEGfn.js","_app/immutable/chunks/DGNCt3uT.js","_app/immutable/chunks/DTXUD98A.js","_app/immutable/chunks/CGsQY4MI.js","_app/immutable/chunks/BYlzNyLa.js","_app/immutable/chunks/Cz0CWeBA.js"];
export const stylesheets = ["_app/immutable/assets/0.o7s6zXkA.css"];
export const fonts = [];
