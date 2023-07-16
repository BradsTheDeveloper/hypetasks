<svelte:head>
    <title>Home - hypetasks</title>
</svelte:head>

<script>
    import Sidebar from "../components/Sidebar.svelte";
    import { page } from '$app/stores';
    import { auth } from "../initialiseFirebase.js"
    import { onAuthStateChanged } from "firebase/auth"

    let userName;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            userName = user.displayName;
        }
    });
</script>

<Sidebar />

<main>
    <p>{userName}</p>
</main>

<style>
    main {
        margin-left: 5rem;
    }
</style>
