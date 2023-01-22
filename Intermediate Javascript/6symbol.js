/**
 * The JavaScript ES6 introduced a new primitive data type called Symbol.
 *
 * Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object,
 *
 * Symbols are immutable (cannot be changed) and are unique.
 *
 * For example,
 */

Symbol("foo") === Symbol("foo"); // false

const sym = new Symbol(); // TypeError
const sym = Symbol(); // Correct Syntax

// access description
const x = Symbol("hey");
console.log(x.description);

// Unique keys - usage
let id = Symbol("id");

let person = {
  name: "Jack",
  [id]: 123, // not "id": 123
};

person[Symbol("id")] = 100; // different id key - not updated

// Not accessible in for loops
for (let key in person) {
  console.log(key);
}

// Some other properties:-

// get symbol by name
let sym = Symbol.for("hello");
let sym1 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym)); // hello
console.log(Symbol.keyFor(sym1)); // id
