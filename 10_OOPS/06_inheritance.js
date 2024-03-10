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

    addCourse(){
        console.log(`New Course was added by ${this.username} into the subject of ${this.subject}`);
    }
}

const user1 = new Teacher('varchasv', 'CSE');
user1.addCourse();

const user2 = new User('Nannu');
// user2.addCourse(); We cannot access addCourse.
user2.logMe();
user1.logMe(); // But the inherited class has access to the methods of the parent class.


console.log(user1 instanceof User); // This gives true as user1 is an instance of User class.