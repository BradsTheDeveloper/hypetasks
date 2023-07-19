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

<button id="plusButton" on:click={plusButtonClick} class={plusButtonClicked ? 'clicked' : ''}>
    <span class="material-symbols-rounded">add</span>
</button>

<style>

    @media (max-width: 768px) {}
    
    #plusButton {
        display: flex;
        height: 60px;
        justify-content: space-around;
        align-items: center;
        border-radius: 50px;
        margin: 0 10px;
        cursor: pointer;
        border: none;
        background-color: var(--accentColor);
        justify-content: center;
        align-items: center;
        color: #ffffff;
        width: 60px;
        outline: none;
        box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.1);
        position: fixed;
        bottom: 1rem;
        right: 0.5rem;
        /*background-color: #3b5fe2;*/
    }

    #plusButton.clicked {
        animation: popClick 0.2s ease 0s alternate forwards;
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