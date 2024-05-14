// Variables
/*
'var' have function scope or global scope
'let' and 'const' have block scope
*/
var age = 30;
let name = "John";
const PI = 3.14

// Data Types
let num = 10;   // Number
let name2 = "Alice"; // String
let isStudent = true;   // Boolean
let person = null;  // Null
let job;    // Undefined

// Operators
/*
Arithmetic operators: +, -, *, /, %
Assignment operators: =, +=, -=, *=, /=, %=
Comparison operators: ==, ===, !=, !==, >, <, >=, <=
Logical operators: &&, ||, !
*/

// Coding Questions:
/*
1. Write a program that declares two variables, 'x' and 'y',
and assign them the values 5 and 10, respectively.
Then, calculate and print the sum of 'x' and 'y'
*/
var x = 5;
var y = 10;
var sum = x + y;

console.log(`The sum of ${x} + ${y} is ${sum}\n\n`);

/*
2. Write a program that declares a variable 'name' and assigns
it a string values. Then, print "Hello, [name]!]" to the console
*/
var my_name = "Bryan";

console.log(`Hello, ${my_name}!\n`)