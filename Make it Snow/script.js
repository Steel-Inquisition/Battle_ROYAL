// BUBBLE OBJECTS PRESENTED BY MR. V (ASSOCIATIVE ARRAYS - PROPRETY;VALUE PAIRS)

// Initalie canvas and random bubble objects
let cnv = document.getElementById('my-canvas');
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of rando, bubble objects
let snow = createRandomBubbleArray(100);

// EVENT to add or subtract more Snow if wanted
document.addEventListener('keydown', keydownHandler);

// Main Draw Loop
function draw() {

    // Fill Canvas
    background("black");

    // Move & Draw All snow
    for (let i = 0; i < snow.length; i++) {
        moveSnow(snow[i]);
        drawSnow(snow[i]);
    }

    // If bellow canvas, teleport back up
    for (let i = 0; i < snow.length; i++) {
        teleport(snow[i]);
    }

    // loop draw function
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);