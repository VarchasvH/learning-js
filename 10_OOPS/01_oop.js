/* Object literal */
const user = {
    userName: "Varchasv",
    loginCount: 8,
    signedIn: true,

    getUserDetails: () => {
        console.log(`Username: ${user.userName}`);
        return 'Got DB data';
    }
}
// console.log(user.getUserDetails());
// console.log(user.signedIn);
// console.log(user.loginCount);


/* Constructor Function */

function User(username, loginCount, signedIn){
    this.userName = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greetings = () => {
        console.log(`Welcome ${username}, This is your ${loginCount}th login.`);
    }
    return this;
}
const user1 = new User("Varchasv", 7, true);
const user2 = new User("Nannu", 11, false);

console.log(user1);
console.log(user1.greetings());
console.log(user2);
console.log(user2.greetings());

