import { redirect } from '@sveltejs/kit';
import { auth } from "../initialiseFirebase"
import { onAuthStateChanged } from "firebase/auth";

let authenticated;

export function load() {
  console.log(auth.currentUser)
  if (auth.currentUser) {} else {
    throw redirect(307, '/auth');
  }
}
