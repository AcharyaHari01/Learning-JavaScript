// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs as soon as it is defined.

(function one() {
    // named iife 
    console.log(`DB connection established`);
    
}) ();

((name) => {
    console.log(`DB connection established again ${name}`);

}) ("Hari") // IIFE with arrow function;


