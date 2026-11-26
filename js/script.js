const container = document.querySelector("#container");
for (let index = 0; index < 256; index++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

const divs = document.querySelectorAll("#container div");
divs.forEach((div) => {
  div.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "red";
  });
});

const form = document.querySelector("#grid-form");
const input = document.querySelector("#gridNo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const gridSize = Number(input.value);
  console.log(gridSize);

  if (gridSize > 0 && gridSize <= 100) {
    console.log("Perfect size");
  } else {
    console.log("Enter number between 0 to 100");
  }
});
