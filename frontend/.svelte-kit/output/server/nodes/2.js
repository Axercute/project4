import * as server from '../entries/pages/admin/login/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/login/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.BUbfh8A5.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DGYHhCVK.js","_app/immutable/chunks/Chg5b-Du.js"];
export const stylesheets = [];
export const fonts = [];
