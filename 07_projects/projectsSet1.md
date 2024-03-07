# Projects Related to DOM
## Project Link: [StackBlitz](https://stackblitz.com/edit/dom-project-chaiaurcode-tk9du3?file=index.html) 

# Solution Codes

## Project 1
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