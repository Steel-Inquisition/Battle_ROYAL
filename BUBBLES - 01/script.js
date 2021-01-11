// BUBBLE OBJECTS PRESENTED BY MR. V (ASSOCIATIVE ARRAYS - PROPRETY;VALUE PAIRS)

// Initalie canvas and random bubble objects
let cnv = document.getElementById('my-canvas');
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of rando, bubble objects
let bubbles = [];

// Main Draw Loop
function draw() {

    // Fill Canvas
    background("black");

    // Move & Draw All Bubbles
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }

    // loop draw function
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

// EVENT STUFF
document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { 
        // right arrow key - Add a new Bubble
        bubbles.push(newBubble(400, 300, 30, randomRGB()));
    }  else if (event.keyCode === 37) {
        //  left arrow key - remove last bubble
        bubbles.pop();
    }

    console.log(bubbles);
}

// TIMERS
setInterval(addBubble, 1000);

function addBubble() {
    console.log("Hi");
    bubbles.push(newBubble(400, 300, 30, randomRGB()));
}