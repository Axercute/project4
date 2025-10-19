
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/admin" | "/admin/login" | "/admin/login/customers" | "/admin/login/customers/[appointmentId]" | "/admin/login/services" | "/admin/login/staff" | "/api" | "/api/appointment" | "/api/appointment/[appointmentId]" | "/api/dataInput" | "/api/login" | "/api/login/profileUpdate" | "/api/protection" | "/api/service" | "/api/service/[serviceId]" | "/booking" | "/booking/[appointmentId]" | "/contactUs" | "/pricing" | "/test";
		RouteParams(): {
			"/admin/login/customers/[appointmentId]": { appointmentId: string };
			"/api/appointment/[appointmentId]": { appointmentId: string };
			"/api/service/[serviceId]": { serviceId: string };
			"/booking/[appointmentId]": { appointmentId: string }
		};
		LayoutParams(): {
			"/": { appointmentId?: string; serviceId?: string };
			"/admin": { appointmentId?: string };
			"/admin/login": { appointmentId?: string };
			"/admin/login/customers": { appointmentId?: string };
			"/admin/login/customers/[appointmentId]": { appointmentId: string };
			"/admin/login/services": Record<string, never>;
			"/admin/login/staff": Record<string, never>;
			"/api": { appointmentId?: string; serviceId?: string };
			"/api/appointment": { appointmentId?: string };
			"/api/appointment/[appointmentId]": { appointmentId: string };
			"/api/dataInput": Record<string, never>;
			"/api/login": Record<string, never>;
			"/api/login/profileUpdate": Record<string, never>;
			"/api/protection": Record<string, never>;
			"/api/service": { serviceId?: string };
			"/api/service/[serviceId]": { serviceId: string };
			"/booking": { appointmentId?: string };
			"/booking/[appointmentId]": { appointmentId: string };
			"/contactUs": Record<string, never>;
			"/pricing": Record<string, never>;
			"/test": Record<string, never>
		};
		Pathname(): "/" | "/admin" | "/admin/" | "/admin/login" | "/admin/login/" | "/admin/login/customers" | "/admin/login/customers/" | `/admin/login/customers/${string}` & {} | `/admin/login/customers/${string}/` & {} | "/admin/login/services" | "/admin/login/services/" | "/admin/login/staff" | "/admin/login/staff/" | "/api" | "/api/" | "/api/appointment" | "/api/appointment/" | `/api/appointment/${string}` & {} | `/api/appointment/${string}/` & {} | "/api/dataInput" | "/api/dataInput/" | "/api/login" | "/api/login/" | "/api/login/profileUpdate" | "/api/login/profileUpdate/" | "/api/protection" | "/api/protection/" | "/api/service" | "/api/service/" | `/api/service/${string}` & {} | `/api/service/${string}/` & {} | "/booking" | "/booking/" | `/booking/${string}` & {} | `/booking/${string}/` & {} | "/contactUs" | "/contactUs/" | "/pricing" | "/pricing/" | "/test" | "/test/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/carousel/picture1.jpg" | "/carousel/picture2.jpg" | "/carousel/picture3.jpg" | "/carousel/picture4.jpg" | "/favicon.svg" | "/logo.png" | "/logo2.jpg" | "/mainlogo.png" | "/problems/problem1.jpg" | "/problems/problem10.jpg" | "/problems/problem11.jpg" | "/problems/problem12.jpg" | "/problems/problem2.jpg" | "/problems/problem3.jpg" | "/problems/problem4.jpg" | "/problems/problem5.jpg" | "/problems/problem6.jpg" | "/problems/problem7.jpg" | "/problems/problem8.jpg" | "/problems/problem9.jpg" | "/README/newWebIpad.png" | "/README/newWebPhone.png" | "/README/newWebWeb.png" | "/README/oldWeb.png" | "/treatments/treatment1.jpg" | "/treatments/treatment2.jpg" | "/treatments/treatment3.jpg" | "/treatments/treatment4.jpg" | "/treatments/treatment5.jpg" | "/treatments/treatment6.jpg" | "/treatments/treatment7.jpg" | "/treatments/treatment8.jpg" | "/tuina.jpg" | "/tuipic.jpg" | string & {};
	}
}