<script>
	let plusButtonClicked = false

	function plusButtonClick() {
		if (plusButtonClicked) return // prevent toggle when already toggled
		plusButtonClicked = true
		setTimeout(() => {
			plusButtonClicked = false
		}, 200)
	}
</script>

<nav id="sidebar">
    <a id="home" href="/" class="sidebarButton">
        <i class="fa-solid fa-house fa-lg"></i>
    </a>
    <a id="events" href="/events" class="sidebarButton">
        <i class="fa-solid fa-calendar-day fa-lg"></i>
    </a>
    <a id="focus" href="/focus" class="sidebarButton">
        <i class="fa-solid fa-expand fa-lg"></i>
    </a>
    <a id="archive" href="/archive" class="sidebarButton">
        <i class="fa-solid fa-folder fa-lg"></i>
    </a>
    <a id="settings" href="/settings" class="sidebarButton">
        <i class="fa-solid fa-gear fa-lg"></i>
    </a>
    <button id="plus" class="plusButton sidebarButton">
        <i class="fa-solid fa-plus fa-xl"></i>
    </button>
</nav>

<style>

    :root {
        --transition-speed: 600ms;
    }

    #sidebar {
        position: fixed;
        background-color: var(--background);
        box-shadow: 0px 0px 3px #888888;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        border-radius: 10px;
        box-sizing: border-box;
        z-index: 90;
    }

    .sidebarButton {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5rem;
        color: var(--accentColor);
        text-decoration: none;
        filter: opacity(0.7);;
        width: 100%;
    }

    .plusButton {
        height: 4rem;
        margin-top: auto;
        cursor: pointer;
        border: none;
        justify-content: center;
        align-items: center;
        color: var(--accentColor);
        width: 60px;
        outline: none;
        background-color: transparent;
    }

    .plusButton i {
        width: 100%;
    }

    /* Large screens */
    @media only screen and (min-width: 600px) {
        #sidebar {
            top: 0;
            width: 4rem;
            height: calc(100vh - 2rem);
        }
    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        #sidebar {
            bottom: 0;
            width: calc(100vw - 6rem);
            height: 3rem;
            box-shadow: 0px 0px 8px #888888;
            margin: 1rem 3rem;
        }

        .sidebarButton {
            width: 4rem;
        }
        
        .plusButton {
            margin-top: 0;
        }

        #sidebar {
            flex-direction: row;
        }

        #sidebar a {
            justify-content: center;
        }
    }

</style>