const sketchPad = document.querySelector(".sketch-container");

let squareCount = 16;
let squaresPerRow = 4;

for (let i = 0; i < squareCount; i++) {
    let sketchPadWidth = sketchPad.clientWidth;

    const gridSquare = document.createElement("div");
    let gridSquareWidth = (sketchPadWidth / squaresPerRow);
    let gridSquareHeight = (sketchPadWidth / squaresPerRow);

    gridSquare.style.width = `${gridSquareWidth}px`;
    gridSquare.style.height = `${gridSquareHeight}px`;
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.border = "1px solid black";
    gridSquare.style.margin = "-1px -1px 0 0";

    sketchPad.appendChild(gridSquare);
}