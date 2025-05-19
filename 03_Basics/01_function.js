// console.log("A");
// console.log("E");
// console.log("I");
// console.log("O");
// console.log("U");

// function myFunction() {
//     console.log("A");
//     console.log("E");
//     console.log("I");
//     console.log("O");
//     console.log("U");
// }
// // myFunction(); // myFunction(); // A E I O U where "myFuction" is a reference to the function


// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
    

// }
// addTwoNumbers(10, 20); // 30
// console.log(addTwoNumbers(10, 20)); // undefined

function myFunction() {
    console.log("A");
    console.log("E");
    console.log("I");
    console.log("O");
    console.log("U");
}
// myFunction(); // myFunction(); // A E I O U where "myFuction" is a reference to the function


function addTwoNumbers (number1, number2) {
    let result = number1 + number2 ;
    return result;
    // console.log(result); // This line will not be executed because the function has already returned a value
    

}
const result = addTwoNumbers(10, 20); // 30
// console.log(addTwoNumbers(10, 20)); // 30

// console.log(result); // 30

function loginUserMessage(userName) {
    if (userName === undefined || (!userName)) {    // both are same 
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in`;
}


loginUserMessage("Hari");//
// console.log(loginUserMessage()); // Please enter a username
// console.log(loginUserMessage("")); // Please enter a username
// console.log(loginUserMessage("Hari")); // Hari just logged in


function calculateCartPrice(...num1){ // ...num1 is a rest parameter that collects all arguments into an array
    return num1
}
// console.log(calculateCartPrice(10,20,30)); // [10, 20, 30]

const user = {
    userName : "Hari",
    price: 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);

}
// handleObject(user); // Username is Hari and price is 199

handleObject ({
    userName : "Hari",
    price: 199
}); // Username is Hari and price is 199

const myNewArry = [200, 400, 600, 800, 1000];

function returnSecondValue (getArray) {
    return getArray[1]; 

}
// console.log(returnSecondValue(myNewArry)); // 400

console.log(returnSecondValue([200, 400, 600, 800, 1000])); // 400




