import { writable } from 'svelte/store';

export let role = writable("customer");
export let profilePicture = writable("")