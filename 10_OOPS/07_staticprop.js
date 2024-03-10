class User{
    constructor(username){
        this.username = username;
    };

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    };

    // Give an id to the user, but I don't want to give the id access to the user.
    // For this, I can use `static` keyword.
    static createId(){ 
        return Math.floor(Math.random() * 100);
    };
};

const user1 = new User('varchasv');

// This is returning that createID is not a function because we used the static keyword.
console.log(user1.createId()); 