/**
 * 
 * a data type is a classification of values that determines the type of operations and methods that can be performed on a particular value. 
 * 
 * (Data types are used to define the operations that can be performed on the data and the way the data is stored in memory.)
 * 
 * // ------------------------------------------------------------------------------------------------------------
 * BASIC DATA TYPES - 2 types
 * 
 *  -> Primitive :- basic data type that is built into a programming language.
 *  
 *  -> Non-primitive :-  that is composed of multiple primitive data types   ---(typically implemented as objects or classes, which can have properties and methods. )----
 
 */
// ------------------------------------------------------------------------------------------------------------

//  dynamic types : same variable can be used to hold different data types:

// 1. Primitive Data types - 7 types

var name = "ATUL NAGOSE"; // 1. String ==> The String object is used to represent and manipulate a sequence of characters.
// 

var number = 200; // 2. Number  ==> represent whole, decimal number and exponential notation
// 
var twoPhontNumbers = 90071992512474099822n; // 3. BigInt  ==>work with large integers that are outside the range of "Number" data type.
// 
var truth = false; // 4. Boolean  ==> two possible values: "true" or "false". Booleans are commonly used in control flow statements and logical operations.
// 
var dob; // 5. undefined  ==>that indicates that a variable has been declared, but has not been assigned a value.
// 
var date = null; // 6. null  ==> intentional absence of any object value. is treated as falsy
// 
var place = Symbol("new delhi"); // 7. Symbol es6 ==> Symbols are immutable (cannot be changed) and are unique, Though value1 and value2 both contain the same description, but they are different.
// ------------------------------------------------------------------------------------------------------------
// 2. Non-Primitive Data types - n types (will keep on increasing)

var student = {
  // 1. Object  :- represents a collection of properties, where each property has a name and a value.and have function also functions that are properties of an object
  firstName: "ram",
  lastName: null,
  class: 10,
};
// 2.Array :-  represents a collection of elements, which can be of any type, including other arrays
var gender = ["male", "female", "trans", "others"]; // 2. Arrays
var map = new Set(["a", "b", "c"]); // 3. Sets (ES6)
// ------------------------------------------------------------------------------------------------------------