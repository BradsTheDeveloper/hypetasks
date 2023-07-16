import { redirect } from '@sveltejs/kit';
import { page } from '$app/stores';

let authenticate = false;

export function load() {
    if (authenticate) {
        throw redirect(307, '/auth');
    }
}
