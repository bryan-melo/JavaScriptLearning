// JSON data example
/*
{
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "running", "painting"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown"
    }
}
*/
// Parsing JSON
/*
    You can parse a JSON string into  a JavaScript object using the 'JSON.parse()' method.
*/
let jsonString = '{"name": "John Doe", "age": 30}';
let jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name);
console.log();

/*
    JSON.parse() can take a reviver function as a second argument to transform the parsed object before it is returned
*/
    let parsedObj = JSON.parse('{"name": "John", "age": 30}', (key, value) => {
        if (key == 'age')
            return value + 5;
        return value;
    });
    
    console.log(parsedObj);
    console.log();

// Stringifying JavaScript Objects
/*
    You can convert a JavaScript object into a JSON string using the 'JSON.stringify()' method
*/
let person = {name : "John Doe", age: 25};
let JSONString = JSON.stringify(person);

console.log(JSONString);
console.log();

/*
    JSON.stringify() can take additional arguments to customize the stringification process, such as specifying which properties
    to include or excluding properties.
*/