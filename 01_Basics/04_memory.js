// Stack => Primitive Data Types

let nameYT = "VarchasvH";

let anothername = nameYT;
anothername = "Coders";

console.log(nameYT);
console.log(anothername);

// Stack is being used, therefore the newer value will be provided to anothername.


// Heap => Non-primitive Data Types
let user1 = {
    email: "usergoogle.com",
    name: "User1",
    age: 21
}

let user2 = user1;
user2.email = "haha@gmail.com";

// Heap is being used so the reference for both stays the same.
console.log(user1.email);
console.log(user2.email);