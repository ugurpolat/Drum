var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let exp = document.querySelectorAll(".drum")[i].className[0];
    makeSound(exp);
    buttonAnimation(exp);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("/Sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("/Sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("/Sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("/Sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("/Sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("/Sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("/Sounds/snare.mp3");
      snare.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
