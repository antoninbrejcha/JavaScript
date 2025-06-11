let button = document.getElementById("button");
let display = document.getElementById("display");
let background = document.getElementById("background");
let dark = false;

button.addEventListener("click", () => {
  if (dark) {
    background.style.backgroundColor = "white";
    display.innerHTML = "Vypnout světlo";
    dark = false;
  } else {
    background.style.backgroundColor = "black";
    display.innerHTML = "Zapnout světlo";
    dark = true;
  }
});
