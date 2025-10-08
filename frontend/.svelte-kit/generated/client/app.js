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
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [2];

export const dictionary = {
		"/": [3],
		"/admin": [4],
		"/admin/login": [5,[2]],
		"/admin/login/appointment": [6,[2]],
		"/admin/login/appointment/[appointmentId]": [7,[2]],
		"/admin/login/services": [8,[2]],
		"/admin/login/testing": [9,[2]],
		"/booking": [10],
		"/booking/[appointmentId]": [11],
		"/contactUs": [12],
		"/dashboard": [~13],
		"/dashboard/appointment": [14],
		"/dashboard/appointment/[appointmentId]": [15],
		"/dashboard/service-management": [16],
		"/pricing": [17],
		"/test": [18]
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