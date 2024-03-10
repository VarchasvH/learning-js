// const descriptorPI = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptorPI);

/* console.log(descriptorPI) -- returns  
{
  value: 3.141592653589793,
  writable: false, // This means we cannot change the value of Math.PI
  enumerable: false, // Cannot use a loop here
  configurable: false // Nor can we change the configuration.
}
*/

const chai = {
    name: 'ginger-chai',
    price: '250',
    isAvailable: true,
    orderChai: function(){
        console.log('chai fat gyi');
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

/* We get
{
    value: 'ginger-chai',
    writable: true, 
    enumerable: true,
    configurable: true
}
*/

// Define my properties -- We are able to change the properties.
Object.defineProperty(chai, 'name',{
    enumerable: true

});
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Stop code from exploding

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}