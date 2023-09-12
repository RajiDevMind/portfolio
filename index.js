var i = 0;
var text =
  "Welcome! My name is Raji, I'am a Web developer. I focused on Frontend and Backend Engineering!";
var speed = 60;

function animationEffect() {
  if (i < text.length) {
    document.querySelector(".notes").innerHTML += text.charAt(i);
    i++;
    setTimeout(animationEffect, speed);
  }
}
animationEffect();

// Dark mode functionality
const inputEl = document.querySelector(".inputcheckbox");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// function change background color
const updateChecked = () => {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "#ccc";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
};
updateChecked();

// event update background color
inputEl.addEventListener("input", () => {
  updateChecked();
  updateLocalStorage();
});

// func to store users settings to local storage
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
// dark mode func ends here
