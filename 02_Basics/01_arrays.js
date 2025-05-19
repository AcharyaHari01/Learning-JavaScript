// // Array
// // An array is a special variable, which can hold more than one value at a time.

// const myArr = [0, 1, 2, 3, 4, 5]; // array of numbers
// const myArr2 = ["hello", "world"]; // array of strings  \
// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// console.log(myArr2); // ["hello", "world"]
// console.log(myArr.length); // 6
// console.log(myArr2.length); // 2
// console.log(myArr[0]); // 0
// console.log(myArr[1]); // 1

// const myArr3 = new Array(1, 2, 3, 4,5); // array of numbers

// // Array methods

// myArr.push(6); // add element to the end of the array
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]    
// myArr.pop(); // remove element from the end of the array
// console.log(myArr); // [0, 1, 2, 3, 4, 5]   
// myArr.unshift(-1); // add element to the beginning of the array
// console.log(myArr); // [-1, 0, 1, 2, 3, 4, 5]   
// myArr.shift(); // remove element from the beginning of the array
// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// myArr.splice(2, 1); // remove element from the array at index 2
// console.log(myArr); // [0, 1, 3, 4, 5]
// myArr.splice(2, 0, 2); // add element to the array at index 2
// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// myArr.splice(2, 1, 22); // replace element in the array at index 2 
// console.log(myArr); // [0, 1, 22, 3, 4, 5]
// myArr.splice(2, 1, 22, 33); // replace element in the array at index 2 and add new elements
// console.log(myArr); // [0, 1, 22, 33, 3, 4, 5]
// myArr.splice(2, 1, 22, 33, 44); // replace element in the array at index 2 and add new elements
// console.log(myArr); // [0, 1, 22, 33, 44, 3, 4, 5]
// myArr.splice(2, 1, 22, 33, 44, 55); // replace element in the array at index 2 and add new elements


// console.log(myArr.includes(1)); // true
// console.log(myArr.includes(10)); // false

// console.log(myArr.indexOf(1)); // 1
// (myArr.indexOf(1)); // 1
// console.log(myArr.indexOf(10)); // -1

// console.log(myArr.lastIndexOf(1)); // 1

// const newArr = myArr.join(); // join the array elements into a string
// console.log(newArr); // "0,1,22,33,44,3,4,5"
// const newArr2 = myArr.join(" "); // join the array elements into a string with space
// console.log(newArr2); // "0 1 22 33 44 3 4 5"

// // slice, splice

// console.log("A",myArr);// [0, 1, 22, 33, 44, 3, 4, 5]
// const slicedArr = myArr.slice(1, 3); // slice the array from index 1 to index 3

// console.log(slicedArr); // [1, 22]
// console.log("B",myArr);// [0, 1, 22, 33, 44, 3, 4, 5]

// const slicedArr2 = myArr.splice(1,3); // splice the array from index 1 to the end of the array
// console.log("C",myArr);// [0, 1, 22, 33, 44, 3, 4, 5]
// console.log(slicedArr2); // [1, 22, 33]





