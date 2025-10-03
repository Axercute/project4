import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BNH2Nygb.js","_app/immutable/chunks/Z1p_42fb.js","_app/immutable/chunks/BEkSORZj.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BBSKMz3a.js","_app/immutable/chunks/P19TJbWa.js","_app/immutable/chunks/CzxQCzQV.js","_app/immutable/chunks/HWxsBB0O.js","_app/immutable/chunks/BAmH0UmU.js","_app/immutable/chunks/C4tdoe33.js","_app/immutable/chunks/C7aZnQgO.js","_app/immutable/chunks/DK4Rk4Oo.js","_app/immutable/chunks/DDViNi8q.js","_app/immutable/chunks/CI3T1TjT.js"];
export const stylesheets = ["_app/immutable/assets/0.4JTcimeC.css"];
export const fonts = [];
