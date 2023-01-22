// call back give the power Async's

// scenario

// 1.Register
// 2.send welcome email
// 3.login
// 4.Get user data
// 5.Display user data
//
// -----------------------------------------------------------

// A callback is a function that is passed as an argument to another function and is executed after the first function completes.

// Callbacks can be used to chain together multiple functions that depend on each other, by calling one function from within another function. This can be useful for organizing complex logic or for building reusable components.

// handle asynchronous operations, such as user input, network requests, and timers.

// goal to achieve to maintained  order of functions
// function passed as an argument to another function

// network request should take maximum time also


// story of handle order of sequence function
// using sync's code try
// network request more time and block will created
// using Async's code try
// in Async's code not create any block but order in not maintained
// using callback function try
// in callback we achieve order but it's created callback hell
//  callbacks can create callback hell leading to unmanageable code.
// try promises
// Promises are an abstraction that represents
// try Async Await
//better way to handle callback is Async await as compare promises

// ------------------------------------------------------------------------------------------------------------
// 
// using sync's code try
// in sync's js line by line
// network request more time and block will created

// function waitForSevenSeconds() {
//   let ms = 3000 + new Data().getTime();
//   while (new Data() < ms) {}
// }

// function register() {
//   waitForSevenSeconds();
//   waitForSevenSeconds();
//   console.log("Register End");
// }
// function sendEmail() {
//   waitForSevenSeconds();
//   console.log("Email End");
// }
// function login() {
//   console.log("Login End");
// }
// function getUserData() {
//   waitForSevenSeconds();
//   console.log("Got User data");
// }
// function displayUserData() {
//   console.log("user data display");
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("other file Runs");

// network request more time and block will created
// ------------------------------------------------------------------------------------------------------------
// using Async's code try
// in Async's code not create any block but order in not maintained

// function waitForSevenSeconds() {
//   let ms = 3000 + new Data().getTime();
//   while (new Data() < ms) {}
// }

// function register() {
//   setTimeout(() => {}, 1000);
//   console.log("Register End");
// }
// function sendEmail() {
//   waitForSevenSeconds();
//   console.log("Email End");
// }
// function login() {
//   console.log("Login End");
// }
// function getUserData() {
//   waitForSevenSeconds();
//   console.log("Got User data");
// }
// function displayUserData() {
//   console.log("user data display");
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("other file Runs");


// in Async's code not create any block but order in not maintained
// ------------------------------------------------------------------------------------------------------------
// using callback function try
// in callback we achieve order but it's created callback hell

// function register(callback) {
//   // we pass function reference
//   setTimeout(() => {
//     console.log("Register End");
//     callback();
//   }, 1000);
// }
// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("Email End");
//     callback();
//   }, 2000);
// }
// function login(callback) {
//   setTimeout(() => {
//     console.log("Login End");
//     callback();
//   }, 1000);
// }
// function getUserData() {
//   setTimeout(() => {
//     console.log("Got User data");
//   }, 1000);
// }
// function displayUserData() {
//   setTimeout(() => {
//     console.log("user data display");
//   }, 1000);
// }

// // callback hell

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// console.log("other file Runs");

// in callback we achieve order but it's created callback hell

//  function nesting is created by call back function and when you pass any parameter its too much complex for managing this call back its call as callback hell
//  callbacks can create callback hell leading to unmanageable code.
// Promises were introduced to the JavaScript language in the ES6 version in 2015
// ------------------------------------------------------------------------------------------------------------
//  promises try


//  allows you to associate handlers with an asynchronous action's eventual success value or failure reason

// use case
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// promises give a promises when async's code running on background and complete async's code then promises work

// myPromise.state	myPromise.result
// "pending"	       undefined
// "fulfilled"	     a result value
// "rejected"	       an error object

// resolve = when function completely run without getting error .
// reject = when function getting error. to handle error we have reject

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register End");
      resolve();
      // reject();
    }, 1000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email End");
      resolve();
    }, 2000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login End");
      resolve();
    }, 1000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got User data");
    }, 1000);
    resolve();
  });
}
function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data display");
    }, 1000);
    resolve();
  });
}

// callback hell

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// Promises here as compere to call back hell
// catch()receive data from reject
// then() receive data from resolve
// function().then()
// function return only promises
// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// console.log("other file Runs");


// Promises are an abstraction that represents

// ------------------------------------------------------------------------------------------------------------------------
// Async Await
//better way to handle callback is Async await as compare promises

// Async await:
// write asynchronous code that looks and behaves like synchronous code
// visual code as sync's code but its async's code
// readable code and simple
// await use only inside function but function must be async
// beginning of any function you use async then function by default return promises
// we don't write (return new promise)
async function authenticate() {
  await register();
  await sendEmail();
  await login();
  await getUserData();
  await displayUserData();
}

console.log("other file Runs");
// authenticate();


// async function we can use then() & catch() also
authenticate().then(() => {
  console.log("all set bro.. happy");
}).cat;
