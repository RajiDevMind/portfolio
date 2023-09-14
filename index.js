const noteEl = document.querySelector(".notes");

const careers = [
  "Web Developer",
  "Frontend Engineer",
  "Backend Engineer",
  "Content Creator",
];

let careerIndex = 0;

let characterIndex = 0;

const updateText = () => {
  characterIndex++;
  noteEl.innerHTML = `I am a ${careers[careerIndex].slice(0, characterIndex)}`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
};
updateText();

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

// Dialog box popup
// let popup = document.querySelector("#popup");
// let displayEl = document.querySelector("#displayPopup");
// let hideEl = document.querySelector("#hidePopup");
// let time = 4000;
// const displayPopup = () => {
//   popup.classList.add("display");
// };
// setTimeout(time, displayPopup());
// setTimeout(() => {
//   let users = confirm("Thanks");
// }, 3000);

const formEl = document.getElementById("myForm");
const danger = document.querySelector(".danger");

formEl.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(formEl);

  const checkEmptyValues = [...formData.values()];
  const isEmpty = checkEmptyValues.includes("");
  if (isEmpty) {
    alert("Kindly provide valid details!");
    console.log("Kindly provide valid details!");
    return;
  }
  const email = formData.get("email");

  const response = await fetch("http://localhost:4500/subscribe", {
    method: "POST",
    body: JSON.stringify(email),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (response.status === 200) {
    alert("Subscribed Successfully!");
  } else {
    console.log("Failed to Subscribe, Try again!");
  }
  e.currentTarget.reset();
});
