const accountId = 144553
let accountEmail = "hari@google.com"
var accountpassword = "12345"
accountCity = "Tampere"

let accountState;


// accountId = 2  // not allowed

accountEmail = "hari@gmail.com"
accountpassword = " 213234"
accountCity = "Helsinki"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])

