

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Initialize the board as a 2D array
let board = [
    ["", "", "", "", "", "", "", ""], // Row 0
    ["", "", "", "", "", "", "", ""], // Row 1
    ["", "", "", "", "", "", "", ""], // Row 2
    ["", "", "", "", "", "", "", ""], // Row 3
    ["", "", "", "", "", "", "", ""], // Row 4
    ["", "", "", "", "", "", "", ""], // Row 5
    ["", "", "", "", "", "", "", ""], // Row 6
    ["", "", "", "", "", "", "", ""], // Row 7
];

window.onload = function() {
    drawBoard();
    drawPieces();
};

// Function to draw the board
function drawBoard() {
    for (let c = 0; c < 800; c += 200) {
        for (let b = 0; b < 800; b += 200) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(100 + b, c, 100, 100); // Draws the borders of each square
            ctx.fillRect(100 + b, c, 100, 100); // Fills each square with color (later to be changed)
        }
    }

    for (let c = 0; c < 800; c += 200) {
        for (let b = 0; b < 800; b += 200) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(b, c + 100, 100, 100); // Draws the borders of each square
            ctx.fillRect(b, c + 100, 100, 100); // Fills each square with color (later to be changed)
        }
    }
}

// Function to draw the pieces and populate the board array
function drawPieces() {

    for (let c = 0; c < 800; c += 200) {
        for (let b = 0; b < 300; b += 200) {
            ctx.beginPath();
            let newPiece = new ChessPiece(c + 150, b + 50, "red");
            console.log(newPiece);
            ctx.fillStyle = newPiece.getColor();
            ctx.arc(newPiece.getX(), newPiece.getY(), 40, 0, 2 * Math.PI); // Draws red pieces
            ctx.fill();
            board[Math.floor((b + 50) / 100)][Math.floor((c + 150) / 100)] = newPiece;  // Mark as red in the board array
        }
    }

    for (let c = 0; c < 800; c += 200) {
        for (let b = 0; b < 100; b += 200) {
            ctx.beginPath();
            let newPiece = new ChessPiece(c + 150,b + 50, "red")
            ctx.fillStyle = newPiece.getColor();
            ctx.arc(newPiece.getX(), newPiece.getY(), 40, 0, 2 * Math.PI); // Draws red pieces
            ctx.fill();
            board[Math.floor((b + 150) / 100)][Math.floor((c + 50) / 100)] = newPiece;  // Mark as red in the board array
        }
    }

    for (let c = 0; c < 800; c += 200) {
        for (let b = 0; b < 300; b += 200) {
            ctx.beginPath();
            ctx.fillStyle = "gray";
            ctx.arc(c + 50, b + 550, 40, 0, 2 * Math.PI); // Draws gray pieces
            ctx.fill();
            board[Math.floor((b + 550) / 100)][Math.floor((c + 50) / 100)] = "gray";  // Mark as gray in the board array
        }
    }

    for (let c = 0; c < 800; c += 200) {
        for (let b = 0; b < 100; b += 200) {
            ctx.beginPath();
            ctx.fillStyle = "gray";
            ctx.arc(c + 150, b + 650, 40, 0, 2 * Math.PI); // Draws gray pieces
            ctx.fill();
            board[Math.floor((b + 650) / 100)][Math.floor((c + 150) / 100)] = "gray";  // Mark as gray in the board array
        }
    }
}

// Function to handle canvas click
canvas.addEventListener("click", function(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left; // Calculate the x-coordinate of the click relative to the canvas
    let y = event.clientY - rect.top;  // Calculate the y-coordinate of the click relative to the canvas

    // Determine which row and column was clicked
    let row = Math.floor(y / 100); // Divide y by 100 to get the row (there are 8 squares in a row)
    let col = Math.floor(x / 100); // Divide x by 100 to get the column (there are 8 squares in a column)

    // Get the piece in the clicked square from the board array
    let piece = board[row][col];
    console.log(board);

    // Print the row and column to the console
    console.log(`You clicked on row: ${row}, column: ${col}`);

    // Alert the user what is in the clicked square
    if (piece === "red") {
        alert(`The square at row ${row}, column ${col} contains: "red"`);
    } else if (piece === "gray") {
        alert(`The square at row ${row}, column ${col} contains: "gray"`);
    } else {
        alert(`The square at row ${row}, column ${col} is empty`);
    }
});
