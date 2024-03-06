/* FOR EACH*/ 
// For each will not return anything.
// array.forEach(element => {});

// const coding = ['js', 'cpp', 'py', 'rb', 'java'];

// coding.forEach(function(val){
//     console.log(val);
// });

// coding.forEach(val => {
//     console.log(val);
// });


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
// });


const myCoding = [
    {
        languageName: "JavaScript",
        extentions: ".js"
    },
    {
        languageName: "Python",
        extentions: ".py"
    },
    {
        languageName: "C++",
        extentions: ".cpp"
    }
]

myCoding.forEach(item => {
    console.log(`${item.languageName}: ${item.extentions}`);
});