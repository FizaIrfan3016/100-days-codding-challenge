/**Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value. */

let numbers =[1,2,3,4,5,6]

let doublenumbers= numbers.map((number) => number * 2)

console.log(doublenumbers)

/**Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words. */
let mixedArray =[1,'apple',2,'mango',3,'orange']

let stringArray = mixedArray.filter((item) => typeof item === "string")
console.log(stringArray)

/**Q57 - Find the Average Grade: Given a list of grades, calculate the average grade. */

let grades = [88,99,87,75,76,68,38]

let averageGrades = 
grades.reduce((total, grade) => total + grade,0) / grades.length
console.log(averageGrades)

