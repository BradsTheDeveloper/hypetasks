<svelte:head>
    <title>Home - hypetasks</title>
</svelte:head>

<script>
    import NavSidebar from "../components/NavSidebar.svelte";
    import TabHeader from "../components/TabHeader.svelte";
    import OrganisationBar from "../components/OrganisationBar.svelte";
    import { page } from '$app/stores';
    import { auth } from "../initialiseFirebase.js"
    import { onAuthStateChanged } from "firebase/auth"
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
	import LoadingScreen  from "../components/LoadingScreen.svelte";

    let userName;
    let openLS = true;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            userName = user.displayName;
            openLS = false;
        }
        else {
            if (browser) {
                window.location.href = '/auth';
            }
        }
    });

</script>


<LoadingScreen openLoadingScreen={openLS} />
<NavSidebar />
<OrganisationBar />

<main>
    <TabHeader name="Home" icon="fa-solid fa-house fa-2xl"/>
    <p>{userName}</p>
</main>

<style>
    :global(body) {
        /*display: flex;*/
    }

    /* Large screens */
    @media only screen and (min-width: 600px) {}

    /* Small screens */
    @media only screen and (max-width: 600px) {}

</style>
