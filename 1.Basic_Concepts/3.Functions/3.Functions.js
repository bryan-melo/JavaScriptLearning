// Function Declaration
function greet(name) {
    console.log(`Hello, ${name}!\n`);
}

// Function Expressions
let greet2 = function(name) {
    console.log(`Hello, ${name}!\n`);
}

// Arrow Functions
// Arrow functions provide a more concise syntax for defining functions
let greet3 = (name) => {
    console.log(`Hello, ${name}!\n`);
}

// Return statement
function add(x, y) {
    return x + y;
}

// Coding Questions
/*
1. Write a function 'isEven' that takes a number as a parameter
and returns 'true' if the number is even and 'false' if its odd.
*/

function isEven(x) {
    return (x % 2 == 0) ? true : false;
}

console.log(isEven(10));
console.log(isEven(5));
console.log("\n");

/*
2. Write a function 'getMax' that takes an array of numbers as a
parameters and returns the maximum number in the array
*/
function getMax(arr) {
    var max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i])
            max = arr[i];
    }
    return max;
}

let my_arr = [1, 2, 3, 4, 5];
console.log(getMax(my_arr));

