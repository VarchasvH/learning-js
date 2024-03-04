let Heroes = ["Dogra", "Nagraj", "Super Commando Dhruv"];

// ++++++++++ Array Methods ++++++++++ \\
Heroes.push("Parmanu") // Add at the last element
// console.log(Heroes); 

Heroes.pop(); // Remove the last element

Heroes.unshift("Ravan"); // Adds element at the top of the array
// console.log(Heroes);

Heroes.shift(); // removes element at the top of the array
// console.log(Heroes);

// console.log(Heroes.includes("Nagraj"));
// console.log(Heroes.indexOf("Super Commando Dhruv"));

let HeroString = Heroes.join();
// console.log(HeroString);

let newArr = Heroes.splice(1)
console.log(newArr);

let newArr2 = Heroes.splice(0, 3);
console.log(newArr2);

// IMP - Slice does not manipulate the original array, but Splice does.

