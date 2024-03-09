/* Creating Promises 
- We need to call resolve method, otherwise then will not be connected.
- then is related to resolve.
*/

// 1
// Creating Promise 1
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        (console.log('Async Task is complete'))
        resolve();
    }, 1000);
    
});
// Consuming Promise 1
promiseOne.then(function(){
    console.log('Promise consumed');
})


// 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Promise 2 Consumed')
});


// 3 
new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Varchasv", email: "v@12@gmail.com"}); // WE can pass values to resolve function
    }, 1000);
}).then(function(user){
    console.log(user);
});

// 4
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "varchasvh", password: "vewvew"});
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000)
});

// chaining
promise4
.then((user)=> {
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() =>{
    console.log("The Promise is either resolved or rejected");
});


// 5

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let error = true;
        if (!error){
            resolve({username: "javascript", password: "123"});
        }
        else{
            reject("ERROR: JavaScript Error!");
        }
    }, 1000);
});

// Async await
async function consumePromise5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
consumePromise5();


// 

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}
getAllUsers();

// We get data from fetch before anything else because fetch has a specific queue that is restricted for it's use only.
// Name is Priority Queue/Micro Task Queue/Fetch Task Queue
fetch('https://api.github.com/users')
.then((response) => {
    return response.json;
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

