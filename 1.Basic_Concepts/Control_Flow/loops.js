// for loop
for (let i = 0; i < 5; i++) {
    process.stdout.write(i + ' ');
}
console.log();


// while loop
let j = 0;
while (j < 5) {
    process.stdout.write(`${j++} `);
}
console.log();


// do-while loop
do {
    process.stdout.write(`${j++} `);
} while (j < 10);
console.log();


// for-in loop
/*
    Get the index (key) of each element
*/
let arr = [1,2,3,4,5];

for (let value in arr) {
    process.stdout.write(`${arr[value]} `);
}
console.log();


// for-of loop
/*
    Get the value of each element
*/
for (let value of arr) {
    process.stdout.write(`${value} `);
}
console.log();


// forEach loop
arr.forEach(function(value) {
    process.stdout.write(`${value} `);
});
console.log();


// for await of loop
/*
    Used to iterate over asynchronous iterable objects, such as those
    returned by asynchronous generator functions
*/
async function* asyncGenerator() {
    yield 'a';
    yield 'b';
    yield 'c';
}

(async () => {
    for await (let item of asyncGenerator()) {
        console.log(item);
    }
})();