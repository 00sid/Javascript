const randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    lowOrHigh.innerHTML = "Please enter valid number ";
  } else if (guess < 1 || guess > 100) {
    lowOrHigh.innerHTML = "Please enter number between range 1-100 ";
  } else {
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    lowOrHigh.innerHTML = "Congratulation You have won the game ";
  } else {
    displayGuess(guess);
  }
}

//update guess array guess remaining
function displayGuess(guess) {
  if (guess < randomNum) {
    lowOrHigh.innerHTML = "You have guessed  low ";
    remaining.innerHTML = parseInt(remaining.value) - 1;
  } else {
    lowOrHigh.innerHTML = "You have guessed high ";
    remaining.innerHTML = parseInt(remaining.value) - 1;
  }
}
//low or high
function displayMessage(guess) {}
