// ARRAY VISUALIZER

// HTML variables
let containerEl = document.getElementById("container");

// Global Variable
let myData = [];
for (let n = 1; n <= 600; n += 10) {
    myData.push(Math.random() * 600);
}
console.log(myData);

// Display Data
drawArray();

// Display datttttttttttttttttta
function drawArray() {
    let outputStr = "";
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height:${myData[i]}px"></div>`;
    }

    containerEl.innerHTML = outputStr;
}

// Key Event Stuff
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
    if (event.keyCode === 38) {
        // Up Arrow = add 600 to the index 0
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 0, Math.random() * 600);
    } else if (event.keyCode === 40) {
        //Down Arrow - Remove element from the middle
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 1);
    }

    // Redraw Array
    drawArray();
}


// Manipulate all
// for (let i = 0; i < myData.length; i++) {
//     if (myData[i] > 0) {
//         myData[i] += 30;
//     }
// }

// SPLICE
// splice(position, remove, height);

// if (event.keyCode === 38) {
//     // Up Arrow = Push value to the end of the array
//     myData.push(Math.random() * 600);
// } else if (event.keyCode === 40) {
//     //Down Arrow - Remove value from the end of the array
//     let poppedValue = myData.pop();
//     console.log(poppedValue);
// }

// FIND LARGEST or SMALLEST NUMER FROM STRING
// Math.max(...myData);
// Math.min(...myData);