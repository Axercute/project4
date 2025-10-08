import * as server from '../entries/pages/admin/login/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/login/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.CXjfOext.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CJVsommG.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BfhPO6Kz.js"];
export const stylesheets = [];
export const fonts = [];
