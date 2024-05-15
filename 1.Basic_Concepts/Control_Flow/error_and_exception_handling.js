// try...catch
/*
    'try' block contains the code that might throw an exception
    'catch' block contains the code to handle the exception if it occurs
    'throw' used to raise an exception
    'finally' block used to execude code regardless if an error occured or not
*/
try {
    // code
    throw new Error("Something went wrong");
} catch (error) {
    // code to handle the exception
    console.error(error.message);
} finally {
    // Code that always runs, whether there is an exception or not
}

// Error types
/*
    'Error', 'SyntaxError', 'TypeError', etc
*/

// Nested try...catch
try {
    try {
        throw new Error('Inner error');
    } catch(innerError) {
        console.error('Caught inner error: ', innerError.message);
        throw innerError;
    }
} catch (outerError) {
    console.error('Caught outer error: ', outerError.message);
}