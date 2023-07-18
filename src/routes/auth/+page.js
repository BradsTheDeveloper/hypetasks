import { redirect } from '@sveltejs/kit';
import { auth } from "../../initialiseFirebase"
import { onAuthStateChanged } from "firebase/auth";

let authenticated;

if (auth.currentUser) {
  authenticated = true;
} else {
  authenticated = false;
}

export function load() {
    if (authenticated = false) {
        throw redirect(307, '/');
    }
}