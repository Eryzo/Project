// Set canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Variables
let player = new Player();
let object1 = new Object1();
let object2 = new Object2();

// Arrays 
let obA = [];
let obA2 = [];
let state = "screen1"

// Event listener
addEventListener("keydown", player.move);
addEventListener("click", gamescreen);

// Pushes the vertical object into the array
function addObs() {
    obA.push(new Object1);
}

setInterval(addObs, 5200);

// Pushes the horizontal object into the array 
function addObs2() {
    obA2.push(new Object2);
}

setInterval(addObs2, 5200);

// Draw animation
requestAnimationFrame(draw);
function draw() {
    if (state === "screen1") {
        startscreen();
    } else if (state === "screen2") {
        gamescreen();
    }

    if (player.x + player.width >= object1.x && player.y - player.height <= object1.height) {
        console.log("hi");
    }
    requestAnimationFrame(draw);
}


