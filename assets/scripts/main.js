const playButton = document.getElementById("play-button");
const gridContainer = document.getElementById("main-section");


playButton.addEventListener("click", 
    function () {
        // Check for grid already existing
        const gridToEliminate = gridContainer.querySelector(".grid-container");
        // If grid exists remove it
        if (gridToEliminate) {
            gridToEliminate.remove();
        }

        // Creates new div with grid-container class
        const newGrid = createElement("div", "grid-container");
        gridContainer.append(newGrid);
        
        // Gets value from the select
        let userChoice = document.getElementById("select").value;
        // Checks the value and changes the grid difficulty:
        // EASY
        if (userChoice === "facile") {
        
            for (let i = 1; i <= 100; i++) {
            const newSquare = createElement("div", "square-10");
            const newText = createElement("h2", "text-white");
            newText.innerHTML = i;
            newGrid.append(newSquare);
            newSquare.append(newText);
            } 
        // MEDIUM
        } else if (userChoice === "medio") {

            for (let i = 1; i <= 81; i++) {
            const newSquare = createElement("div", "square-9");
            const newText = createElement("h2", "text-white");
            newText.innerHTML = i;
            newGrid.append(newSquare);
            newSquare.append(newText);
            } 
        // HARD
        } else {

            for (let i = 1; i <= 49; i++) {
            const newSquare = createElement("div", "square-7");
            const newText = createElement("h2", "text-white");
            newText.innerHTML = i;
            newGrid.append(newSquare);
            newSquare.append(newText);
            } 
            
        }
        
    }
);

// ******************* Funzioni **********************

function createElement (tagType, classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}
