class User{
    constructor(username){
        this.username = username;
    };
    logMe(){
        console.log(`USERNAME: ${this.username}`);
    };
};
// Teacher inherits User
class Teacher extends User{
    constructor(username, subject){
        super(username); // Get the value from the super class.
        this.subject = subject;
    }
}