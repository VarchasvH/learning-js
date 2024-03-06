/* ------------Forin can be used on Objects---------------- 

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];    
    }
}
*/


/* Objects */
// const languages = {
//     'js': 'JavaScript',
//     'cpp': 'C++',
//     'py': 'Python',
//     'rb': 'Ruby'
// };
// for (const key in languages) {
//     console.log(`${key}: ${languages[key]}`);
// }


/* ARRAYS */
// const programming = ['js', 'cpp', 'py', 'rb', 'java'];
// for (const key in programming) {
//     console.log(programming[key]);
// }

/* MAPS */
// const country = new Map();
// country.set("IN", "India");
// country.set("JP", "Japan");
// country.set("FR", "France");
// country.set("SL", "Sri Lanka");
// for (const key in country) {
//     console.log(key);
// }




/* NOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeee
- ForOf: Prints the values rather than the keys.
- ForIn: Prints the keys.
- Maps are not iterable therefore we cannot use Forin.
*/