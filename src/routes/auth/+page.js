import { redirect } from '@sveltejs/kit';
import { auth } from "../../initialiseFirebase"
import { onAuthStateChanged } from "firebase/auth";

let authenticated;

onAuthStateChanged(auth, (user) => {
  if (user) {
    authenticated = true;
  } else {
    authenticated = false;
  }
});

export function load() {
    if (authenticated = true) {
        throw redirect(307, '/');
    }
}