/**
 * Some useful basic topics and functions
 */

// 1. String templates
// String templates are a more readable and concise way of creating strings that include dynamic values, compared to concatenating strings with the + operator. They are supported in modern versions of JavaScript (ES6+).
function returnName(fName, lName) {
  // return fName + ' ' + lName;
  return `${fName} ${lName}`;
}
returnName("Himanshu", "Khosla");
// ------------------------------------------------------------------------------------------------------------

// 2. Some useful methods:-

// -> typeof 
//  { useful in determining the type of a variable or value}, {which can be helpful in debugging and making decisions in your code. }

console.log(typeof "hello");  // "string"
console.log(typeof 123);      // "number"
console.log(typeof true);     // "boolean"
console.log(typeof {});       // "object"
console.log(typeof []);       // "object"
console.log(typeof undefined);// "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof null);     // "object"

// ------------------------------------------------------------------------------------------------------------

// -> isArray 
// (method is used to check if a variable is an array. It returns a boolean value)
Array.isArray([10, 20]); // true
Array.isArray({ 10: true, 20: false }); // false
Array.isArray([1, 2, 3]); // true

// instanceof ;
// {typeof operator returns "object" for arrays }
//  operator can be used to check if an object is an instance of a particular constructor or not.
[1, 2, 3] instanceof Array ; // true
// ------------------------------------------------------------------------------------------------------------

// -> isNaN -
// isNaN() function can be useful in determining whether a value is NaN (Not-A-Number) or not, 
isNaN("abc"); // true
isNaN(122); // false
isNaN("122"); // false
// ------------------------------------------------------------------------------------------------------------
// 3. Ternary operation
//  (shorthand way of writing an if...else statement.)
const age = 25;
const message = age >= 21 ? 'Can drink' : 'Cannot drink';
console.log(message); // Can drink

// is equivalent to:
const age = 25;
let message;
if (age >= 21) {
  message = 'Can drink';
} else {
  message = 'Cannot drink';
}
console.log(message); // Can drink
// ------------------------------------------------------------------------------------------------------------

// 4. == vs ===
//  (check variable base only value)  (checks variable base value and type)

// compares values for equality after performing any necessary type conversions. 
console.log(1 == '1'); // true


// compares values for equality without performing any type conversions. 
console.log(1 === '1'); // false

// ------------------------------------------------------------------------------------------------------------