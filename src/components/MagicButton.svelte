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
    let dateOptionText = "Date"
    let timeOptionText = "Time"
    let reminderOptionText = "Reminder On"
    let areaOptionText = "Inbox"

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
    <div id="magicOptions">
        <button class="magicOption" id="dateOption"><i class="fa-regular fa-calendar"></i>{dateOptionText}<i class="fa-solid fa-angle-right"></i></button>
        <button class="magicOption" id="timeOption"><i class="fa-regular fa-clock"></i>{timeOptionText}<i class="fa-solid fa-angle-right"></i></button>
        <button class="magicOption" id="reminderOption"><i class="fa-solid fa-bell"></i>{reminderOptionText}<i class="fa-solid fa-angle-right"></i></button>
        <button class="magicOption" id="areaOption"><i class="fa-solid fa-inbox"></i>{areaOptionText}<i class="fa-solid fa-angle-right"></i></button>
    </div>
    <div id="dateSelect" class="datetimeSelect">
        {#each datePresets as datePreset (datePreset.name)}
            <button class="dateSelectOption">{datePreset.name}</button>
        {/each}
        <button class="dateSelectOption customDateSelect">Another Date   <i class="fa-solid fa-angle-up"></i></button>
    </div>
    <div id="timeSelect" class="datetimeSelect">
        {#each timePresets as timePreset (timePreset.name)}
            <button class="dateSelectOption">{timePreset.name}</button>
        {/each}
        <button class="dateSelectOption customDateSelect">Another Time   <i class="fa-solid fa-angle-up"></i></button>
        <input type="time" name="customTimeSelect" id="customTimeSelect">
    </div>
</div>

<style>

    @media (max-width: 768px) {}

    button {
        cursor: pointer;
    }
    
    #magicButton {
        display: flex;
        height: 4rem;
        width: 4rem;
        justify-content: space-around;
        align-items: center;
        border-radius: 50px;
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

    .magicOption {
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0.25rem 0;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
        align-items: center;
    }

    #magicOptions {
        display: flex;
        gap: 0.5rem;
    }

    .datetimeSelect {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        gap: 0.25rem;
    }

    .dateSelectOption, #customTimeSelect {
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem;
        margin: 0;
        border-radius: 100px;
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

    /* Large screens */
    @media only screen and (min-width: 600px) {

    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        #magicPrompt {
            width: calc(100vw - 4rem);
            height: 10rem;
            background-color: gray;
            border-radius: 10px;
            padding: 1rem;
        } 
    }


</style> 