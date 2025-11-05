import * as server from '../entries/pages/admin/login/customers/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/login/customers/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/login/customers/+page.server.js";
export const imports = ["_app/immutable/nodes/6.C3bP-rK9.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DGYHhCVK.js","_app/immutable/chunks/Bdp7olBi.js","_app/immutable/chunks/D88P7bS6.js","_app/immutable/chunks/D1Y47qj-.js","_app/immutable/chunks/BaNJaI3l.js","_app/immutable/chunks/Bjt-LPLC.js","_app/immutable/chunks/jT66NYJA.js","_app/immutable/chunks/BH3Xntre.js","_app/immutable/chunks/p91XhKJe.js","_app/immutable/chunks/Chg5b-Du.js","_app/immutable/chunks/DZA0zNOb.js","_app/immutable/chunks/n6HvnmwO.js"];
export const stylesheets = [];
export const fonts = [];
