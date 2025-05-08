// primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

// 1. string : "hello", 'hello', `hello`
// 2. number : 1, 1.5, -1, -1.5, NaN, Infinity, -Infinity
// 3. boolean : true, false
// 4. null : null
// 5. undefined : undefined
// 6. symbol : Symbol("hello"), Symbol(1), Symbol(true)
// 7. bigint : 1n, 1.5n, -1n, -1.5n, NaN, Infinity, -Infinity

const id = Symbol("123"); // unique identifier
const anotherId = Symbol("123"); // unique identifier

console.log(id===anotherId);// false



// reference types (non-primitive types)
// 3 types : object, array, function    

// 1. object : {name: "John", age: 30, isMarried: true}
// 2. array : [1, 2, 3, 4, 5], ["hello", "world"], [1, "hello", true]
// 3. function : function hello() { console.log("hello"); }, () => { console.log("hello"); }



// ##################################### Stack and Heap #####################################

// Stack (primitive types) : LIFO (Last In First Out)

let myName =  "Hari";

let anotherName = myName; // copy by value
console.log(anotherName);  
anotherName = "Acharya"; // copy by value
console.log(myName);// Hari
console.log(anotherName); // Acharya


let user = {
    email: "user@gmail.com",
    password: "user@123",
}
let user2 = user; // copy by reference
user2.email = " hari@gmail.com"; // copy by reference
console.log(user.email); 
console.log(user2.email); 



// Heap (reference types) : dynamic memory allocation