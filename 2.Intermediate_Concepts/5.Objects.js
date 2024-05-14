// Creating objects
/*
    Objects in JavaScript are collections of key-value pairs. They can be 
    created using curly braces '{}'
*/
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

// Accessing Object Properties
/*
    You can access object properties using dot notation or bracket notation.
*/
console.log(person.name);
console.log(person["age"]);

// Adding and Modifying Properties
/*
    You can add new properties or modify existing ones using assignment.
*/
person.gender = "female";
person.age = 31;

// Nested Objects
/*
    Objects can contain other objects as properties.
*/
let student = {
    name: "Bob",
    age: 25,
    info: {
        major: "Computer Science",
        year: 3
    }
};

console.log(student.info.major);

// Object Methods
/*
    Objects can also contain functions as properties, known as methods.
*/
let car = {
    brand: "Toyota",
    model: "Camry",
    drive: function() {
        console.log("The car is driving");
    }
};

car.drive();

// Coding Questions
/*
    1. Write a function 'printObject' that takes an object as a parameter and
    pritnts all its key-value pairs.
*/
function printObject(objectPair) {
    for (let key in objectPair)
        console.log(key + ": " + objectPair[key])
}

printObject(student);

/*
   2. Write a function 'countProperties' that takes an object as a parameter
   and returns the number of properties in the object. 
*/
function countProperties(objectPair) {
    return Object.keys(objectPair).length;
}

console.log(countProperties(student));

/*
    3. Write a function 'mergeObjects' that takes two objects as parameters and
    returns a new object with properties from both objects. If the two objects have
    the same property, the value from the second object should overwrite the value
    from the first object.
*/
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

obj = mergeObjects(person, student);
console.log();
printObject(obj);

/*
    4. Write a function 'findKey' that takes an object and a value as parameters and
    returns the first key in the object that contains the specified value. If no key is
    found, return 'null'
*/
/*
function findKey(obj, value) {
    arrValues = Object.values(obj);
    arrKeys = Object.keys(obj);

    for (let index in arrValues) {
        if (arrValues[index] == value)
            return arrKeys[index];
    }
    return null;
}
*/
function findKey(obj, value) {
    for (let [key, val] of Object.entries(obj)) {
        if (val == value)
            return key;
    }
    return null;
}

console.log();
console.log(findKey(student, "Bob"));