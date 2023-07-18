//import { readable, writable } from 'svelte/store';

export const quotes = [
    ['“The best way to get started is to quit talking and begin doing.”', 'Walt Disney'],
    ['“Perfection is not attainable, but if we chase perfection we can catch excellence.”','Vince Lombardi'] ,
    ['“Let us make our future now, and let us make our dreams tomorrow’s reality.”','Malala Yousafzai'] ,
    ['“Today’s accomplishments were yesterday’s impossibilities.”','Robert H. Schuller'] ,
    ['“You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.”','Zig Ziglar'] 
]

export const tips = [
    "You can control your Spotify music while in Focus. Find out how in the Spotify widget.",
    "Set a task's due date as Sometime and it'll appear in your Current view every day until it's completed.",
    "If you have a task in a Shared Area that it is assigned to specific people, you can use the Nudge button to send them a reminder. Great for reminding that one lazy friend to finish their part of the school project."
]

export let randomTip;
randomTip = tips[Math.floor(Math.random() * tips.length)];
setInterval(function(){
    randomTip = tips[Math.floor(Math.random() * tips.length)];
}, 20000)