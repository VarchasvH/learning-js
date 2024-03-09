let myName = "Varchasv   ";
console.log(myName.length); // This will still take white spaces.

// I want to define a function called trueLength that will remove these whitespaces.

let myHeroes = ['spiderMan', 'thor', 'hulk'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'will',
    hulk: 'strength',

    getSpiderPower: function(){
        console.log(`Spidy's real power is ${this.spiderman}`);
    }
}

// I can give object a new property, which will be present everywhere
Object.prototype.varchasv = function(){
    console.log("Varchasv is Omni-present.");
};
// Both have Varchasv
heroPower.varchasv();
myHeroes.varchasv();

// ---------------------But if I give array a new property, will it do the same for Object?-----------------------------
Array.prototype.varchasvarray = function(){
    console.log("Varchasv is Omni-present through Arrays.");
};

// heroPower.varchasvarray(); // It did not get the property
myHeroes.varchasvarray(); // Array's got the property


// --------------------------------- Link Objects together ----------------------------------- //

const Teacher = {
    makeVideos: true
};

const TeachingSupport = {
    isAvailable: true
};

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime: true
};