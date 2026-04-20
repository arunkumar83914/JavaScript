// Singleton
// Object Create

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Arun",
    "full name": "Arun Kumar",
   [mySum]: "mykey1",
    age: 18,
    Location: "Jaipur",
    email: "arun@google.com",
    isLoggedIn: false,
    LastLogInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "arun@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "arun@microsoft.com"
// console.com(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
