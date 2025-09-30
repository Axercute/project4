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
		client: {start:"_app/immutable/entry/start.C8T8OyOh.js",app:"_app/immutable/entry/app.BKasU6mn.js",imports:["_app/immutable/entry/start.C8T8OyOh.js","_app/immutable/chunks/BYU3jfti.js","_app/immutable/chunks/D3iqVyHi.js","_app/immutable/chunks/DLapP2ot.js","_app/immutable/chunks/CELHddUu.js","_app/immutable/entry/app.BKasU6mn.js","_app/immutable/chunks/DLapP2ot.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/D3iqVyHi.js","_app/immutable/chunks/BweEpFzG.js","_app/immutable/chunks/C-9ubGsR.js","_app/immutable/chunks/XPHWj1aj.js","_app/immutable/chunks/CZwoInpx.js","_app/immutable/chunks/CELHddUu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/appointment",
				pattern: /^\/api\/appointment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/appointment/_server.js'))
			},
			{
				id: "/api/appointment/[appointmentId]",
				pattern: /^\/api\/appointment\/([^/]+?)\/?$/,
				params: [{"name":"appointmentId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/appointment/_appointmentId_/_server.js'))
			},
			{
				id: "/api/dataInput",
				pattern: /^\/api\/dataInput\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/dataInput/_server.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/login/_server.js'))
			},
			{
				id: "/api/protection",
				pattern: /^\/api\/protection\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/protection/_server.js'))
			},
			{
				id: "/api/service",
				pattern: /^\/api\/service\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/service/_server.js'))
			},
			{
				id: "/booking",
				pattern: /^\/booking\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/booking/[appointmentId]",
				pattern: /^\/booking\/([^/]+?)\/?$/,
				params: [{"name":"appointmentId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contactUs",
				pattern: /^\/contactUs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dashboard/appointment",
				pattern: /^\/dashboard\/appointment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard/appointment/[appointmentId]",
				pattern: /^\/dashboard\/appointment\/([^/]+?)\/?$/,
				params: [{"name":"appointmentId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dashboard/service-management",
				pattern: /^\/dashboard\/service-management\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
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
