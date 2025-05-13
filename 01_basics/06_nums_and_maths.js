const score = 400;

const balance = new Number(10000); // Object wrapper for primitive number
console.log(balance); // [Number: 10000]
console.log(balance.toString()); // "10000"     
console.log(balance.valueOf()); // 10000
console.log(balance.toString().length); // 5  
console.log(balance.toString().length); // 5
console.log(balance.toString(2)); // "10011100010000" (binary representation)
console.log(balance.toString()); // "10000"
console.log(balance.toString(8)); // "23420" (octal representation) 
console.log(balance.toExponential(2)); // "1.00e+4" (scientific notation)
console.log(balance.toExponential(3)); // "1.000e+4" (scientific notation with 3 decimal places)
console.log(balance.toFixed(2)); // "10000.00" (fixed-point notation with 2 decimal places)
console.log(balance.toPrecision(2)); // "1.0e+4" (precision of 2 digits)
console.log(balance.toLocaleString()); // "10,000" (locale-specific string representation)
console.log(balance.toLocaleString("en-US")); // "10,000" (locale-specific string representation)
console.log(balance.toLocaleString("en-US")); // "10,000" (locale-specific string representation)
console.log(balance.toLocaleString("en-IN")); // "10,000" (locale-specific string representation)
console.log(balance.toLocaleString("en-IN", { style: "currency", currency: "INR" })); // "₹10,000.00"
console.log(balance.toLocaleString("en-IN", { style: "currency", currency: "USD" })); // "$10,000.00"
console.log(balance.toLocaleString("en-IN", { style: "currency", currency: "EUR" })); // "€10,000.00"
console.log(balance.toLocaleString("en-IN", { style: "currency", currency: "GBP" })); // "£10,000.00"


// ################### Maths ###################
console.log(Math); // [Math: Math]  // Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(10.5)); // 11
console.log(Math.floor(10.5)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4));  // 10
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.random()); // random number between 0 and 1
// Note: Math.random() does not take arguments, so the following lines are incorrect and should be removed or corrected.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min +1)+min)); // random number between 0 and 9





