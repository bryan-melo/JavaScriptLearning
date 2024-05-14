// break
/*
    Exits a loop or switch statement
*/
let num = 5;

while (num < 10) {
    if (num == 5)
        break;
    else if (num > 5)
        num = 0;
    num++;
}

// continue
/*
    Skips the current iteration of a loop and continues with the next iterations
*/
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0)
        continue;
    console.log(i);     // Print odd numbers
}