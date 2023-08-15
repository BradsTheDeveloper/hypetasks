<script>
    import { auth, db } from "../initialiseFirebase.js";
    import { addDoc, collection, doc, setDoc } from "firebase/firestore";
    
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

    const currentDate = new Date();
    const daysOfWeeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentDayOfWeek = daysOfWeeks[currentDate.getDay()];

    let dateOptions = [
        {id: 1, name: "No Date", value: null, sometime: false, active: false},
        {id: 2, name: "Sometime", value: null, sometime: true, active: false},
        {id: 3, name: "Today", value: currentDate, active: false},
        {id: 4, name: "Tommorow", value: (currentDate.getDate() + 1), active: false},
        {id: 5, name: "Next "+currentDayOfWeek, value: (currentDate.getDate() + 7), active: false},
    ]
    let timeOptions = [
        {name: "No Time", value: null, active: false},
        {name: "In the morning", value: "09:00", active: false},
        {name: "In the afternoon", value: "12:00", active: false},
        {name: "In the evening", value: "18:00", active: false},
    ]
    let reminderOptions = [
        {name: "Every day until task", value: "today", active: false},
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

    function reloadOptionLists() {
        dateOptions = dateOptions.slice();
        timeOptions = timeOptions.slice();
    }

    function setActiveToFalseWithToggle(toggle, list) {
        if (toggle == false) {
            list.forEach((item) => {
                if (item.active) item.active = !item.active;
            });
        }
        reloadOptionLists();
    }

    function datetimeOptionClick(option, list, type) {
        setActiveToFalseWithToggle(option.active, list);
        option.active = !option.active;
        if (option.active) {
            if (type == "date") {
                taskDate = option.value;
                sometime = option.sometime;
                taskDateDisplay = option.name;
                customTaskDate = null;
            } else if (type == "time") {
                taskTime = option.value;
                customTaskTime = null;
            }
        } else {
            taskDate = null;
            sometime = null;
        }
        if (!taskDate && option.sometime == false) {
            taskDateDisplay = "Date";
        }
        reloadOptionLists();
    }

    function isValidDate(date) {
        return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
    }


    const dateFormatOptions = { month: 'long', day: 'numeric', ordinal: 'numeric' };

    function customDateChange() {
        setActiveToFalseWithToggle(false, dateOptions);
        taskDateDisplay = new Date(customTaskDate)
        taskDateDisplay = taskDateDisplay.toLocaleString("en-US", dateFormatOptions);
        if (!customTaskDate) {
            dateOptions[0].active = true; 
            taskDateDisplay = "Date";
        }
        dateOptions.forEach((item) => {
            const optionDate = new Date();
            optionDate.setDate(item.value);
            const customDate = new Date(customTaskDate);
            console.log(optionDate.toDateString())
            console.log(customDate.toDateString())
            if (optionDate.toDateString() == customDate.toDateString() || !isValidDate(optionDate) && item.name == "Today") {
                item.active = true;
                taskDateDisplay = item.name;
                customTaskDate = null;
            };
        });
        // TODO: Fix the commented code above
    }

    let taskName, taskDate, taskTime, customTaskDate, customTaskTime, sometime;

    let taskDateDisplay = "Date";
    let taskTimeDisplay = "Time";

    $: if (!taskDate && sometime != true) dateOptions[0].active = true;

    async function addTask() {
        if (customTaskDate) {
            taskDate = customTaskDate;
        }
        if (customTaskTime) {
            taskTime = customTaskTime;
        }
        const [hours, minutes] = taskTime.split(":");
        const combinedTaskDate = new Date(taskDate);
        combinedTaskDate.setHours(parseInt(hours));
        combinedTaskDate.setMinutes(parseInt(minutes));
        try {
            const newTask = await addDoc(doc(db, "users", auth.currentUser.uid, "tasks"), {
                taskName: taskName,
                taskDate: Timestamp.fromDate(combinedTaskDate),
                sometime: sometime,
            });
            console.log("New task added with ID ", newTask.id)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

</script>

<button id="magicButton" on:click={magicButtonClick} class={magicButtonClicked ? 'clicked' : ''}>
    <span class="material-symbols-rounded">add</span>
</button>
<div id="magicPrompt" class={magicPromptShown ? '' : 'inactive'}>
    <div id="magicPromptSelector"></div>
    <input type="text" name="magicPromptInput" id="magicPromptInput" placeholder={magicPromptPlaceholder} bind:value={taskName}>
    <div id="magicOptions">
        <button id="dateOption" on:click={() => {hideAllSelects(dateSelectShown, allSelectToggles); dateSelectShown = !dateSelectShown}} class="magicOption">
            <i class="fa-regular fa-calendar"></i>
            <p>{taskDateDisplay}</p>
            <i class={dateSelectShown ? 'fa-solid fa-angle-right rotate' : 'fa-solid fa-angle-right'}></i>
        </button>
        <button id="timeOption" on:click={() => {hideAllSelects(timeSelectShown, allSelectToggles); timeSelectShown = !timeSelectShown}} class="magicOption">
            <i class="fa-regular fa-clock"></i>
            <p>{taskTimeDisplay}</p>
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
        {#each dateOptions as dateOption (dateOption.id)}
            <button class="magicSelectOption" class:active={dateOption.active} on:click={() => {datetimeOptionClick(dateOption, dateOptions, "date")}}>{dateOption.name}</button>
        {/each}
        <input type="date" bind:value={customTaskDate} class:active={customTaskDate} on:change={() => {customDateChange()}} min={currentDate.toISOString().split('T')[0]} name="customDateSelect" id="customDateSelect" class="customSelect">
    </div>
    <div id="timeSelect" class={timeSelectShown ? 'magicSelect' : 'magicSelect inactive'} >
        {#each timeOptions as timeOption (timeOption.name)}
            <button class={timeOption.active ? "magicSelectOption active" : "magicSelectOption"}>{timeOption.name}</button>
        {/each}
        <input type="time" bind:value={customTaskTime} name="customTimeSelect" id="customTimeSelect" class="customSelect">
    </div>
    <div id="reminderSelect" class={reminderSelectShown ? 'magicSelect' : 'magicSelect inactive'} >

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
        transition: all 0.25s ease;
    }

    .magicSelectOption.active, .customSelect.active {
        background-color: var(--accentColor);
        color: white;
        transition: all 0.25s ease;
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