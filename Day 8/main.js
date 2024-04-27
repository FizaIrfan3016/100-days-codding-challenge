//Q22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log('ques: 22');
var friend = ['Charlie', 'James', 'Tony'];
console.log(friend[3]); // Make intentional error there is no index 3 in this array it is out of bound .
friend[2] = 'Tony'; // Correct the error .
/**Q23 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')
Look closely at your results, and make sure you understand why each line evaluates to True or False.

Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
console.log('Ques: 23');
var car = 'Toyota';
console.log('Is car == "Toyota"? I predict true.');
console.log(car == "Toyota");
console.log('Is car == "subaru"? I predict false.');
console.log(car == "subaru");
console.log('Is car == "Toyota"? I predict true.');
console.log(car == "Toyota");
console.log('Is car == "toyota"? I predict false.');
console.log(car == "toyota");
console.log('Is car !== "suzuki"? I predict true.');
console.log(car !== "suzuki");
console.log('Is car == "suzuki"? I predict false.');
console.log(car == "suzuki");
console.log('Is car !== "Toyata"? I predict true.');
console.log(car !== "Toyata");
console.log('Is car === "Toyata"? I predict false.');
console.log(car === "Toyata");
console.log('Is car !== "BMW"? I predict true.');
console.log(car !== "BMW");
console.log('Is car == "BMW"? I predict false.');
console.log(car == "BMW");
/**Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

Tests for equality and inequality with strings

Tests using the lower case function

Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

Tests using "and" and "or" operators

Test whether an item is in a array

Test whether an item is not in a array */
console.log('ques:24');
// equality and inequality with strings
console.log('check equality and inequality.');
var check = 'Apple';
console.log(check == "Apple"); // true
console.log(check == "apple"); // false
// lower case function
console.log('Testing lower case.');
console.log(check.toLowerCase() == "apple"); //true
// Numerical test
console.log("Numerical test.");
console.log(10 > 5); // true
console.log(10 < 5); // false
// Test using and and or opertators
console.log("Test using && and ||");
console.log(true && false); // fasle
console.log(true || false); // true
// Test item is in array
console.log('Test item is in array.');
var fruits = ['apple', 'mango', 'orange'];
console.log('Is apple present in the array');
console.log(fruits.includes('apple')); //true
// Test item is not in the array
console.log('The item is not in the array.');
console.log('Is banana is not in fruits?');
console.log(!fruits.includes('banana')); // true
