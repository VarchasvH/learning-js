const marvelHeroes = ["Iron-Man", "Thor", "Spider-Man", "Hulk"];
const DCHeroes = ["Batman", "Aqua-Man", "Blue-beetle", "Superman"];

// Array inside Array, they are not merged. It counts as a single element.

// marvelHeroes.push(DCHeroes) 
// console.log(marvelHeroes);

/*[
  'Iron-Man',
  'Thor',
  'Spider-Man',
  'Hulk',
  [ 'Batman', 'Aqua-Man', 'Blue-beetle', 'Superman' ]
]*/

// Concatenation is the better way to add multiple arrays to a single array.
let superHeroes = marvelHeroes.concat(DCHeroes)
// console.log(superHeroes);

// OR you can use Spread. || Kaanch ka glass tut gya to mix. ||
let superHereos2 = [...marvelHeroes, ...DCHeroes];
// console.log(superHereos2);


let JumbledArray = [1, 2, 3, [4, 5, 6], 7, [6, 7,[8, 9, 10]]];
let UsableAnother = JumbledArray.flat(Infinity);
// console.log(UsableAnother);

// console.log(Array.isArray("varchasv")) // Ask if this is an array
// console.log(Array.from("varchasv"));
// console.log(Array.from({name: "varchasv"})); // Return an empty array - Interesting result

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Convert elements to array
