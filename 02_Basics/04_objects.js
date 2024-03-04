// Video - 17
// // const tinderUser = {}; // Non-Singleton object

// const tinderUser = new Object(); // Singleton object

// tinderUser.id = "test";
// tinderUser.name = "Varchasv";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//     email: "varchasv@india.com",
//     fullName: {
//         firstName: "Varchasv",
//         lastName: "Hoon"
//     },
// };

// // console.log(regularUser.fullName.lastName);

// const Obj1 = {1: 'a', 2: 'b'};
// const Obj2 = {3: 'a', 4: 'b'};

// // +++++++++++++ Combine Objects +++++++++++++ // 
// const Obj3 = {...Obj1,...Obj2}; // Using Spread
// // console.log(Obj3);

// const Obj4 = Object.assign({}, Obj1, Obj2); // Using Assign, the first one is the target
// // console.log(Obj4);

// // You can also clone an object like this
// const cloneObj = Object.assign({}, Obj1); // Cloned Obj1 into cloneObj


// // +++++++++ Multiple Objects inside an Array ++++++++ \\
// const MultipleObjects = [
//     {
//         id: 1,
//         email: "foo@example.com"
//     },
//     {

//     },
// ];

// console.log(MultipleObjects[0].email);

// // +++++++ GET KEYS and Values +++++++++\\
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // Convert each key/value pair into an array
// console.log(tinderUser.hasOwnProperty("Varchasv"));

// +++++++++++++++++++++++++ Destructuring Objects +++++++++++++++++++++ \\

const course = {
    name : "JavaScript Course in Hindi",
    price : "999 INR",
    instructor : "Hitesh Chaudhary",
    companyName : "ChaiAurCode"
};

// We can deconstruct the elements into a variable or constant so that we can use them easily
const {instructor: teacher} = course; // instructor was changed to teacher and can be used as such
const {price :discountedPrice} = course; // price was changed to discounted price

console.log(`${teacher} is offering the course at ${discountedPrice}.`);
