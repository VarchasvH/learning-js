// Class was added after ES^6

class User {
    // constructor function
    constructor(username, password, countryCode) {
        this.username = username;
        this.password = password;
        this.countryCode = countryCode;
    };
    // Random method
    encryptPassword(password) {
        return `${this.password}abc`;
    };

    // Capitalization method
    capitalize(){
        return this.username.toUpperCase();
    }
};


const user1 = new User('varchasv', 123, 'IN');
console.log(user1.encryptPassword());
console.log(user1.capitalize());


// Behind the scenes - This works just fine, class is based on this only.
const user = function(username, password, countryCode){
    this.username = username;
    this.password = password;
    this.countryCode = countryCode;
}

user.prototype.encryptPassword = function(password){
    return `${this.password}abc`;
}

user.prototype.capitalize = function(){
    return this.username.toUpperCase();
}

const user2 = new User('nannu', 456, 'IN');
console.log(user2.capitalize());
console.log(user2.encryptPassword());
