<script>

	import Taskbar  from "../components/Taskbar.svelte";
	import { quotes } from '/src/stores.js'; 
	let dashHeaderBG;
	let dashHeaderText;

	let timeOfDay;
	const d = new Date();
	let hour = d.getHours();
	if (hour < 5) {
		timeOfDay = "night";
		dashHeaderBG = '#070808';
		dashHeaderText = '#ffffff';
	} else if (hour < 12) {
		timeOfDay = "morning";
		dashHeaderBG = '#edeecb';
	} else if (hour < 17) {
		timeOfDay = "afternoon";
		dashHeaderBG = '#edeecb';
	} else if (hour < 21) {
		timeOfDay = "evening";
		dashHeaderBG = '#2c4349';
		dashHeaderText = '#ffffff';
	} else if (hour <= 23) {
		timeOfDay = "night";
		dashHeaderBG = '#070808';
		dashHeaderText = '#ffffff';
	}
	const randomQuoteID = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[randomQuoteID][0];
	const randomQuoteAuthor = quotes[randomQuoteID][1];

	let testTasks = [
		["Do homework", "8/7/23, 17:00", "notDone"],
		["Do homework", "8/7/23, 17:00", "notDone"],
		["Do homework", "8/7/23, 17:00", "notDone"],
	]

</script>

<Taskbar />

<div id="dashHeader" style="--dashHeaderBG: {dashHeaderBG}; --dashHeaderText: {dashHeaderText}; ">
    <div id="greeting">
		<div id="mainGreeting">
			<h2>Good {timeOfDay}, Bradley</h2>
			<p>Let's get some work done!</p>
		</div>
		<div id="greetingQuoteContent">
            <p>{randomQuote}</p>
        </div>
        <p id="greetingQuoteAuthor">{randomQuoteAuthor}</p>
    </div>
    <div id="dashHeaderBlocks">
        {#each testTasks as task, i}
			<div class="taskBlock"></div>
		{/each}
    </div>
</div>

<style>

	@media (max-width: 768px) {
		#dashHeader {
			flex-direction: column;
		}

		#dashHeaderBlocks {
			margin: 0;
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
	}

	* {
		box-sizing: border-box;
	}

	#dashHeader {
		display: flex;
		flex-direction: row;
        box-sizing: border-box;
		justify-content: space-between;
		background-color: var(--dashHeaderBG);
		color: var(--dashHeaderText);
        margin: 0;
		padding: 10px 10px;
		padding-right: 0;
        width: 100vw;
        height: max-content;
	}


	#greetingQuoteContent {
		box-sizing: border-box;
		width: 100%;
		height: max-content;
		background-color: white;
		color: black;
		border-radius: 5px;
		padding: 2px 10px;
	}

	#greetingQuoteAuthor {
		margin-top: 10px;
	}

	#dashHeaderBlocks {
		height: inherit;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.taskBlock {
		float: right;
		background-color: gray;
		height: 10px;
		width: 10px;
		margin: 10px 0 !important ;
		align-self: flex-end;
	}

	.taskBlock:first-of-type {
		margin-top: 0;
	}

</style> 