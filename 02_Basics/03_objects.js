// 1. Object Creation
// 2. Object Properties
// 3. Object Methods
// 4. Object Constructor
// 5. Object Prototypes
// singleton
// object.create


// object literals
const mySymbol = Symbol("key1");

const jsuser = {
    name: "Hari Acharya",
    [mySymbol]: "mykey1",
    age:23,
    location: "Nepal",
    email:"hari@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Tuesday", "Wednesday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);// accessing object properties using bracket notation
// console.log(jsuser["lastLoginDay"][0]);
// console.log(jsuser[mySymbol]);// accessing object properties using symbol

jsuser.email = "hari@google.com";// updating object properties
//console.log(jsuser.email);// accessing object properties using dot notation
//Object.freeze(jsuser); // freeze the object
jsuser.email = "hari@outlook.com"; // updating object properties
//console.log(jsuser.email);// accessing object properties using dot notation

//console.log(jsuser); // accessing object properties using dot notation

jsuser.greeting = function() {
    console.log("Hello, my name is " + this.name);
    
}

console.log(jsuser.greeting()); // accessing object properties using dot notation
//console.log(jsuser.greeting); // accessing object properties using dot notation

/*
Why undefined??? :

The greeting method is defined to log a message to the console but does not return anything. In JavaScript, when a function does not explicitly return a value, it implicitly returns undefined. Therefore, when you call console.log(jsuser.greeting());, the greeting method executes, logs "Hello, my name is Hari Acharya" to the console, and then returns undefined. The console.log statement logs this undefined value.

Fix:
If you want to avoid logging undefined, you can either:
jsuser.greeting(); // This will only log the greeting message.

Remove the console.log around the method call:

Modify the greeting method to return the message instead of logging it:
jsuser.greeting = function() {
    return "Hello, my name is " + this.name;
};

console.log(jsuser.greeting()); // This will log the returned message.
Choose the approach that best fits your intended behavior.

*/
