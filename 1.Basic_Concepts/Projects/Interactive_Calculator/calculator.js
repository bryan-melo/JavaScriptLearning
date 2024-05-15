// Initial message
function menu() {
    console.log("\n====================================");
    console.log("||                                ||");
    console.log("||      CALCULATOR MAIN MENU      ||");
    console.log("||                                ||");
    console.log("||================================||");
    console.log("||     Add: +   ||   Subtract: -  ||");
    console.log("||================================||");
    console.log("||  Multiply: * ||    Divide: /   ||");
    console.log("||================================||");
    console.log("||    Quit: q   ||                ||");
    console.log("====================================");

    r1.question("\nEnter operation: ", operation => {
        if (operation == "q") {
            r1.close();
            return false;
        }
        return getFirstNum(operation); 
    });
}

function getFirstNum(operation) {
    r1.question("First number: ", num1 => {
        return getSecondNum(operation, parseFloat(num1, 10));
    });
}

function getSecondNum(operation, num1) {
    r1.question("Second number: ", num2 => {
        return executeOperation(operation, num1, parseFloat(num2, 10));
    });
}

function executeOperation(operation, num1, num2) {
    switch(operation) {
        case "+":
            addition(num1, num2);
            break;
        case "-":
            subtraction(num1, num2);
            break;
        case "*":
            multiplication(num1, num2);
            break;
        case "/":
            division(num1, num2);
            break;
        default:
            console.log("Invalid");
            break;
    }
    menu();
}

// Operations
function addition(num1, num2) {
    console.log(`\n\n\t   ${num1} + ${num2} = ${num1 + num2}`);
}

function subtraction(num1, num2) {
    console.log(`\n\n\t   ${num1} - ${num2} = ${num1 - num2}`);
}

function multiplication(num1, num2) {
    console.log(`\n\n\t   ${num1} * ${num2} = ${num1 * num2}`);
}

function division(num1, num2) {
    console.log(`\n\n\t   ${num1} / ${num2} = ${num1 / num2}`);
}


// Input
const readline = require('node:readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

// Run program until user quits
let check = true;

while(check) {
    check = menu();
}