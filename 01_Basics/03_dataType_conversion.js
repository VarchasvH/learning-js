// Number Conversion
let score = "20";
console.log(typeof score);
console.log(typeof (score));

let value_in_Number = Number(score);
console.log(typeof value_in_Number);
console.log(value_in_Number);

/* Output
    Don't rely on Number to change the data type.
    "33" => 33
    "33abc" => NaN
    true => 1, false => 0
    null => 0
    undefined => NaN
*/

// Boolean conversion
let isloggedIn = 1;

let booleanIsloggedIn = Boolean(isloggedIn);
console.log(booleanIsloggedIn);

/* Output
    1 => true; 0 => false;
    "" => false;
    "varchasv" => true;
*/

// String Conversion
let someNumber = 30;
let StringNumber = String(someNumber);

console.log(StringNumber);
console.log(typeof StringNumber);