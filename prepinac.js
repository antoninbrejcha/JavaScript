let button = document.getElementById("button");
let display = document.getElementById("display");
let background = document.getElementById("background");
let glowingLamp = document.getElementById("glowing-lamp");
let lamp = document.getElementById("lamp");
let dark = false;

button.addEventListener("click", () => {
  if (dark) {
    lamp.style.display = "none";
    glowingLamp.style.display = "block";
    background.style.backgroundColor = "white";
    display.innerHTML = "Vypnout světlo";
    dark = false;
  } else {
    glowingLamp.style.display = "none";
    lamp.style.display = "block";
    background.style.backgroundColor = "black";
    display.innerHTML = "Zapnout světlo";
    dark = true;
  }
});
