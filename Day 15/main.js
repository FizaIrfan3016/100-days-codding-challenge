/**Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
var Magicians = ['Harry potter', 'Ron', 'Harmaeni'];
function make_great(Magicians) {
    var greatmagicians = [];
    Magicians.forEach(function (magician) {
        greatmagicians.push("".concat(magician, " the great"));
    });
    {
        return greatmagicians;
    }
}
;
function show_magicians(Magicians) {
    Magicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
var greatmagicians = make_great(Magicians.slice());
console.log('Original magicians');
show_magicians(Magicians);
console.log('Great magicians');
show_magicians(greatmagicians);
/**Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
function make_sandwwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with ".concat(items.join(","), "."));
}
make_sandwwich('ham', 'cheese', 'tomato');
make_sandwwich('chicken', 'lettuce', 'cheese');
make_sandwwich('beef', 'cucumber', 'bbq sauce');
/**Q45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly */
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", "2020"]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", "true"]));
