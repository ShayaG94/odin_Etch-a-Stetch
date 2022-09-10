const container = document.querySelector("#container");
const range = document.querySelector("#gridRange");
const label = document.querySelector("#num");
const clearButton = document.querySelector("#clear");
const photoButton = document.querySelector("#picMode");
const psychButton = document.querySelector("#psychMode");
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
const PHOTOS = [
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80",
    "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1617103539311-b92a6d2c0c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1615225150799-524453b31447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80",
];

let mode = "psych";

range.addEventListener("input", () => {
    let gridSize = range.value;
    resizeGrid();
    label.innerText = `${gridSize} X ${gridSize}`;
});

photoButton.addEventListener("click", () => {
    resetGrid();
    mode = "pic";
    let image = PHOTOS[Math.floor(Math.random() * PHOTOS.length)];
    container.style.backgroundImage = `url(${image})`;
    container.style.backgroundSize = "cover";
});

psychButton.addEventListener("click", () => {
    resetGrid();
    mode = "psych";
});

clearButton.addEventListener("click", resetGrid);

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
    if (mode === "psych") {
        let color = COLORS[Math.floor(Math.random() * COLORS.length)];
        element.style.backgroundColor = color;
    }
    if (mode === "pic") {
        element.style.backgroundColor = "transparent";
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function resetGrid() {
    document.querySelectorAll(".squares").forEach((square) => (square.style.backgroundColor = "white"));
}

createGrid();
