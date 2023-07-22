<svelte:head>
    <title>Home - hypetasks</title>
</svelte:head>

<script>
    import NavSidebar from "../components/NavSidebar.svelte";
    import TabHeader from "../components/TabHeader.svelte";
    import OrganisationBar from "../components/OrganisationBar.svelte";
    import { page } from '$app/stores';
    import { auth, db } from "../initialiseFirebase.js";
    import { addDoc, collection, doc, setDoc } from "firebase/firestore";
    import { onAuthStateChanged } from "firebase/auth"
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
	import LoadingScreen  from "../components/LoadingScreen.svelte";
	import MagicButton from "../components/MagicButton.svelte";

    let userName;
    let loading = true;
    let currentView = ["Current", "fa-solid fa-mountain-sun fa-2xl"];

    onAuthStateChanged(auth, (user) => {
        if (user) {
            userName = user.displayName;
            loading = false;
        }
        else {
            if (browser) {
                window.location.href = '/auth';
            }
        }
    });

    async function fbTest() {
        try {
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                plusActive: false,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

</script>

<MagicButton />
<NavSidebar />
<OrganisationBar />

<main class={loading ? "loading" : ""}>
    <TabHeader name={currentView[0]} icon={currentView[1]}/>
    <p>{userName}</p>
    <button on:click={fbTest}>Test</button>
</main>

<style>
    :global(body) {/*display: flex;*/}

    /* Large screens */
    @media only screen and (min-width: 600px) {}

    /* Small screens */
    @media only screen and (max-width: 600px) {}

</style>
