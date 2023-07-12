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
        <a id="home" href="/">
            <i class="fa-solid fa-house"></i>
        </a>
        <a id="events" href="/events">
            <i class="fa-solid fa-calendar-day"></i>
        </a>
        <a id="focus" href="/focus">
            <i class="fa-solid fa-expand"></i>
        </a>
        <a id="archive" href="/archive">
            <i class="fa-solid fa-folder"></i>
        </a>
</nav>

<style>

    :root {
        --transition-speed: 600ms;
    }

    #sidebar {
        position: fixed;
        background-color: white;
        box-shadow: 0px 0px 8px #888888;
        transition: width 600ms ease;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    #sidebar a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5rem;
        color: gray;
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
        width: 100%;
    }

    #sidebar:last-child {
        margin-top: auto;
    }

    /* Large screens */
    @media only screen and (min-width: 600px) {
        #sidebar {
            top: 0;
            width: 5rem;
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