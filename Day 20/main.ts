/**Q58 - Write a simple program that can take lots of scores and find their average. */

function averagescores(...scores: number[]): number{
    let total = scores.reduce((sum, score) => sum + score , 0);
    return total / scores.length;
}
console.log(averagescores(80,90,100,70))

/**Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. */

function makeadder(valuetoadd:number) :(number) => number{
    return function(number : number): number{
        return number + valuetoadd;
    };
}
let addfive= makeadder(5)
console.log(addfive(10));

/**Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age. */

let userprofile=(function(){
    let name="John";
    let age = 10;

    return {
    displayinfo:function(){
        console.log(`Name : ${name}, Age : ${age}`);
    },
};
})();
userprofile.displayinfo();