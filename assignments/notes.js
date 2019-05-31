//===== Classes =====
//== The class keyword is 'syntactic sugar'
//== It's all Constructors and Prototypes under the hood
// This is nota  new Object-Oriented inheritance model in JS
// Ckasses in JS are special Functions

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
} // capitalization is convention, not mandatory

const newRect = new Rectangle(400, 800);

// The constructor function is the glue that binds this all together
// Anything you need as direct properties on your class will be done through constructor()

//===== Inheritance w/Classes =====
//== The EXTENDS will abstract away the .call()
//== the super() will abstract away any of the funky syntax that we have been using to bind our Onbject's prototypes to one another
//== Declarative and obvious which class inherits from which
//== CLASSES ARE JUST FUNCTIONS! :D

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} says, 'Hello'`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   speak() {
//     console.log(`${this.name} says, Borked!`);
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   speak() {
//     console.log(`${this.name} says, No.`);
//   }
// }

// const bowser = new Dog("yipper");
// const kitty = new Cat("mememememe");

// console.log(bowser);
// bowser.speak();
// console.log(kitty);
// kitty.speak();

//===== Converting Constructors into Classes
//== Classes are just Constructor Functions
//== Classes are easy to use
//== Class inheritance is trivial to set up
//== Classes allow for cleaner code
//== You get the prototype system for free

//=== Constructor:

// function Person(attributes) {
//   this.age = attributes.age;
//   this.name = attributes.name;
//   this.homeTown = attributes.homeTown;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}`;
// };

//=== Class

// class Person {
//   constructor(attributes) {
//     this.age = attributes.age;
//     this.name = attributes.name;
//     this.homeTown = attributes.homeTown;
//   }
//   speak() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

class Fruit {
  constructor(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
  }
  shipped(destination) {
    console.log(`Shipping ${this.name} to ${this.destination}`);
  }
  calculateCals() {
    console.log(`Calories in ${this.name} are ${this.calories * 200}`);
  }
}

class Banana extends Fruit {
  constructor(bananaAttrs) {
    super(bananaAttrs);
    this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
  }
  checkIfMonkeysLikeIt() {
    if (this.doMonkeysLikeIt) {
      return true;
    } else {
      return false;
    }
  }
}

class Kiwi extends Fruit {
  constructor(kiwiAttrs) {
    super(kiwiAttrs);
    this.isFuzzy = kiwiAttrs.isFuzzy;
  }
  checkIfFuzzy() {
    if (this.isFuzzy) {
      return true;
    } else {
      return false;
    }
  }
}

const newBanana = new Banana({
  doMonkeysLikeIt: true,
  type: "Tree",
  name: "Banana",
  isRipe: false,
  calories: 0.1
});

const newKiwi = new Kiwi({
  isFuzzy: true,
  type: "Tree",
  name: "Kiwi",
  isRipe: false,
  calories: 0.7
});

// console.log(newBanana.shipped("Alaska"));
console.log(newKiwi.shipped("Colorado"));
// console.log(newBanana.checkIfMonkeysLikeIt());
// console.log(newKiwi.checkIfFuzzy());
// console.log(newBanana.calculateCals());
// console.log(newKiwi.calculateCals());
