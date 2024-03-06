/* Reduce */

const myNums = [1, 2, 3]

/* This example uses reduce to add all the values in an Array and store it/return it when we need. */
// const newNums = myNums.reduce(function(accumulator, currentValue) {
//     console.log(`acc: ${accumulator}, currVal: ${currentValue}`);
//     return accumulator + currentValue}, 0);
// console.log(`Accumulated value: ${newNums}`);


/* Same example that uses arrow function */
// const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);
// console.log(myTotal);


const shoppingCart = [
    {
    'itemName': 'Javascript',
    'Price': 3000,
    'Author': 'John Doe'
    },
    {
    'itemName': 'DevOps',
    'Price': 3000,
    'Author': 'John Smith'
    },
    {
    'itemName': 'Shooting',
    'Price': 9999,
    'Author': 'John Wick'
    }
];

let totalCoursePrice = shoppingCart.reduce((total, currVal) => total + currVal.Price, 0);

console.log(`Your total is only ${totalCoursePrice}/-`);