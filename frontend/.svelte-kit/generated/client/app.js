import * as universal_hooks from '../../../src/hooks.js';

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
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [2,3];

export const dictionary = {
		"/": [4],
		"/admin": [5],
		"/admin/login": [6,[2]],
		"/admin/login/customers": [~7,[2]],
		"/admin/login/customers/[appointmentId]": [8,[2]],
		"/admin/login/services": [~9,[2]],
		"/admin/login/staff": [~10,[2,3]],
		"/booking": [11],
		"/booking/[appointmentId]": [~12],
		"/contactUs": [13],
		"/demo": [14],
		"/pricing": [15],
		"/test": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: universal_hooks.reroute || (() => {}),
	transport: universal_hooks.transport || {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';