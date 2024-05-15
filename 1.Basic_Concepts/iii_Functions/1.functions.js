// Function Declaration
function greet(name) {
    console.log(`Hello, ${name}!\n`);
}

// Function Expressions
let greet2 = function(name) {
    console.log(`Hello, ${name}!\n`);
}

greet2("Jamie");


// Arrow Functions
/*
    Arrow functions provide a more concise syntax for defining functions
*/
let greet3 = (name) => {
    console.log(`Hello, ${name}!\n`);
}

greet3("Alex");


// High order function
/*
    Passing a function as an argument to another function
*/
function greet(name, callback) {
    return callback(name);
}

function sayHello(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice", sayHello));


