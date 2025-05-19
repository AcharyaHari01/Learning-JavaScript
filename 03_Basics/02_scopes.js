// var a = 100
let a = 300


if (true) {
    let a = 10
    const b = 20
    // var c = 30 
    console.log("inner : ", a); // 10
    
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30


console.log(a);// 300

function one () {
    const username = "Hari"

    function two () {
        const website = "Google"
        console.log(username);// Hari
        
        
    }
    // console.log(website);// ReferenceError: website is not defined
    two();

}
one();


if (true) {
    const username = "Hari"
    if (username === "Hari") {
        const lastName = "Acharya"
        console.log(username + " " + lastName); // Hari Acharya
    }   
    //console.log(lastname); // ReferenceError: lastName is not defined

}
//console.log(username); // ReferenceError: username is not defined


// ###### ways to write function  ########

function addOne (value) {
    return value +1;

}
addOne(5); // 6

const addTwo = function(value) { 
    return value + 2;
}
addTwo(5); // 7

