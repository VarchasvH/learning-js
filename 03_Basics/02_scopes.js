/*
- {} is Scope, when used with function, if-else but not with Object.
- Inside {} is Block scope.
- Things defined outside are global scope.
- ||| Code run through node has different global scope and inspect browser have different global scope |||
*/

// let num1 = 300; // Global Scope

//--------- Block/Function Scope -------------\\
// if (true){
//     let a = 10;
//     const b = 20;
//     var c = 30; // Bad, because it doesn't understand scopes.
// }

// console.log(a); // Not accessible, inside the function scope
// console.log(b); // Not accessible, inside the function scope
// console.log(c); // Accessible because var does not understand scope

// ________________ Scope Level ________________//

function one() {
    let userName = "VarchasvH";
    function insideOne(){
        const website = "YouTube";
        console.log(`${userName} is watching a video on ${website}`);
    };
    insideOne();
};
// one();

// Child can access Parent's variables but Parents cannot access child's variables.


// ++++++++++++++++++ INTERESTING THING ++++++++++++++++++ //

addOne(); // Can be accessed before declaration.
function addOne(num){
    return num + 1;
};
// addOne();


// addTwo(); // Cannot access 'addTwo' before initialization.
let addTwo = function(num){
    return num + 2;
};

addTwo();