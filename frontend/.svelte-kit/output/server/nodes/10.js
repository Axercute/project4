

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/service-management/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.D2ayJ2-V.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js"];
export const stylesheets = ["_app/immutable/assets/10.tn0RQdqM.css"];
export const fonts = [];
