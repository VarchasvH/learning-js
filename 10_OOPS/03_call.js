function userName(username){
    this.username = username;

};

function createUser(username, password, email){
    this.password = password;
    this.email = email;

// We cannot call username from this function, it only got the reference
    // userName(this.username); 

// This is how we can call a function and hold the reference.
    userName.call(this, username); 
// this will say, don't set the value to YOUR(userName) this, instead set it to MINE(createUser) this.
}

const chai = new createUser('Chai', 'c123', 'c123@gmail.com');

console.log(chai);


function userName2(username){
    this.username = username;
}

function createUser2(username, password, email){
    userName2.call(this, username);
    this.password = password;
    this.email = email;
}

const varchasv = new createUser2("user", "pass", "em");
console.log(varchasv);