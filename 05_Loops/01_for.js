// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}`)
// };

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop value: ${j} and Inner loop: ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// };

// let myArray = ["Superman", "Batman", "Spider-Man"];

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
// };

/* Break and Continue */

// for (let index = 1; index <= 20; index++) {
//     console.log(`Current index is ${index}`);
//     if(index == 5){
//         console.log(`${index} is my favorite number! Ending the loop ;)`);
//         break;
//     };
// };


for (let index = 1; index <= 20; index++) {
    console.log(`Current index is ${index}`);
    if(index == 5){
        console.log(`${index} is my favorite number! Ending the loop ;)`);
        continue;
    };
};


