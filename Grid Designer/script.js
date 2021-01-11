// Grid - Maze Gesigner

// Global Constants
const NUM_ROWS = 10;
const NUM_COLS = 10;

// Create an arrow to repersent a grid
let grid = createGridArray();

// Add a playet to the grid array
let player = {
    row: 5,
    col: 5
}

grid[player.row][player.col] = 2;

// Create div to model grid arrau
createDivGrid(grid);

// Player Movement - Key Event Listeners
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {

    if (event.keyCode == 39) { // right arrow key
        updatePlayer(player.row, player.col + 1);
    } else if (event.keyCode == 37) { // left arrow key
        updatePlayer(player.row, player.col - 1); 
    } else if (event.keyCode == 38) { // Up arrow key
        updatePlayer(player.row - 1, player.col);
    } else if (event.keyCode == 40) { // Down arrow key
        updatePlayer(player.row + 1, player.col);
    }
}

function updatePlayer(newRow, newCol) {
    //remove player class from current cell
    let cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.remove("player");

    // set grid array to 0 for current location
    grid[player.row][player.col] = 0;

    // Update player location
    player.row = newRow;
    player.col = newCol;

    // Update class and grid
    cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.add("player");
    
    grid[player.row][player.col] = 2;
}