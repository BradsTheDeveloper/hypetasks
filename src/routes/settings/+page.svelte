<script>
    import OrganisationBar from "../../components/OrganisationBar.svelte";
    import { page } from '$app/stores';
    import { auth } from "../../initialiseFirebase.js";
    import { onAuthStateChanged, signOut } from "firebase/auth";
    import { goto } from '$app/navigation';

    function authSignOut() {
        signOut(auth).then(() => {
        goto("/auth")
        }).catch((error) => {
        // An error happened.
        });
    }
</script>

<button on:click={authSignOut}>Sign Out</button>