/**
 * Arrow functions were introduced in ES6.
 * 1. Arrow functions allow us to write shorter function syntax:
 */


// 
// Arrow functions have a shorter syntax compared to regular functions and do not bind their own this value. Instead, they inherit the this value from the surrounding scope.

// normal function
function doSum(a, b) {
  return a + b;
}

// arrow function is shorthand of above
const doSum = (a, b) => a + b;

const do10X = (a) => a * 10;

/**
 * 2. Arrow functions do NOT define their own this
 *
 * In short, with arrow functions there are no binding of this.
 *
 * In regular functions the this keyword represented the object that called the function,
 * which could be the window, the document, a button or whatever.
 *
 * With arrow functions the this keyword always represents the object that
 * defined the arrow function.
 */

// Function 1
var obj = {
  msg: "Need Subscribers",
  printMessage: function () {
    console.log(this.msg);
  },
};

// test
obj.printMessage(); // Need Subscribers

// Arrow function do not have their own this, but they assume their parent scope this & pick data from parent scope//

var msg = "I need Subscribers. Do share my video with others";

var obj = {
  msg: "Need Subscribers",
  printMessage: () => {
    return this.msg;
    console.log(this.msg);
  },
};

// test
obj.printMessage(); //'I need Subscribers. Do share my video with others'

// scope --> where you can access a specific variable or function in our code

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // Error, Not Defined

// what is scope of the variable b?
// is b inside a scope of a function ? both are same
