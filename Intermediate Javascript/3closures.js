/**
 * Closure - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 *
 * In other words, a closure gives you access to an outer function's scope from an inner function.
 */

// a closure is a function that references variables in the outer scope from its inner scope

// in function once a call function those values never loss and retained it
// here garbage collection is not work

//closure return a function and point out the outer function variable and after run those values never loss and retained it

// in normal function garbage collection ( to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it)

function init() {
  var name = "Level up frontend"; // name is a local variable created by init

  return function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  };
}

var initFunc = init();
initFunc();

// Another example
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5); // store x = 5 in its lexical env.
const add10 = makeAdder(10); // store x = 10 in its lexical env.

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// Applications:-

/**
 * 1. Practical closures -
 * 2. Private methods/properties with closures
 * Very Good Application of clousures -> Debounce, throttling
 * */

// Common Pitfalls

/**
 * 1. Dont use closures inside a for loop - share same lexical scope
 * 2. Extra Memory Usage
 */
