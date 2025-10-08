export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [2];

export const dictionary = {
		"/": [3],
		"/admin": [4],
		"/admin/login": [5,[2]],
		"/admin/login/customers": [~6,[2]],
		"/admin/login/customers/[appointmentId]": [7,[2]],
		"/admin/login/service-management": [8,[2]],
		"/admin/login/services": [9,[2]],
		"/admin/login/testing": [10,[2]],
		"/booking": [11],
		"/booking/[appointmentId]": [~12],
		"/contactUs": [13],
		"/pricing": [14],
		"/test": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';