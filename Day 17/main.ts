/**Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby */

function myhobbies(...hobbies:string[]){
 hobbies.forEach((hobby )=> {
     console.log(`I enjoy ${hobby}`)
 });
}
myhobbies('reading','painting','sketching')

/**Q50 - Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities */

let myIdealday = `My ideal day would involve:
1. Spending time with my friends.
2. Do sketching with more proffesionaly.
3. Watching Kdramas .
4. Learning more about AI.`;
console.log(myIdealday)

/**Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function */

function calculatesArea(height:number, width:number) :number{
    return width*height;
}
let calculatesAreaArrow=(height:number, width:number) =>
    width*height;
console.log(calculatesAreaArrow(5,8))