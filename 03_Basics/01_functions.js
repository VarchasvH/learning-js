// // function addTwoNumbers(num1, num2) { // Values passed during definition are parameters
// //     console.log(num1 + num2); 
// // };

// function addTwoNumbers(num1, num2) { // Values passed during definition are parameters
//     return num1 + num2; 
// };
// // console.log(addTwoNumbers(4, 9)); // Values passed during calling are arguments


// function loginUserMessage(userName = "John Doe"){ // Default values
//     if (userName === undefined) { // This will never be called if there are default values defined
//         return "Please enter a UserName!";
//     }
//     return `${userName} just logged in!`
// };
// console.log(loginUserMessage()); // If we don't pass an arguement to loginUserMessage then it will be undefined
// console.log(loginUserMessage("Varchasv")); 


/*++++++++ Function 2nd video ++++++++*/

function calculateCartPrice(...num1) { // Using Spread/REST operator - Bundle all the values passed
    return num1;
};

// console.log(calculateCartPrice(200, 300 ,400));

// function calculateCartPrice2(val1, val2, ...num1) {
//     return num1;
// };

// console.log(calculateCartPrice2(200, 300 , 400, 600)); // Val1 and Val2 take the 1st and 2nd arguments and rest are taken by num1

const User = {
    userName: "John Doe",
    id: 1
};

function handleObjects(anyObjects){
    console.log(`User name is ${anyObjects.userName} and id is ${anyObjects.id}`);
};

handleObjects(User);

// You can call Objects directly from functions
handleObjects({
    userName: "Varchasv",
    id: 2
}); 

// You can call Objects directly from functions
const myArr = [100, 300, 500, 700];

function returnsecondValue(getArray) {
    return getArray[1];
};

console.log(returnsecondValue(myArr));
console.log(returnsecondValue([100, 600000000, 20, 31]));