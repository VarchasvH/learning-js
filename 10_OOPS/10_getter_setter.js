class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    };

    get email(){
        return `${this._email}@mailer.com`;
    }
    set email(value){
        this._email = value;
    }


    get password(){
        return `${this._password}-varchasv`;
    }
    set password(value){
        this._password = value;
    }
};

const user1 = new User('v12', 'abc');
console.log(user1.password); // We can change the password using getter and setters.
console.log(user1.email); // We can change the email using getter and setters.