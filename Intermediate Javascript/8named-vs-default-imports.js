/**
 * ES6 provides us to import/export a module and use it in other files
 * 
 * ES6 provides two ways to export a module from a file: named export and default export.
 * 
 */

/**
 * 1. Named export - With named exports, one can have multiple named exports per file
 * 
 * - Then import the specific exports they want surrounded in braces. 
 * - The name of imported module has to be the same as the name of the exported module.
 */

// exports from ./MyComponent.js file
export const MyComponent = () => {}
export const MyComponent2 = () => {}


// ex. importing a single named export
import { MyComponent } from "./MyComponent";
// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";
// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";

import * as MainComponents from "./MyComponent";
// use MainComponents.MyComponent and MainComponents.MyComponent2




/**
 * 2. Default Export: (export default) - One can have only one default export per file. 
 * 
   When we import we have to specify a name and import like

   The naming of import is completely independent in default export 
   and we can use any name we like.
 */

// export
const MyComponent = () => {}
export default MyComponent;


// import
import MyDefaultComponent from "./MyDefaultExport";