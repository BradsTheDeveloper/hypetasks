<script>
    import OrganisationBar from "../../components/OrganisationBar.svelte";
    import { page } from '$app/stores';
    import { auth } from "../../initialiseFirebase.js";
    import { onAuthStateChanged, signOut } from "firebase/auth";
    import { goto } from '$app/navigation';
	import NavSidebar from "../../components/NavSidebar.svelte";
	import TabHeader from "../../components/TabHeader.svelte";

    function authSignOut() {
        signOut(auth).then(() => {
        goto("/auth")
        }).catch((error) => {
        // An error happened.
        });
    }
</script>

<NavSidebar />
<main>
    <TabHeader name="Settings" icon="fa-solid fa-gear fa-2xl" />
    <button on:click={authSignOut}>Sign Out</button>
</main>