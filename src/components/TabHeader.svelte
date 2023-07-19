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
        padding-top: 1rem;
        display: flex;
        flex-direction: row;
        height: 3rem;
        align-items: center;
        color: var(--textColor);
    }

    header i {
        margin-right: 0.5rem;
    }
    
</style>