// Creating Arrays
let fruits = ["apple", "banana", "orange"];

// Accessing Array Elements
//console.log(fruits[0]);

// Array Length
//console.log(fruits.length);

// Adding and Removing Elements
fruits.push("grape");
//console.log(fruits);

let removed = fruits.pop();
//console.log(fruits);

// Iterating Over Arrays
//for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//} 

fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Array methods
/*
    Javascript arrays have many built-in methods for manipulation, such as 'map',
    'filter', 'reduce', etc. These methods are powerful and can simplify your code
*/
var numbers = [1,2,3,4,5];

// Using map to double each number
let doubled = numbers.map(num => {
    return num * 2;
});

console.log(doubled);

// Coding Questions
/*
    1. Write a function 'sumArray' that takes an array of numbers as a parameter
    and returns the sum of all the numbers in the array.
*/
function sumArray(arr) {
    var sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

console.log(sumArray(numbers));

/*
    2. Write a function 'reverseArray' that takes an array as a paramaeter and returns
    a new array with the elements reversed (without modifying the original array)
*/
function reverseArray(arr) {
    return arr.toReversed();
}

console.log(reverseArray(numbers));

/*
    3. Write a function 'findMax' that takes an array of numbers as a parameter and returns
    the largest number in the array.
*/
function findMax(arr) {
    max = arr[0];
    arr.forEach(num => {
        if (max < num)
            max = num;
    });
    return max;
}

console.log(findMax(numbers));

/*
    4. Write a function 'removedDuplicates' that takes an array as a parameter and returns
    a new array with duplicated removed (only the first occurance of each element should be kept)
*/
var wordsArr = ["apple", "apple", "hello", "apple", "hello", "blue", "blue", "Orange"];

/*
function removedDuplicates(arr) {
    let arrCopy = [];
    arrCopy.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        let index = arrCopy.indexOf(word);

        if (index == -1)
            arrCopy.push(word);
    }
    return arrCopy;
}
*/
function removedDuplicates(arr) {
    let arrCopy = [];
    let set = new Set();

    arr.forEach(item => {
        if (!set.has(item)) {
            set.add(item);
            arrCopy.push(item);
        }
    });

    return arrCopy;
}

console.log(removedDuplicates(wordsArr));

/*
    5. Write a function 'flattenArray' that takes a nested array as a parameter and returns a flattened 
    array (an array that contains all the elements of the nested arrays flattened into a single array).
*/
var nestedArr = [1,2,3,[4,5]];

function flattenArray(arr) {
    return arr.flat();
}

console.log(flattenArray(nestedArr));