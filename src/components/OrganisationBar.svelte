<script>
    let defaultSections = [
        ["Current", "fa-solid fa-mountain-sun"],
        ["Tommorow", "fa-solid fa-angles-right"],
        ["This Week", "fa-solid fa-calendar-check"],
        ["All", "fa-solid fa-rectangle-list"],
    ]
</script>


<div id="organisationBar">
    {#each defaultSections as section}
        <button class="sectionSelect">
            <i class={section[1]}></i>
            <p>{section[0]}</p>
        </button>
    {/each}
    <hr>
</div>

<style>
    #organisationBar {
        position: fixed;
        background-color: var(--background);
        box-shadow: 0px 0px 3px #888888;
        overflow: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;
    }

    .sectionSelect {
        display: flex;
        outline: none;
        width: 100%;
        align-items: center;
        height: 2.5rem;
        cursor: pointer;
        border: none;
        color: var(--textColor);
        background-color: transparent;
        margin: 0;
        border-radius: 5px;
    }

    .sectionSelect:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .sectionSelect i {
        margin-right: 0.3rem;
        color: var(--accentColor);
    }

    hr {
        color: var(--textColor);
        width: 100%;
        border-radius: 100px;
    }
    /* Large screens */
    @media only screen and (min-width: 600px) {
        #organisationBar {
            top: 0;
            width: 12rem;
            height: calc(100vh - 2rem);
            margin: 1rem 6rem;
        }
    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        #organisationBar {
            width: 100vw;
            height: 100vh;
            box-shadow: none;
            display: none;
        }

    }
</style>