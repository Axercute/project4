// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
	adapter: adapter({
      runtime: 'nodejs22.x' // valid: nodejs18.x, nodejs20.x, nodejs22.x
    }),
	prerender: {
	entries: ['*'] // prerender all routes
    },
	},
};

export default config;
