// Functions that deal with snow

// create new snow
function newSnow(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    }
}

// assign snow random values
function newRandomSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, 0),
        r: randomInt(1, 5),
        color: "white"
    }
}

// Create and return an array with 'total' snow objects
function createRandomBubbleArray(total) {
    let temp = [];
    for (let n = 1; n <= total; n++) {
        temp.push(newRandomSnow());
    }

    return temp;
}

// draw a snow
function drawSnow(aSnow) {
    fill(aSnow.color);
    circle(aSnow.x, aSnow.y, aSnow.r, "fill");
}

// move snow
function moveSnow(aSnow) {
    aSnow.x += randomInt(-1.2, 2);
    aSnow.y += randomInt(-2, 7);
}

// Teleport snow
function teleport(aSnow) {
    if (aSnow.y > cnv.height) {
        aSnow.y = 0;
    }
}

// Add or subtract now
function keydownHandler(event) {
    if (event.keyCode === 39) { 
        // right arrow key - Add a new Bubble
        snow.push(newSnow(randomInt(0, cnv.width), 0, randomInt(1, 5), "white"));

        console.log("A");
    }  else if (event.keyCode === 37) {
        //  left arrow key - remove last bubble
        snow.pop();

        console.log("B");
    }

    console.log(snow);
}