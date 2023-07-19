<script>
    import { Circle3, Firework } from 'svelte-loading-spinners';
    import { randomTip } from '../stores';
	import { page, navigating } from '$app/stores';

    //export let openLoadingScreen = false;

</script>

{#if $navigating}
    <div id="loadingScreen">
        <Firework size="60" color="#FF3E00" unit="px" duration="2s" />
        <p id="tip">Tip: {randomTip}</p>
    </div>
{/if}

<style>
    #loadingScreen {
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: white;
        z-index: 99;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #tip {
        position: fixed;
        bottom: 0;
        filter: opacity(0.5);
    }
</style>