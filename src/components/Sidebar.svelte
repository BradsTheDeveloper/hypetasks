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
        <i class="fa-solid fa-house"></i>
    </a>
    <a id="events" href="/events" class="sidebarButton">
        <i class="fa-solid fa-calendar-day"></i>
    </a>
    <a id="focus" href="/focus" class="sidebarButton">
        <i class="fa-solid fa-expand"></i>
    </a>
    <a id="archive" href="/archive" class="sidebarButton">
        <i class="fa-solid fa-folder"></i>
    </a>
    <button id="plus" class="plusButton sidebarButton">
        <i class="fa-solid fa-plus"></i>
    </button>
</nav>

<style>

    :root {
        --transition-speed: 600ms;
    }

    #sidebar {
        position: fixed;
        background-color: white;
        box-shadow: 0px 0px 8px #888888;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
    }

    .sidebarButton {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5rem;
        color: gray;
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);;
        width: 100%;
    }

    .plusButton {
        height: 4rem;
        margin-top: auto;
        cursor: pointer;
        border: none;
        justify-content: center;
        align-items: center;
        color: gray;
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
            height: 100vh;
        }
    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        #sidebar {
            bottom: 0;
            width: 100vw;
            height: 3rem;
            box-shadow: 0px 0px 8px #888888;
        }

        #sidebar {
            flex-direction: row;
        }

        #sidebar a {
            justify-content: center;
        }
    }

</style>