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
