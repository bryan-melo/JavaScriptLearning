// Coding Questions
/*
1. Write a program that declares a variable 'age' and assigns
it a value. Then, use an if statement to check if 'age' is greater
than or equal to 18. If it is, print "You are an adult".
Otherwise, print "You are a minor"
*/
var age = 18;

if (age >= 18)
    console.log("You are an adult.\n");
else
    console.log("You are a minor.\n");

// Using ternary operator
var age2 = 15;
var message = (age2 >= 18) ? "You are an adult.\n" : "You are a minor.";
console.log(message + "\n");

/*
2. Write a prgram that uses a for loop to iterate from 0 to 4 and
prints each iteration number to the console.
*/
for (let i = 0; i < 4; i++)
    console.log(i);