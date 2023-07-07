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

<div class="taskbar" id="taskbar">
    <div id="mainTaskbar">
        <a id="home" href="/">
            <i class="fa-solid fa-house"></i>
            Home
        </a>
        <a id="events" href="/events">
            <i class="fa-solid fa-calendar-day"></i>
            Events
        </a>
        <a id="focus" href="/focus">
            <i class="fa-solid fa-expand"></i>
            Focus
        </a>
        <a id="archive" href="/archive">
            <i class="fa-solid fa-folder"></i>
            Archive
        </a>
    </div>
    <button id="plusButton" on:click={plusButtonClick} class={plusButtonClicked ? 'clicked' : ''}>
        <span class="material-symbols-rounded">add</span>
    </button>
</div>

<style>
    #taskbar,  #mainTaskbar, #plusButton{
        display: flex;
    }

    #taskbar {
        width: 100%;
        justify-content: center;
        position: fixed;
        bottom: 20px;
    }

    #mainTaskbar, #plusButton {
        height: 60px;
        justify-content: space-around;
        align-items: center;
        border-radius: 50px;
        margin: 0 10px;
    }

    #mainTaskbar {
        background-color: #ffffff;
        width: 50%;
        max-width: 500px;
        border-style: solid;
        border-width: 1px;
        padding: 0 3%;
    }

    #mainTaskbar a {
        color: orange;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-decoration: none;
        width: 90px;
    }

    @keyframes popClick {
        0% {
            transform: scale(1);
        }

        30%, 50% {
            transform: scale(0.9);
        }

        50%, 70% {
            transform: scale(1.1)
        }

        100% {
            transform: scale(1);
        }
    }

    #plusButton {
        cursor: pointer;
        border: none;
        background-color: #3b5fe2;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        width: 60px;
        outline: none;
        box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.1);
        border-style: solid;
        border-width: 1px;
        border-color: black;
    }

    #plusButton.clicked {
        animation: popClick 0.2s ease 0s alternate forwards;
    }


</style>