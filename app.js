const container = document.querySelector("#container");
const range = document.querySelector("#gridRange");
window.addEventListener("resize", () => {});

range.addEventListener("change", () => {
    resizeGrid(range.value);
});

function createGrid(gridSize = 16) {
    let squareSide = container.clientHeight / gridSize;
    console.log(container.clientHeight, squareSide);
    [...Array(gridSize ** 2)].forEach(() => {
        let square = document.createElement("div");
        square.classList.add("border-black");
        square.style.width = square.style.height = `${squareSide}px`;
        container.append(square);
    });
}

function resizeGrid(gridSize) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridSize);
}

createGrid();
