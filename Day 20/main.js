/**Q58 - Write a simple program that can take lots of scores and find their average. */
function averagescores() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(averagescores(80, 90, 100, 70));
/**Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. */
function makeadder(valuetoadd) {
    return function (number) {
        return number + valuetoadd;
    };
}
var addfive = makeadder(5);
console.log(addfive(10));
/**Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age. */
var userprofile = (function () {
    var name = "John";
    var age = 10;
    return {
        displayinfo: function () {
            console.log("Name : ".concat(name, ", Age : ").concat(age));
        },
    };
})();
userprofile.displayinfo();
