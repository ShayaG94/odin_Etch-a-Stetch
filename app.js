const container = document.querySelector("#container");
let grid_size = 50;
window.addEventListener("resize", () => {});

function createGrid() {
    let containerSide = container.clientHeight;
    console.log(container.style.height);
    [...Array(grid_size ** 2)].forEach(() => {
        let square = document.createElement("div");
        square.classList.add("border-black");
        let squareSide = containerSide / grid_size;
        square.style.width = square.style.height = `${squareSide}px`;
        container.append(square);
    });
}

createGrid();
