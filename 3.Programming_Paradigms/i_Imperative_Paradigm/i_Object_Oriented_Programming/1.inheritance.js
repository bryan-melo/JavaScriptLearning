// Class Declaration
/*
    Classes in JavaScript are a way to create objects using a blueprint.
    They are declared using the 'class' keyword.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Creating Objects from Classes
/*
    Objects can be created from classes using the 'new' keyword.
*/
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

person1.greet();
person2.greet();
console.log();

// Inheritance
/*
    Classes can inherit properties and methods from other classes using
    the 'extends' keyword.
*/
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    study() {
        console.log(`${this.name} is studying ${this.major}`);
    }
}

let student = new Student("Charlie", 20, "Computer Science");
student.greet();
student.study();
console.log();

// Static Methods
/*
    Static methods are methods that are called on the class itself, rather
    than on instances of the class
*/
class MathUtils {
    static add(x, y) {
        return x + y;
    }

    static multiply(x, y) {
        return x * y;
    }
}

console.log(MathUtils.add(3, 5));
console.log(MathUtils.multiply(2, 4));

// Coding Questions
/*
    1. Create a class 'Rectangle' with properties 'width' and 'height', and
    methods 'getArea' (which returns the area of the rectangle) and 'getPerimeter'
    (which returens the perimeter of the rectangle).
*/
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (2 * (this.width + this.height));
    }
}

let rect = new Rectangle(5, 5);
console.log("Area = " + rect.getArea());
console.log("Perimeter = " + rect.getPerimeter());

/*
    2. Create a class 'Animal' with properties 'name' and 'type', and a method 'makeSound' that
    logs a sound the animal makes. Then, create a class 'Dog' that extends 'Animal' and adds a method
    'fetch' that logs that the dog is fetching.
*/
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    makeSound(sound) {
        console.log(`A ${this.type} named ${this.name} makes a \'${sound}\' sound`);
    }
}

class Dog extends Animal {
    constructor(name, type) {
        super(name, type);
    }
    
    fetch() {
        console.log("The dog is fetching");
    }
}

let dog = new Dog("Leo", "Dog");
dog.makeSound("woof");
dog.fetch();