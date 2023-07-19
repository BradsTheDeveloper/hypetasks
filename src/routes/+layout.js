import { browser } from '$app/environment';

export async function load() {
    let theme = 'dark';
    if (browser) {
        document.body.classList.remove("showFromHidden");
        if (theme == 'dark') {
            document.body.setAttribute("class", "dark-theme");
        } else {
            document.body.setAttribute("class", "");
        }
        //document.body.style.visibility = "visible";
        document.body.classList.add("showFromHidden");
    }
}