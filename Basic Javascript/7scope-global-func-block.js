/**
 * scope refers to the accessibility or visibility of variables, functions, and objects in some particular part of your code during runtime..
// ------------------------------------------------------------------------------------------------------------
    JavaScript has 3 types of scope:

    Block scope
    Function scope
    Global scope
 */
// ------------------------------------------------------------------------------------------------------------
// 1. Block scope
// block scope refers to the accessibility of a variable within a block of code, defined by curly braces {}
// {let; const;}
if (true) {
  let x = 5; // block scope
}
console.log(x); // ReferenceError: x is not defined

// ------------------------------------------------------------------------------------------------------------
// 2. Function Scope
// function scope refers to the accessibility of a variable within a function,
function myFunction() {
  var x = 5; // function scope
  console.log(x); // 5
}
console.log(x); // ReferenceError: x is not defined
ere;
// ------------------------------------------------------------------------------------------------------------
// 3. Global Scope
// global scope refers to the accessibility of variables and functions that are defined outside of any function or block, and they can be accessed from anywhere in the code.
let x = 5; // global scope
{
  console.log(x); // 5
}
function myFunction() {
  console.log(x); // 5
}
myFunction();
console.log(x); // 5

// ------------------------------------------------------------------------------------------------------------
