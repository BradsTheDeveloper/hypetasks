<script>

	import Taskbar  from "../components/Taskbar.svelte";
	import { quotes } from '/src/stores.js'; 
	let greetingWidgetBG;
	let greetingWidgetText;

	let timeOfDay;
	const d = new Date();
	let hour = d.getHours();
	if (hour < 5) {
		timeOfDay = "night";
		greetingWidgetBG = '#070808';
	} else if (hour < 12) {
		timeOfDay = "morning";
		greetingWidgetBG = '#edeecb';
	} else if (hour < 17) {
		timeOfDay = "afternoon";
		greetingWidgetBG = '#edeecb';
	} else if (hour < 21) {
		timeOfDay = "evening";
		greetingWidgetBG = '#2c4349';
		greetingWidgetText = '#ffffff';
	} else if (hour <= 23) {
		timeOfDay = "night";
		greetingWidgetBG = '#070808';
		greetingWidgetText = '#ffffff';
	}
	const randomQuoteID = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[randomQuoteID][0];
	const randomQuoteAuthor = quotes[randomQuoteID][1];

</script>

<Taskbar />

<div id="widgetGallery">
	<div id="greetingWidget" class="widget" style="--greetingWidgetBG: {greetingWidgetBG}; --greetingWidgetText: {greetingWidgetText}; ">
		<div id="greeting">
			<h2>Good {timeOfDay}, Bradley</h2>
			<p>Let's get some work done!</p>
		</div>
		<div id="greetingWidgetQuote">
			<div id="greetingWidgetQuoteContent">
				<p>{randomQuote}</p>
			</div>
			<p id="greetingWidgetQuoteAuthor">{randomQuoteAuthor}</p>
		</div>
	</div>
</div>



<style>

	@media (max-width: 768px) {
		.widget {
			width: 100%;
		}
	}

	
	#widgetGallery {
		display: none;
	}

	.widget {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		width: calc(100%/3);
		height: 250px;
		border-radius: 10px;
		padding: 10px 15px;
	}

	@media (max-width: 768px) {
		.widget {
			width: 100%;
		}
	}

	#greetingWidget {
		position: relative;
		background-color: var(--greetingWidgetBG);
		color: var(--greetingWidgetText);
	}

	#greeting h2, p {
		margin: 0;
		margin-top: 10px;
	}

	#greetingWidgetQuote {
		bottom: 0px;
		width: 100%;
	}

	#greetingWidgetQuoteContent {
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: max-content;
		background-color: white;
		color: black;
		border-radius: 5px;
		padding: 2px 10px;
	}

	#greetingWidgetQuoteAuthor {
		margin-top: 10px;
	}

</style> 