// function addTwoNumbers(num1, num2) { // Values passed during definition are parameters
//     console.log(num1 + num2); 
// };

function addTwoNumbers(num1, num2) { // Values passed during definition are parameters
    return num1 + num2; 
};
// console.log(addTwoNumbers(4, 9)); // Values passed during calling are arguments


function loginUserMessage(userName = "John Doe"){ // Default values
    if (userName === undefined) { // This will never be called if there are default values defined
        return "Please enter a UserName!";
    }
    return `${userName} just logged in!`
};
console.log(loginUserMessage()); // If we don't pass an arguement to loginUserMessage then it will be undefined
console.log(loginUserMessage("Varchasv")); 