// Objects are of 3 types - Literal, Constructor, Singleton(Made only from Constructors). 

// Object Literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Varchasv",
    "full Name" : "Varchasv Hoon",
    age: 21,
    isMale: true,
    location: "Noida",
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "mykey1",
};

// ------------- Accessing Object Elements--------------
// console.log(JsUser.name);
// console.log(JsUser["name"]);

// --------------Can access only using the sqaure notation, bcz of Space --------------
// console.log(JsUser["full Name"]); // Can access only using the sqaure notation, bcz of Space
// console.log(typeof JsUser[mySym]);

// console.log(JsUser);

// --------- Freeze the values of an Object --------------
// Object.freeze(JsUser);
// Object.freeze(JsUser.age);
// JsUser.age = 22;
// JsUser.location = "Mumbai";
// JsUser.lastLoginDays.push("Sunday");

// --------- The values were changed excluding Age that we froze. --------------
// console.log(JsUser);

JsUser.greetings = function(){
    return console.log("Hello JS-User!");
}
JsUser.greetingsTwo = function(){
    return console.log(`Hello ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

