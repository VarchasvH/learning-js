// 'this' keyword refers the current context.
// let User = {
//     userName : "Varchasv",
//     id : 2,
//     welcomeMessage: function() {
//         console.log(`${this.userName} welcome to the website!`);
//         console.log(this); //  This returns the complete function which is it's context.
//     },
// };

// // User.welcomeMessage();
// // User.userName = "Overkill"; // We can change the context and still use the function with this.
// // User.welcomeMessage();

// console.log(this); // This prints empty object, since global has no context in node.


// function chai(){
// this is not empty in the case of function
//     let userName = "varchasv";
//     console.log(this.userName); // Cannot access using this outside of Objects, will return undefined
// };
// chai();

// ++++++++++++++++++ ARROW +++++++++++++++ //

// Arrow function can be declared as such () => {};
// const chai = () => {
//     let userName = "varchasv";
//     console.log(this.userName); // undefined
// }; 

//  --------Basic Arrow function--------
// const two = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(two(3, 7));

// --------Implicit Arrow function--------
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 7));

// -------- Return Object using Arrow function--------//
const insideObject = () => ({userName: "Varchasv"}); // Have to use Curly braces outside of the object
console.log(insideObject());

