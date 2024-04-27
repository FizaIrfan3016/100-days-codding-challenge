/**Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value. */
var numbers = [1, 2, 3, 4, 5, 6];
var doublenumbers = numbers.map(function (number) { return number * 2; });
console.log(doublenumbers);
/**Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words. */
var mixedArray = [1, 'apple', 2, 'mango', 3, 'orange'];
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
/**Q57 - Find the Average Grade: Given a list of grades, calculate the average grade. */
var grades = [88, 99, 87, 75, 76, 68, 38];
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrades);
