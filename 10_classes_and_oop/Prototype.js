let myName = "arun"
let mychannel = "chai"

console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderman: function(){
        console.log(`Spidy power is$(this.spiderman)`);
    }
}

Object.prototype.arun = function(){
    console.log(`arun is present in all object`);
}

Array.prototype.heyarun = function(){
    console.log(`Arun says hello`);
}

// heroPower.arun()
// myHeros.arun()
// myHeros.heyArun()
// heroPower.heyArun()

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JD assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__prototype__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"arun".trueLength()
"iceTea".trueLength()

