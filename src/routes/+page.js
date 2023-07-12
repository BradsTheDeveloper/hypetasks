import { redirect } from '@sveltejs/kit';

let authenticate = true;

export function load() {
    if (authenticate) {
        throw redirect(307, '/auth');
    }
}
