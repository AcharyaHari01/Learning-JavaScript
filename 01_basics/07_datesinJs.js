// Dates

let myDates = new Date(); // current date and time
console.log(myDates); // 2025-05-13T20:01:05.496Z
console.log(myDates.toString()); // Tue May 13 2025 23:01:05 GMT+0300 (Eastern European Summer Time)
console.log(myDates.toDateString()); // Tue May 13 2025
console.log(myDates.toTimeString()); // 23:01:05 GMT+0300 (Eastern European Summer Time)    
console.log(myDates.toLocaleString()); // 5/13/2025, 11:01:05 PM
console.log(myDates.toLocaleDateString()); // 5/13/2025
console.log(myDates.toLocaleTimeString()); // 11:01:05 PM
console.log(myDates.getFullYear()); // 2025
console.log(myDates.getMonth()); // 4 (0-11)
console.log(myDates.getDate()); // 13
console.log(myDates.getDay()); // 2 (0-6)
console.log(myDates.getHours()); // 23
console.log(myDates.getMinutes()); // 1
console.log(myDates.getSeconds()); // 5
console.log(myDates.getMilliseconds()); // 496
console.log(myDates.getTime()); // 1684009265496 (milliseconds since January 1, 1970)
console.log(typeof myDates); // object
console.log(myDates instanceof Date); // true

let myCreatedDate = new Date(2005,6,15); // year, month, day
console.log(myCreatedDate); // 2005-07-15T00:00:00.000Z
console.log(myCreatedDate.toString()); // Fri Jul 15 2005 03:00:00 GMT+0300 (Eastern European Summer Time)

let mytimeStamp = Date.now(); // current timestamp
console.log(mytimeStamp); // 1684009265496 (milliseconds since January 1, 1970)
console.log(Math.floor(mytimeStamp/1000)); // 1684009265 (seconds since January 1, 1970)

