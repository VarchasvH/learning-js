const name = "Varchasv";
const repoCount = 10;

console.log(name+ " has a total of " + repoCount + " repositories"); // This is not the new standard.
console.log(`${name} has a total of ${repoCount} repositories`); // Modern syntax that uses String Interpolation


const gameName = new String("Overkill-Varchasv");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('l'));
console.log(gameName.substring(0, 8));
console.log(gameName.slice(8));


const anotherString = gameName.slice(-8, -4);
console.log(anotherString);

const trimmmm = "            T R I M THIS            "
console.log(trimmmm.trim());

let url = "http://varchasvh.hashnode.dev";

const replacedUrl = url.replace("http://varchasvh.hashnode.dev", "NaN");
console.log(replacedUrl);