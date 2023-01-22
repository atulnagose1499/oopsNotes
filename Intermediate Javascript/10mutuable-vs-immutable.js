/**
 * 
1. Mutable - Mutable is a type of variable that can be changed. 

A mutable object is an object whose state can be modified after it is created.

In JavaScript, non primitive data types are mutable
 */

// Example:-
Array
Object
Set
Map
new Date()


/**
 * 
2. Immutable - Immutables are the objects whose state cannot be changed once the object is created.

Immutables when modified always return a new variable with a new memory location / space

In JavaScript, primitive data types are immutables

Example:-
 */

Number
Boolean
String
null
undefined
Symbol


// What happens on updating immutable ones
let name = "Himanshu";

name = `${name} Khosla`;

/**
 * -> On appending the "name" with a string value, following events occur:

1. Existing value of "name" is retrieved
2. "Khosla" is appended to the existing value of "name"
3. The resultant value is then allocated to a new block of memory
4. "name" object now points to the newly created memory space
5. Previously created memory space is now available for garbage collection.
 */


// Show memory view 
// Show list view to get a better idea of how things works.