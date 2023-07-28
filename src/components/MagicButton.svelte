<script>
	let magicButtonClicked = false

	function magicButtonClick() {
		if (magicButtonClicked) return // prevent toggle when already toggled
		magicButtonClicked = true
		setTimeout(() => {
			magicButtonClicked = false
		}, 200)
        magicPromptShown = !magicPromptShown;
        setAllToFalseWithToggle(false, allSelectToggles)
	}

    let magicPromptPlaceholder = "Add a task..."
    let dateOptionText = "Date"
    let timeOptionText = "Time"
    let reminderOptionText = "Reminder On"
    let areaOptionText = "Inbox"

    let magicPromptShown = false;
    let dateSelectShown = false;
    let timeSelectShown = false;
    let reminderSelectShown = false;
    let areaSelectShown = false;
    let allSelectToggles  = [dateSelectShown, timeSelectShown, reminderSelectShown, areaSelectShown]

    const d = new Date();
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekday = weekdays[d.getDay()];

    let datePresets = [
        {name: "Today", value: "today", active: false},
        {name: "Tommorow", value: "tommorow", active: false},
        {name: "Next "+weekday, value: "sometime", active: false},
        {name: "Sometime", value: "sometime", active: false},
        {name: "No Date", value: null, active: false},
    ]
    let timePresets = [
        {name: "In the morning", value: "today", active: false},
        {name: "In the afternoon", value: "tommorow", active: false},
        {name: "In the evening", value: "sometime", active: false},
        {name: "No Time", value: null, active: false},
    ]

    function hideAllSelects(toggle) {
        //let toggles = [dateSelectShown, timeSelectShown, reminderSelectShown, areaSelectShown]
        if (toggle == false) {
            if (dateSelectShown) dateSelectShown = !dateSelectShown;
            if (timeSelectShown) timeSelectShown = !timeSelectShown;
            if (reminderSelectShown) reminderSelectShown = !reminderSelectShown;
            if (areaSelectShown) areaSelectShown = !areaSelectShown;
        }
    }

    function setAllToFalseWithToggle(toggle, list) {
        if (toggle == false) {
            list.forEach((item) => {
                if (item) item = !item;
            });
        }
    }

    function setActiveToFalseWithToggle(toggle, list) {
        if (toggle == false) {
            list.forEach((item) => {
                if (item.active) item.active = !item.active;
            });
        }
    }

</script>

<button id="magicButton" on:click={magicButtonClick} class={magicButtonClicked ? 'clicked' : ''}>
    <span class="material-symbols-rounded">add</span>
</button>
<div id="magicPrompt" class={magicPromptShown ? '' : 'inactive'}>
    <div id="magicPromptSelector"></div>
    <input type="text" name="magicPromptInput" id="magicPromptInput" placeholder={magicPromptPlaceholder}>
    <div id="magicOptions">
        <button id="dateOption" on:click={() => {setAllToFalseWithToggle(dateSelectShown, allSelectToggles); dateSelectShown = !dateSelectShown}} class="magicOption">
            <i class="fa-regular fa-calendar"></i>
            <p>{dateOptionText}</p>
            <i class={dateSelectShown ? 'fa-solid fa-angle-right rotate' : 'fa-solid fa-angle-right'}></i>
        </button>
        <button id="timeOption" on:click="{() => {setAllToFalseWithToggle(timeSelectShown, allSelectToggles); timeSelectShown = !timeSelectShown}}" class="magicOption">
            <i class="fa-regular fa-clock"></i>
            <p>{timeOptionText}</p>
            <i class={timeSelectShown ? 'fa-solid fa-angle-right rotate' : 'fa-solid fa-angle-right'}></i>
        </button>
        <button class="magicOption" id="reminderOption">
            <i class="fa-solid fa-bell"></i>
            <p>{reminderOptionText}</p>
            <i class={reminderSelectShown ? 'fa-solid fa-angle-right rotate' : 'fa-solid fa-angle-right'}></i>
        </button>
        <button class="magicOption" id="areaOption">
            <i class="fa-solid fa-inbox"></i>
            <p>{areaOptionText}</p>
            <i class={areaSelectShown ? 'fa-solid fa-angle-right rotate' : 'fa-solid fa-angle-right'}></i>
        </button>
        <button class="magicOption" id="doneButton">
            <p>Done</p>
        </button>
    </div>
    <div id="dateSelect" class={dateSelectShown ? 'magicSelect' : 'magicSelect inactive'} >
        {#each datePresets as datePreset (datePreset.name)}
            <button class={datePreset.active ? "magicSelectOption active" : "magicSelectOption"} on:click="{() => {setActiveToFalseWithToggle(datePreset.active, datePresets); datePreset.active = !datePreset.active}}">{datePreset.name}</button>
        {/each}
        <input type="date" name="customDateSelect" id="customDateSelect" class="customSelect">
    </div>
    <div id="timeSelect" class={timeSelectShown ? 'magicSelect' : 'magicSelect inactive'} >
        {#each timePresets as timePreset (timePreset.name)}
            <button class={timePreset.active ? "magicSelectOption active" : "magicSelectOption"}>{timePreset.name}</button>
        {/each}
        <input type="time" name="customTimeSelect" id="customTimeSelect" class="customSelect">
    </div>
</div>

<style>

    @media (max-width: 768px) {}

    * {}

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

    #magicButton.clicked {
        animation: popClick 0.2s ease 0s alternate forwards;
    }

    #magicPrompt {
        position: fixed;
        bottom: 5.75rem;
        right: 1rem;
        width: 40rem;
        height: fit-content;
        background-color: gray;
        border-radius: 10px;
        padding: 1rem;
        transition: all 0.25s ease;
    }

    #magicPromptInput {
        background-color: transparent;
        border: none;
        outline: none;
        font-size: xx-large;
        width: 100%;
        padding: 0;
    }

    .magicOption {
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0;
        margin: 0.25rem 0;
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

    .magicOption p {
        margin: 0;
    }

    .magicOption i {
        transition: all 0.25s ease;
    }

    .magicOption i.rotate {
        rotate: 90deg;
        transition: all 0.25s ease;
    }

    #doneButton {
        border-radius: 100px;
        background-color: var(--accentColor);
        padding: 2px 10px;
        margin-left: auto;
    }

    .magicSelect {
        position: fixed;
        bottom: 5rem;
        margin-left: -5px;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        gap: 0.25rem;
        transition: all 0.5s ease;
    }

    .magicSelectOption, .customSelect {
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem;
        margin: 0;
        border-radius: 100px;
        background-color: #f0f0f0;
    }

    .magicSelectOption.active {
        background-color: var(--accentColor);
        color: white;
    }
    
    .customSelect {
        font-size: 13.3333px;
    }

    .inactive {
        visibility: hidden;
        opacity: 0;
        transition: all 0.25s ease;
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

        #magicButton {
            bottom: 5rem;
        }

        .magicOption p {
            display: none;
        }
    }


</style> 