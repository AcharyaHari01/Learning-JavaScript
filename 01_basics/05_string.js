/**
 * Demonstrates various string operations in JavaScript.
 * 
 * - `name`: A string variable containing a name.
 * - `repocount`: A number representing the count of repositories.
 * - `gameName`: A `String` object representing the name of a game.
 * 
 * Methods and operations used:
 * 
 * 1. `console.log("Hello " + name + " your repo count is " + repocount);`
 *    - Concatenates strings using the `+` operator.
 * 
 * 2. `console.log(\`Hello ${name} your repo count is ${repocount}\`);`
 *    - Uses template literals for string interpolation.
 * 
 * 3. `gameName[0]`
 *    - Accesses the character at index 0 of the string.
 * 
 * 4. `gameName.__proto__`
 *    - Displays the prototype of the `String` object.
 * 
 * 5. `gameName.length`
 *    - Returns the length of the string.
 * 
 * 6. `gameName.toUpperCase()`
 *    - Converts the string to uppercase.
 * 
 * 7. `gameName.charAt(2)`
 *    - Returns the character at index 2.
 * 
 * 8. `gameName.indexOf("i")`
 *    - Returns the index of the first occurrence of "i".
 * 
 * 9. `gameName.lastIndexOf("i")`
 *    - Returns the index of the last occurrence of "i".
 * 
 * 10. `gameName.slice(0, 3)`
 *     - Extracts a section of the string from index 0 to 3 (exclusive).
 * 
 * 11. `gameName.substring(0, 3)`
 *     - Extracts a section of the string from index 0 to 3 (exclusive).
 *       Similar to `slice`, but does not accept negative indices.
 * 
 * 12. `gameName.split("i")`
 *     - Splits the string into an array of substrings using "i" as the delimiter.
 * 
 * 13. `gameName.replace("i", "a")`
 *     - Replaces the first occurrence of "i" with "a".
 * 
 * 14. `gameName.includes("i")`
 *     - Checks if the string contains "i". Returns `true` or `false`.
 * 
 * 15. `gameName.startsWith("C")`
 *     - Checks if the string starts with "C". Returns `true` or `false`.
 * 
 * 16. `gameName.endsWith("t")`
 *     - Checks if the string ends with "t". Returns `true` or `false`.
 * 
 * 17. `gameName.trim()`
 *     - Removes whitespace from both ends of the string.
 * 
 * 18. `gameName.trimStart()`
 *     - Removes whitespace from the start of the string.
 * 
 * 19. `gameName.trimEnd()`
 *     - Removes whitespace from the end of the string.
 * 
 * 20. `gameName.toLowerCase()`
 *     - Converts the string to lowercase.
 */
const name = "Hari";
const repocount = 5;

console.log("Hello " + name + " your repo count is " + repocount); // Hello Hari your repo count is 5
console.log(`Hello ${name} your repo count is ${repocount}`); // Hello Hari your repo count is 5    


const gameName = new String("Cricket"); // object

console.log(gameName[0]); // C
console.log(gameName.__proto__);
console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // CRICKET
console.log(gameName.charAt(2)); // i
console.log(gameName.indexOf("i")); // 2
console.log(gameName.lastIndexOf("i")); // 2
console.log(gameName.slice(0, 3)); // Cri   
console.log(gameName.substring(0, 3)); // Cri
console.log(gameName.split("i")); // [ 'Cr', 'cket' ]   
console.log(gameName.replace("i", "a")); // Cracket
console.log(gameName.includes("i")); // true
console.log(gameName.startsWith("C")); // true
console.log(gameName.endsWith("t")); // true
console.log(gameName.trim()); // Cricket
console.log(gameName.trimStart()); // Cricket
console.log(gameName.trimEnd()); // Cricket
console.log(gameName.toLowerCase()); // cricket








