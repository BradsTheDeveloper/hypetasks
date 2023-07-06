<div class="taskbar" id="taskbar">
    <div id="mainTaskbar">
        <a id="home" href="/">
            <span class="material-symbols-rounded">dashboard</span>
            Home
        </a>
        <a id="events" href="/events">
            <span class="material-symbols-rounded">event</span>
            Events
        </a>
        <a id="focus" href="/focus">
            <span class="material-symbols-rounded">dark_mode</span>
            Focus
        </a>
    </div>
    <button id="plusButton">
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
        box-shadow: 0px 0px 10px;
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
            width: 60px;
            height: 60px;
        }

        30%, 90% {
            width: calc(0.5*60px);
            height: calc(0.5*60px);
        }

        100% {
            width: 60px;
            height: 60px;
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
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }

    #plusButton:active {
        animation: popClick 0.5s ease 0s alternate forwards;
    }


</style>