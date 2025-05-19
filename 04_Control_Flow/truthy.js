// const userEmail = "hari@gmail.com"  

// if (userEmail) {
//     console.log("User is logged in");
// }
// else{
//     console.log("User is not logged in");
    
// } 
// falsy values 
// false, 0, "", null, undefined, NaN, BigInt 0n, -0 

// truthy values    
// true, 1, "0", "false", [], {}, function(){}, -1



// const userEmail = [] 

// if (userEmail) {
//     console.log("User is logged in");
// }
// else{
//     console.log("User is not logged in");
    
// } 


// if (userEmail.length === 0) {
//     console.log("Arrya is empty");
// }


// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }   


// Nullish coalescing operator (??): null or undefined
// let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10; // 10  
// val1 = 0 ?? 10; // 0
// val1 = false ?? 10; // false
// val1 = "" ?? 10; // ""
// val1 = NaN ?? 10; // NaN
// val1 = 0n ?? 10; // 0n
// val1 = -0 ?? 10; // -0
// val1 = 5 ?? 10; // 5
// val1 = 5 ?? null; // 5
// val1 = 5 ?? undefined; // 5
// val1 = 5 ?? false; // 5
// val1 = 5 ?? ""; // 5
// val1 = 5 ?? NaN; // 5


// console.log(val1); // 5



// Ternary operator

// condition ? expressionIfTrue : expressionIfFalse

const iceTeaPrice = 50;
iceTeaPrice > 50 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");

