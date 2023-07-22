<script>
	let magicButtonClicked = true

	function magicButtonClick() {
		if (magicButtonClicked) return // prevent toggle when already toggled
		magicButtonClicked = true
		setTimeout(() => {
			magicButtonClicked = false
		}, 200)
	}

    let magicPromptPlaceholder = "Add a task..."

    const d = new Date();
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekday = weekdays[d.getDay()];

    let datePresets = [
        {name: "Today", value: "today"},
        {name: "Tommorow", value: "tommorow"},
        {name: "Next "+weekday, value: "sometime"},
        {name: "Sometime", value: "sometime"},
        {name: "No Date", value: null},
    ]
    let timePresets = [
        {name: "In the morning", value: "today"},
        {name: "In the afternoon", value: "tommorow"},
        {name: "In the evening", value: "sometime"},
        {name: "No Time", value: null},
    ]
</script>

<button id="magicButton" on:click={magicButtonClick} class={magicButtonClicked ? 'clicked' : ''}>
    <span class="material-symbols-rounded">add</span>
</button>
<div id="magicPrompt">
    <div id="magicPromptSelector"></div>
    <input type="text" name="magicPromptInput" id="magicPromptInput" placeholder={magicPromptPlaceholder}>
    <div id="dateSelectors">
        <p>Date</p>
        {#each datePresets as datePreset (datePreset.name)}
            <button class="dateSelector">{datePreset.name}</button>
        {/each}
        <button class="dateSelector customDateSelector">Another Date   <i class="fa-solid fa-angle-up"></i></button>
    </div>
    <div id="timeSelectors">
        {#each timePresets as timePreset (timePreset.name)}
            <button class="dateSelector">{timePreset.name}</button>
        {/each}
        <button class="dateSelector customDateSelector">Another Time   <i class="fa-solid fa-angle-up"></i></button>
    </div>
</div>

<style>

    @media (max-width: 768px) {}
    
    #magicButton {
        display: flex;
        height: 4rem;
        width: 4rem;
        justify-content: space-around;
        align-items: center;
        border-radius: 50px;
        cursor: pointer;
        border: none;
        background-color: var(--accentColor);
        justify-content: center;
        align-items: center;
        color: #ffffff;
        outline: none;
        box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.1);
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        /*background-color: #3b5fe2;*/
    }

    /*#magicButton.clicked {
        animation: popClick 0.2s ease 0s alternate forwards;
    }*/

    #magicPrompt {
        position: absolute;
        bottom: 5.75rem;
        right: 1rem;
        width: 40rem;
        height: 10rem;
        background-color: gray;
        border-radius: 10px;
        padding: 1rem;
    }

    #magicPromptInput {
        background-color: transparent;
        border: none;
        outline: none;
        font-size: xx-large;
        width: 100%;
    }

    #dateSelectors {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        gap: 0.25rem;
    }

    .dateSelector {
        border-radius: 100px;
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem;
        margin: 0.25rem 0;
    }

    .customDateSelector {
        margin-left: auto;
    }

    p {
        font-size: 13.3333px;
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


</style> 