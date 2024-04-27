/**Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(size, message) {
    if (message === void 0) { message = "I love Typescript."; }
    console.log("Making ".concat(size, " siza t-shirt with the message ").concat(message, " print on it."));
}
;
make_shirt('large'); // default message
make_shirt('medium'); // default message
make_shirt('small', 'I love codding!');
/**Q38 - Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */
function describe_city(city, country) {
    if (country === void 0) { country = "PAKISTAN"; }
    console.log("".concat(city, " is in ").concat(country));
}
;
describe_city('Karachi');
describe_city('Lahore');
describe_city('Tokyo', 'Japan');
/**Q39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned */
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Seoul", "South korea"));
