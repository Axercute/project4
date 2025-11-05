import * as server from '../entries/pages/admin/login/services/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/login/services/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/login/services/+page.server.js";
export const imports = ["_app/immutable/nodes/8.D5fGWVtL.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DGYHhCVK.js","_app/immutable/chunks/Bdp7olBi.js","_app/immutable/chunks/D88P7bS6.js","_app/immutable/chunks/D1Y47qj-.js","_app/immutable/chunks/BaNJaI3l.js","_app/immutable/chunks/Bjt-LPLC.js","_app/immutable/chunks/jT66NYJA.js"];
export const stylesheets = [];
export const fonts = [];
