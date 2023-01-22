/**array function
 * Map vs Filter vs Reduce
 */

/**
 * 1. Map -> Used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
 */
var new_array = arr.map(function (element, index, array) {
  // Return value for new_array
}, thisArg);

// EXAMPLE - Double the value of array elements
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((item) => item * 2);
console.log(doubled); // [2, 4, 6, 8]

/**
 * 2. Filter -> The filter() method takes each element in an array and it applies a conditional statement to wether keep it or not in output array.
 */
var new_array = arr.filter(function (element, index, array) {
  // Return true or false
}, thisArg);

//EXAMPLE - Find only even number
const numbers = [1, 2, 3, 4];
const evens = numbers.filter((item) => item % 2 === 0);
console.log(evens); // [2, 4]

/**
 * 3. Reduce -> The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
 */
rr.reduce(function (accumulator, currentValue, index, array) {}, initialValue);

// EXAMPLE - Find sum of all elements
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

// Let me explain with emojis - https://twitter.com/steveluscher/status/741089564329054208?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E741089564329054208%7Ctwgr%5Ec06cb3294e22abf00f2878fe0827be524fbc86c8%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fjavascript-map-reduce-and-filter-explained-with-examples%2F
