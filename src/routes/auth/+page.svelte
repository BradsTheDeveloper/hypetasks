<script>
    import { createEventDispatcher } from 'svelte';
    import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, browserLocalPersistence, setPersistence, onAuthStateChanged } from "firebase/auth";
    import { auth } from "../../initialiseFirebase.js"
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { browser } from '$app/environment';

    const dispatch = createEventDispatcher();

    let signUpClicked = false;
    let logInClicked = false;
    let email, password, authStatus, name;

    let previousPage = String(base) ;

    function signUpClick() {
		if (signUpClicked) return // prevent toggle when already toggled
		signUpClicked = true
	}
    function logInClick() {
		if (logInClicked) return // prevent toggle when already toggled
		logInClicked = true
	}
    async function logInAuth(){
        console.log("Authenticating...")
        try {
            console.log("Logging in...")
            setPersistence(auth, browserLocalPersistence)
            .then(() => {
                return signInWithEmailAndPassword(auth, email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                console.log("Sign In or Persistance Error", error.message)
            });
            console.log(auth.currentUser.email)
        } catch (error) {
            console.log("Sign In Error", error.message)
            error = error.message
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (browser) {
                    window.location.href = '/';
                }
            }
        });
    }
        
    async function signUpAuth(){
        try {
            console.log("Signing up...")
            setPersistence(auth, browserLocalPersistence)
            .then(() => {
                return createUserWithEmailAndPassword(auth, email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                console.log("Sign In or Persistance Error", error.message)
            });
            console.log(auth.currentUser.email)
        } catch (error) {
            console.log("Sign In Error", error.message)
            error = error.message
        }
        updateProfile(auth.currentUser, {
            displayName: name, 
        }).then(() => {
            // Profile updated!
            console.log("All done!")
        }).catch((error) => {
        // An error occurred
            console.log("Name Update Error", error.message)
        });
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (browser) {
                    window.location.href = '/';
                }
            }
        });
    }
    

</script>

<div class="dialogBG">
    <dialog open id="authWindow">
        <div id="welcome">
            <svg id="welcomeLogo" width="100" height="100" viewBox="0 0 1050 1050" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_32_93)">
                <rect x="25" y="21" width="1000" height="1000" rx="500" fill="white"/>
                <g filter="url(#filter1_d_32_93)">
                <path d="M452.565 193.643C455.088 186.406 464.48 184.58 469.53 190.345L603.45 343.221C605.3 345.333 607.953 346.57 610.76 346.629L813.952 350.952C821.614 351.115 826.253 359.482 822.33 366.067L718.32 540.674C716.883 543.086 716.527 545.991 717.337 548.679L776.017 743.262C778.23 750.599 771.705 757.597 764.23 755.901L566.028 710.938C563.29 710.317 560.417 710.875 558.111 712.477L391.185 828.414C384.89 832.786 376.219 828.742 375.522 821.11L357.036 618.714C356.781 615.918 355.362 613.359 353.127 611.66L191.281 488.731C185.178 484.095 186.344 474.599 193.387 471.577L380.165 391.453C382.745 390.346 384.741 388.205 385.665 385.554L452.565 193.643Z" fill="url(#paint0_linear_32_93)"/>
                </g>
                <g filter="url(#filter2_d_32_93)">
                <rect x="461.693" y="629.524" width="444.811" height="124.682" rx="62.341" transform="rotate(-68 461.693 629.524)" fill="#37BC44"/>
                <rect x="561.702" y="680.448" width="279.861" height="124.682" rx="62.341" transform="rotate(-147.5 561.702 680.448)" fill="#37BC44"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_32_93" x="0" y="0" width="1050" height="1050" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="12.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_93"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_93" result="shape"/>
                </filter>
                <filter id="filter1_d_32_93" x="183.328" y="186.931" width="644.425" height="651.282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_93"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_93" result="shape"/>
                </filter>
                <filter id="filter2_d_32_93" x="345.395" y="235.899" width="383.733" height="429.534" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_93"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_93" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_32_93" x1="458.217" y1="177.431" x2="591.783" y2="864.57" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E72636"/>
                <stop offset="1" stop-color="#F3A600"/>
                </linearGradient>
                </defs>
                </svg>
                
                
            <h1>Welcome to hypetasks {base}</h1>
        </div>
        <div id="authChoice" class={signUpClicked ? 'signUpClicked' : (logInClicked ? 'logInClicked' : '')}>
            <button class="signUpChoiceButton authChoiceButton" on:click={signUpClick}>Sign Up</button>
            <button class="logInChoiceButton authChoiceButton" on:click={logInClick}>Log In</button>
        </div>
        <form id="signUpForm" class={signUpClicked ? 'authForm signUpClicked' : 'authForm'} on:submit|preventDefault={signUpAuth}>
            <h1>Sign Up</h1>
            <label class="authInputLabel" for="signUpName">Name</label>
            <p id="signUpNameText">What you'll be referred as in the app.</p>
            <input type="text" class="authInput" name="signUpName" id="signUpEmail" bind:value={name} required>
            <label class="authInputLabel" for="signUpEmail">Email</label>
            <input type="email" class="authInput" name="signUpEmail" id="signUpEmail" placeholder="example@example.com" bind:value={email} required>
            <label class="authInputLabel" for="signUpPassword">Password</label>
            <input type="password" class="authInput" name="signUpPassword" id="signUpPassword" bind:value={password} required>
            <button class="signUpChoiceButton authChoiceButton" type="submit">Sign Up</button>
        </form>
        <form id="logInForm" class={logInClicked ? 'authForm logInClicked' : 'authForm'} on:submit|preventDefault={logInAuth}>
            <h1>Log In</h1>
            <label class="authInputLabel" for="logInEmail" >Email</label>
            <input type="email" class="authInput" name="logInEmail" id="logInEmail" bind:value={email}>
            <label class="authInputLabel" for="logInPassword">Password</label>
            <input type="password" class="authInput" name="logInPassword" id="logInPassword" bind:value={password}>
            <button class="signUpChoiceButton authChoiceButton" type="submit">Log In</button>
        </form>
    </dialog>
</div>

<style>

    dialog {
        background-color: white;
        color: black;
        border: none;
    }

    #authWindow {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
    }

    #welcome {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #welcomeLogo {
        margin-right: 10px;
    }


    #authChoice {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 7rem;
        width: 100%;
        /*transition: transform 1s ease, display 1s ease 2s;*/
    }

    .authChoiceButton {
        width: 100%;
        height: 3rem;
        cursor: pointer;
        border-radius: 100px;
        /*border-style: solid;
        border-width: 1px;
        border-color: black;*/
        border: none;
        color: white;
        outline: none;
        font-size: large;
    }

    .signUpChoiceButton {
        background: rgb(231,38,54);
        background: linear-gradient(45deg, rgba(231,38,54,1) 0%, rgba(243,166,0,1) 100%); 
    }

    .logInChoiceButton {
        background: black;
    }

    @keyframes authChoiceTransition {
        0% {
            transform: translateX(0);
            display: flex;
        }

        90% {
            transform: translateX(200%);
            filter: opacity(0);
        }

        100% {
            filter: opacity(0);
            position: absolute; 
            visibility: hidden;
        }

    }

    #authChoice.signUpClicked {
        /*display: none;*/
        animation: authChoiceTransition 1s ease 0s normal forwards;
    }

    #authChoice.logInClicked {
        /*display: none;*/
        animation: authChoiceTransition 1s ease 0s normal forwards;
    }

    @keyframes authFormTransition {

        0% {
            filter: opacity(0);
            position: initial; 
            transform: translateX(200%);
            
        }


        100% {
            transform: translateX(0);
            filter: opacity(1);
            visibility: visible;
            position: initial;
        }

    }

    #signUpForm.signUpClicked {
        animation: authFormTransition 1s ease 1s normal forwards;
    }

    #logInForm.logInClicked {
        animation: authFormTransition 1s ease 1s normal forwards;
    }

    .authForm {
        width: 100%;
        position: absolute;
        visibility: hidden;
        transform: translateX(200%);
    }

    .authForm .authInput {
        height: 2rem;
        box-sizing: border-box;
        border-radius: 100px;
        outline: none;
        border: 1px solid black;
        width: 100%;
        padding: 0 15px;
        margin: 10px 0;
    }

    .authInputLabel {
        width: 100%;
        text-align: center;
    }

    #signUpNameText {
        filter: opacity(0.5);
        font-size: 0.7rem;
        margin-bottom: 0;
        margin-top: 0;
    }

    /* Large screens */
    @media only screen and (min-width: 600px) {
        dialog {
            width: 20%;
            min-width: 300px;
            height: fit-content;
            border-radius: 10px;
            box-shadow: 0px 0px 8px #888888;
        }

        #authWindow {
            height: 60%;
        }

        .dialogBG {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.2);
        }

    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        dialog {
            min-width: 100vw;
            min-width: -webkit-fill-available;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            margin: 0;
        }

        .dialogBG {
            min-width: 100vw;
            min-width: -webkit-fill-available;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            margin: 0;
        }
    }
</style>