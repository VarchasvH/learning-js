/*
falsy values: false, 0, -0, BigInt, "", undefined, null, 0n, NaN
truthy values: true, "0", 'false', " ", [], {}, function(){}
*/


// const userEmail = "v@gmail.com";
// if(userEmail){
//     console.log("Got the email");
// }
// else{
//     console.log("No email");
// }

/* Nullish Coalescing Operator (??): null and undefined */

// let val1;
// val1 = 5 ?? 10;
// console.log(val1);

// val1 = null ?? 10;
// console.log(val1);

// val1 = undefined?? 15;
// console.log(val1);

// val1 = null ?? 10 ?? 15;
// console.log(val1);

/* Terniary Operators*/
const iceTeaPrice = 100;

// condition ? true : false
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");

