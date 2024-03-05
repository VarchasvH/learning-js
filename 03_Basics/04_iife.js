// ++++++++++++++++++++ Immediately Invoked Function Expressions IIFE ++++++++++++++++++++ //
// To reduce the Global scope pollution related problems

// normal way
function chai() {
    console.log("DB Connected");
}
chai();

// IIFE way using functions // Named IIFE
(function chai2(){
    console.log("DB Connected");
})();

// IIFE using Arrow Functions
(() => {
    console.log(`DB Connected`);
})();

// IIFE using Arrow Functions and a parameter
((name) => {
    console.log(`DB Connected to ${name}`);
})("Varchasv");
