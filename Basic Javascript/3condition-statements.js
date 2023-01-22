/**
 * Conditional Statement 4 - if, if-else, if-else-if, switch
 */

//  make decisions based on certain conditions.
// ------------------------------------------------------------------------------------------------------------
// if :- used to execute a block of code only if a certain condition is true.
if (condition) {
  // code to be executed if condition is true
}
// ------------------------------------------------------------------------------------------------------------
// 1. if-else condition
// It allows you to execute a block of code if a certain condition is true, and another block of code if the condition is false.
if (voterAge >= 18) {
  console.log("Voter can vote for government");
} else {
  console.log("Voter can vote for government");
}
// ------------------------------------------------------------------------------------------------------------
// if..else..if :- to check multiple conditions . It allows you to check a series of conditions, one after another, and execute a specific block of code for the first condition that evaluates to true.

if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  // code to be executed if condition1 and condition2 are false and condition3 is true
} else {
  // code to be executed if all conditions are false
}
// ------------------------------------------------------------------------------------------------------------
// 2. switch case
//  when you have multiple conditions to check against the same expression.
switch (new Date().getDay()) {
  case 0:
    text = "Today is Sunday";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  default:
    text = "Looking forward to the Weekend";
    break;
}
// ------------------------------------------------------------------------------------------------------------
// Error
// an unexpected event or problem that occurs while the code is running.which causes the program to stop executing or behave in an unexpected way.
// ------------------------------------------------------------------------------------------------------------

// types of error
// ------------------------------------------------------------------------------------------------------------
// 1.// A SyntaxError
// :- the code is not written in a valid format and the JavaScript interpreter is unable to understand it. Examples include missing semicolons or brackets.
// ------------------------------------------------------------------------------------------------------------
// 2.// A ReferenceError
// :- a variable or function is used that has not been defined.
console.log(x); // ReferenceError: x is not defined
// ------------------------------------------------------------------------------------------------------------
// 3.// A TypeError
// :- a value is used in a way that is not appropriate for its type.
const num1 = 10;
const num2 = 'a';
const result = num1 / num2; // TypeError: Cannot divide a number by a string
// ------------------------------------------------------------------------------------------------------------
// 4.// A RangeError
// :- when a value is outside the expected range, such as when a number is too big or too small.
// ------------------------------------------------------------------------------------------------------------
// 5.// A URIError
// :-global URI handling function was used in a wrong way.
// decodeURIComponent('%'); // URIError: URI malformed
// ------------------------------------------------------------------------------------------------------------
// 6.// An EvalError
// :- when the eval() function is used in a wrong way.it is deprecated and not supported in modern javascript.
// ------------------------------------------------------------------------------------------------------------
// how to handle error in js
// ------------------------------------------------------------------------------------------------------------
//1.//try...catch statement:
// try :-  a code block try to run (to try).
// catch :- a code block to handle any error.
// ------------------------------------------------------------------------------------------------------------
// 2.// throw statement:
// to raise an exception with a specified error message. defines a custom error.
eg :- throw new Error('example error')
// ------------------------------------------------------------------------------------------------------------
// 3.//onError event:
// to handle errors that occur in the browser.
//  when an error occurs while loading a page or an asset.
// eg :-
window.onerror = function (errorMessage, fileName, lineNumber) {
  console.log(errorMessage);
  console.log(fileName);
  console.log(lineNumber);
};
// ------------------------------------------------------------------------------------------------------------
// 4.//Promise.catch(): 
//  If you're working with promises, you can use the catch() method to handle errors
// eg :-
promise
  .then(response => {
    // code to handle success
  })
  .catch(error => {
    // code to handle error
  });

// ------------------------------------------------------------------------------------------------------------

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  } catch (err) {
    message.innerHTML = "Error: " + err + ".";
  } finally {
    document.getElementById("demo").value = "";
  }
}
// ------------------------------------------------------------------------------------------------------------