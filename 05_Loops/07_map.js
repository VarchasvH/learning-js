/* Maps will not only return the values that satisfy the conditions but all the other values as well, it iterates over the object completely */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((num) => num = num + 10);

/* Chaining */
// array.map().map().filter().map().filter()

const newNums = myNums.map(num => num * 10)
.map(num => num + 1)
.filter(num => num > 50 && num <= 90);
console.log(newNums);