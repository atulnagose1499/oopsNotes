// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coImhlbGxvIik7DQpmdW5jdGlvbiBhZGQoKSB7DQogIGNvbnNvbGUubG9nKDQgKyA1KTsNCn0NCnNldFRpbWVvdXQoYWRkLCAyMDAwKTsNCmNvbnNvbGUubG9nKCJqcyIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// asynchronous code don't block other code. its working/running on background and synchronous code continuously execute and completed asynchronous code their callback run
// call stack 
// first (GCE) created on call stack code execute line by line before code execute check first code async(cb) or sync, if code is async then goes directly on web apis and synchronous code continuously execute complete whole line of code (GCE) is deleted and async code(cb:- callback) complete their task then after that we need Event loop and callback Queue. web apis push async code to the callback Queue and Event loop keep checking  the callback queue and see if it has any element then event loop is waiting to empty their call stack after call stack empty then Event loop push async code on call stack

// console.log("start");
// function add() {
//   console.log(4 + 5);
// }
// setTimeout(add, 4000);
// console.log("End");

// when setTimeout() time 0 sec then it send on web apis after that send on callback Queue. event loop waiting for empty call stack then send to Call stack

// console.log("start");
// function add() {
//   console.log(4 + 5);
// }
// setTimeout(add, 4000);
// console.log("End");

// setTimeout() is not guaranteed
//setTimeout() goes to web apis and web apis push to callback queue and event loop is waiting to empty call stack then complete empty call stack then only put on call stack

// console.log("start");

// function waitForSevenSeconds() {
//   let ms = 7000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

// function add() {
//   console.log(4 + 5);
// }

// setTimeout(add, 4000);

// waitForSevenSeconds();




// microtask queue
// used for tasks that need to be executed as soon as possible, such as resolving Promises, updating the DOM, and handling events.

// callback queue,
// used for tasks that are scheduled to be executed at a later time, such as callbacks from setTimeout(), setInterval(), and I/O events. 

//  the microtask queue is used for handling the immediate tasks, while the callback queue is used for handling the delayed tasks.