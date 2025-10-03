import * as universal from '../entries/pages/booking/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/booking/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/booking/+page.js";
export const imports = ["_app/immutable/nodes/4.Dw2tMu0n.js","_app/immutable/chunks/Z1p_42fb.js","_app/immutable/chunks/BEkSORZj.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/P19TJbWa.js","_app/immutable/chunks/BAmH0UmU.js","_app/immutable/chunks/C4tdoe33.js","_app/immutable/chunks/B6YnJckm.js","_app/immutable/chunks/DK4Rk4Oo.js","_app/immutable/chunks/BBSKMz3a.js","_app/immutable/chunks/CzxQCzQV.js","_app/immutable/chunks/HWxsBB0O.js","_app/immutable/chunks/DDViNi8q.js","_app/immutable/chunks/C7aZnQgO.js","_app/immutable/chunks/dAmLwr0g.js","_app/immutable/chunks/n6HvnmwO.js"];
export const stylesheets = ["_app/immutable/assets/4.i7zvtD3Y.css"];
export const fonts = [];
