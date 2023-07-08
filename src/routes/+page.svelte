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

</script>

<Taskbar />

<div id="dashHeader" style="--dashHeaderBG: {dashHeaderBG}; --dashHeaderText: {dashHeaderText}; ">
    <div id="greeting">
        <h2>Good {timeOfDay}, Bradley</h2>
        <p>Let's get some work done!</p>
    </div>
    <div id="dashHeaderQuote">
        <div id="dashHeaderQuoteContent">
            <p>{randomQuote}</p>
        </div>
        <p id="dashHeaderQuoteAuthor">{randomQuoteAuthor}</p>
    </div>
</div>

<style>

	@media (max-width: 768px) {}

	* {
		box-sizing: border-box;
	}

	#dashHeader {
        box-sizing: border-box;
		background-color: var(--dashHeaderBG);
		color: var(--dashHeaderText);
        margin: 0;
		padding: 0;
        width: 100vw;
        height: 10%;
	}

	#greeting h2, p {
		margin: 0;
	}

	#dashHeaderQuote {
		bottom: 0px;
		width: 100%;
	}

	#dashHeaderQuoteContent {
		box-sizing: border-box;
		width: 100%;
		height: max-content;
		background-color: white;
		color: black;
		border-radius: 5px;
		padding: 2px 10px;
	}

	#dashHeaderQuoteAuthor {
		margin-top: 10px;
	}

</style> 