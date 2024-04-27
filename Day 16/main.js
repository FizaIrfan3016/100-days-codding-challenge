/**Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop = {
    make: "Lenovo",
    model: "New elite series",
    year: "2023",
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.model, " ").concat(this.make, "."));
    }
};
laptop.describe();
/**Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables. */
var laptops = [
    { make: "Dell", model: "XPS 15", year: "2021" },
    { make: "Apple", model: "Macbook pro", year: "2020" },
    { make: "HP", model: "Spectra x360", year: "2021" }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
/**Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result. */
var pricesSet1 = [12000, 13000, 20000];
var pricesSet2 = [13000, 10000, 20000];
var combinePrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinePrices);
