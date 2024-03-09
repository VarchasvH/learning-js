# Projects Related to DOM
## Project Links: 
[StackBlitz - CodeAurChai](https://stackblitz.com/edit/dom-project-chaiaurcode-tk9du3?file=index.html) 

# Solution Codes

## Project 1 - [Change Background Color](https://stackblitz.com/edit/dom-project-chaiaurcode-tk9du3?file=1-colorChanger%2Fchaiaurcode.js)

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const clickedOn = e.target.id;
    if (clickedOn == 'grey') {
      body.style.backgroundColor = clickedOn;
    } else if (clickedOn == 'white') {
      body.style.backgroundColor = clickedOn;
    } else if (clickedOn == 'blue') {
      body.style.backgroundColor = clickedOn;
    } else if (clickedOn == 'yellow') {
      body.style.backgroundColor = clickedOn;
    } else if (clickedOn == 'purple') {
      body.style.backgroundColor = clickedOn;
    }
  });
});
```

## Project 2 - [Calculate BMI](https://stackblitz.com/edit/dom-project-chaiaurcode-tk9du3?file=2-BMICalculator%2Fchaiaurcode.js)

```javascript
const form = document.querySelector('form');
// This will return empty value, as it runs when the script is run
// const height = parseInt(form.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault(); // To stop the form from submitting

  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);
  const results = form.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} - Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi} - Normal Weight</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi} - Over Weight</span>`;
    }
  }
});
```

## Project 3 - [Digital Clock](https://stackblitz.com/edit/dom-project-chaiaurcode-tk9du3?file=3-DigitalClock%2Fchaiaurcode.js)

```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 - [Guess the random number](https://stackblitz.com/edit/dom-project-chaiaurcode-tk9du3?file=4-GuessTheNumber%2Fchaiaurcode.js)

```javascript
let correctGuess = parseInt(Math.round(Math.random() * 100) + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Stop from submitting the values to the server
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Validate the user input values
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess <= 0) {
    alert(`Please enter a number greater than 0`);
  } else if (guess <= 0 || isNaN(guess) || guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess); // Push the value into the array
    if (numGuesses > 10) {
      displayGuess(guess); // Display the guess
      displayMessages(`Game Over! The number was ${correctGuess}`); // Display the message
      endGame(); // End the game
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Check if the value is correct, low or High
  if (guess === correctGuess) {
    displayMessages(`You were correct! The answer was ${correctGuess}`);
    endGame();
  } else if (guess > correctGuess) {
    displayMessages(`Try lower!`);
  } else if (guess < correctGuess) {
    displayMessages(`Try higher!`);
  }
}

function displayGuess(guess) {
  // Display the guessed numbers
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuesses++; // Increase the Guess count
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessages(message) {
  // Will display using DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // End the Game
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start a new game!</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // Start a new Game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    correctGuess = parseInt(Math.round(Math.random() * 100) + 1);
    prevGuess = [];
    lowOrHi.innerHTML = '';
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled', '');
    startOver.removeChild(p);

    playGame = true;
  });
}
```