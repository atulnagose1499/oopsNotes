/**
 * 1. Destructuring assignment is a syntax that allows you to assign object properties
 * or array items as variables.
 * This can greatly reduce the lines of code necessary to manipulate data in these structures.
 * There are two types of destructuring: Object destructuring and Array destructuring.
 */

// destructuring is a feature that allows you to extract data from arrays or objects into separate variables

//array and object properties we can make variables

const mySelf = {
  id: 1,
  name: "My first note",
  date: "01/01/1970",
  parent: {
    firstName: "Sherlock",
    lastName: "Holmes",
  },
};

// Create variables from the Object properties
const id = mySelf.id;
const name = mySelf.name;
const date = mySelf.date;

// Destructure properties into variables
const { id, name, date } = mySelf;
console.log(id, name, date);

// Assign a custom name to a destructured value
const { id, name: fullName, date } = mySelf;
console.log(id, fullName, date);

// Destructure nested properties
const {
  id,
  parent: { firstName, lastName },
} = mySelf;
console.log(`${firstName} ${lastName}`);

//----------------------------------------------------------

// For arrary:-
const date = ["1970", "12", "01"];
// Destructure Array values into variables
const [year, month, day] = date;

/**
 * 2. Spread:- Spread allows objects and iterables (such as arrays) to be unpacked,
 * or expanded, which can be used to make shallow copies of data structures
 * to increase the ease of data manipulation.
 *
 */

// With Array
const tools = ["hammer", "screwdriver"];
const otherTools = ["wrench", "saw"];

// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools);

// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools];
console.log(allTools);

// With objects
const user = {
  id: 3,
  name: "Ron",
};

const updatedUser = { ...user, isLoggedIn: true };

console.log(updatedUser);

/**
 * Rest - The syntax appears the same as spread (...) but has the opposite effect.
 * Instead of unpacking an array or object into individual values,
 * the rest syntax will create an array of an indefinite number of arguments.
 */

const testArguments = () => {
  console.log(arguments); // Error: the arguments variable cannot be used with arrow functions.
};

// Example 1
function doSum(...args) {
  console.log(args);

  // do sum here for all args using forEach loop
}

doSum(1, 2, 3, 4, 5, 6);
doSum(1, 2, 3);
doSum();

// Example 2
function restTest(one, two, ...args) {
  console.log(one);
  console.log(two);
  console.log(args);
}
restTest(1, 2, 3, 4, 5, 6);


//  the spread operator is used to spread the elements or properties of an array or object, while the rest operator is used to gather the remaining elements or properties of an array or object.