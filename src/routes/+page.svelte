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

    let userName;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            userName = user.displayName;
        }
        else {
            if (browser) {
                window.location.href = '/auth';
            }
        }
    });
</script>


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
    @media only screen and (min-width: 600px) {
        main {
            margin-left: 19rem;
        }
    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        main {
            margin: 1rem;
        }
    }

</style>
