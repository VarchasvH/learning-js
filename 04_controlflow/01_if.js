/* if-statement */

//  const temprature = 50;
//  if(temprature < 50){
//      const difference = temprature - 50;   
//      console.log(`Temprature is less than 50`);
//  }
//      else if(temprature >  50){
//          console.log(`Temprature is more than 50`);
//          // console.log(`Difference is ${}`); // This will not execute due to scope
//      }
//      else{
//          console.log(`Temprature is equal to 50`);
//      };

//  if(temprature > 3) console.log("Let's Go!"); // Implicit if statement


let user = {
    isLoggedIn: true,
    userName: "Varchasv",
    debitCard : true,
    creditCard: false,
    blocked : false,
};

// Checking the user for details
if(user.isLoggedIn && user.debitCard && !user.blocked){
    console.log("You have a valid account");
}
else if(user.blocked == true){
    console.log("You are blocked!");
}
else if(user.debitCard || user.creditCard){
    console.log(`You have a Card connected`);
}
else{
    console.log("There was something wrong with your account. Please try again later");
}