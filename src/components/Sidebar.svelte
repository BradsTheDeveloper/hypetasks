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
    <div id="sidebarNav">
        <a id="home" href="/">
            <i class="fa-solid fa-house"></i>
            <p>Home</p>
        </a>
        <a id="events" href="/events">
            <i class="fa-solid fa-calendar-day"></i>
            <p>Events</p>
        </a>
        <a id="focus" href="/focus">
            <i class="fa-solid fa-expand"></i>
            <p>Focus</p>
        </a>
        <a id="archive" href="/archive">
            <i class="fa-solid fa-folder"></i>
            <p>Archive</p>
        </a>
    </div>
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
    }

    #sidebarNav {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    #sidebarNav a {
        display: flex;
        align-items: center;
        height: 5rem;
        color: gray;
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }

    #sidebarNav a {
        width: 100%;
    }

    #sidebarNav:last-child {
        margin-top: auto;
    }

    
    #sidebarNav a p {
        display: none;
        margin-left: 1rem;
        filter: opacity(0);
        transition: var(--transition-speed);
    }

    #sidebarNav a i {
        width: 2rem;
        min-width: 2rem;
        margin: 0 1.5rem;
    }

    
    /* Large screens */
    @media only screen and (min-width: 600px) {
        #sidebar {
            top: 0;
            width: 5rem;
            height: 100vh;
        }

        #sidebar:hover {
            width: 16rem;
        }

        #sidebar:hover a p {
            display: inline;
            filter: opacity(1);
            transform: translateX(0);
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


        #sidebarNav {
            flex-direction: row;
        }

        #sidebarNav a {
            justify-content: center;
        }
    }

</style>