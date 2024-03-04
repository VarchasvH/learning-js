let myDate = new Date();

// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.toDateString());

let myCreatedDate = new Date("04-03-2023")
// console.log(myCreatedDate.toString("en-IN",  {timeZone: "Asia/Calcutta"}));


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay());

let haha = newDate.toLocaleString('en-IN', {
    weekday: "short",
    timeZone: "Asia/Calcutta"
    
})
console.log(haha.toString());
