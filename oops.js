// OOP is a programming paradigm that emphasizes the use of objects and their interactions to design and write a program. It encourages the use of encapsulation, inheritance, polymorphism, and abstraction to create a more organized, maintainable and efficient codebase.key concepts 6

// Classes: A class can be thought of as a blueprint for creating objects. An example of a class in real life would be a blueprint for building a house. The blueprint defines the layout, number of rooms, and overall design of the house, but it doesn't specify the actual materials or colors that will be used.

// Objects: An object is an instance of a class. An example of an object in real life would be a specific house built according to the blueprint. The house has a specific location, materials, and colors, but it follows the overall design and layout specified in the blueprint.

// Encapsulation: Encapsulation is the process of hiding the internal state and behavior of an object. An example of encapsulation in real life would be a locked safe. The safe has a specific combination that must be entered to open it, but the inner workings of the safe are hidden from the user.

// Inheritance: Inheritance is the process by which one class inherits the properties and methods of another class. An example of inheritance in real life would be a car. A car inherits properties such as wheels, a steering wheel, and an engine from the general class of "vehicle."

// Polymorphism: Polymorphism is the ability of an object to take on multiple forms. An example of polymorphism in real life would be a pen. A pen can be used to write in multiple colors, and it can write on different types of paper, but it still follows the same basic shape and function.

// Abstraction: Abstraction is the process of hiding complex implementation details and providing a simple, easy-to-use interface. An example of abstraction in real life would be a remote control. The remote control has buttons to control various functions of a TV, such as changing the channel, adjusting the volume, and turning the TV off, but the user doesn't need to know the specific electronic or programming details of how the TV works.

// create objects in JavaScript 5 ways

//1. The most basic way to create objects in JavaScript is to use object literals. This approach is often used for simple objects that don't need to be reused or extended.

// 2. Another way to create objects in JavaScript is to use constructor functions. This approach is often used for creating multiple objects with the same properties and methods.

// 3. You can also use prototypes, a feature that allows you to add methods and properties to all instances of an object.

// 4. ES6 introduced the class keyword, which is syntactic sugar over the prototype-based inheritance.

// 5. Object.create() method is another way to create object in JavaScript, it creates a new object with the specified prototype object and properties.

// code start

// // 1. The most basic way to create objects in JavaScript is to use object literals. This approach is often used for simple objects that don't need to be reused or extended.

let person = {
  name: "John",
  age: 25,
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
};
console.log(person.getName()); // Output: John

// // 2. Another way to create objects in JavaScript is to use constructor functions. This approach is often used for creating multiple objects with the same properties and methods.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
  this.setName = function (name) {
    this.name = name;
  };
}
let person = new Person("John", 25);
console.log(person.getName()); // Output: John

// // 3. You can also use prototypes, a feature that allows you to add methods and properties to all instances of an object.

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.setName = function (name) {
  this.name = name;
};
let person = new Person("John", 25);
console.log(person.getName()); // Output: John

// // 4. ES6 introduced the class keyword, which is syntactic sugar over the prototype-based inheritance.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
let person = new Person("John", 25);
console.log(person.getName()); // Output: John

// 5. Object.create() method is another way to create object in JavaScript, it creates a new object with the specified prototype object and properties.

let personProto = {
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
};
let person = Object.create(personProto, {
  name: {
    value: "John",
    enumerable: true,
  },
  age: {
    value: 25,
    enumerable: true,
  },
});
console.log(person.getName()); // Output: John

// ----------------------------
// live example of oops in code
// classes, object, Encapsulation, and Inheritance
// ---------------------------

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log("Woof!");
  }
}

class GoldenRetriever extends Dog {
  fetch() {
    console.log("Fetching...");
  }
}

let dog1 = new Dog("Fido", 3);
let dog2 = new GoldenRetriever("Buddy", 5);

console.log(dog1.name); // Output: Fido
console.log(dog2.name); // Output: Buddy

dog1.bark(); // Output: Woof!
dog2.bark(); // Output: Woof!
dog2.fetch(); // Output: Fetching...

// Encapsulation: The Dog and GoldenRetriever classes encapsulate the data (name and age) and behavior (bark() and fetch()) of a dog.

// Inheritance: The GoldenRetriever class inherits the behavior of the Dog class, but can also have its own additional

// Constructor: The constructor is a special method that is used to create and initialize an object created with a class.

// Extends: The extends keyword is used to create a subclass of another class.

//------------------------------------------------
// Abstraction, Polymorphism, Inheritance
// -----------------------------------------------

class Shape {
  constructor(color) {
    this.color = color;
  }
  getArea() {
    // This method should be overridden by subclasses
    throw new Error(
      "Cannot call getArea on Shape, please implement in subclass."
    );
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
}

let circle = new Circle("red", 5);
let square = new Square("blue", 7);

console.log(circle.getArea()); // Output: 78.53981633974483
console.log(square.getArea()); // Output: 49

// Abstraction: The Shape class is an abstraction of the concept of a shape. It defines a common interface (getArea() method) that should be implemented by its subclasses (Circle and Square).

// Polymorphism: The getArea() method is overridden by the subclasses and implemented differently for each class, but can be called in the same way on an instance of any Shape subclass (circle.getArea() and square.getArea()).

// Inheritance: The Circle and Square classes inherit from the Shape class, meaning they inherit its properties and methods.

// super : The super keyword is used to call the parent class constructor and inherit it's properties and methods.

// ------------------------------------------------------
// End oops ------------
// ---------------------------------------------------
