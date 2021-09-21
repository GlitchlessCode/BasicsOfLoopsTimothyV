// Basic Loop Script by Timothy V

// -- Initalize Variables --

// HTML Element(s)
let runBtnEl = document.getElementById("run");

// Glbl Variables
// (None)

// -- Add Event Listeners --
runBtnEl.addEventListener("click", allLoops);

// -- Functions --

// Event Functions
function allLoops() {
    // "I'm so happy!" x500
    for (let n = 1; n <= 500; n++) {
        console.log("I'm so happy!");
    }

    console.log("\n");

    // Multiples of 4 from 12 to 800
    for (let n = 12; n <= 800; n += 4) {
        console.log(n);
    }

    console.log("\n");

    // Odd Numbers from 55 to 11
    for (let n = 55; n >= 11; n -= 2) {
        console.log(n);
    }

    console.log("\n");

    // Count up by 1s from 5 to 50
    for(let n = 5; n <= 50; n++){
        console.log(n);
    }

    console.log("\n");

    // Count up by 10s from 10 to 100
    for(let n = 10; n <= 100; n += 10){
        console.log(n);
    }
    

    // Ending
    console.log("\n \n");
}