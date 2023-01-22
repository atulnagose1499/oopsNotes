// What is 'this' ? - Basic JS
//how to change context of this inside function
// How to switch context of this  inside function- using ABC of JS
// several ways to change the value of the this keyword inside a function. These methods are apply, call, and bind.

// we don't want current this ? we want diff. object this

/**
 * ABC of JS
 * 1. Apply
 * 2. Bind
 * 3. Call
 */

// 1.Call - The call() method calls a function with a given this value
// and arguments provided individually
// here call() at atime call, bind, apply also

// 2. Apply - Same funtionality as call, but it differs in calling statment
// and (expects arguments in an array)

// 3. Bind - It just binds the this with a different context and returns a new function.
// We will have to call it again after binding.

var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

pokemonName.call(pokemon, "aash", "throw electricity"); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon, ["aash", "throw electricity"]); // Pika Chu  loves sushi and algorithms

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
logPokemon("aash", "throw electricity"); // Pika Chu  loves sushi and algorithms

// ------------------------------------------------------------------------------------------------------------

let obj = {
  x: 10,
  y: 20,
};

function test(a, b) {
  return a + b + this.x + this.y;
}
console.log(test.apply(obj, [1, 2])); // 33
console.log(test.call(obj, 1, 2)); // 33
let newTest = test.bind(obj);
console.log(newTest(1, 2)); // 33
// ------------------------------------------------------------------------------------------------------------

const emp1 = {
  rollNo: 10,
  pay: 100,
  bal: 500,
  curr: 600,
};
const emp2 = {
  rollNo: 120,
  pay: 6100,
  bal: 5080,
  curr: 8600,
};
const emp3 = {
  rollNo: 110,
  pay: 1050,
  bal: 5050,
  curr: 6300,
};

function test(name) {
  return `rollNo ${this.rollNo} have paid pay ${this.pay} their current bal is ${this.bal} after this their current saving is ${this.curr} thanks ${this.name}`;
}

console.log(test.apply(emp1)); // 33
console.log(test.call(emp2)); // 33
let newTest = test.bind(emp3);
console.log(newTest()); // 33
