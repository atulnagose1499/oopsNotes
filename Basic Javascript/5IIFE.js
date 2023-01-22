/** imp hot
 * IIFE - Immediately Invoked Function Expression
 * ->allows you to execute a function immediately after it is defined
 */
// ------------------------------------------------------------------------------------------------------------
// example
(function (name) {
  console.log(`Hello, ${name}!`);
})('John'); 
// Output: Hello, John!

// ------------------------------------------------------------------------------------------------------------
/**
 * Use cases
 * they don't merge global space
 * 1. Avoid polluting the global namespace - garbage collection
 * 2. Execute an async function
 * 3. The module pattern - private and public variables and methods
 */

// ------------------------------------------------------------------------------------------------------------
// why


// Creating a new scope:
//  IIFEs create a new scope, which allows you to create variables that are not accessible from the outside. This can be useful when you want to avoid naming conflicts and keep your code organized.

// Hiding implementation details:
//  IIFEs allow you to hide the implementation details of your code, making it less likely to be accidentally modified by other parts of your code.

// Avoiding pollution of the global scope: By creating a new scope, IIFEs can help to prevent your code from polluting the global scope and causing conflicts with other libraries or scripts.

// Initializing a library: 
// IIFEs can be used as a way to initialize a library or create a singleton object that is only accessible from within the IIFE.

// Encapsulation:
//  IIFEs can be used to encapsulate the functionality of a set of related functions and variables, making them easier to maintain and reason about.

// Performance: 
// IIFEs can improve performance by keeping variables and functions out of the global scope, which reduces the amount of memory used by the JavaScript engine.
// ------------------------------------------------------------------------------------------------------------
// where 
// Creating a module:
//  IIFEs can be used to create a module, which is a self-contained piece of code that encapsulates a set of related functions and variables. This can be useful for organizing your code and keeping it maintainable.

// Creating a singleton object: 
// IIFEs can be used to create a singleton object, which is an object that can only be instantiated once. This can be useful when you want to ensure that only one instance of an object exists throughout your application.

// Initializing a library: 
// IIFEs can be used to initialize a library or framework, which can be useful for setting up global variables and configuration options.

// Protecting variables from the global scope: 
// IIFEs can be used to protect variables from being accessed or modified by other parts of your code. This can be useful when you want to keep your code more secure.

// Improving the performance: 
// IIFEs can improve performance by keeping variables and functions out of the global scope, which reduces the amount of memory used by the JavaScript engine.

// Implementing the Revealing Module pattern:
//  IIFEs can be used to implement the Revealing Module pattern, which is a way to reveal only the properties and methods you want to be public and keep the rest private.
// ------------------------------------------------------------------------------------------------------------