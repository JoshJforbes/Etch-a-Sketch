const sketchPad = document.querySelector(".sketch-container");

let squareCount = 100;
let squaresPerRow = 10;

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

sketchPad.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = generateRandomColor();
})

const generateRandomColor = () => {
    const hexPool = "0123456789ABCDEF"
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexPool.charAt(Math.floor(Math.random() * (hexPool.length - 1)));
    }

    return color;
}

