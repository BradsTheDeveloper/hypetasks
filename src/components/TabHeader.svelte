<script>
    export let name;
    export let icon;
</script>

<header>
    <i class={icon}></i>
    <h1>{name}</h1>
</header>

<style>
    header {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        height: 3rem;
        align-items: center;
    }

    header i {
        margin-right: 0.5rem;
    }
    
</style>