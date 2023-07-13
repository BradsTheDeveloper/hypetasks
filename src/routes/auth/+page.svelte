<script>

</script>

<div class="dialogBG">
    <dialog open>
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
                
                
            <h1>Welcome to hypetasks</h1>
        </div>
    </dialog>
</div>

<style>

    dialog {
        background-color: white;
        color: black;
        border: none;
    }

    #welcome {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #welcomeLogo {
        margin-right: 10px;
    }

    @media only screen and (min-width: 600px) {
        dialog {
            width: 50vw;
            height: 50vh;
            border-radius: 10px;
            box-shadow: 0px 0px 8px #888888;
        }

    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        dialog {
            width: 100vw;
            height: 100vh;
        }
    }
</style>