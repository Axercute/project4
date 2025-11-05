export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carousel/picture1.jpg","carousel/picture2.jpg","carousel/picture3.jpg","carousel/picture4.jpg","favicon.svg","logo.png","logo2.jpg","mainlogo.png","problems/problem1.jpg","problems/problem10.jpg","problems/problem11.jpg","problems/problem12.jpg","problems/problem2.jpg","problems/problem3.jpg","problems/problem4.jpg","problems/problem5.jpg","problems/problem6.jpg","problems/problem7.jpg","problems/problem8.jpg","problems/problem9.jpg","README/newWebIpad.png","README/newWebPhone.png","README/newWebWeb.png","README/oldWeb.png","treatments/treatment1.jpg","treatments/treatment2.jpg","treatments/treatment3.jpg","treatments/treatment4.jpg","treatments/treatment5.jpg","treatments/treatment6.jpg","treatments/treatment7.jpg","treatments/treatment8.jpg","tuina.jpg","tuipic.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BVhJqyHf.js",app:"_app/immutable/entry/app.C4unMO0G.js",imports:["_app/immutable/entry/start.BVhJqyHf.js","_app/immutable/chunks/C5d16oRV.js","_app/immutable/chunks/p91XhKJe.js","_app/immutable/chunks/DGYHhCVK.js","_app/immutable/chunks/Bdp7olBi.js","_app/immutable/chunks/Chg5b-Du.js","_app/immutable/chunks/BH3Xntre.js","_app/immutable/chunks/DZA0zNOb.js","_app/immutable/entry/app.C4unMO0G.js","_app/immutable/chunks/DGYHhCVK.js","_app/immutable/chunks/Bdp7olBi.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/p91XhKJe.js","_app/immutable/chunks/Chg5b-Du.js","_app/immutable/chunks/D88P7bS6.js","_app/immutable/chunks/BK7M320b.js","_app/immutable/chunks/C8lKBQ5F.js","_app/immutable/chunks/MM_wp-Kv.js","_app/immutable/chunks/DZA0zNOb.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/login",
				pattern: /^\/admin\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/login/customers",
				pattern: /^\/admin\/login\/customers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/login/customers/[appointmentId]",
				pattern: /^\/admin\/login\/customers\/([^/]+?)\/?$/,
				params: [{"name":"appointmentId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/login/services",
				pattern: /^\/admin\/login\/services\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/login/staff",
				pattern: /^\/admin\/login\/staff\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/api/appointment",
				pattern: /^\/api\/appointment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/appointment/_server.js'))
			},
			{
				id: "/api/appointment/[appointmentId]",
				pattern: /^\/api\/appointment\/([^/]+?)\/?$/,
				params: [{"name":"appointmentId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/appointment/_appointmentId_/_server.js'))
			},
			{
				id: "/api/dataInput",
				pattern: /^\/api\/dataInput\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/dataInput/_server.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/login/_server.js'))
			},
			{
				id: "/api/login/profileUpdate",
				pattern: /^\/api\/login\/profileUpdate\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/login/profileUpdate/_server.js'))
			},
			{
				id: "/api/protection",
				pattern: /^\/api\/protection\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/protection/_server.js'))
			},
			{
				id: "/api/service",
				pattern: /^\/api\/service\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/service/_server.js'))
			},
			{
				id: "/api/service/[serviceId]",
				pattern: /^\/api\/service\/([^/]+?)\/?$/,
				params: [{"name":"serviceId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/service/_serviceId_/_server.js'))
			},
			{
				id: "/booking",
				pattern: /^\/booking\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/booking/[appointmentId]",
				pattern: /^\/booking\/([^/]+?)\/?$/,
				params: [{"name":"appointmentId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/contactUs",
				pattern: /^\/contactUs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
