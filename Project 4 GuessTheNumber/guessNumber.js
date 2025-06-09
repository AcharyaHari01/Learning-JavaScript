let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt'); // get the submit button
const userInput = document.querySelector('#guessField'); // get the input field
const guessSlot = document.querySelector('.guesses'); // get the guesses div
const remaining = document.querySelector('.lastResult'); // get the remaining guesses div
const lowOrHi = document.querySelector('.lowOrHi'); // get the low or hi div
const startOver = document.querySelector('.resultParas'); // get the result paragraph

const p = document.createElement('p'); // Create a new paragraph element

let prevGuess = []; // Create an array to store previous guesses
let numGuess = 1; 

let playGame = true; 

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents the default form submission behavior, which would normally refresh the page
        const guess = parseInt(userInput.value); // Get the user's guess and convert it to an integer
        console.log(guess); // Log the guess to the console for debugging
        
        validateGuess(guess); // Validate the input      
});
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You won! The number was ' + randomNumber);
        endGame();
    }else if (guess < randomNumber) {
        displayMessage('Your guess is too low.');

    } else if (guess > randomNumber) {
        displayMessage('Your guess is too high.');
    }

}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}
    
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', 'disabled'); // Disable the input field
    p.classList.add('button')
    p.innerHTML =`<h2 id = "newGame">New Game</h2>`;
    startOver.appendChild(p);
    playGame = false; // Set playGame to false to stop further guesses
    newGame();

}
function newGame() {
    const newGameButton = document.querySelector('#newGame').addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled'); // Enable the input field
        startOver.removeChild(p); // Remove the new game button from the DOM
        playGame = true; // Reset playGame to true to allow new guesses
    });

}
