const container = document.querySelector("#container");
const range = document.querySelector("#gridRange");
window.addEventListener("resize", () => {});

range.addEventListener("change", () => {
    resizeGrid(range.value);
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

function resizeGrid(gridSize) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridSize);
}

function changeBgColor(element) {
    console.log(element.style.ba);
    element.style.backgroundColor = "blue";
}

createGrid();
