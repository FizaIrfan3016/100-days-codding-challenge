/**Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop. */

let laptop ={
    make: "Lenovo",
    model:"New elite series",
    year:"2023",
    describe: function(){
        console.log(`This laptop is a ${this.year} ${this.model} ${this.make}.`)
    }
};
laptop.describe()

/**Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables. */

let laptops=[
    {make:"Dell", model:"XPS 15", year:"2021"},
    {make:"Apple", model:"Macbook pro", year:"2020"},
    {make:"HP", model:"Spectra x360", year:"2021"}
]

let [laptop1 , laptop2] = laptops;
console.log(laptop1)
console.log(laptop2)

/**Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result. */

let pricesSet1 =[12000,13000,20000];
let pricesSet2 =[13000,10000,20000];
let combinePrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinePrices)

