const user = { 
    userName: "Hari",
    price : 999,
    welcomeMessage : function() {
        console.log(`Welcome ${this.usernsme} to the world of JavaScript`);
        console.log(this);// user object
        
    }
}
// user.welcomeMessage(); // Welcome Hari to the world of JavaScript
// user.userName  = "Sabu";
// user.welcomeMessage(); // Welcome Sabu to the world of JavaScript
// console.log(this);// window object



// function okay() {
//     let userName = "Hari";
//     let price = 199;    
//     let welcomeMessage = function() {
//         console.log(`Welcome ${this.userName} to the world of JavaScript`);// undefined
//         console.log(this); // window object
//     }

//     console.log(this); // window object
//     console.log(this.userName); // undefined
//     console.log(this.price); // undefined
//     console.log(this.welcomeMessage); // undefined
//     console.log(this.user); // undefined
// }
// okay(); // window object

/// we can use "this" keyword in the following ways
// 1. In a function, "this" refers to the global object (window in browsers)
// 2. In an object method, "this" refers to the object itself
// 3. In a constructor function, "this" refers to the newly created object
// 4. In an event handler, "this" refers to the element that triggered the event

// 5. In an arrow function, "this" refers to the lexical scope (the surrounding context)

// 6. In a class method, "this" refers to the instance of the class
// 7. In a setTimeout or setInterval function, "this" refers to the global object (window in browsers) unless bound to a specific context
// 8. In a promise, "this" refers to the promise object itself
// 9. In a module, "this" refers to the module itself
// 10. In a strict mode function, "this" is undefined
// 11. In a non-strict mode function, "this" refers to the global object (window in browsers)

// we can not use "this" keyword in the following ways
// 1. In a regular function, "this" does not refer to the function itself
// 2. In a setTimeout or setInterval function, "this" does not refer to the function itself
// 3. In a promise, "this" does not refer to the function itself    
// 4. In a module, "this" does not refer to the function itself
// 5. In a strict mode function, "this" does not refer to the function itself
// 6. In a non-strict mode function, "this" does not refer to the function itself

// 7. In an arrow function, "this" does not refer to the function itself

// 8. In a class method, "this" does not refer to the function itself
// 9. In an event handler, "this" does not refer to the function itself
// 10. In a constructor function, "this" does not refer to the function itself
// 11. In an object method, "this" does not refer to the function itself


// Arrow function
const user1 = () => {
    let username = "Hari"
    console.log(this); // window object
    
}
user1(); // window object

// What is the difference between a regular function and an arrow function?
// 1. Syntax: Arrow functions have a shorter syntax than regular functions.
// 2. "this" binding: Arrow functions do not have their own "this" context, they inherit "this" from the parent scope.
// 3. Arguments object: Arrow functions do not have their own "arguments" object, they inherit "arguments" from the parent scope.
// 4. Constructor: Arrow functions cannot be used as constructors, they do not have a "prototype" property.
// 5. "new" keyword: Arrow functions cannot be called with the "new" keyword, they do not have a "prototype" property.
// 6. "super" keyword: Arrow functions do not have their own "super" keyword, they inherit "super" from the parent scope.
// 7. "yield" keyword: Arrow functions do not have their own "yield" keyword, they inherit "yield" from the parent scope.
// 8. "return" keyword: Arrow functions do not require the "return" keyword if they have a single expression.
// 9. "this" keyword: Arrow functions do not have their own "this" keyword, they inherit "this" from the parent scope.
// 10. "arguments" keyword: Arrow functions do not have their own "arguments" keyword, they inherit "arguments" from the parent scope.

// advantages of arrow functions
// 1. Shorter syntax: Arrow functions have a shorter syntax than regular functions, making them easier to read and write.
// 2. Lexical "this": Arrow functions do not have their own "this" context, they inherit "this" from the parent scope, making them easier to use in callbacks.
// 3. No "arguments" object: Arrow functions do not have their own "arguments" object, they inherit "arguments" from the parent scope, making them easier to use in callbacks.
// 4. No "new" keyword: Arrow functions cannot be used as constructors, they do not have a "prototype" property, making them easier to use in callbacks.
// 5. No "super" keyword: Arrow functions do not have their own "super" keyword, they inherit "super" from the parent scope, making them easier to use in callbacks.
// 6. No "yield" keyword: Arrow functions do not have their own "yield" keyword, they inherit "yield" from the parent scope, making them easier to use in callbacks.
// 7. No "return" keyword: Arrow functions do not require the "return" keyword if they have a single expression, making them easier to use in callbacks.



// const addTwo= (num1,num2)=> { // explicit return
//     return num1 + num2;
// }

// const addTwo= (num1,num2)=> (num1 + num2) // implicit return
    
const addTwo= (num1,num2)=> ({username:"Hari"}) // implicit return
// const addTwo= (num1,num2)=> {return num1 + num2} // explicit return



// console.log(addTwo(10,20)); // 30

myyArry = [10,20,30,40,50];
// myArray.forEach()
