/**Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby */
function myhobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
myhobbies('reading', 'painting', 'sketching');
/**Q50 - Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities */
var myIdealday = "My ideal day would involve:\n1. Spending time with my friends.\n2. Do sketching with more proffesionaly.\n3. Watching Kdramas .\n4. Learning more about AI.";
console.log(myIdealday);
/**Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function */
function calculatesArea(height, width) {
    return width * height;
}
var calculatesAreaArrow = function (height, width) {
    return width * height;
};
console.log(calculatesAreaArrow(5, 8));
