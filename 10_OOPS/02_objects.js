/*
    Everything in JavaScript is an Object.
    Function is an object as well as a function.
    Jiska = this.
    => functions cannot access 
*/

/* How it works
    Function / Array / String -> Object -> Null
*/
function multiplyBy5(num) {
    // this.num = num; ---- You can still use this keyword here. ----
    return num * 5;
};

// multiplyBy5.power = 2;
// console.log(multiplyBy5.power); ---- Can access properties like this. ----
// console.log(multiplyBy5.prototype); ---- Empty Prototype. ----
// console.log(Object.prototype); ---- Null prototype. ----


function createUser(userName, score){
    this.userName = userName;
    this.score = score;

};
// Defining our own properties since function is also an object
createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
};

/* 
Interview Problem - TypeError: Cannot set properties of undefined (setting 'increment').
Ans - The code was not working because there was no 'new' keyword.
*/
const chai = new createUser('Chai', 250);
const coffee = new createUser('Coffee', 550)

chai.printMe();
coffee.printMe();



/*
Notes from Hitesh Sir

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/