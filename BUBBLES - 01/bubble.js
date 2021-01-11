// Functions that deal with bubbles

// create new bubble
function newBubble(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    }
}

// assign bubble random values
function newRandomBubble() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        color: randomRGB()
    }
}

// Create and return an array with 'total' bubble objects
function createRandomBubbleArray(total) {
    let temp = [];
    for (let n = 1; n <= total; n++) {
        temp.push(newRandomBubble());
    }

    return temp;
}

// draw a bubble
function drawBubble(aBubble) {
    stroke(aBubble.color);
    circle(aBubble.x, aBubble.y, aBubble.r, "stroke");
}

// move bubble
function moveBubble(aBubble) {
    aBubble.x += randomInt(-2, 3);
    aBubble.y += randomInt(-2, 3);
}