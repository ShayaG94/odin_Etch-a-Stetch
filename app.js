const container = document.querySelector("#container");
const range = document.querySelector("#gridRange");
const label = document.querySelector("#num");
const clearButton = document.querySelector("#clear");
const COLORS = [
    "#D19900",
    "#A60A3D",
    "#00615c",
    "#3b9259",
    "#103d34",
    "#008482",
    "#96a540",
    "#ac5d45",
    "#9c5a6c",
    "#7472a0",
    "#c89566",
    "#4a5973",
    "#007da6",
];

range.addEventListener("input", () => {
    let gridSize = range.value;
    resizeGrid();
    label.innerText = `${gridSize} X ${gridSize}`;
});

clearButton.addEventListener("click", () => {
    document.querySelectorAll(".squares").forEach((square) => (square.style.backgroundColor = "white"));
});

function createGrid(gridSize = range.value) {
    let squareSide = container.clientHeight / gridSize;
    [...Array(gridSize ** 2)].forEach(() => {
        let square = document.createElement("div");
        square.classList.add("squares");
        square.addEventListener("mouseover", (e) => {
            changeBgColor(e.target);
        });
        square.style.flex = `1 1 ${squareSide}px`;
        container.append(square);
    });
}

function resizeGrid() {
    clearGrid();
    createGrid();
}

function changeBgColor(element) {
    let color = COLORS[Math.floor(Math.random() * COLORS.length)];
    element.style.backgroundColor = color;
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

createGrid();
