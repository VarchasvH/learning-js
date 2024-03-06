// EXAMPLE OF FOREACH NOT RETURNING VALUES //
// const coding = ['js', 'cpp', 'py', 'rb', 'java'];
// const values = coding.forEach(item => {
//     return item;
// })
// console.log(values);



/* Filter will return values unlike foreach*/
/* It will only return the values that oblige to the condition given*/

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( num => num > 4) 
// // num > 4, is the condition and it will only return the values that satisfy it.
// console.log(newNums);


// const newNew = myNums.filter( num => {
//     // num > 4 // This will not return anything as it does not have a scope.
//     return num > 4; // We have to type it explicitly to return the values
// });


/* Using ForEach to do the same */
// const newNums = [];
// myNums.forEach(num => {
//     // Condition
//     if(num > 4){
//         newNums.push(num);
//     }
// });

// console.log(newNums);

/* COOL EXAMPLE */
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((book) => book.genre === 'Fiction' && book.publish === 1981);

  userBooks = books.filter((book) => book.publish >= 2000);
  console.log(userBooks);