// if-statement
let age = 18;

if (age >= 18)
    console.log("You are an adult");
else if (age < 18 && age >= 0)
    console.log("You are a minor");
else
    console.log("Invalid number");


// Ternary operator
let newAge = 5;
let message = (newAge >= 18) ? "You are an adult" : "You are a minor";

console.log(message);


// Switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day";
  }
  
  console.log(dayName);