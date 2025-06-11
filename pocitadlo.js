let button = document.getElementById("button");
let display = document.getElementById("display");
let reset = document.getElementById("reset");
let count = 0;
let colors = ["#3A86FF", "#8338EC", "#FFBE0B", "#FF006E", "#FB5607"];
let background = document.getElementById("background");
let previousColorIndex;

button.addEventListener("click", () => {
  count++;
  display.innerHTML = count;
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * colors.length);
  } while (randomIndex === previousColorIndex);
  previousColorIndex = randomIndex;
  background.style.backgroundColor = colors[randomIndex];
});
reset.addEventListener("click", () => {
  count = 0;
  display.innerHTML = count;
  background.style.backgroundColor = "white";
  colorIndex = 0;
});
