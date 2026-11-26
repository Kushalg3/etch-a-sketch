// Select the main drawing board container element
const container = document.querySelector("#container");

// Initial creation of the default 16x16 grid on page load
createGrid(16);

/**
 * Generates a dynamic grid of squares inside the container
 * @param {number} gridSize - The number of squares per row/column
 */
function createGrid(gridSize) {
  const cellWidth = 40;
  const totalWidth = cellWidth * gridSize;

  // Dynamically set container width to fit the specified grid size perfectly
  container.style.width = `${totalWidth}px`;

  // Clear any existing grid squares before rebuilding
  container.innerHTML = "";

  // Loop to create all grid cells (gridSize * gridSize total)
  for (let index = 0; index < gridSize * gridSize; index++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }

  // Attach hover event listeners to each newly created grid cell
  const divs = document.querySelectorAll("#container div");
  divs.forEach((div) => {
    div.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "red";
    });
  });
}

// Select form and input elements for handling custom grid resizing
const form = document.querySelector("#grid-form");
const input = document.querySelector("#gridNo");

// Listen for form submission to resize the grid dynamically
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload on submit
  const gridSize = Number(input.value);

  // Validate user input range (between 1 and 100) before recreating the grid
  if (gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize);
    alert(`Grid size is ${gridSize} x ${gridSize}`);
  } else {
    alert("Enter number between 0 to 100");
  }
});
