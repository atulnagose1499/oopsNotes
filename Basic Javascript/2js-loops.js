/**
 * Loops -  to execute a block of code multiple times, based on a certain condition.
 * Loops offer a quick and easy way (to do something repeatedly)
 * Many types and are used to (iterate on properties and do meaningful)
 * actions.
 */
// ------------------------------------------------------------------------------------------------------------

// 1. For loop - iterate over a sequence(FIX. NO OF ITERATION )
for (let i = 0; i < 5; i++) {
  console.log(i);
} // Output - 0,1,2,3,4
// ------------------------------------------------------------------------------------------------------------
// 4. While loop - repeatedly execute a block of code as long as a specified condition is true.  (not FIX. NO OF ITERATION )
//  Avoid infinite loops. Make sure the condition in a loop eventually becomes false
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
} // Output - 0,1,2,3,4
// ------------------------------------------------------------------------------------------------------------

// 5. Do-while loop - the do-while loop is similar to the while loop main difference(the code inside the loop is guaranteed to execute at least once.)
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5); // Output - 0,1,2,3,4
// ------------------------------------------------------------------------------------------------------------

// 2. For...in loop - iterate over the properties of an object (TO GET KEY)
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
  console.log(x); // Output - fname, lname, age
}
// ------------------------------------------------------------------------------------------------------------
// 3. For...of loop (ES6) -iterate over the elements of an iterable Array, such as an array, a string, a Set, a Map,(TO GET VALUE)
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x of person) {
  console.log(x); // Output - John, Doe, 25
}

// ------------------------------------------------------------------------------------------------------------

// continue :- immediately skip without executing the remaining code in the current iteration jump next iteration

// break : - statement terminates the current loop or switch statement and resumes execution at the next statement following the loop or switch.
// ------------------------------------------------------------------------------------------------------------