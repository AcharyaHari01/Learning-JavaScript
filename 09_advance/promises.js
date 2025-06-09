// Creating a new Promise named 'promises'
const promises = new Promise(function(resolve, reject) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(function(){
        console.log('Asynchronous operation completed'); // Message after 2 seconds
        resolve(); // Resolving the promise
    }, 2000)
}); 

// Handling the resolution of the above promise
promises.then(function() {
    console.log('Promise resolved successfully'); // This logs after 2 seconds
});


// Another promise declared and resolved
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Another asynchronous operation completed'); // Logs after 1 second
        resolve();
    }, 1000)
}).then(function() {
    console.log('Another promise resolved successfully'); // Runs after the above log
});


// A third promise that resolves with user data
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        // Resolving the promise with user data
        resolve({username: "john_doe", age: 30});
    }, 1000)
});

// Handling the resolution of promiseThree
promiseThree.then(function(user) {
    console.log('User data received:', user); // Logs user object
});


// Fourth promise with simulated error handling
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true; // Change this to false to simulate success
        if (!error) {
            resolve('Operation successful');
        } else {
            reject('Operation failed due to an error');
        }
    }, 1000)
});

// Chained promise handlers with then, catch, and finally
promiseFour
    .then(user => {
        console.log('Promise resolved:', user);
        return user.age; // Will fail if user is a string, not an object
    })
    .then((age) => {
        console.log('User age:', age); // Will be skipped if promiseFour is rejected
    })
    .catch(error => {
        console.error('Promise rejected:', error); // Catches the rejection
    })
    .finally(() => {
        console.log('Promise operation completed'); // Runs regardless of resolve or reject
    });


// Fifth promise with async/await consumption
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true; // Simulated error
        if (!error) {
            resolve({username: "john_doe", age: 30});
        } else {
            reject('Operation failed due to an error(JS)');
        }
    }, 1000)
});

// Asynchronous function to handle promiseFive using async/await
async function consumePromiseFive() {
    try {
        const response = await promiseFive; // Await the resolution
        console.log('Promise resolved:', response);
    } catch (error) {
        console.error('Promise rejected:', error); // Catch any errors
    } finally {
        console.log('Promise operation completed'); // Executes in both success or error
    }
}; 

consumePromiseFive(); // Invoke the async function


// Example of fetching data from an external API using fetch (promise-based)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        // Check if response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from response
    })
    .then(data => {
        console.log('Fetched users:', data); // Log fetched user data
    })
    .catch(error => {
        console.error('Error fetching users:', error); // Catch and log errors
    });


/*
1. Promise
A Promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

 Basic Syntax:

 let promise = new Promise(function(resolve, reject) {
  // async task
});
States of a Promise:
Pending – Initial state, neither fulfilled nor rejected.

Fulfilled – The operation completed successfully (resolve() is called).

Rejected – The operation failed (reject() is called).

Methods:
then() – Executes when the promise is resolved.

catch() – Executes when the promise is rejected.

finally() – Executes after then() or catch(), regardless of the result.

2. setTimeout()
A JavaScript function used to delay execution of a function.

Used in your example to simulate asynchronous operations (like database/API calls).

setTimeout(() => {
    console.log('Delayed operation');
}, 1000);

3. Chaining Promises with then()
You can chain multiple .then() calls. The result from the first is passed to the second, and so on.

doSomething()
  .then(result => {
    return process(result);
  })
  .then(nextResult => {
    console.log(nextResult);
  });
If any step fails, it jumps to the .catch() block.
4. Error Handling with catch()
catch() handles any errors thrown during the promise chain.

fetchData()
  .then(data => {
    // process data
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

  5. finally()
Executes regardless of whether the promise was resolved or rejected.

Often used for cleanup actions.

somePromise()
  .finally(() => {
    console.log('Done processing');
  });


  6. Async/Await
async functions make writing asynchronous code easier and more readable.

await pauses the function execution until the promise resolves or rejects.

async function fetchData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Fetch complete');
  }
}

await can only be used inside async functions.

7. fetch() API
Built-in JavaScript function used to make HTTP requests.

Returns a Promise that resolves to the Response object.

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json(); // convert response to JSON
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

  Summary Table
Concept	Description
Promise	Represents an async operation
resolve()	Marks the promise as successful
reject()	Marks the promise as failed
.then()	Handles success
.catch()	Handles errors
.finally()	Executes in both cases
setTimeout()	Delays execution (used to simulate async tasks)
async/await	Cleaner syntax for working with Promises
fetch()	Used to make network requests

*/