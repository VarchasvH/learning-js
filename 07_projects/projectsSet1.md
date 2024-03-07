# Projects Related to DOM
## Project Links: 
[StackBlitz](https://stackblitz.com/edit/dom-project-chaiaurcode-tk9du3?file=index.html) 

# Solution Codes

## Project 1 - Change Background Color
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

## Project 2 - Calculate BMI
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

## Project 3 - Digital Clock
```javascript

```